/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class QuizSubmissionEventsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Retrieve captured events
   * Retrieve the set of events captured during a specific submission attempt.
   * @param courseId ID
   * @param quizId ID
   * @param id ID
   * @param attempt The specific submission attempt to look up the events for. If unspecified,
   * the latest attempt will be used.
   * @returns any success
   * @throws ApiError
   */
  public retrieveCapturedEvents(
    courseId: string,
    quizId: string,
    id: string,
    attempt?: number,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/events",
      path: {
        course_id: courseId,
        quiz_id: quizId,
        id: id,
      },
      query: {
        attempt: attempt,
      },
    });
  }

  /**
   * Submit captured events
   * Store a set of events which were captured during a quiz taking session.
   *
   * On success, the response will be 204 No Content with an empty body.
   * @param courseId ID
   * @param quizId ID
   * @param id ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public submitCapturedEvents(
    courseId: string,
    quizId: string,
    id: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/events",
      path: {
        course_id: courseId,
        quiz_id: quizId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
