/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Report } from "../models/Report";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class AccountReportsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Index of Reports
   * Shows all reports that have been run for the account of a specific type.
   * @param accountId ID
   * @param report ID
   * @returns Report success
   * @throws ApiError
   */
  public indexOfReports(
    accountId: string,
    report: string,
  ): CancelablePromise<Array<Report>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/reports/{report}",
      path: {
        account_id: accountId,
        report: report,
      },
    });
  }

  /**
   * Start a Report
   * Generates a report instance for the account. Note that "report" in the
   * request must match one of the available report names. To fetch a list of
   * available report names and parameters for each report (including whether or
   * not those parameters are required), see
   * {api:AccountReportsController#available_reports List Available Reports}.
   * @param accountId ID
   * @param report ID
   * @param formData
   * @returns Report success
   * @throws ApiError
   */
  public startReport(
    accountId: string,
    report: string,
    formData?: any,
  ): CancelablePromise<Report> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/accounts/{account_id}/reports/{report}",
      path: {
        account_id: accountId,
        report: report,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Status of a Report
   * Returns the status of a report.
   * @param accountId ID
   * @param report ID
   * @param id ID
   * @returns Report success
   * @throws ApiError
   */
  public statusOfReport(
    accountId: string,
    report: string,
    id: string,
  ): CancelablePromise<Report> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/reports/{report}/{id}",
      path: {
        account_id: accountId,
        report: report,
        id: id,
      },
    });
  }

  /**
   * Delete a Report
   * Deletes a generated report instance.
   * @param accountId ID
   * @param report ID
   * @param id ID
   * @returns Report success
   * @throws ApiError
   */
  public deleteReport(
    accountId: string,
    report: string,
    id: string,
  ): CancelablePromise<Report> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/accounts/{account_id}/reports/{report}/{id}",
      path: {
        account_id: accountId,
        report: report,
        id: id,
      },
    });
  }

  /**
   * List Available Reports
   * Returns a paginated list of reports for the current context.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public listAvailableReports(accountId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/reports",
      path: {
        account_id: accountId,
      },
    });
  }
}
