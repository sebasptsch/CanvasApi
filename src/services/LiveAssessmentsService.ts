/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LiveAssessmentsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List live assessment results
     * Returns a paginated list of live assessment results
     * @param courseId ID
     * @param assessmentId ID
     * @param userId If set, restrict results to those for this user
     * @returns any success
     * @throws ApiError
     */
    public listLiveAssessmentResults(
        courseId: string,
        assessmentId: string,
        userId?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/live_assessments/{assessment_id}/results',
            path: {
                'course_id': courseId,
                'assessment_id': assessmentId,
            },
            query: {
                'user_id': userId,
            },
        });
    }

    /**
     * Create live assessment results
     * Creates live assessment results and adds them to a live assessment
     * @param courseId ID
     * @param assessmentId ID
     * @returns any success
     * @throws ApiError
     */
    public createLiveAssessmentResults(
        courseId: string,
        assessmentId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/live_assessments/{assessment_id}/results',
            path: {
                'course_id': courseId,
                'assessment_id': assessmentId,
            },
        });
    }

    /**
     * List live assessments
     * Returns a paginated list of live assessments.
     * @param courseId ID
     * @returns any success
     * @throws ApiError
     */
    public listLiveAssessments(
        courseId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/live_assessments',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Create or find a live assessment
     * Creates or finds an existing live assessment with the given key and aligns it with
     * the linked outcome
     * @param courseId ID
     * @returns any success
     * @throws ApiError
     */
    public createOrFindLiveAssessment(
        courseId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/live_assessments',
            path: {
                'course_id': courseId,
            },
        });
    }

}
