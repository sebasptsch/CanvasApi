/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubmissionComment } from "../models/SubmissionComment";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class SubmissionCommentsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Upload a file
   * Upload a file to attach to a submission comment
   *
   * See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow.
   *
   * The final step of the file upload workflow will return the attachment data,
   * including the new file id. The caller can then PUT the file_id to the
   * submission API to attach it to a comment
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public uploadFile(
    courseId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/files",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Edit a submission comment
   * Edit the given submission comment.
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @param id ID
   * @param formData
   * @returns SubmissionComment success
   * @throws ApiError
   */
  public editSubmissionComment(
    courseId: string,
    assignmentId: string,
    userId: string,
    id: string,
    formData?: any,
  ): CancelablePromise<SubmissionComment> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/{id}",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete a submission comment
   * Delete the given submission comment.
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @param id ID
   * @returns SubmissionComment success
   * @throws ApiError
   */
  public deleteSubmissionComment(
    courseId: string,
    assignmentId: string,
    userId: string,
    id: string,
  ): CancelablePromise<SubmissionComment> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/{id}",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
        id: id,
      },
    });
  }
}
