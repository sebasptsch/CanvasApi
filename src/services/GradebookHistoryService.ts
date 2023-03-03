/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Day } from '../models/Day';
import type { Grader } from '../models/Grader';
import type { SubmissionHistory } from '../models/SubmissionHistory';
import type { SubmissionVersion } from '../models/SubmissionVersion';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GradebookHistoryService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Days in gradebook history for this course
     * Returns a map of dates to grader/assignment groups
     * @param courseId The id of the contextual course for this API call
     * @returns Day success
     * @throws ApiError
     */
    public daysInGradebookHistoryForThisCourse(
        courseId: number,
    ): CancelablePromise<Array<Day>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/gradebook_history/days',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * List uncollated submission versions
     * Gives a paginated, uncollated list of submission versions for all matching
     * submissions in the context. This SubmissionVersion objects will not include
     * the +new_grade+ or +previous_grade+ keys, only the +grade+; same for
     * +graded_at+ and +grader+.
     * @param courseId The id of the contextual course for this API call
     * @param assignmentId The ID of the assignment for which you want to see submissions. If
     * absent, versions of submissions from any assignment in the course are
     * included.
     * @param userId The ID of the user for which you want to see submissions. If absent,
     * versions of submissions from any user in the course are included.
     * @param ascending Returns submission versions in ascending date order (oldest first). If
     * absent, returns submission versions in descending date order (newest
     * first).
     * @returns SubmissionVersion success
     * @throws ApiError
     */
    public listUncollatedSubmissionVersions(
        courseId: number,
        assignmentId?: number,
        userId?: number,
        ascending?: boolean,
    ): CancelablePromise<Array<SubmissionVersion>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/gradebook_history/feed',
            path: {
                'course_id': courseId,
            },
            query: {
                'assignment_id': assignmentId,
                'user_id': userId,
                'ascending': ascending,
            },
        });
    }

    /**
     * Details for a given date in gradebook history for this course
     * Returns the graders who worked on this day, along with the assignments they worked on.
     * More details can be obtained by selecting a grader and assignment and calling the
     * 'submissions' api endpoint for a given date.
     * @param courseId The id of the contextual course for this API call
     * @param date The date for which you would like to see detailed information
     * @returns Grader success
     * @throws ApiError
     */
    public detailsForGivenDateInGradebookHistoryForThisCourse(
        courseId: number,
        date: string,
    ): CancelablePromise<Array<Grader>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/gradebook_history/{date}',
            path: {
                'course_id': courseId,
                'date': date,
            },
        });
    }

    /**
     * Lists submissions
     * Gives a nested list of submission versions
     * @param courseId The id of the contextual course for this API call
     * @param date The date for which you would like to see submissions
     * @param graderId The ID of the grader for which you want to see submissions
     * @param assignmentId The ID of the assignment for which you want to see submissions
     * @returns SubmissionHistory success
     * @throws ApiError
     */
    public listsSubmissions(
        courseId: number,
        date: string,
        graderId: number,
        assignmentId: number,
    ): CancelablePromise<Array<SubmissionHistory>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/gradebook_history/{date}/graders/{grader_id}/assignments/{assignment_id}/submissions',
            path: {
                'course_id': courseId,
                'date': date,
                'grader_id': graderId,
                'assignment_id': assignmentId,
            },
        });
    }

}
