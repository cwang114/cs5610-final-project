import {Injectable, NgZone} from '@angular/core';
import {User} from '../model/User';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Role} from '../model/Role';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    options = {
        withCredentials: false
    };
    baseUrl = environment.baseUrl;
    userApiUrl = '/api/user';

    constructor(private http: HttpClient, private router: Router, private zone: NgZone) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(body) {
        console.log('front user service login() called');
        this.options.withCredentials = true;
        return this.http.post<any>(this.baseUrl + '/api/login', body, this.options).pipe(map(
            (res) => {
                console.log('Inside login() response, res is ' + res);
                if (res) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(res));
                    this.currentUserSubject.next(res);
                }
                return res;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.currentUser = null;
        console.log('after logout, the currentUserValue() is ' + this.currentUserValue);
        this.zone.run(() => this.router.navigateByUrl('/'));
        // console.log('authentication service: logout() called');
        // console.log('to backend: ' + this.baseUrl + '/api/logout');
        // return this.http.post(this.baseUrl + '/api/logout', '', this.options).pipe(
        //     map((res: any) => {
        //         console.log(res);
        //         // remove user from local storage to log user out
        //         localStorage.removeItem('currentUser');
        //         this.currentUserSubject.next(null);
        //     }));
    }

    loggedIn() {
        return this.http.get(this.baseUrl + '/api/loggedIn', this.options).pipe(
            // return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            map((res: Response) => {
                const user = JSON.stringify(res);
                console.log('Inside loggedIn(), the user is ' + user);
                return user !== '0';
            }));
    }
}
