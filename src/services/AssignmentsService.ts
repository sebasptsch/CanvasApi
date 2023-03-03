/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Assignment } from '../models/Assignment';
import type { AssignmentOverride } from '../models/AssignmentOverride';
import type { Progress } from '../models/Progress';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AssignmentsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Redirect to the assignment override for a group
     * Responds with a redirect to the override for the given group, if any
     * (404 otherwise).
     * @param groupId ID
     * @param assignmentId ID
     * @returns any success
     * @throws ApiError
     */
    public redirectToAssignmentOverrideForGroup(
        groupId: string,
        assignmentId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/groups/{group_id}/assignments/{assignment_id}/override',
            path: {
                'group_id': groupId,
                'assignment_id': assignmentId,
            },
        });
    }

    /**
     * Bulk update assignment dates
     * Update due dates and availability dates for multiple assignments in a course.
     *
     * Accepts a JSON array of objects containing two keys each: +id+, the assignment id,
     * and +all_dates+, an array of +AssignmentDate+ structures containing the base and/or override
     * dates for the assignment, as returned from the {api:AssignmentsApiController#index List assignments}
     * endpoint with +include[]=all_dates+.
     *
     * This endpoint cannot create or destroy assignment overrides; any existing assignment overrides
     * that are not referenced in the arguments will be left alone. If an override is given, any dates
     * that are not supplied with it will be defaulted. To clear a date, specify null explicitly.
     *
     * All referenced assignments will be validated before any are saved. A list of errors will
     * be returned if any provided dates are invalid, and no changes will be saved.
     *
     * The bulk update is performed in a background job, use the {api:ProgressController#show Progress API}
     * to check its status.
     * @param courseId ID
     * @returns Progress success
     * @throws ApiError
     */
    public bulkUpdateAssignmentDates(
        courseId: string,
    ): CancelablePromise<Progress> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/assignments/bulk_update',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Get a single assignment override
     * Returns details of the the override with the given id.
     * @param courseId ID
     * @param assignmentId ID
     * @param id ID
     * @returns AssignmentOverride success
     * @throws ApiError
     */
    public getSingleAssignmentOverride(
        courseId: string,
        assignmentId: string,
        id: string,
    ): CancelablePromise<AssignmentOverride> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id}',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
                'id': id,
            },
        });
    }

    /**
     * Update an assignment override
     * All current overridden values must be supplied if they are to be retained;
     * e.g. if due_at was overridden, but this PUT omits a value for due_at,
     * due_at will no longer be overridden. If the override is adhoc and
     * student_ids is not supplied, the target override set is unchanged. Target
     * override sets cannot be changed for group or section overrides.
     * @param courseId ID
     * @param assignmentId ID
     * @param id ID
     * @param formData
     * @returns AssignmentOverride success
     * @throws ApiError
     */
    public updateAssignmentOverride(
        courseId: string,
        assignmentId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<AssignmentOverride> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id}',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete an assignment override
     * Deletes an override and returns its former details.
     * @param courseId ID
     * @param assignmentId ID
     * @param id ID
     * @returns AssignmentOverride success
     * @throws ApiError
     */
    public deleteAssignmentOverride(
        courseId: string,
        assignmentId: string,
        id: string,
    ): CancelablePromise<AssignmentOverride> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id}',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
                'id': id,
            },
        });
    }

    /**
     * Duplicate assignnment
     * Duplicate an assignment and return a json based on result_type argument.
     * @param courseId ID
     * @param assignmentId ID
     * @param formData
     * @returns Assignment success
     * @throws ApiError
     */
    public duplicateAssignnment(
        courseId: string,
        assignmentId: string,
        formData?: any,
    ): CancelablePromise<Assignment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/assignments/{assignment_id}/duplicate',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List assignments
     * Returns the paginated list of assignments for the current course or assignment group.
     * @param courseId ID
     * @param assignmentGroupId ID
     * @param include Optional information to include with each assignment:
     * submission:: The current user's current +Submission+
     * assignment_visibility:: An array of ids of students who can see the assignment
     * all_dates:: An array of +AssignmentDate+ structures, one for each override, and also a +base+ if the assignment has an "Everyone" / "Everyone Else" date
     * overrides:: An array of +AssignmentOverride+ structures
     * observed_users:: An array of submissions for observed users
     * can_edit:: an extra Boolean value will be included with each +Assignment+ (and +AssignmentDate+ if +all_dates+ is supplied) to indicate whether the caller can edit the assignment or date. Moderated grading and closed grading periods may restrict a user's ability to edit an assignment.
     * score_statistics:: An object containing min, max, and mean score on this assignment. This will not be included for students if there are less than 5 graded assignments or if disabled by the instructor. Only valid if 'submission' is also included.
     * @param searchTerm The partial title of the assignments to match and return.
     * @param overrideAssignmentDates Apply assignment overrides for each assignment, defaults to true.
     * @param needsGradingCountBySection Split up "needs_grading_count" by sections into the "needs_grading_count_by_section" key, defaults to false
     * @param bucket If included, only return certain assignments depending on due date and submission status.
     * @param assignmentIds if set, return only assignments specified
     * @param orderBy Determines the order of the assignments. Defaults to "position".
     * @param postToSis Return only assignments that have post_to_sis set or not set.
     * @returns Assignment success
     * @throws ApiError
     */
    public listAssignmentsAssignmentGroups(
        courseId: string,
        assignmentGroupId: string,
        include?: 'submission' | 'assignment_visibility' | 'all_dates' | 'overrides' | 'observed_users' | 'can_edit' | 'score_statistics',
        searchTerm?: string,
        overrideAssignmentDates?: boolean,
        needsGradingCountBySection?: boolean,
        bucket?: 'past' | 'overdue' | 'undated' | 'ungraded' | 'unsubmitted' | 'upcoming' | 'future',
        assignmentIds?: Array<string>,
        orderBy?: 'position' | 'name' | 'due_at',
        postToSis?: boolean,
    ): CancelablePromise<Array<Assignment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/assignment_groups/{assignment_group_id}/assignments',
            path: {
                'course_id': courseId,
                'assignment_group_id': assignmentGroupId,
            },
            query: {
                'include': include,
                'search_term': searchTerm,
                'override_assignment_dates': overrideAssignmentDates,
                'needs_grading_count_by_section': needsGradingCountBySection,
                'bucket': bucket,
                'assignment_ids': assignmentIds,
                'order_by': orderBy,
                'post_to_sis': postToSis,
            },
        });
    }

    /**
     * List assignments for user
     * Returns the paginated list of assignments for the specified user if the current user has rights to view.
     * See {api:AssignmentsApiController#index List assignments} for valid arguments.
     * @param userId ID
     * @param courseId ID
     * @returns any success
     * @throws ApiError
     */
    public listAssignmentsForUser(
        userId: string,
        courseId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}/courses/{course_id}/assignments',
            path: {
                'user_id': userId,
                'course_id': courseId,
            },
        });
    }

    /**
     * Redirect to the assignment override for a section
     * Responds with a redirect to the override for the given section, if any
     * (404 otherwise).
     * @param courseSectionId ID
     * @param assignmentId ID
     * @returns any success
     * @throws ApiError
     */
    public redirectToAssignmentOverrideForSection(
        courseSectionId: string,
        assignmentId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/sections/{course_section_id}/assignments/{assignment_id}/override',
            path: {
                'course_section_id': courseSectionId,
                'assignment_id': assignmentId,
            },
        });
    }

    /**
     * Batch retrieve overrides in a course
     * Returns a list of specified overrides in this course, providing
     * they target sections/groups/students visible to the current user.
     * Returns null elements in the list for requests that were not found.
     * @param courseId ID
     * @param assignmentOverridesId Ids of overrides to retrieve
     * @param assignmentOverridesAssignmentId Ids of assignments for each override
     * @returns AssignmentOverride success
     * @throws ApiError
     */
    public batchRetrieveOverridesInCourse(
        courseId: string,
        assignmentOverridesId: Array<string>,
        assignmentOverridesAssignmentId: Array<string>,
    ): CancelablePromise<Array<AssignmentOverride>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/assignments/overrides',
            path: {
                'course_id': courseId,
            },
            query: {
                'assignment_overrides[id]': assignmentOverridesId,
                'assignment_overrides[assignment_id]': assignmentOverridesAssignmentId,
            },
        });
    }

    /**
     * Batch update overrides in a course
     * Updates a list of specified overrides for each assignment.  Handles overrides
     * in a transaction, so either all updates are applied or none.
     * See {api:AssignmentOverridesController#update Update an assignment override} for
     * available attributes.
     *
     * All current overridden values must be supplied if they are to be retained;
     * e.g. if due_at was overridden, but this PUT omits a value for due_at,
     * due_at will no longer be overridden. If the override is adhoc and
     * student_ids is not supplied, the target override set is unchanged. Target
     * override sets cannot be changed for group or section overrides.
     *
     * Errors are reported in an errors attribute, an array of errors corresponding
     * to inputs.  Global errors will be reported as a single element errors array
     * @param courseId ID
     * @param formData
     * @returns AssignmentOverride success
     * @throws ApiError
     */
    public batchUpdateOverridesInCourse(
        courseId: string,
        formData: any,
    ): CancelablePromise<Array<AssignmentOverride>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/assignments/overrides',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Batch create overrides in a course
     * Creates the specified overrides for each assignment.  Handles creation in a
     * transaction, so all records are created or none are.
     *
     * One of student_ids, group_id, or course_section_id must be present. At most
     * one should be present; if multiple are present only the most specific
     * (student_ids first, then group_id, then course_section_id) is used and any
     * others are ignored.
     *
     * Errors are reported in an errors attribute, an array of errors corresponding
     * to inputs.  Global errors will be reported as a single element errors array
     * @param courseId ID
     * @param formData
     * @returns AssignmentOverride success
     * @throws ApiError
     */
    public batchCreateOverridesInCourse(
        courseId: string,
        formData: any,
    ): CancelablePromise<Array<AssignmentOverride>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/assignments/overrides',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get a single assignment
     * Returns the assignment with the given id.
     * @param courseId ID
     * @param id ID
     * @param include Associations to include with the assignment. The "assignment_visibility" option
     * requires that the Differentiated Assignments course feature be turned on. If
     * "observed_users" is passed, submissions for observed users will also be included.
     * For "score_statistics" to be included, the "submission" option must also be set.
     * @param overrideAssignmentDates Apply assignment overrides to the assignment, defaults to true.
     * @param needsGradingCountBySection Split up "needs_grading_count" by sections into the "needs_grading_count_by_section" key, defaults to false
     * @param allDates All dates associated with the assignment, if applicable
     * @returns Assignment success
     * @throws ApiError
     */
    public getSingleAssignment(
        courseId: string,
        id: string,
        include?: 'submission' | 'assignment_visibility' | 'overrides' | 'observed_users' | 'can_edit' | 'score_statistics',
        overrideAssignmentDates?: boolean,
        needsGradingCountBySection?: boolean,
        allDates?: boolean,
    ): CancelablePromise<Assignment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/assignments/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
            query: {
                'include': include,
                'override_assignment_dates': overrideAssignmentDates,
                'needs_grading_count_by_section': needsGradingCountBySection,
                'all_dates': allDates,
            },
        });
    }

    /**
     * Edit an assignment
     * Modify an existing assignment.
     * @param courseId ID
     * @param id ID
     * @param formData
     * @returns Assignment success
     * @throws ApiError
     */
    public editAssignment(
        courseId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<Assignment> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/assignments/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete an assignment
     * Delete the given assignment.
     * @param courseId ID
     * @param id ID
     * @returns Assignment success
     * @throws ApiError
     */
    public deleteAssignment(
        courseId: string,
        id: string,
    ): CancelablePromise<Assignment> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/assignments/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

    /**
     * List assignments
     * Returns the paginated list of assignments for the current course or assignment group.
     * @param courseId ID
     * @param include Optional information to include with each assignment:
     * submission:: The current user's current +Submission+
     * assignment_visibility:: An array of ids of students who can see the assignment
     * all_dates:: An array of +AssignmentDate+ structures, one for each override, and also a +base+ if the assignment has an "Everyone" / "Everyone Else" date
     * overrides:: An array of +AssignmentOverride+ structures
     * observed_users:: An array of submissions for observed users
     * can_edit:: an extra Boolean value will be included with each +Assignment+ (and +AssignmentDate+ if +all_dates+ is supplied) to indicate whether the caller can edit the assignment or date. Moderated grading and closed grading periods may restrict a user's ability to edit an assignment.
     * score_statistics:: An object containing min, max, and mean score on this assignment. This will not be included for students if there are less than 5 graded assignments or if disabled by the instructor. Only valid if 'submission' is also included.
     * @param searchTerm The partial title of the assignments to match and return.
     * @param overrideAssignmentDates Apply assignment overrides for each assignment, defaults to true.
     * @param needsGradingCountBySection Split up "needs_grading_count" by sections into the "needs_grading_count_by_section" key, defaults to false
     * @param bucket If included, only return certain assignments depending on due date and submission status.
     * @param assignmentIds if set, return only assignments specified
     * @param orderBy Determines the order of the assignments. Defaults to "position".
     * @param postToSis Return only assignments that have post_to_sis set or not set.
     * @returns Assignment success
     * @throws ApiError
     */
    public listAssignmentsAssignments(
        courseId: string,
        include?: 'submission' | 'assignment_visibility' | 'all_dates' | 'overrides' | 'observed_users' | 'can_edit' | 'score_statistics',
        searchTerm?: string,
        overrideAssignmentDates?: boolean,
        needsGradingCountBySection?: boolean,
        bucket?: 'past' | 'overdue' | 'undated' | 'ungraded' | 'unsubmitted' | 'upcoming' | 'future',
        assignmentIds?: Array<string>,
        orderBy?: 'position' | 'name' | 'due_at',
        postToSis?: boolean,
    ): CancelablePromise<Array<Assignment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/assignments',
            path: {
                'course_id': courseId,
            },
            query: {
                'include': include,
                'search_term': searchTerm,
                'override_assignment_dates': overrideAssignmentDates,
                'needs_grading_count_by_section': needsGradingCountBySection,
                'bucket': bucket,
                'assignment_ids': assignmentIds,
                'order_by': orderBy,
                'post_to_sis': postToSis,
            },
        });
    }

    /**
     * Create an assignment
     * Create a new assignment for this course. The assignment is created in the
     * active state.
     * @param courseId ID
     * @param formData
     * @returns Assignment success
     * @throws ApiError
     */
    public createAssignment(
        courseId: string,
        formData: any,
    ): CancelablePromise<Assignment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/assignments',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List assignment overrides
     * Returns the paginated list of overrides for this assignment that target
     * sections/groups/students visible to the current user.
     * @param courseId ID
     * @param assignmentId ID
     * @returns AssignmentOverride success
     * @throws ApiError
     */
    public listAssignmentOverrides(
        courseId: string,
        assignmentId: string,
    ): CancelablePromise<Array<AssignmentOverride>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/assignments/{assignment_id}/overrides',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
            },
        });
    }

    /**
     * Create an assignment override
     * One of student_ids, group_id, or course_section_id must be present. At most
     * one should be present; if multiple are present only the most specific
     * (student_ids first, then group_id, then course_section_id) is used and any
     * others are ignored.
     * @param courseId ID
     * @param assignmentId ID
     * @param formData
     * @returns AssignmentOverride success
     * @throws ApiError
     */
    public createAssignmentOverride(
        courseId: string,
        assignmentId: string,
        formData?: any,
    ): CancelablePromise<AssignmentOverride> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/assignments/{assignment_id}/overrides',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
