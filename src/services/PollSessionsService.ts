/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class PollSessionsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List poll sessions for a poll
   * Returns the paginated list of PollSessions in this poll.
   * @param pollId ID
   * @returns any success
   * @throws ApiError
   */
  public listPollSessionsForPoll(pollId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/polls/{poll_id}/poll_sessions",
      path: {
        poll_id: pollId,
      },
    });
  }

  /**
   * Create a single poll session
   * Create a new poll session for this poll
   * @param pollId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public createSinglePollSession(
    pollId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/polls/{poll_id}/poll_sessions",
      path: {
        poll_id: pollId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List closed poll sessions
   * A paginated list of all closed poll sessions available to the current user.
   * @returns any success
   * @throws ApiError
   */
  public listClosedPollSessions(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/poll_sessions/closed",
    });
  }

  /**
   * Get the results for a single poll session
   * Returns the poll session with the given id
   * @param pollId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public getResultsForSinglePollSession(
    pollId: string,
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/polls/{poll_id}/poll_sessions/{id}",
      path: {
        poll_id: pollId,
        id: id,
      },
    });
  }

  /**
   * Update a single poll session
   * Update an existing poll session for this poll
   * @param pollId ID
   * @param id ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public updateSinglePollSession(
    pollId: string,
    id: string,
    formData?: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/polls/{poll_id}/poll_sessions/{id}",
      path: {
        poll_id: pollId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete a poll session
   * <b>204 No Content</b> response code is returned if the deletion was successful.
   * @param pollId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public deletePollSession(pollId: string, id: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/polls/{poll_id}/poll_sessions/{id}",
      path: {
        poll_id: pollId,
        id: id,
      },
    });
  }

  /**
   * Close an opened poll session
   * @param pollId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public closeOpenedPollSession(
    pollId: string,
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/polls/{poll_id}/poll_sessions/{id}/close",
      path: {
        poll_id: pollId,
        id: id,
      },
    });
  }

  /**
   * Open a poll session
   * @param pollId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public openPollSession(pollId: string, id: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/polls/{poll_id}/poll_sessions/{id}/open",
      path: {
        poll_id: pollId,
        id: id,
      },
    });
  }

  /**
   * List opened poll sessions
   * A paginated list of all opened poll sessions available to the current user.
   * @returns any success
   * @throws ApiError
   */
  public listOpenedPollSessions(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/poll_sessions/opened",
    });
  }
}
