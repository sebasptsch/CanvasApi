/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CourseEvent } from "../models/CourseEvent";
import type { ref } from "../models/ref";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class CourseAuditLogService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Query by account.
   * List course change events for a given account.
   * @param accountId ID
   * @param startTime The beginning of the time range from which you want events.
   * @param endTime The end of the time range from which you want events.
   * @returns CourseEvent success
   * @throws ApiError
   */
  public queryByAccount(
    accountId: string,
    startTime?: ref,
    endTime?: ref,
  ): CancelablePromise<Array<CourseEvent>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/audit/course/accounts/{account_id}",
      path: {
        account_id: accountId,
      },
      query: {
        start_time: startTime,
        end_time: endTime,
      },
    });
  }

  /**
   * Query by course.
   * List course change events for a given course.
   * @param courseId ID
   * @param startTime The beginning of the time range from which you want events.
   * @param endTime The end of the time range from which you want events.
   * @returns CourseEvent success
   * @throws ApiError
   */
  public queryByCourse(
    courseId: string,
    startTime?: ref,
    endTime?: ref,
  ): CancelablePromise<Array<CourseEvent>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/audit/course/courses/{course_id}",
      path: {
        course_id: courseId,
      },
      query: {
        start_time: startTime,
        end_time: endTime,
      },
    });
  }
}
