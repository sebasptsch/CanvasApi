/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class QuizStatisticsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Fetching the latest quiz statistics
   * This endpoint provides statistics for all quiz versions, or for a specific
   * quiz version, in which case the output is guaranteed to represent the
   * _latest_ and most current version of the quiz.
   *
   * <b>200 OK</b> response code is returned if the request was successful.
   * @param courseId ID
   * @param quizId ID
   * @param allVersions Whether the statistics report should include all submissions attempts.
   * @returns any success
   * @throws ApiError
   */
  public fetchingLatestQuizStatistics(
    courseId: string,
    quizId: string,
    allVersions?: boolean,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/quizzes/{quiz_id}/statistics",
      path: {
        course_id: courseId,
        quiz_id: quizId,
      },
      query: {
        all_versions: allVersions,
      },
    });
  }
}
