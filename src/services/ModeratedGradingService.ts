/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ModeratedGradingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Show provisional grade status for a student
     * Tell whether the student's submission needs one or more provisional grades.
     * @param courseId ID
     * @param assignmentId ID
     * @param studentId The id of the student to show the status for
     * @returns any success
     * @throws ApiError
     */
    public showProvisionalGradeStatusForStudent(
        courseId: string,
        assignmentId: string,
        studentId?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/status',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
            },
            query: {
                'student_id': studentId,
            },
        });
    }

    /**
     * Show provisional grade status for a student
     * Determine whether or not the student's submission needs one or more provisional grades.
     * @param courseId ID
     * @param assignmentId ID
     * @param anonymousId The id of the student to show the status for
     * @returns any success
     * @throws ApiError
     */
    public showProvisionalGradeStatusForStudent1(
        courseId: string,
        assignmentId: string,
        anonymousId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/assignments/{assignment_id}/anonymous_provisional_grades/status',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
            },
            query: {
                'anonymous_id': anonymousId,
            },
        });
    }

    /**
     * List students selected for moderation
     * Returns a paginated list of students selected for moderation
     * @param courseId ID
     * @param assignmentId ID
     * @returns User success
     * @throws ApiError
     */
    public listStudentsSelectedForModeration(
        courseId: string,
        assignmentId: string,
    ): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/assignments/{assignment_id}/moderated_students',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
            },
        });
    }

    /**
     * Select students for moderation
     * Returns an array of users that were selected for moderation
     * @param courseId ID
     * @param assignmentId ID
     * @param formData
     * @returns User success
     * @throws ApiError
     */
    public selectStudentsForModeration(
        courseId: string,
        assignmentId: string,
        formData?: any,
    ): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/assignments/{assignment_id}/moderated_students',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Select provisional grade
     * Choose which provisional grade the student should receive for a submission.
     * The caller must be the final grader for the assignment or an admin with :select_final_grade rights.
     * @param courseId ID
     * @param assignmentId ID
     * @param provisionalGradeId ID
     * @returns any success
     * @throws ApiError
     */
    public selectProvisionalGrade(
        courseId: string,
        assignmentId: string,
        provisionalGradeId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/{provisional_grade_id}/select',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
                'provisional_grade_id': provisionalGradeId,
            },
        });
    }

    /**
     * Bulk select provisional grades
     * Choose which provisional grades will be received by associated students for an assignment.
     * The caller must be the final grader for the assignment or an admin with :select_final_grade rights.
     * @param courseId ID
     * @param assignmentId ID
     * @returns any success
     * @throws ApiError
     */
    public bulkSelectProvisionalGrades(
        courseId: string,
        assignmentId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/bulk_select',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
            },
        });
    }

    /**
     * Publish provisional grades for an assignment
     * Publish the selected provisional grade for all submissions to an assignment.
     * Use the "Select provisional grade" endpoint to choose which provisional grade to publish
     * for a particular submission.
     *
     * Students not in the moderation set will have their one and only provisional grade published.
     *
     * WARNING: This is irreversible. This will overwrite existing grades in the gradebook.
     * @param courseId ID
     * @param assignmentId ID
     * @returns any success
     * @throws ApiError
     */
    public publishProvisionalGradesForAssignment(
        courseId: string,
        assignmentId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/publish',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
            },
        });
    }

}
