/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignmentGroup } from '../models/AssignmentGroup';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AssignmentGroupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List assignment groups
     * Returns the paginated list of assignment groups for the current context.
     * The returned groups are sorted by their position field.
     * @param courseId ID
     * @param include Associations to include with the group. "discussion_topic", "all_dates", "can_edit",
     * "assignment_visibility" & "submission" are only valid if "assignments" is also included.
     * "score_statistics" requires that the "assignments" and "submission" options are included.
     * The "assignment_visibility" option additionally requires that the Differentiated Assignments course feature be turned on.
     * If "observed_users" is passed along with "assignments" and "submission", submissions for observed users will also be included as an array.
     * @param assignmentIds If "assignments" are included, optionally return only assignments having their ID in this array. This argument may also be passed as
     * a comma separated string.
     * @param excludeAssignmentSubmissionTypes If "assignments" are included, those with the specified submission types
     * will be excluded from the assignment groups.
     * @param overrideAssignmentDates Apply assignment overrides for each assignment, defaults to true.
     * @param gradingPeriodId The id of the grading period in which assignment groups are being requested
     * (Requires grading periods to exist.)
     * @param scopeAssignmentsToStudent If true, all assignments returned will apply to the current user in the
     * specified grading period. If assignments apply to other students in the
     * specified grading period, but not the current user, they will not be
     * returned. (Requires the grading_period_id argument and grading periods to
     * exist. In addition, the current user must be a student.)
     * @returns AssignmentGroup success
     * @throws ApiError
     */
    public listAssignmentGroups(
        courseId: string,
        include?: 'assignments' | 'discussion_topic' | 'all_dates' | 'assignment_visibility' | 'overrides' | 'submission' | 'observed_users' | 'can_edit' | 'score_statistics',
        assignmentIds?: Array<string>,
        excludeAssignmentSubmissionTypes?: 'online_quiz' | 'discussion_topic' | 'wiki_page' | 'external_tool',
        overrideAssignmentDates?: boolean,
        gradingPeriodId?: number,
        scopeAssignmentsToStudent?: boolean,
    ): CancelablePromise<Array<AssignmentGroup>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/assignment_groups',
            path: {
                'course_id': courseId,
            },
            query: {
                'include': include,
                'assignment_ids': assignmentIds,
                'exclude_assignment_submission_types': excludeAssignmentSubmissionTypes,
                'override_assignment_dates': overrideAssignmentDates,
                'grading_period_id': gradingPeriodId,
                'scope_assignments_to_student': scopeAssignmentsToStudent,
            },
        });
    }

    /**
     * Create an Assignment Group
     * Create a new assignment group for this course.
     * @param courseId ID
     * @param formData
     * @returns AssignmentGroup success
     * @throws ApiError
     */
    public createAssignmentGroup(
        courseId: string,
        formData?: any,
    ): CancelablePromise<AssignmentGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/assignment_groups',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get an Assignment Group
     * Returns the assignment group with the given id.
     * @param courseId ID
     * @param assignmentGroupId ID
     * @param include Associations to include with the group. "discussion_topic" and "assignment_visibility" and "submission"
     * are only valid if "assignments" is also included. "score_statistics" is only valid if "submission" and
     * "assignments" are also included. The "assignment_visibility" option additionally requires that the Differentiated Assignments
     * course feature be turned on.
     * @param overrideAssignmentDates Apply assignment overrides for each assignment, defaults to true.
     * @param gradingPeriodId The id of the grading period in which assignment groups are being requested
     * (Requires grading periods to exist on the account)
     * @returns AssignmentGroup success
     * @throws ApiError
     */
    public getAssignmentGroup(
        courseId: string,
        assignmentGroupId: string,
        include?: 'assignments' | 'discussion_topic' | 'assignment_visibility' | 'submission' | 'score_statistics',
        overrideAssignmentDates?: boolean,
        gradingPeriodId?: number,
    ): CancelablePromise<AssignmentGroup> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/assignment_groups/{assignment_group_id}',
            path: {
                'course_id': courseId,
                'assignment_group_id': assignmentGroupId,
            },
            query: {
                'include': include,
                'override_assignment_dates': overrideAssignmentDates,
                'grading_period_id': gradingPeriodId,
            },
        });
    }

    /**
     * Edit an Assignment Group
     * Modify an existing Assignment Group.
     * @param courseId ID
     * @param assignmentGroupId ID
     * @param formData
     * @returns AssignmentGroup success
     * @throws ApiError
     */
    public editAssignmentGroup(
        courseId: string,
        assignmentGroupId: string,
        formData?: any,
    ): CancelablePromise<AssignmentGroup> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/assignment_groups/{assignment_group_id}',
            path: {
                'course_id': courseId,
                'assignment_group_id': assignmentGroupId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Destroy an Assignment Group
     * Deletes the assignment group with the given id.
     * @param courseId ID
     * @param assignmentGroupId ID
     * @param moveAssignmentsTo The ID of an active Assignment Group to which the assignments that are
     * currently assigned to the destroyed Assignment Group will be assigned.
     * NOTE: If this argument is not provided, any assignments in this Assignment
     * Group will be deleted.
     * @returns AssignmentGroup success
     * @throws ApiError
     */
    public destroyAssignmentGroup(
        courseId: string,
        assignmentGroupId: string,
        moveAssignmentsTo?: number,
    ): CancelablePromise<AssignmentGroup> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/assignment_groups/{assignment_group_id}',
            path: {
                'course_id': courseId,
                'assignment_group_id': assignmentGroupId,
            },
            query: {
                'move_assignments_to': moveAssignmentsTo,
            },
        });
    }

}
