/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Enrollment } from '../models/Enrollment';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EnrollmentsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List enrollments
     * Depending on the URL given, return a paginated list of either (1) all of
     * the enrollments in a course, (2) all of the enrollments in a section or (3)
     * all of a user's enrollments. This includes student, teacher, TA, and
     * observer enrollments.
     *
     * If a user has multiple enrollments in a context (e.g. as a teacher
     * and a student or in multiple course sections), each enrollment will be
     * listed separately.
     *
     * note: Currently, only a root level admin user can return other users' enrollments.
     * A user can, however, return his/her own enrollments.
     *
     * Enrollments scoped to a course context will include inactive states by default
     * if the caller has account admin authorization and the state[] parameter is omitted.
     * @param userId Filter by user_id (only valid for course or section enrollment
     * queries). If set to the current user's id, this is a way to
     * determine if the user has any enrollments in the course or section,
     * independent of whether the user has permission to view other people
     * on the roster.
     * @param type A list of enrollment types to return. Accepted values are
     * 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment',
     * 'DesignerEnrollment', and 'ObserverEnrollment.' If omitted, all enrollment
     * types are returned. This argument is ignored if `role` is given.
     * @param role A list of enrollment roles to return. Accepted values include course-level
     * roles created by the {api:RoleOverridesController#add_role Add Role API}
     * as well as the base enrollment types accepted by the `type` argument above.
     * @param state Filter by enrollment state. If omitted, 'active' and 'invited' enrollments
     * are returned. The following synthetic states are supported only when
     * querying a user's enrollments (either via user_id argument or via user
     * enrollments endpoint): +current_and_invited+, +current_and_future+, +current_and_concluded+
     * @param include Array of additional information to include on the enrollment or user records.
     * "avatar_url" and "group_ids" will be returned on the user record. If "current_points"
     * is specified, the fields "current_points" and (if the caller has
     * permissions to manage grades) "unposted_current_points" will be included
     * in the "grades" hash for student enrollments.
     * @param gradingPeriodId Return grades for the given grading_period.  If this parameter is not
     * specified, the returned grades will be for the whole course.
     * @param enrollmentTermId Returns only enrollments for the specified enrollment term. This parameter
     * only applies to the user enrollments path. May pass the ID from the
     * enrollment terms api or the SIS id prepended with 'sis_term_id:'.
     * @param sisAccountId Returns only enrollments for the specified SIS account ID(s). Does not
     * look into sub_accounts. May pass in array or string.
     * @param sisCourseId Returns only enrollments matching the specified SIS course ID(s).
     * May pass in array or string.
     * @param sisSectionId Returns only section enrollments matching the specified SIS section ID(s).
     * May pass in array or string.
     * @param sisUserId Returns only enrollments for the specified SIS user ID(s). May pass in
     * array or string.
     * @param createdForSisId If sis_user_id is present and created_for_sis_id is true, Returns only
     * enrollments for the specified SIS ID(s).
     * If a user has two sis_id's, one enrollment may be created using one of the
     * two ids. This would limit the enrollments returned from the endpoint to
     * enrollments that were created from a sis_import with that sis_user_id
     * @returns Enrollment success
     * @throws ApiError
     */
    public listEnrollmentsUsers(
        userId: string,
        type?: Array<string>,
        role?: Array<string>,
        state?: 'active' | 'invited' | 'creation_pending' | 'deleted' | 'rejected' | 'completed' | 'inactive' | 'current_and_invited' | 'current_and_future' | 'current_and_concluded',
        include?: 'avatar_url' | 'group_ids' | 'locked' | 'observed_users' | 'can_be_removed' | 'uuid' | 'current_points',
        gradingPeriodId?: number,
        enrollmentTermId?: number,
        sisAccountId?: Array<string>,
        sisCourseId?: Array<string>,
        sisSectionId?: Array<string>,
        sisUserId?: Array<string>,
        createdForSisId?: Array<boolean>,
    ): CancelablePromise<Array<Enrollment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}/enrollments',
            path: {
                'user_id': userId,
            },
            query: {
                'type': type,
                'role': role,
                'state': state,
                'include': include,
                'grading_period_id': gradingPeriodId,
                'enrollment_term_id': enrollmentTermId,
                'sis_account_id': sisAccountId,
                'sis_course_id': sisCourseId,
                'sis_section_id': sisSectionId,
                'sis_user_id': sisUserId,
                'created_for_sis_id': createdForSisId,
            },
        });
    }

    /**
     * Conclude, deactivate, or delete an enrollment
     * Conclude, deactivate, or delete an enrollment. If the +task+ argument isn't given, the enrollment
     * will be concluded.
     * @param courseId ID
     * @param id ID
     * @param task The action to take on the enrollment.
     * When inactive, a user will still appear in the course roster to admins, but be unable to participate.
     * ("inactivate" and "deactivate" are equivalent tasks)
     * @returns Enrollment success
     * @throws ApiError
     */
    public concludeDeactivateOrDeleteEnrollment(
        courseId: string,
        id: string,
        task?: 'conclude' | 'delete' | 'inactivate' | 'deactivate',
    ): CancelablePromise<Enrollment> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/enrollments/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
            query: {
                'task': task,
            },
        });
    }

    /**
     * Accept Course Invitation
     * accepts a pending course invitation for the current user
     * @param courseId ID
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public acceptCourseInvitation(
        courseId: string,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/enrollments/{id}/accept',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

    /**
     * List enrollments
     * Depending on the URL given, return a paginated list of either (1) all of
     * the enrollments in a course, (2) all of the enrollments in a section or (3)
     * all of a user's enrollments. This includes student, teacher, TA, and
     * observer enrollments.
     *
     * If a user has multiple enrollments in a context (e.g. as a teacher
     * and a student or in multiple course sections), each enrollment will be
     * listed separately.
     *
     * note: Currently, only a root level admin user can return other users' enrollments.
     * A user can, however, return his/her own enrollments.
     *
     * Enrollments scoped to a course context will include inactive states by default
     * if the caller has account admin authorization and the state[] parameter is omitted.
     * @param courseId ID
     * @param type A list of enrollment types to return. Accepted values are
     * 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment',
     * 'DesignerEnrollment', and 'ObserverEnrollment.' If omitted, all enrollment
     * types are returned. This argument is ignored if `role` is given.
     * @param role A list of enrollment roles to return. Accepted values include course-level
     * roles created by the {api:RoleOverridesController#add_role Add Role API}
     * as well as the base enrollment types accepted by the `type` argument above.
     * @param state Filter by enrollment state. If omitted, 'active' and 'invited' enrollments
     * are returned. The following synthetic states are supported only when
     * querying a user's enrollments (either via user_id argument or via user
     * enrollments endpoint): +current_and_invited+, +current_and_future+, +current_and_concluded+
     * @param include Array of additional information to include on the enrollment or user records.
     * "avatar_url" and "group_ids" will be returned on the user record. If "current_points"
     * is specified, the fields "current_points" and (if the caller has
     * permissions to manage grades) "unposted_current_points" will be included
     * in the "grades" hash for student enrollments.
     * @param userId Filter by user_id (only valid for course or section enrollment
     * queries). If set to the current user's id, this is a way to
     * determine if the user has any enrollments in the course or section,
     * independent of whether the user has permission to view other people
     * on the roster.
     * @param gradingPeriodId Return grades for the given grading_period.  If this parameter is not
     * specified, the returned grades will be for the whole course.
     * @param enrollmentTermId Returns only enrollments for the specified enrollment term. This parameter
     * only applies to the user enrollments path. May pass the ID from the
     * enrollment terms api or the SIS id prepended with 'sis_term_id:'.
     * @param sisAccountId Returns only enrollments for the specified SIS account ID(s). Does not
     * look into sub_accounts. May pass in array or string.
     * @param sisCourseId Returns only enrollments matching the specified SIS course ID(s).
     * May pass in array or string.
     * @param sisSectionId Returns only section enrollments matching the specified SIS section ID(s).
     * May pass in array or string.
     * @param sisUserId Returns only enrollments for the specified SIS user ID(s). May pass in
     * array or string.
     * @param createdForSisId If sis_user_id is present and created_for_sis_id is true, Returns only
     * enrollments for the specified SIS ID(s).
     * If a user has two sis_id's, one enrollment may be created using one of the
     * two ids. This would limit the enrollments returned from the endpoint to
     * enrollments that were created from a sis_import with that sis_user_id
     * @returns Enrollment success
     * @throws ApiError
     */
    public listEnrollmentsCourses(
        courseId: string,
        type?: Array<string>,
        role?: Array<string>,
        state?: 'active' | 'invited' | 'creation_pending' | 'deleted' | 'rejected' | 'completed' | 'inactive' | 'current_and_invited' | 'current_and_future' | 'current_and_concluded',
        include?: 'avatar_url' | 'group_ids' | 'locked' | 'observed_users' | 'can_be_removed' | 'uuid' | 'current_points',
        userId?: string,
        gradingPeriodId?: number,
        enrollmentTermId?: number,
        sisAccountId?: Array<string>,
        sisCourseId?: Array<string>,
        sisSectionId?: Array<string>,
        sisUserId?: Array<string>,
        createdForSisId?: Array<boolean>,
    ): CancelablePromise<Array<Enrollment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/enrollments',
            path: {
                'course_id': courseId,
            },
            query: {
                'type': type,
                'role': role,
                'state': state,
                'include': include,
                'user_id': userId,
                'grading_period_id': gradingPeriodId,
                'enrollment_term_id': enrollmentTermId,
                'sis_account_id': sisAccountId,
                'sis_course_id': sisCourseId,
                'sis_section_id': sisSectionId,
                'sis_user_id': sisUserId,
                'created_for_sis_id': createdForSisId,
            },
        });
    }

    /**
     * Enroll a user
     * Create a new user enrollment for a course or section.
     * @param courseId ID
     * @param formData
     * @returns Enrollment success
     * @throws ApiError
     */
    public enrollUserCourses(
        courseId: string,
        formData: any,
    ): CancelablePromise<Enrollment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/enrollments',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Enrollment by ID
     * Get an Enrollment object by Enrollment ID
     * @param accountId ID
     * @param id The ID of the enrollment object
     * @returns Enrollment success
     * @throws ApiError
     */
    public enrollmentById(
        accountId: string,
        id: number,
    ): CancelablePromise<Enrollment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/enrollments/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

    /**
     * Reject Course Invitation
     * rejects a pending course invitation for the current user
     * @param courseId ID
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public rejectCourseInvitation(
        courseId: string,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/enrollments/{id}/reject',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

    /**
     * List enrollments
     * Depending on the URL given, return a paginated list of either (1) all of
     * the enrollments in a course, (2) all of the enrollments in a section or (3)
     * all of a user's enrollments. This includes student, teacher, TA, and
     * observer enrollments.
     *
     * If a user has multiple enrollments in a context (e.g. as a teacher
     * and a student or in multiple course sections), each enrollment will be
     * listed separately.
     *
     * note: Currently, only a root level admin user can return other users' enrollments.
     * A user can, however, return his/her own enrollments.
     *
     * Enrollments scoped to a course context will include inactive states by default
     * if the caller has account admin authorization and the state[] parameter is omitted.
     * @param sectionId ID
     * @param type A list of enrollment types to return. Accepted values are
     * 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment',
     * 'DesignerEnrollment', and 'ObserverEnrollment.' If omitted, all enrollment
     * types are returned. This argument is ignored if `role` is given.
     * @param role A list of enrollment roles to return. Accepted values include course-level
     * roles created by the {api:RoleOverridesController#add_role Add Role API}
     * as well as the base enrollment types accepted by the `type` argument above.
     * @param state Filter by enrollment state. If omitted, 'active' and 'invited' enrollments
     * are returned. The following synthetic states are supported only when
     * querying a user's enrollments (either via user_id argument or via user
     * enrollments endpoint): +current_and_invited+, +current_and_future+, +current_and_concluded+
     * @param include Array of additional information to include on the enrollment or user records.
     * "avatar_url" and "group_ids" will be returned on the user record. If "current_points"
     * is specified, the fields "current_points" and (if the caller has
     * permissions to manage grades) "unposted_current_points" will be included
     * in the "grades" hash for student enrollments.
     * @param userId Filter by user_id (only valid for course or section enrollment
     * queries). If set to the current user's id, this is a way to
     * determine if the user has any enrollments in the course or section,
     * independent of whether the user has permission to view other people
     * on the roster.
     * @param gradingPeriodId Return grades for the given grading_period.  If this parameter is not
     * specified, the returned grades will be for the whole course.
     * @param enrollmentTermId Returns only enrollments for the specified enrollment term. This parameter
     * only applies to the user enrollments path. May pass the ID from the
     * enrollment terms api or the SIS id prepended with 'sis_term_id:'.
     * @param sisAccountId Returns only enrollments for the specified SIS account ID(s). Does not
     * look into sub_accounts. May pass in array or string.
     * @param sisCourseId Returns only enrollments matching the specified SIS course ID(s).
     * May pass in array or string.
     * @param sisSectionId Returns only section enrollments matching the specified SIS section ID(s).
     * May pass in array or string.
     * @param sisUserId Returns only enrollments for the specified SIS user ID(s). May pass in
     * array or string.
     * @param createdForSisId If sis_user_id is present and created_for_sis_id is true, Returns only
     * enrollments for the specified SIS ID(s).
     * If a user has two sis_id's, one enrollment may be created using one of the
     * two ids. This would limit the enrollments returned from the endpoint to
     * enrollments that were created from a sis_import with that sis_user_id
     * @returns Enrollment success
     * @throws ApiError
     */
    public listEnrollmentsSections(
        sectionId: string,
        type?: Array<string>,
        role?: Array<string>,
        state?: 'active' | 'invited' | 'creation_pending' | 'deleted' | 'rejected' | 'completed' | 'inactive' | 'current_and_invited' | 'current_and_future' | 'current_and_concluded',
        include?: 'avatar_url' | 'group_ids' | 'locked' | 'observed_users' | 'can_be_removed' | 'uuid' | 'current_points',
        userId?: string,
        gradingPeriodId?: number,
        enrollmentTermId?: number,
        sisAccountId?: Array<string>,
        sisCourseId?: Array<string>,
        sisSectionId?: Array<string>,
        sisUserId?: Array<string>,
        createdForSisId?: Array<boolean>,
    ): CancelablePromise<Array<Enrollment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/sections/{section_id}/enrollments',
            path: {
                'section_id': sectionId,
            },
            query: {
                'type': type,
                'role': role,
                'state': state,
                'include': include,
                'user_id': userId,
                'grading_period_id': gradingPeriodId,
                'enrollment_term_id': enrollmentTermId,
                'sis_account_id': sisAccountId,
                'sis_course_id': sisCourseId,
                'sis_section_id': sisSectionId,
                'sis_user_id': sisUserId,
                'created_for_sis_id': createdForSisId,
            },
        });
    }

    /**
     * Enroll a user
     * Create a new user enrollment for a course or section.
     * @param sectionId ID
     * @param formData
     * @returns Enrollment success
     * @throws ApiError
     */
    public enrollUserSections(
        sectionId: string,
        formData: any,
    ): CancelablePromise<Enrollment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/sections/{section_id}/enrollments',
            path: {
                'section_id': sectionId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Adds last attended date to student enrollment in course
     * @param courseId ID
     * @param userId ID
     * @returns Enrollment success
     * @throws ApiError
     */
    public addsLastAttendedDateToStudentEnrollmentInCourse(
        courseId: string,
        userId: string,
    ): CancelablePromise<Enrollment> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/users/{user_id}/last_attended',
            path: {
                'course_id': courseId,
                'user_id': userId,
            },
        });
    }

    /**
     * Re-activate an enrollment
     * Activates an inactive enrollment
     * @param courseId ID
     * @param id ID
     * @returns Enrollment success
     * @throws ApiError
     */
    public reActivateEnrollment(
        courseId: string,
        id: string,
    ): CancelablePromise<Enrollment> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/enrollments/{id}/reactivate',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

}
