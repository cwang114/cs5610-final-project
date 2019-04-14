import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../model/User';
import { map } from 'rxjs/operators';
import {SharedService} from './shared.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) {
  }

  options = {
    withCredentials: false
  };
  baseUrl = environment.baseUrl;
  userApiUrl = '/api/user';

  findUserById(userId): Observable<User> {
    console.log('front user service findUserById() called');
    // Only need to call server's url to get the data.
    return this.http.get<User>(this.baseUrl + this.userApiUrl + '/' + userId);

  }

  findUserByUserName(userName): Observable<User> {
    console.log('front user service findUserByUserName() called');
    return this.http.get<User>(this.baseUrl + this.userApiUrl + '?username=' + userName);

  }

  register(user) {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/register', user, this.options)
        .pipe(map(
            (res: Response) => {
              return res;
            }
        ));
  }

  login(body) {
    console.log('front user service login() called');
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/login', body, this.options).pipe(map(
        (res: Response) => {
          console.log('Inside login() response, res is ' + res);
          return res;
        }));
  }

  logout() {
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
        .pipe(map((res: Response) => {
          return res;
        }));
  }

  loggedIn() {
    return this.http.get(this.baseUrl + '/api/loggedIn', this.options)
    // return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
        .pipe(map((res: Response) => {
          const user = JSON.stringify(res);
          console.log('Inside loggedIn(), the user is ' + user);
          if (user !== '0') {
            // console.log('Inside loggedIn(), the user is ' + user);
            console.log(this.sharedService);
            this.sharedService.user = user; // setting user so as to share with all components
            return true;
          } else {
            this.router.navigate(['/']);
            return false;
          }
        }));
  }

  updateUser(userId, user): Observable<User> {
    console.log('front user service updateUser() called');
    return this.http.put<User>(this.baseUrl + this.userApiUrl + '/' + userId, user);

  }

  deleteUser(userId) {
    console.log('front user service deleteUser() called');
    return this.http.delete<User>(this.baseUrl + this.userApiUrl + '/' + userId);
  }


}

