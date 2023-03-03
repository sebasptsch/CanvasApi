/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CourseQuizExtensionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Set extensions for student quiz submissions
     * <b>Responses</b>
     *
     * * <b>200 OK</b> if the request was successful
     * * <b>403 Forbidden</b> if you are not allowed to extend quizzes for this course
     * @param courseId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public setExtensionsForStudentQuizSubmissions(
        courseId: string,
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/quiz_extensions',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
