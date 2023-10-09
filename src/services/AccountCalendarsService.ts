/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountCalendar } from "../models/AccountCalendar";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class AccountCalendarsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Count of all visible account calendars
   * Returns the number of visible account calendars.
   * @param accountId ID
   * @returns count_integer_ success
   * @throws ApiError
   */
  public countOfAllVisibleAccountCalendars(
    accountId: string,
  ): CancelablePromise<number> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/visible_calendars_count",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * List available account calendars
   * Returns a paginated list of account calendars available to the current user.
   * Includes visible account calendars where the user has an account association.
   * @param searchTerm When included, searches available account calendars for the term. Returns matching
   * results. Term must be at least 2 characters.
   * @returns account_calendars_AccountCalendar_total_results_integer_ success
   * @throws ApiError
   */
  public listAvailableAccountCalendars(
    searchTerm?: string,
  ): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/account_calendars",
      query: {
        search_term: searchTerm,
      },
    });
  }

  /**
   * Get a single account calendar
   * Get details about a specific account calendar.
   * @param accountId ID
   * @returns AccountCalendar success
   * @throws ApiError
   */
  public getSingleAccountCalendar(
    accountId: string,
  ): CancelablePromise<AccountCalendar> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/account_calendars/{account_id}",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Update a calendar
   * Set an account calendar's visibility and auto_subscribe values. Requires the
   * `manage_account_calendar_visibility` permission on the account.
   * @param accountId ID
   * @param formData
   * @returns AccountCalendar success
   * @throws ApiError
   */
  public updateCalendar(
    accountId: string,
    formData?: any,
  ): CancelablePromise<AccountCalendar> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/account_calendars/{account_id}",
      path: {
        account_id: accountId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List all account calendars
   * Returns a paginated list of account calendars for the provided account and
   * its first level of sub-accounts. Includes hidden calendars in the response.
   * Requires the `manage_account_calendar_visibility` permission.
   * @param accountId ID
   * @param searchTerm When included, searches all descendent accounts of provided account for the
   * term. Returns matching results. Term must be at least 2 characters. Can be
   * combined with a filter value.
   * @param filter When included, only returns calendars that are either visible or hidden. Can
   * be combined with a search term.
   * @returns AccountCalendar success
   * @throws ApiError
   */
  public listAllAccountCalendars(
    accountId: string,
    searchTerm?: string,
    filter?: "visible" | "hidden",
  ): CancelablePromise<Array<AccountCalendar>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/account_calendars",
      path: {
        account_id: accountId,
      },
      query: {
        search_term: searchTerm,
        filter: filter,
      },
    });
  }

  /**
   * Update several calendars
   * Set visibility and/or auto_subscribe on many calendars simultaneously. Requires
   * the `manage_account_calendar_visibility` permission on the account.
   *
   * Accepts a JSON array of objects containing 2-3 keys each: `id`
   * (the account's id, required), `visible` (a boolean indicating whether
   * the account calendar is visible), and `auto_subscribe` (a boolean indicating
   * whether users should see these events in their calendar without manually
   * subscribing).
   *
   * Returns the count of updated accounts.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public updateSeveralCalendars(accountId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/accounts/{account_id}/account_calendars",
      path: {
        account_id: accountId,
      },
    });
  }
}
