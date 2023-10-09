/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class PollsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List polls
   * Returns the paginated list of polls for the current user.
   * @returns any success
   * @throws ApiError
   */
  public listPolls(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/polls",
    });
  }

  /**
   * Create a single poll
   * Create a new poll for the current user
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public createSinglePoll(formData: any): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/polls",
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a single poll
   * Returns the poll with the given id
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public getSinglePoll(id: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/polls/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * Update a single poll
   * Update an existing poll belonging to the current user
   * @param id ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public updateSinglePoll(id: string, formData: any): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/polls/{id}",
      path: {
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete a poll
   * <b>204 No Content</b> response code is returned if the deletion was successful.
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public deletePoll(id: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/polls/{id}",
      path: {
        id: id,
      },
    });
  }
}
