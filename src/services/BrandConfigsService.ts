/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class BrandConfigsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get the brand config variables that should be used for this domain
   * Will redirect to a static json file that has all of the brand
   * variables used by this account. Even though this is a redirect,
   * do not store the redirected url since if the account makes any changes
   * it will redirect to a new url. Needs no authentication.
   * @returns any success
   * @throws ApiError
   */
  public getBrandConfigVariablesThatShouldBeUsedForThisDomain(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/brand_variables",
    });
  }
}
