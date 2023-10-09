/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SisImportError } from "../models/SisImportError";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class SisImportErrorsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get SIS import error list
   * Returns the list of SIS import errors for an account or a SIS import. Import
   * errors are only stored for 30 days.
   *
   * Example:
   * curl 'https://<canvas>/api/v1/accounts/<account_id>/sis_imports/<id>/sis_import_errors' \
   * -H "Authorization: Bearer <token>"
   *
   * Example:
   * curl 'https://<canvas>/api/v1/accounts/<account_id>/sis_import_errors' \
   * -H "Authorization: Bearer <token>"
   * @param accountId ID
   * @param failure If set, only shows errors on a sis import that would cause a failure.
   * @returns SisImportError success
   * @throws ApiError
   */
  public getSisImportErrorListSisImportErrors(
    accountId: string,
    failure?: boolean,
  ): CancelablePromise<Array<SisImportError>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/sis_import_errors",
      path: {
        account_id: accountId,
      },
      query: {
        failure: failure,
      },
    });
  }

  /**
   * Get SIS import error list
   * Returns the list of SIS import errors for an account or a SIS import. Import
   * errors are only stored for 30 days.
   *
   * Example:
   * curl 'https://<canvas>/api/v1/accounts/<account_id>/sis_imports/<id>/sis_import_errors' \
   * -H "Authorization: Bearer <token>"
   *
   * Example:
   * curl 'https://<canvas>/api/v1/accounts/<account_id>/sis_import_errors' \
   * -H "Authorization: Bearer <token>"
   * @param accountId ID
   * @param id ID
   * @param failure If set, only shows errors on a sis import that would cause a failure.
   * @returns SisImportError success
   * @throws ApiError
   */
  public getSisImportErrorListSisImports(
    accountId: string,
    id: string,
    failure?: boolean,
  ): CancelablePromise<Array<SisImportError>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/sis_imports/{id}/errors",
      path: {
        account_id: accountId,
        id: id,
      },
      query: {
        failure: failure,
      },
    });
  }
}
