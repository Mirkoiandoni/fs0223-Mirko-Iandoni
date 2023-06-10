import { Iregistra } from './interfaccia/iregistra';
import { Iaccesso } from './interfaccia/iaccesso';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  ObservableInput,
  tap,
} from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Ilogin } from './interfaccia/ilogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();
  apiUrl = environment.apiUrl;

  private authSubject = new BehaviorSubject<null | Iaccesso>(null);

  user$ = this.authSubject.asObservable();
  isLogged$ = this.user$.pipe(map((data) => !data));

  authLogoutTimer: any;
  error:
    | ((err: any, caught: Observable<Iaccesso>) => ObservableInput<any>)
    | undefined;

  constructor(private http: HttpClient, private router: Router) {
    this.rinseriredati();
  }

  login(data: Ilogin) {
    return this.http.post<Iaccesso>(this.apiUrl + '/login', data).pipe(
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('User', JSON.stringify(data));

        const ExportData = this.jwtHelper.getTokenExpirationDate(
          data.accessToken
        ) as Date;
      }),
      catchError(this.error)
    );
  }

  registration(data: Iregistra) {
    return this.http.post<Iaccesso>(this.apiUrl + '/register', data);
  }

  rinseriredati() {
    const userJson = localStorage.getItem('User');
    if (!userJson) {
      return;
    }
    const user: Iaccesso = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(user.accessToken)) {
      return;
    }
    this.authSubject.next(user);
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    if (this.authLogoutTimer) {
      clearTimeout(this.authLogoutTimer);
    }
  }

  autoLogout(ExportData: Date) {
    const expMs = ExportData.getTime() - new Date().getTime();
    this.authLogoutTimer = setTimeout(() => {
      this.logout();
    }, expMs);
  }
}
