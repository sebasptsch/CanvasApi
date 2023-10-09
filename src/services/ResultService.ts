/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Result } from "../models/Result";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class ResultService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Show a Result
   * Show existing Result of a line item.
   * @param courseId ID
   * @param lineItemId ID
   * @param id ID
   * @returns Result success
   * @throws ApiError
   */
  public showResult(
    courseId: string,
    lineItemId: string,
    id: string,
  ): CancelablePromise<Result> {
    return this.httpRequest.request({
      method: "GET",
      url: "/lti/courses/{course_id}/line_items/{line_item_id}/results/{id}",
      path: {
        course_id: courseId,
        line_item_id: lineItemId,
        id: id,
      },
    });
  }

  /**
   * Show a collection of Results
   * Show existing Results of a line item. Can be used to retrieve a specific student's
   * result by adding the user_id (defined as the lti_user_id or the Canvas user_id) as
   * a query parameter (i.e. user_id=1000). If user_id is included, it will return only
   * one Result in the collection if the result exists, otherwise it will be empty. May
   * also limit number of results by adding the limit query param (i.e. limit=100)
   * @param courseId ID
   * @param lineItemId ID
   * @returns Result success
   * @throws ApiError
   */
  public showCollectionOfResults(
    courseId: string,
    lineItemId: string,
  ): CancelablePromise<Result> {
    return this.httpRequest.request({
      method: "GET",
      url: "/lti/courses/{course_id}/line_items/{line_item_id}/results",
      path: {
        course_id: courseId,
        line_item_id: lineItemId,
      },
    });
  }
}
