/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuizItem } from "../models/QuizItem";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class NewQuizItemsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get items media_upload_url
   * Get a url for uploading media for use in hot-spot question types. See the hot-spot
   * question type in the {Appendix: Question Types} for more details about using this endpoint.
   * @param courseId no description
   * @param assignmentId no description
   * @returns any success
   * @throws ApiError
   */
  public getItemsMediaUploadUrl(
    courseId: number,
    assignmentId: number,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/media_upload_url",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
      },
    });
  }

  /**
   * List quiz items
   * Get a list of items in a new quiz.
   * @param courseId no description
   * @param assignmentId no description
   * @returns QuizItem success
   * @throws ApiError
   */
  public listQuizItems(
    courseId: number,
    assignmentId: number,
  ): CancelablePromise<Array<QuizItem>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
      },
    });
  }

  /**
   * Create a quiz item
   * Create a quiz item in a new quiz. Only +QuestionItem+ types can be created.
   * @param courseId no description
   * @param assignmentId The id of the assignment associated with the quiz.
   * @param formData
   * @returns QuizItem success
   * @throws ApiError
   */
  public createQuizItem(
    courseId: number,
    assignmentId: number,
    formData: any,
  ): CancelablePromise<QuizItem> {
    return this.httpRequest.request({
      method: "POST",
      url: "/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a quiz item
   * Get details about a single item in a new quiz.
   * @param courseId no description
   * @param assignmentId The id of the assignment associated with the quiz.
   * @param itemId The id of the item associated with the quiz.
   * @returns QuizItem success
   * @throws ApiError
   */
  public getQuizItem(
    courseId: number,
    assignmentId: number,
    itemId: number,
  ): CancelablePromise<QuizItem> {
    return this.httpRequest.request({
      method: "GET",
      url: "/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id}",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        item_id: itemId,
      },
    });
  }

  /**
   * Delete a quiz item
   * Delete a single quiz item in a new quiz.
   * @param courseId no description
   * @param assignmentId The id of the assignment associated with the quiz.
   * @param itemId The id of the item associated with the quiz.
   * @returns QuizItem success
   * @throws ApiError
   */
  public deleteQuizItem(
    courseId: number,
    assignmentId: number,
    itemId: number,
  ): CancelablePromise<QuizItem> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id}",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        item_id: itemId,
      },
    });
  }

  /**
   * Update a quiz item
   * Update a single quiz item in a new quiz. Only +QuestionItem+ types can be updated.
   * @param courseId no description
   * @param assignmentId The id of the assignment associated with the quiz.
   * @param itemId The id of the item associated with the quiz.
   * @param formData
   * @returns QuizItem success
   * @throws ApiError
   */
  public updateQuizItem(
    courseId: number,
    assignmentId: number,
    itemId: number,
    formData?: any,
  ): CancelablePromise<QuizItem> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id}",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        item_id: itemId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
