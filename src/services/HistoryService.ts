/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HistoryEntry } from "../models/HistoryEntry";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class HistoryService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List recent history for a user
   * Return a paginated list of the user's recent history. History entries are returned in descending order,
   * newest to oldest. You may list history entries for yourself (use +self+ as the user_id), for a student you observe,
   * or for a user you manage as an administrator. Note that the +per_page+ pagination argument is not supported
   * and the number of history entries returned per page will vary.
   * @param userId ID
   * @returns HistoryEntry success
   * @throws ApiError
   */
  public listRecentHistoryForUser(
    userId: string,
  ): CancelablePromise<Array<HistoryEntry>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/history",
      path: {
        user_id: userId,
      },
    });
  }
}
