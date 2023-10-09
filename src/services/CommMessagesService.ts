/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommMessage } from "../models/CommMessage";
import type { ref } from "../models/ref";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class CommMessagesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List of CommMessages for a user
   * Retrieve a paginated list of messages sent to a user.
   * @param userId The user id for whom you want to retrieve CommMessages
   * @param startTime The beginning of the time range you want to retrieve message from.
   * Up to a year prior to the current date is available.
   * @param endTime The end of the time range you want to retrieve messages for.
   * Up to a year prior to the current date is available.
   * @returns CommMessage success
   * @throws ApiError
   */
  public listOfCommmessagesForUser(
    userId: string,
    startTime?: ref,
    endTime?: ref,
  ): CancelablePromise<Array<CommMessage>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/comm_messages",
      query: {
        user_id: userId,
        start_time: startTime,
        end_time: endTime,
      },
    });
  }
}
