/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PlagiarismDetectionSubmissionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get the history of a single submission
     * Get a list of all attempts made for a submission, based on submission id.
     * @param assignmentId ID
     * @param submissionId ID
     * @returns any success
     * @throws ApiError
     */
    public getHistoryOfSingleSubmission(
        assignmentId: string,
        submissionId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lti/assignments/{assignment_id}/submissions/{submission_id}/history',
            path: {
                'assignment_id': assignmentId,
                'submission_id': submissionId,
            },
        });
    }

    /**
     * Get a single submission
     * Get a single submission, based on submission id.
     * @param assignmentId ID
     * @param submissionId ID
     * @returns any success
     * @throws ApiError
     */
    public getSingleSubmission(
        assignmentId: string,
        submissionId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lti/assignments/{assignment_id}/submissions/{submission_id}',
            path: {
                'assignment_id': assignmentId,
                'submission_id': submissionId,
            },
        });
    }

}
