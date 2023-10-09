/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Quiz } from "../models/Quiz";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class QuizzesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List quizzes in a course
   * Returns the paginated list of Quizzes in this course.
   * @param courseId ID
   * @param searchTerm The partial title of the quizzes to match and return.
   * @returns Quiz success
   * @throws ApiError
   */
  public listQuizzesInCourse(
    courseId: string,
    searchTerm?: string,
  ): CancelablePromise<Array<Quiz>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/quizzes",
      path: {
        course_id: courseId,
      },
      query: {
        search_term: searchTerm,
      },
    });
  }

  /**
   * Create a quiz
   * Create a new quiz for this course.
   * @param courseId ID
   * @param formData
   * @returns Quiz success
   * @throws ApiError
   */
  public createQuiz(courseId: string, formData: any): CancelablePromise<Quiz> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/quizzes",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a single quiz
   * Returns the quiz with the given id.
   * @param courseId ID
   * @param id ID
   * @returns Quiz success
   * @throws ApiError
   */
  public getSingleQuiz(courseId: string, id: string): CancelablePromise<Quiz> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/quizzes/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
    });
  }

  /**
   * Edit a quiz
   * Modify an existing quiz. See the documentation for quiz creation.
   *
   * Additional arguments:
   * @param courseId ID
   * @param id ID
   * @param formData
   * @returns Quiz success
   * @throws ApiError
   */
  public editQuiz(
    courseId: string,
    id: string,
    formData?: any,
  ): CancelablePromise<Quiz> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/quizzes/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete a quiz
   * @param courseId ID
   * @param id ID
   * @returns Quiz success
   * @throws ApiError
   */
  public deleteQuiz(courseId: string, id: string): CancelablePromise<Quiz> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/quizzes/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
    });
  }

  /**
   * Reorder quiz items
   * Change order of the quiz questions or groups within the quiz
   *
   * <b>204 No Content</b> response code is returned if the reorder was successful.
   * @param courseId ID
   * @param id ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public reorderQuizItems(
    courseId: string,
    id: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/quizzes/{id}/reorder",
      path: {
        course_id: courseId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Validate quiz access code
   * Accepts an access code and returns a boolean indicating whether that access code is correct
   * @param courseId ID
   * @param id ID
   * @param formData
   * @returns boolean success
   * @throws ApiError
   */
  public validateQuizAccessCode(
    courseId: string,
    id: string,
    formData: any,
  ): CancelablePromise<boolean> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/quizzes/{id}/validate_access_code",
      path: {
        course_id: courseId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
