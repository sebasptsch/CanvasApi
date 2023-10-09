/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class QuizSubmissionFilesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Upload a file
   * Associate a new quiz submission file
   *
   * This API endpoint is the first step in uploading a quiz submission file.
   * See the {file:file_uploads.html File Upload Documentation} for details on
   * the file upload workflow as these parameters are interpreted as per the
   * documentation there.
   * @param courseId ID
   * @param quizId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public uploadFile(
    courseId: string,
    quizId: string,
    formData?: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/self/files",
      path: {
        course_id: courseId,
        quiz_id: quizId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
