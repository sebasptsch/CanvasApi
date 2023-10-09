/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class QuizIpFiltersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get available quiz IP filters.
   * Get a list of available IP filters for this Quiz.
   *
   * <b>200 OK</b> response code is returned if the request was successful.
   * @param courseId ID
   * @param quizId ID
   * @returns any success
   * @throws ApiError
   */
  public getAvailableQuizIpFilters(
    courseId: string,
    quizId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/quizzes/{quiz_id}/ip_filters",
      path: {
        course_id: courseId,
        quiz_id: quizId,
      },
    });
  }
}
