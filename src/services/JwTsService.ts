/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JWT } from "../models/JWT";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class JwTsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Refresh JWT
   * Refresh a JWT for use with other canvas services
   *
   * Generates a different JWT each time it's called, each one expires
   * after a short window (1 hour).
   * @param formData
   * @returns JWT success
   * @throws ApiError
   */
  public refreshJwt(formData: any): CancelablePromise<JWT> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/jwts/refresh",
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Create JWT
   * Create a unique jwt for using with other Canvas services
   *
   * Generates a different JWT each time it's called, each one expires
   * after a short window (1 hour)
   * @param formData
   * @returns JWT success
   * @throws ApiError
   */
  public createJwt(formData?: any): CancelablePromise<JWT> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/jwts",
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
