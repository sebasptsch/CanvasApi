/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class ServicesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Kaltura config
   * Return the config information for the Kaltura plugin in json format.
   * @returns any success
   * @throws ApiError
   */
  public getKalturaConfig(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/services/kaltura",
    });
  }

  /**
   * Start Kaltura session
   * Start a new Kaltura session, so that new media can be recorded and uploaded
   * to this Canvas instance's Kaltura instance.
   * @returns any success
   * @throws ApiError
   */
  public startKalturaSession(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/services/kaltura_session",
    });
  }
}
