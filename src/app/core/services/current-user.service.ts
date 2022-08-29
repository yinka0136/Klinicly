import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { UserDetailsResponseDTO } from '@auth/models/auth.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Helpers } from '@core/models/helpers.model';
import { ICurrentUser } from '@core/models/user.model';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private currentUser: BehaviorSubject<{}> = new BehaviorSubject({});

  constructor(
    private _localStorageAS: LocalStorageService,
    private _jwt: JwtHelperService,
    private router: Router
  ) {}

  public logOut(): void {
    localStorage.clear();
    this._localStorageAS.clear();
    this.router.navigate(['authentication/login']);
  }

  public isLoggedIn(): boolean {
    const docstream_token = JSON.parse(
      localStorage.getItem('docstream_token') || 'null'
    );

    if (
      docstream_token !== null &&
      docstream_token !== undefined &&
      !this._jwt.isTokenExpired(docstream_token)
      // &&
      // currentUser !== undefined &&
      // currentUser !== null
    ) {
      return true;
    }
    return false;
  }

  /**
   *
   * @param docstream_token
   * @returns
   * TODO:
   * -Setup when you see the structure
   */

  public storeUserCredentials(
    // responseData: UserDetailsResponseDTO,
    token: string
  ): void {
    // localStorage.setItem(
    //   Helpers.STORAGE_TAG,
    //   JSON.stringify({ ...responseData, token })
    // );
  }

  public storeToken(token: string): void {
    localStorage.setItem(Helpers.TOKEN_TAG, JSON.stringify(token));
  }

  public storeUserDetails(userDetails: any) {
    this._localStorageAS.remove('klinicly_user');
    this._localStorageAS.set('klinicly_user', userDetails);
    this.setUser();
  }

  public setUser() {
    this.currentUser.next(this.getUser());
  }

  public getUser() {
    const { jwToken, ...user } = this.getCurrentUser();
    console.log(user, jwToken);
    return user;
  }

  public getCurrentUser(): ICurrentUser {
    const user = JSON.parse(this._localStorageAS.get('klinicly_user')) || false;
    return user;
  }

  // private decrypt_jwt(docstream_token: string): any {
  //   if (docstream_token) {
  //     const decoded = this._jwt.decodeToken(docstream_token);
  //     return decoded;
  //   }
  //   return null;
  // }

  public getAuthToken(): string| void {
    const user = this.getCurrentUser();
    if (user) {
      return user.jwToken;
    } else {
      this.logout();
    }
  }

  logout(authExpired = false) {
    this.clearStorage();
    this.router.navigate(["/"]);
  }


  public getCurrentUserObservable() {
    return this.currentUser.asObservable();
  }
  public clearStorage() {
    this._localStorageAS.clear();
  }
}
