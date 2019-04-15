import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../model/User';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) {
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

  updateUser(userId, user): Observable<User> {
    console.log('front user service updateUser() called');
    return this.http.put<User>(this.baseUrl + this.userApiUrl + '/' + userId, user);

  }

  deleteUser(userId) {
    console.log('front user service deleteUser() called');
    return this.http.delete<User>(this.baseUrl + this.userApiUrl + '/' + userId);
  }


}

