/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class AssignmentExtensionsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Set extensions for student assignment submissions
   * <b>Responses</b>
   *
   * * <b>200 OK</b> if the request was successful
   * * <b>403 Forbidden</b> if you are not allowed to extend assignments for this course
   * * <b>400 Bad Request</b> if any of the extensions are invalid
   * @param courseId ID
   * @param assignmentId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public setExtensionsForStudentAssignmentSubmissions(
    courseId: string,
    assignmentId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/extensions",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
