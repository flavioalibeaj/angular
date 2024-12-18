import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IApiResponse } from '../model/i-api-response.interface';

type ParamType = { [key: string]: string | number | boolean };

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  readonly #httpClient = inject(HttpClient);
  readonly #apiUrl = environment.apiUrl;

  post<BT = unknown, RT = unknown>(
    url: string,
    body: BT
  ): Observable<IApiResponse<RT>> {
    return this.#httpClient.post<IApiResponse<RT>>(
      `${this.#apiUrl}/${url}`,
      body
    );
  }

  get<RT = unknown>(
    url: string,
    params?: ParamType
  ): Observable<IApiResponse<RT>> {
    return this.#httpClient.get<IApiResponse<RT>>(`${this.#apiUrl}/${url}`, {
      params: params ? this.#processHttpParams(params) : undefined,
    });
  }

  getById<T = unknown, RT = unknown>(
    url: string,
    id: T,
    params?: ParamType
  ): Observable<IApiResponse<RT>> {
    return this.#httpClient.get<IApiResponse<RT>>(
      `${this.#apiUrl}/${url}/${id}`,
      {
        params: params ? this.#processHttpParams(params) : undefined,
      }
    );
  }

  put<BT, RT = unknown>(url: string, body: BT): Observable<IApiResponse<RT>> {
    return this.#httpClient.put<IApiResponse<RT>>(
      `${this.#apiUrl}/${url}`,
      body
    );
  }

  delete<T, RT = unknown>(url: string, id: T): Observable<IApiResponse<RT>> {
    return this.#httpClient.delete<IApiResponse<RT>>(
      `${this.#apiUrl}/${url}/${id}`
    );
  }

  #processHttpParams(params: ParamType): HttpParams {
    let httpParams = new HttpParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value !== null || value !== undefined) {
        httpParams = httpParams.set(key, value);
      }
    });

    return httpParams;
  }
}
