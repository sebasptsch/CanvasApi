/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuizSubmissionQuestion } from "../models/QuizSubmissionQuestion";
import type { ref } from "../models/ref";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class QuizSubmissionQuestionsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Unflagging a question.
   * Remove the flag that you previously set on a quiz question after you've
   * returned to it.
   * @param quizSubmissionId ID
   * @param id ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public unflaggingQuestion(
    quizSubmissionId: string,
    id: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/quiz_submissions/{quiz_submission_id}/questions/{id}/unflag",
      path: {
        quiz_submission_id: quizSubmissionId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get all quiz submission questions.
   * Get a list of all the question records for this quiz submission.
   *
   * <b>200 OK</b> response code is returned if the request was successful.
   * @param quizSubmissionId ID
   * @param include Associations to include with the quiz submission question.
   * @returns any success
   * @throws ApiError
   */
  public getAllQuizSubmissionQuestions(
    quizSubmissionId: string,
    include?: "quiz_question",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/quiz_submissions/{quiz_submission_id}/questions",
      path: {
        quiz_submission_id: quizSubmissionId,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Answering questions
   * Provide or update an answer to one or more QuizQuestions.
   * @param quizSubmissionId ID
   * @param formData
   * @returns QuizSubmissionQuestion success
   * @throws ApiError
   */
  public answeringQuestions(
    quizSubmissionId: string,
    formData: any,
  ): CancelablePromise<Array<QuizSubmissionQuestion>> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/quiz_submissions/{quiz_submission_id}/questions",
      path: {
        quiz_submission_id: quizSubmissionId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a formatted student numerical answer.
   * Matches the intended behavior of the UI when a numerical answer is entered
   * and returns the resulting formatted number
   * @param quizSubmissionId ID
   * @param id ID
   * @param answer no description
   * @returns any success
   * @throws ApiError
   */
  public getFormattedStudentNumericalAnswer(
    quizSubmissionId: string,
    id: string,
    answer: ref,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/quiz_submissions/{quiz_submission_id}/questions/{id}/formatted_answer",
      path: {
        quiz_submission_id: quizSubmissionId,
        id: id,
      },
      query: {
        answer: answer,
      },
    });
  }

  /**
   * Flagging a question.
   * Set a flag on a quiz question to indicate that you want to return to it
   * later.
   * @param quizSubmissionId ID
   * @param id ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public flaggingQuestion(
    quizSubmissionId: string,
    id: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/quiz_submissions/{quiz_submission_id}/questions/{id}/flag",
      path: {
        quiz_submission_id: quizSubmissionId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
