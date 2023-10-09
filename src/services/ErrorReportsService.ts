/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class ErrorReportsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create Error Report
   * Create a new error report documenting an experienced problem
   *
   * Performs the same action as when a user uses the "help -> report a problem"
   * dialog.
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public createErrorReport(formData: any): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/error_reports",
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
