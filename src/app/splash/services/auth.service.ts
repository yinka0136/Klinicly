import { Injectable } from '@angular/core';
import { ResponseModel } from '@core/models/response.model';
import { HttpService } from '@shared/services/http.service';
import { Observable } from 'rxjs';
import {
  LoginRequestDTO,
  LoginResponseDTO,
  RegisterRequestDTO,
} from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpService) {}
  public login(
    loginRequestDTO: LoginRequestDTO
  ): Observable<ResponseModel<LoginResponseDTO>> {
    const endpoint = 'Account/authenticate';
    return this.http.makeRequestWithData('post', endpoint, {}, loginRequestDTO);
  }

  public register(
    registerRequestDTO: RegisterRequestDTO
  ): Observable<ResponseModel<string>> {
    const endpoint = 'Account/register';
    return this.http.makeRequestWithData(
      'post',
      endpoint,
      {},
      registerRequestDTO
    );
  }

  public getUserProfile(token?: string) {
    const endpoint = 'internalauth/details';
    return this.http.getRequest(endpoint);
  }
}
