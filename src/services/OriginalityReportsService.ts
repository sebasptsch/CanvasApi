/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OriginalityReport } from "../models/OriginalityReport";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class OriginalityReportsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Show an Originality Report
   * Get a single originality report
   * @param assignmentId ID
   * @param fileId ID
   * @returns OriginalityReport success
   * @throws ApiError
   */
  public showOriginalityReportFiles(
    assignmentId: string,
    fileId: string,
  ): CancelablePromise<OriginalityReport> {
    return this.httpRequest.request({
      method: "GET",
      url: "/lti/assignments/{assignment_id}/files/{file_id}/originality_report",
      path: {
        assignment_id: assignmentId,
        file_id: fileId,
      },
    });
  }

  /**
   * Edit an Originality Report
   * Modify an existing originality report. An alternative to this endpoint is
   * to POST the same parameters listed below to the CREATE endpoint.
   * @param assignmentId ID
   * @param fileId ID
   * @param formData
   * @returns OriginalityReport success
   * @throws ApiError
   */
  public editOriginalityReportFiles(
    assignmentId: string,
    fileId: string,
    formData?: any,
  ): CancelablePromise<OriginalityReport> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/lti/assignments/{assignment_id}/files/{file_id}/originality_report",
      path: {
        assignment_id: assignmentId,
        file_id: fileId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Create an Originality Report
   * Create a new OriginalityReport for the specified file
   * @param assignmentId ID
   * @param submissionId ID
   * @param formData
   * @returns OriginalityReport success
   * @throws ApiError
   */
  public createOriginalityReport(
    assignmentId: string,
    submissionId: string,
    formData: any,
  ): CancelablePromise<OriginalityReport> {
    return this.httpRequest.request({
      method: "POST",
      url: "/lti/assignments/{assignment_id}/submissions/{submission_id}/originality_report",
      path: {
        assignment_id: assignmentId,
        submission_id: submissionId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Show an Originality Report
   * Get a single originality report
   * @param assignmentId ID
   * @param submissionId ID
   * @param id ID
   * @returns OriginalityReport success
   * @throws ApiError
   */
  public showOriginalityReportSubmissions(
    assignmentId: string,
    submissionId: string,
    id: string,
  ): CancelablePromise<OriginalityReport> {
    return this.httpRequest.request({
      method: "GET",
      url: "/lti/assignments/{assignment_id}/submissions/{submission_id}/originality_report/{id}",
      path: {
        assignment_id: assignmentId,
        submission_id: submissionId,
        id: id,
      },
    });
  }

  /**
   * Edit an Originality Report
   * Modify an existing originality report. An alternative to this endpoint is
   * to POST the same parameters listed below to the CREATE endpoint.
   * @param assignmentId ID
   * @param submissionId ID
   * @param id ID
   * @param formData
   * @returns OriginalityReport success
   * @throws ApiError
   */
  public editOriginalityReportSubmissions(
    assignmentId: string,
    submissionId: string,
    id: string,
    formData?: any,
  ): CancelablePromise<OriginalityReport> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/lti/assignments/{assignment_id}/submissions/{submission_id}/originality_report/{id}",
      path: {
        assignment_id: assignmentId,
        submission_id: submissionId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
