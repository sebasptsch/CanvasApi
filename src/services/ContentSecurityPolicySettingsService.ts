/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class ContentSecurityPolicySettingsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Add multiple allowed domains to an account
   * Adds multiple allowed domains for the current account. Note: this will not take effect
   * unless CSP is explicitly enabled on this account.
   * @param accountId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public addMultipleAllowedDomainsToAccount(
    accountId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/accounts/{account_id}/csp_settings/domains/batch_create",
      path: {
        account_id: accountId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get current settings for account or course
   * Update multiple modules in an account.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public getCurrentSettingsForAccountOrCourseAccounts(
    accountId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/csp_settings",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Enable, disable, or clear explicit CSP setting
   * Either explicitly sets CSP to be on or off for courses and sub-accounts,
   * or clear the explicit settings to default to those set by a parent account
   *
   * Note: If "inherited" and "settings_locked" are both true for this account or course,
   * then the CSP setting cannot be modified.
   * @param accountId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public enableDisableOrClearExplicitCspSettingAccounts(
    accountId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/accounts/{account_id}/csp_settings",
      path: {
        account_id: accountId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Lock or unlock current CSP settings for sub-accounts and courses
   * Can only be set if CSP is explicitly enabled or disabled on this account (i.e. "inherited" is false).
   * @param accountId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public lockOrUnlockCurrentCspSettingsForSubAccountsAndCourses(
    accountId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/accounts/{account_id}/csp_settings/lock",
      path: {
        account_id: accountId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Add an allowed domain to account
   * Adds an allowed domain for the current account. Note: this will not take effect
   * unless CSP is explicitly enabled on this account.
   * @param accountId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public addAllowedDomainToAccount(
    accountId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/accounts/{account_id}/csp_settings/domains",
      path: {
        account_id: accountId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Remove a domain from account
   * Removes an allowed domain from the current account.
   * @param accountId ID
   * @param domain no description
   * @returns any success
   * @throws ApiError
   */
  public removeDomainFromAccount(
    accountId: string,
    domain: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/accounts/{account_id}/csp_settings/domains",
      path: {
        account_id: accountId,
      },
      query: {
        domain: domain,
      },
    });
  }

  /**
   * Retrieve reported CSP Violations for account
   * Must be called on a root account.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public retrieveReportedCspViolationsForAccount(
    accountId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/csp_log",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Get current settings for account or course
   * Update multiple modules in an account.
   * @param courseId ID
   * @returns any success
   * @throws ApiError
   */
  public getCurrentSettingsForAccountOrCourseCourses(
    courseId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/csp_settings",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * Enable, disable, or clear explicit CSP setting
   * Either explicitly sets CSP to be on or off for courses and sub-accounts,
   * or clear the explicit settings to default to those set by a parent account
   *
   * Note: If "inherited" and "settings_locked" are both true for this account or course,
   * then the CSP setting cannot be modified.
   * @param courseId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public enableDisableOrClearExplicitCspSettingCourses(
    courseId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/csp_settings",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
