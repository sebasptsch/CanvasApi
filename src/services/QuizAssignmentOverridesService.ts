/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuizAssignmentOverrideSetContainer } from "../models/QuizAssignmentOverrideSetContainer";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class QuizAssignmentOverridesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Retrieve assignment-overridden dates for Classic Quizzes
   * Retrieve the actual due-at, unlock-at, and available-at dates for quizzes
   * based on the assignment overrides active for the current API user.
   * @param courseId ID
   * @param quizAssignmentOverrides0QuizIds An array of quiz IDs. If omitted, overrides for all quizzes available to
   * the operating user will be returned.
   * @returns QuizAssignmentOverrideSetContainer success
   * @throws ApiError
   */
  public retrieveAssignmentOverriddenDatesForClassicQuizzes(
    courseId: string,
    quizAssignmentOverrides0QuizIds?: Array<number>,
  ): CancelablePromise<QuizAssignmentOverrideSetContainer> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/quizzes/assignment_overrides",
      path: {
        course_id: courseId,
      },
      query: {
        "quiz_assignment_overrides[0][quiz_ids]":
          quizAssignmentOverrides0QuizIds,
      },
    });
  }

  /**
   * Retrieve assignment-overridden dates for New Quizzes
   * Retrieve the actual due-at, unlock-at, and available-at dates for quizzes
   * based on the assignment overrides active for the current API user.
   * @param courseId ID
   * @param quizAssignmentOverrides0QuizIds An array of quiz IDs. If omitted, overrides for all quizzes available to
   * the operating user will be returned.
   * @returns QuizAssignmentOverrideSetContainer success
   * @throws ApiError
   */
  public retrieveAssignmentOverriddenDatesForNewQuizzes(
    courseId: string,
    quizAssignmentOverrides0QuizIds?: Array<number>,
  ): CancelablePromise<QuizAssignmentOverrideSetContainer> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/new_quizzes/assignment_overrides",
      path: {
        course_id: courseId,
      },
      query: {
        "quiz_assignment_overrides[0][quiz_ids]":
          quizAssignmentOverrides0QuizIds,
      },
    });
  }
}
