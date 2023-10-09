/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuizReport } from "../models/QuizReport";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class QuizReportsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Retrieve all quiz reports
   * Returns a list of all available reports.
   * @param courseId ID
   * @param quizId ID
   * @param includesAllVersions Whether to retrieve reports that consider all the submissions or only
   * the most recent. Defaults to false, ignored for item_analysis reports.
   * @returns QuizReport success
   * @throws ApiError
   */
  public retrieveAllQuizReports(
    courseId: string,
    quizId: string,
    includesAllVersions?: boolean,
  ): CancelablePromise<Array<QuizReport>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/quizzes/{quiz_id}/reports",
      path: {
        course_id: courseId,
        quiz_id: quizId,
      },
      query: {
        includes_all_versions: includesAllVersions,
      },
    });
  }

  /**
   * Create a quiz report
   * Create and return a new report for this quiz. If a previously
   * generated report matches the arguments and is still current (i.e.
   * there have been no new submissions), it will be returned.
   *
   * *Responses*
   *
   * * <code>400 Bad Request</code> if the specified report type is invalid
   * * <code>409 Conflict</code> if a quiz report of the specified type is already being
   * generated
   * @param courseId ID
   * @param quizId ID
   * @param formData
   * @returns QuizReport success
   * @throws ApiError
   */
  public createQuizReport(
    courseId: string,
    quizId: string,
    formData: any,
  ): CancelablePromise<QuizReport> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/quizzes/{quiz_id}/reports",
      path: {
        course_id: courseId,
        quiz_id: quizId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a quiz report
   * Returns the data for a single quiz report.
   * @param courseId ID
   * @param quizId ID
   * @param id ID
   * @param include Whether the output should include documents for the file and/or progress
   * objects associated with this report. (Note: JSON-API only)
   * @returns QuizReport success
   * @throws ApiError
   */
  public getQuizReport(
    courseId: string,
    quizId: string,
    id: string,
    include?: "file" | "progress",
  ): CancelablePromise<QuizReport> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/quizzes/{quiz_id}/reports/{id}",
      path: {
        course_id: courseId,
        quiz_id: quizId,
        id: id,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Abort the generation of a report, or remove a previously generated one
   * This API allows you to cancel a previous request you issued for a report to
   * be generated. Or in the case of an already generated report, you'd like to
   * remove it, perhaps to generate it another time with an updated version that
   * provides new features.
   *
   * You must check the report's generation status before attempting to use this
   * interface. See the "workflow_state" property of the QuizReport's Progress
   * object for more information. Only when the progress reports itself in a
   * "queued" state can the generation be aborted.
   *
   * *Responses*
   *
   * - <code>204 No Content</code> if your request was accepted
   * - <code>422 Unprocessable Entity</code> if the report is not being generated
   * or can not be aborted at this stage
   * @param courseId ID
   * @param quizId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public abortGenerationOfReportOrRemovePreviouslyGeneratedOne(
    courseId: string,
    quizId: string,
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/quizzes/{quiz_id}/reports/{id}",
      path: {
        course_id: courseId,
        quiz_id: quizId,
        id: id,
      },
    });
  }
}
