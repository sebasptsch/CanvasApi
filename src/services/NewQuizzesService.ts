/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewQuiz } from "../models/NewQuiz";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class NewQuizzesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List new quizzes
   * Get a list of new quizzes.
   * @param courseId no description
   * @returns NewQuiz success
   * @throws ApiError
   */
  public listNewQuizzes(courseId: number): CancelablePromise<Array<NewQuiz>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/quiz/v1/courses/{course_id}/quizzes",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * Create a new quiz
   * Create a new quiz for the course.
   * @param courseId no description
   * @param formData
   * @returns NewQuiz success
   * @throws ApiError
   */
  public createNewQuiz(
    courseId: number,
    formData?: any,
  ): CancelablePromise<NewQuiz> {
    return this.httpRequest.request({
      method: "POST",
      url: "/quiz/v1/courses/{course_id}/quizzes",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a new quiz
   * Get details about a single new quiz.
   * @param courseId no description
   * @param assignmentId The id of the assignment associated with the quiz.
   * @returns NewQuiz success
   * @throws ApiError
   */
  public getNewQuiz(
    courseId: number,
    assignmentId: number,
  ): CancelablePromise<NewQuiz> {
    return this.httpRequest.request({
      method: "GET",
      url: "/quiz/v1/courses/{course_id}/quizzes/{assignment_id}",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
      },
    });
  }

  /**
   * Delete a new quiz
   * Delete a single new quiz.
   * @param courseId no description
   * @param assignmentId The id of the assignment associated with the quiz.
   * @returns NewQuiz success
   * @throws ApiError
   */
  public deleteNewQuiz(
    courseId: number,
    assignmentId: number,
  ): CancelablePromise<NewQuiz> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/quiz/v1/courses/{course_id}/quizzes/{assignment_id}",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
      },
    });
  }

  /**
   * Update a single quiz
   * Update a single quiz for the course.
   * @param courseId no description
   * @param assignmentId The id of the assignment associated with the quiz.
   * @param formData
   * @returns NewQuiz success
   * @throws ApiError
   */
  public updateSingleQuiz(
    courseId: number,
    assignmentId: number,
    formData?: any,
  ): CancelablePromise<NewQuiz> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/quiz/v1/courses/{course_id}/quizzes/{assignment_id}",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
