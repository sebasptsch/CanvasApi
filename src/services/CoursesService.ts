/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Course } from '../models/Course';
import type { CourseProgress } from '../models/CourseProgress';
import type { Progress } from '../models/Progress';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CoursesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Update courses
     * Update multiple courses in an account.  Operates asynchronously; use the {api:ProgressController#show progress endpoint}
     * to query the status of an operation.
     * @param accountId ID
     * @param formData
     * @returns Progress success
     * @throws ApiError
     */
    public updateCourses(
        accountId: string,
        formData: any,
    ): CancelablePromise<Progress> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/accounts/{account_id}/courses',
            path: {
                'account_id': accountId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Create a new course
     * Create a new course
     * @param accountId ID
     * @param formData
     * @returns Course success
     * @throws ApiError
     */
    public createNewCourse(
        accountId: string,
        formData?: any,
    ): CancelablePromise<Course> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/accounts/{account_id}/courses',
            path: {
                'account_id': accountId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List courses for a user
     * Returns a paginated list of active courses for this user. To view the course list for a user other than yourself, you must be either an observer of that user or an administrator.
     * @param userId ID
     * @param include - "needs_grading_count": Optional information to include with each Course.
     * When needs_grading_count is given, and the current user has grading
     * rights, the total number of submissions needing grading for all
     * assignments is returned.
     * - "syllabus_body": Optional information to include with each Course.
     * When syllabus_body is given the user-generated html for the course
     * syllabus is returned.
     * - "public_description": Optional information to include with each Course.
     * When public_description is given the user-generated text for the course
     * public description is returned.
     * - "total_scores": Optional information to include with each Course.
     * When total_scores is given, any student enrollments will also
     * include the fields 'computed_current_score', 'computed_final_score',
     * 'computed_current_grade', and 'computed_final_grade' (see Enrollment
     * documentation for more information on these fields). This argument
     * is ignored if the course is configured to hide final grades.
     * - "current_grading_period_scores": Optional information to include with
     * each Course. When current_grading_period_scores is given and total_scores
     * is given, any student enrollments will also include the fields
     * 'has_grading_periods',
     * 'totals_for_all_grading_periods_option', 'current_grading_period_title',
     * 'current_grading_period_id', current_period_computed_current_score',
     * 'current_period_computed_final_score',
     * 'current_period_computed_current_grade', and
     * 'current_period_computed_final_grade', as well as (if the user has permission)
     * 'current_period_unposted_current_score',
     * 'current_period_unposted_final_score',
     * 'current_period_unposted_current_grade', and
     * 'current_period_unposted_final_grade' (see Enrollment documentation for
     * more information on these fields). In addition, when this argument is
     * passed, the course will have a 'has_grading_periods' attribute
     * on it. This argument is ignored if the course is configured to hide final
     * grades or if the total_scores argument is not included.
     * - "grading_periods": Optional information to include with each Course. When
     * grading_periods is given, a list of the grading periods associated with
     * each course is returned.
     * - "term": Optional information to include with each Course. When
     * term is given, the information for the enrollment term for each course
     * is returned.
     * - "account": Optional information to include with each Course. When
     * account is given, the account json for each course is returned.
     * - "course_progress": Optional information to include with each Course.
     * When course_progress is given, each course will include a
     * 'course_progress' object with the fields: 'requirement_count', an integer
     * specifying the total number of requirements in the course,
     * 'requirement_completed_count', an integer specifying the total number of
     * requirements in this course that have been completed, and
     * 'next_requirement_url', a string url to the next requirement item, and
     * 'completed_at', the date the course was completed (null if incomplete).
     * 'next_requirement_url' will be null if all requirements have been
     * completed or the current module does not require sequential progress.
     * "course_progress" will return an error message if the course is not
     * module based or the user is not enrolled as a student in the course.
     * - "sections": Section enrollment information to include with each Course.
     * Returns an array of hashes containing the section ID (id), section name
     * (name), start and end dates (start_at, end_at), as well as the enrollment
     * type (enrollment_role, e.g. 'StudentEnrollment').
     * - "storage_quota_used_mb": The amount of storage space used by the files in this course
     * - "total_students": Optional information to include with each Course.
     * Returns an integer for the total amount of active and invited students.
     * - "passback_status": Include the grade passback_status
     * - "favorites": Optional information to include with each Course.
     * Indicates if the user has marked the course as a favorite course.
     * - "teachers": Teacher information to include with each Course.
     * Returns an array of hashes containing the {api:Users:UserDisplay UserDisplay} information
     * for each teacher in the course.
     * - "observed_users": Optional information to include with each Course.
     * Will include data for observed users if the current user has an
     * observer enrollment.
     * - "tabs": Optional information to include with each Course.
     * Will include the list of tabs configured for each course.  See the
     * {api:TabsController#index List available tabs API} for more information.
     * - "course_image": Optional information to include with each Course. Returns course
     * image url if a course image has been set.
     * - "banner_image": Optional information to include with each Course. Returns course
     * banner image url if the course is a Canvas for Elementary subject and a banner
     * image has been set.
     * - "concluded": Optional information to include with each Course. Indicates whether
     * the course has been concluded, taking course and term dates into account.
     * @param state If set, only return courses that are in the given state(s).
     * By default, "available" is returned for students and observers, and
     * anything except "deleted", for all other enrollment types
     * @param enrollmentState When set, only return courses where the user has an enrollment with the given state.
     * This will respect section/course/term date overrides.
     * @param homeroom If set, only return homeroom courses.
     * @returns Course success
     * @throws ApiError
     */
    public listCoursesForUser(
        userId: string,
        include?: 'needs_grading_count' | 'syllabus_body' | 'public_description' | 'total_scores' | 'current_grading_period_scores' | 'grading_periods' | 'term' | 'account' | 'course_progress' | 'sections' | 'storage_quota_used_mb' | 'total_students' | 'passback_status' | 'favorites' | 'teachers' | 'observed_users' | 'course_image' | 'banner_image' | 'concluded',
        state?: 'unpublished' | 'available' | 'completed' | 'deleted',
        enrollmentState?: 'active' | 'invited_or_pending' | 'completed',
        homeroom?: boolean,
    ): CancelablePromise<Array<Course>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}/courses',
            path: {
                'user_id': userId,
            },
            query: {
                'include': include,
                'state': state,
                'enrollment_state': enrollmentState,
                'homeroom': homeroom,
            },
        });
    }

    /**
     * Reset a course
     * Deletes the current course, and creates a new equivalent course with
     * no content, but all sections and users moved over.
     * @param courseId ID
     * @returns Course success
     * @throws ApiError
     */
    public resetCourse(
        courseId: string,
    ): CancelablePromise<Course> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/reset_content',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Get effective due dates
     * For each assignment in the course, returns each assigned student's ID
     * and their corresponding due date along with some grading period data.
     * Returns a collection with keys representing assignment IDs and values as a
     * collection containing keys representing student IDs and values representing
     * the student's effective due_at, the grading_period_id of which the due_at falls
     * in, and whether or not the grading period is closed (in_closed_grading_period)
     *
     * The list of assignment IDs for which effective student due dates are
     * requested. If not provided, all assignments in the course will be used.
     * @param courseId ID
     * @param assignmentIds no description
     * @returns any success
     * @throws ApiError
     */
    public getEffectiveDueDates(
        courseId: string,
        assignmentIds?: Array<string>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/effective_due_dates',
            path: {
                'course_id': courseId,
            },
            query: {
                'assignment_ids': assignmentIds,
            },
        });
    }

    /**
     * Remove quiz migration alert
     * Remove alert about the limitations of quiz migrations that is displayed
     * to a user in a course
     *
     * you must be logged in to use this endpoint
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public removeQuizMigrationAlert(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{id}/dismiss_migration_limitation_message',
            path: {
                'id': id,
            },
        });
    }

    /**
     * List users in course
     * Returns the paginated list of users in this course. And optionally the user's enrollments in the course.
     * @param courseId ID
     * @param searchTerm The partial name or full ID of the users to match and return in the results list.
     * @param sort When set, sort the results of the search based on the given field.
     * @param enrollmentType When set, only return users where the user is enrolled as this type.
     * "student_view" implies include[]=test_student.
     * This argument is ignored if enrollment_role is given.
     * @param enrollmentRole Deprecated
     * When set, only return users enrolled with the specified course-level role.  This can be
     * a role created with the {api:RoleOverridesController#add_role Add Role API} or a
     * base role type of 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment',
     * 'ObserverEnrollment', or 'DesignerEnrollment'.
     * @param enrollmentRoleId When set, only return courses where the user is enrolled with the specified
     * course-level role.  This can be a role created with the
     * {api:RoleOverridesController#add_role Add Role API} or a built_in role id with type
     * 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment', 'ObserverEnrollment',
     * or 'DesignerEnrollment'.
     * @param include - "enrollments":
     * Optionally include with each Course the user's current and invited
     * enrollments. If the user is enrolled as a student, and the account has
     * permission to manage or view all grades, each enrollment will include a
     * 'grades' key with 'current_score', 'final_score', 'current_grade' and
     * 'final_grade' values.
     * - "locked": Optionally include whether an enrollment is locked.
     * - "avatar_url": Optionally include avatar_url.
     * - "bio": Optionally include each user's bio.
     * - "test_student": Optionally include the course's Test Student,
     * if present. Default is to not include Test Student.
     * - "custom_links": Optionally include plugin-supplied custom links for each student,
     * such as analytics information
     * - "current_grading_period_scores": if enrollments is included as
     * well as this directive, the scores returned in the enrollment
     * will be for the current grading period if there is one. A
     * 'grading_period_id' value will also be included with the
     * scores. if grading_period_id is nil there is no current grading
     * period and the score is a total score.
     * - "uuid": Optionally include the users uuid
     * @param userId If this parameter is given and it corresponds to a user in the course,
     * the +page+ parameter will be ignored and the page containing the specified user
     * will be returned instead.
     * @param userIds If included, the course users set will only include users with IDs
     * specified by the param. Note: this will not work in conjunction
     * with the "user_id" argument but multiple user_ids can be included.
     * @param enrollmentState When set, only return users where the enrollment workflow state is of one of the given types.
     * "active" and "invited" enrollments are returned by default.
     * @returns User success
     * @throws ApiError
     */
    public listUsersInCourseUsers(
        courseId: string,
        searchTerm?: string,
        sort?: 'username' | 'last_login' | 'email' | 'sis_id',
        enrollmentType?: 'teacher' | 'student' | 'student_view' | 'ta' | 'observer' | 'designer',
        enrollmentRole?: string,
        enrollmentRoleId?: number,
        include?: 'enrollments' | 'locked' | 'avatar_url' | 'test_student' | 'bio' | 'custom_links' | 'current_grading_period_scores' | 'uuid',
        userId?: string,
        userIds?: Array<number>,
        enrollmentState?: 'active' | 'invited' | 'rejected' | 'completed' | 'inactive',
    ): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/users',
            path: {
                'course_id': courseId,
            },
            query: {
                'search_term': searchTerm,
                'sort': sort,
                'enrollment_type': enrollmentType,
                'enrollment_role': enrollmentRole,
                'enrollment_role_id': enrollmentRoleId,
                'include': include,
                'user_id': userId,
                'user_ids': userIds,
                'enrollment_state': enrollmentState,
            },
        });
    }

    /**
     * Get single user
     * Return information on a single user.
     *
     * Accepts the same include[] parameters as the :users: action, and returns a
     * single user with the same fields as that action.
     * @param courseId ID
     * @param id ID
     * @returns User success
     * @throws ApiError
     */
    public getSingleUser(
        courseId: string,
        id: string,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/users/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

    /**
     * Get a single course
     * Return information on a single course.
     *
     * Accepts the same include[] parameters as the list action plus:
     * @param accountId ID
     * @param id ID
     * @param include - "all_courses": Also search recently deleted courses.
     * - "permissions": Include permissions the current user has
     * for the course.
     * - "observed_users": Include observed users in the enrollments
     * - "course_image": Include course image url if a course image has been set
     * - "banner_image": Include course banner image url if the course is a Canvas for
     * Elementary subject and a banner image has been set
     * - "concluded": Optional information to include with Course. Indicates whether
     * the course has been concluded, taking course and term dates into account.
     * @param teacherLimit The maximum number of teacher enrollments to show.
     * If the course contains more teachers than this, instead of giving the teacher
     * enrollments, the count of teachers will be given under a _teacher_count_ key.
     * @returns Course success
     * @throws ApiError
     */
    public getSingleCourseAccounts(
        accountId: string,
        id: string,
        include?: 'needs_grading_count' | 'syllabus_body' | 'public_description' | 'total_scores' | 'current_grading_period_scores' | 'term' | 'account' | 'course_progress' | 'sections' | 'storage_quota_used_mb' | 'total_students' | 'passback_status' | 'favorites' | 'teachers' | 'observed_users' | 'all_courses' | 'permissions' | 'course_image' | 'banner_image' | 'concluded',
        teacherLimit?: number,
    ): CancelablePromise<Course> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/courses/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
            query: {
                'include': include,
                'teacher_limit': teacherLimit,
            },
        });
    }

    /**
     * Get user progress
     * Return progress information for the user and course
     *
     * You can supply +self+ as the user_id to query your own progress in a course. To query another user's progress,
     * you must be a teacher in the course, an administrator, or a linked observer of the user.
     * @param courseId ID
     * @param userId ID
     * @returns CourseProgress success
     * @throws ApiError
     */
    public getUserProgress(
        courseId: string,
        userId: string,
    ): CancelablePromise<CourseProgress> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/users/{user_id}/progress',
            path: {
                'course_id': courseId,
                'user_id': userId,
            },
        });
    }

    /**
     * Search for content share users
     * Returns a paginated list of users you can share content with.  Requires the content share
     * feature and the user must have the manage content permission for the course.
     * @param courseId ID
     * @param searchTerm Term used to find users.  Will search available share users with the search term in their name.
     * @returns User success
     * @throws ApiError
     */
    public searchForContentShareUsers(
        courseId: string,
        searchTerm: string,
    ): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/content_share_users',
            path: {
                'course_id': courseId,
            },
            query: {
                'search_term': searchTerm,
            },
        });
    }

    /**
     * Preview processed html
     * Preview html content processed for this course
     * @param courseId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public previewProcessedHtml(
        courseId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/preview_html',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List recently logged in students
     * Returns the paginated list of users in this course, ordered by how recently they have
     * logged in. The records include the 'last_login' field which contains
     * a timestamp of the last time that user logged into canvas.  The querying
     * user must have the 'View usage reports' permission.
     * @param courseId ID
     * @returns User success
     * @throws ApiError
     */
    public listRecentlyLoggedInStudents(
        courseId: string,
    ): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/recent_students',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Get course copy status
     * DEPRECATED: Please use the {api:ContentMigrationsController#create Content Migrations API}
     *
     * Retrieve the status of a course copy
     * @param courseId ID
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public getCourseCopyStatus(
        courseId: string,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/course_copy/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

    /**
     * List users in course
     * Returns the paginated list of users in this course. And optionally the user's enrollments in the course.
     * @param courseId ID
     * @param searchTerm The partial name or full ID of the users to match and return in the results list.
     * @param sort When set, sort the results of the search based on the given field.
     * @param enrollmentType When set, only return users where the user is enrolled as this type.
     * "student_view" implies include[]=test_student.
     * This argument is ignored if enrollment_role is given.
     * @param enrollmentRole Deprecated
     * When set, only return users enrolled with the specified course-level role.  This can be
     * a role created with the {api:RoleOverridesController#add_role Add Role API} or a
     * base role type of 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment',
     * 'ObserverEnrollment', or 'DesignerEnrollment'.
     * @param enrollmentRoleId When set, only return courses where the user is enrolled with the specified
     * course-level role.  This can be a role created with the
     * {api:RoleOverridesController#add_role Add Role API} or a built_in role id with type
     * 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment', 'ObserverEnrollment',
     * or 'DesignerEnrollment'.
     * @param include - "enrollments":
     * Optionally include with each Course the user's current and invited
     * enrollments. If the user is enrolled as a student, and the account has
     * permission to manage or view all grades, each enrollment will include a
     * 'grades' key with 'current_score', 'final_score', 'current_grade' and
     * 'final_grade' values.
     * - "locked": Optionally include whether an enrollment is locked.
     * - "avatar_url": Optionally include avatar_url.
     * - "bio": Optionally include each user's bio.
     * - "test_student": Optionally include the course's Test Student,
     * if present. Default is to not include Test Student.
     * - "custom_links": Optionally include plugin-supplied custom links for each student,
     * such as analytics information
     * - "current_grading_period_scores": if enrollments is included as
     * well as this directive, the scores returned in the enrollment
     * will be for the current grading period if there is one. A
     * 'grading_period_id' value will also be included with the
     * scores. if grading_period_id is nil there is no current grading
     * period and the score is a total score.
     * - "uuid": Optionally include the users uuid
     * @param userId If this parameter is given and it corresponds to a user in the course,
     * the +page+ parameter will be ignored and the page containing the specified user
     * will be returned instead.
     * @param userIds If included, the course users set will only include users with IDs
     * specified by the param. Note: this will not work in conjunction
     * with the "user_id" argument but multiple user_ids can be included.
     * @param enrollmentState When set, only return users where the enrollment workflow state is of one of the given types.
     * "active" and "invited" enrollments are returned by default.
     * @returns User success
     * @throws ApiError
     */
    public listUsersInCourseSearchUsers(
        courseId: string,
        searchTerm?: string,
        sort?: 'username' | 'last_login' | 'email' | 'sis_id',
        enrollmentType?: 'teacher' | 'student' | 'student_view' | 'ta' | 'observer' | 'designer',
        enrollmentRole?: string,
        enrollmentRoleId?: number,
        include?: 'enrollments' | 'locked' | 'avatar_url' | 'test_student' | 'bio' | 'custom_links' | 'current_grading_period_scores' | 'uuid',
        userId?: string,
        userIds?: Array<number>,
        enrollmentState?: 'active' | 'invited' | 'rejected' | 'completed' | 'inactive',
    ): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/search_users',
            path: {
                'course_id': courseId,
            },
            query: {
                'search_term': searchTerm,
                'sort': sort,
                'enrollment_type': enrollmentType,
                'enrollment_role': enrollmentRole,
                'enrollment_role_id': enrollmentRoleId,
                'include': include,
                'user_id': userId,
                'user_ids': userIds,
                'enrollment_state': enrollmentState,
            },
        });
    }

    /**
     * Get bulk user progress
     * Returns progress information for all users enrolled in the given course.
     *
     * You must be a user who has permission to view all grades in the course (such as a teacher or administrator).
     * @param courseId ID
     * @returns any success
     * @throws ApiError
     */
    public getBulkUserProgress(
        courseId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/bulk_user_progress',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Course activity stream
     * Returns the current user's course-specific activity stream, paginated.
     *
     * For full documentation, see the API documentation for the user activity
     * stream, in the user api.
     * @param courseId ID
     * @returns any success
     * @throws ApiError
     */
    public courseActivityStream(
        courseId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/activity_stream',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Course TODO items
     * Returns the current user's course-specific todo items.
     *
     * For full documentation, see the API documentation for the user todo items, in the user api.
     * @param courseId ID
     * @returns any success
     * @throws ApiError
     */
    public courseTodoItems(
        courseId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/todo',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * List your courses
     * Returns the paginated list of active courses for the current user.
     * @param enrollmentType When set, only return courses where the user is enrolled as this type. For
     * example, set to "teacher" to return only courses where the user is
     * enrolled as a Teacher.  This argument is ignored if enrollment_role is given.
     * @param enrollmentRole Deprecated
     * When set, only return courses where the user is enrolled with the specified
     * course-level role.  This can be a role created with the
     * {api:RoleOverridesController#add_role Add Role API} or a base role type of
     * 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment', 'ObserverEnrollment',
     * or 'DesignerEnrollment'.
     * @param enrollmentRoleId When set, only return courses where the user is enrolled with the specified
     * course-level role.  This can be a role created with the
     * {api:RoleOverridesController#add_role Add Role API} or a built_in role type of
     * 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment', 'ObserverEnrollment',
     * or 'DesignerEnrollment'.
     * @param enrollmentState When set, only return courses where the user has an enrollment with the given state.
     * This will respect section/course/term date overrides.
     * @param excludeBlueprintCourses When set, only return courses that are not configured as blueprint courses.
     * @param include - "needs_grading_count": Optional information to include with each Course.
     * When needs_grading_count is given, and the current user has grading
     * rights, the total number of submissions needing grading for all
     * assignments is returned.
     * - "syllabus_body": Optional information to include with each Course.
     * When syllabus_body is given the user-generated html for the course
     * syllabus is returned.
     * - "public_description": Optional information to include with each Course.
     * When public_description is given the user-generated text for the course
     * public description is returned.
     * - "total_scores": Optional information to include with each Course.
     * When total_scores is given, any student enrollments will also
     * include the fields 'computed_current_score', 'computed_final_score',
     * 'computed_current_grade', and 'computed_final_grade', as well as (if
     * the user has permission) 'unposted_current_score',
     * 'unposted_final_score', 'unposted_current_grade', and
     * 'unposted_final_grade' (see Enrollment documentation for more
     * information on these fields). This argument is ignored if the course is
     * configured to hide final grades.
     * - "current_grading_period_scores": Optional information to include with
     * each Course. When current_grading_period_scores is given and total_scores
     * is given, any student enrollments will also include the fields
     * 'has_grading_periods',
     * 'totals_for_all_grading_periods_option', 'current_grading_period_title',
     * 'current_grading_period_id', current_period_computed_current_score',
     * 'current_period_computed_final_score',
     * 'current_period_computed_current_grade', and
     * 'current_period_computed_final_grade', as well as (if the user has permission)
     * 'current_period_unposted_current_score',
     * 'current_period_unposted_final_score',
     * 'current_period_unposted_current_grade', and
     * 'current_period_unposted_final_grade' (see Enrollment documentation for
     * more information on these fields). In addition, when this argument is
     * passed, the course will have a 'has_grading_periods' attribute
     * on it. This argument is ignored if the total_scores argument is not
     * included. If the course is configured to hide final grades, the
     * following fields are not returned:
     * 'totals_for_all_grading_periods_option',
     * 'current_period_computed_current_score',
     * 'current_period_computed_final_score',
     * 'current_period_computed_current_grade',
     * 'current_period_computed_final_grade',
     * 'current_period_unposted_current_score',
     * 'current_period_unposted_final_score',
     * 'current_period_unposted_current_grade', and
     * 'current_period_unposted_final_grade'
     * - "grading_periods": Optional information to include with each Course. When
     * grading_periods is given, a list of the grading periods associated with
     * each course is returned.
     * - "term": Optional information to include with each Course. When
     * term is given, the information for the enrollment term for each course
     * is returned.
     * - "account": Optional information to include with each Course. When
     * account is given, the account json for each course is returned.
     * - "course_progress": Optional information to include with each Course.
     * When course_progress is given, each course will include a
     * 'course_progress' object with the fields: 'requirement_count', an integer
     * specifying the total number of requirements in the course,
     * 'requirement_completed_count', an integer specifying the total number of
     * requirements in this course that have been completed, and
     * 'next_requirement_url', a string url to the next requirement item, and
     * 'completed_at', the date the course was completed (null if incomplete).
     * 'next_requirement_url' will be null if all requirements have been
     * completed or the current module does not require sequential progress.
     * "course_progress" will return an error message if the course is not
     * module based or the user is not enrolled as a student in the course.
     * - "sections": Section enrollment information to include with each Course.
     * Returns an array of hashes containing the section ID (id), section name
     * (name), start and end dates (start_at, end_at), as well as the enrollment
     * type (enrollment_role, e.g. 'StudentEnrollment').
     * - "storage_quota_used_mb": The amount of storage space used by the files in this course
     * - "total_students": Optional information to include with each Course.
     * Returns an integer for the total amount of active and invited students.
     * - "passback_status": Include the grade passback_status
     * - "favorites": Optional information to include with each Course.
     * Indicates if the user has marked the course as a favorite course.
     * - "teachers": Teacher information to include with each Course.
     * Returns an array of hashes containing the {api:Users:UserDisplay UserDisplay} information
     * for each teacher in the course.
     * - "observed_users": Optional information to include with each Course.
     * Will include data for observed users if the current user has an
     * observer enrollment.
     * - "tabs": Optional information to include with each Course.
     * Will include the list of tabs configured for each course.  See the
     * {api:TabsController#index List available tabs API} for more information.
     * - "course_image": Optional information to include with each Course. Returns course
     * image url if a course image has been set.
     * - "banner_image": Optional information to include with each Course. Returns course
     * banner image url if the course is a Canvas for Elementary subject and a banner
     * image has been set.
     * - "concluded": Optional information to include with each Course. Indicates whether
     * the course has been concluded, taking course and term dates into account.
     * @param state If set, only return courses that are in the given state(s).
     * By default, "available" is returned for students and observers, and
     * anything except "deleted", for all other enrollment types
     * @returns Course success
     * @throws ApiError
     */
    public listYourCourses(
        enrollmentType?: 'teacher' | 'student' | 'ta' | 'observer' | 'designer',
        enrollmentRole?: string,
        enrollmentRoleId?: number,
        enrollmentState?: 'active' | 'invited_or_pending' | 'completed',
        excludeBlueprintCourses?: boolean,
        include?: 'needs_grading_count' | 'syllabus_body' | 'public_description' | 'total_scores' | 'current_grading_period_scores' | 'grading_periods' | 'term' | 'account' | 'course_progress' | 'sections' | 'storage_quota_used_mb' | 'total_students' | 'passback_status' | 'favorites' | 'teachers' | 'observed_users' | 'course_image' | 'banner_image' | 'concluded',
        state?: 'unpublished' | 'available' | 'completed' | 'deleted',
    ): CancelablePromise<Array<Course>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses',
            query: {
                'enrollment_type': enrollmentType,
                'enrollment_role': enrollmentRole,
                'enrollment_role_id': enrollmentRoleId,
                'enrollment_state': enrollmentState,
                'exclude_blueprint_courses': excludeBlueprintCourses,
                'include': include,
                'state': state,
            },
        });
    }

    /**
     * Permissions
     * Returns permission information for the calling user in the given course.
     * See also the {api:AccountsController#permissions Account} and
     * {api:GroupsController#permissions Group} counterparts.
     * @param courseId ID
     * @param permissions List of permissions to check against the authenticated user.
     * Permission names are documented in the {api:RoleOverridesController#add_role Create a role} endpoint.
     * @returns any success
     * @throws ApiError
     */
    public permissions(
        courseId: string,
        permissions?: Array<string>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/permissions',
            path: {
                'course_id': courseId,
            },
            query: {
                'permissions': permissions,
            },
        });
    }

    /**
     * Course activity stream summary
     * Returns a summary of the current user's course-specific activity stream.
     *
     * For full documentation, see the API documentation for the user activity
     * stream summary, in the user api.
     * @param courseId ID
     * @returns any success
     * @throws ApiError
     */
    public courseActivityStreamSummary(
        courseId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/activity_stream/summary',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * List students
     * Returns the paginated list of students enrolled in this course.
     *
     * DEPRECATED: Please use the {api:CoursesController#users course users} endpoint
     * and pass "student" as the enrollment_type.
     * @param courseId ID
     * @returns User success
     * @throws ApiError
     */
    public listStudents(
        courseId: string,
    ): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/students',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Get course settings
     * Returns some of a course's settings.
     * @param courseId ID
     * @returns any success
     * @throws ApiError
     */
    public getCourseSettings(
        courseId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/settings',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Update course settings
     * Can update the following course settings:
     * @param courseId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateCourseSettings(
        courseId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/settings',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Return test student for course
     * Returns information for a test student in this course. Creates a test
     * student if one does not already exist for the course. The caller must have
     * permission to access the course's student view.
     * @param courseId ID
     * @returns User success
     * @throws ApiError
     */
    public returnTestStudentForCourse(
        courseId: string,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/student_view_student',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Get a single course
     * Return information on a single course.
     *
     * Accepts the same include[] parameters as the list action plus:
     * @param id ID
     * @param include - "all_courses": Also search recently deleted courses.
     * - "permissions": Include permissions the current user has
     * for the course.
     * - "observed_users": Include observed users in the enrollments
     * - "course_image": Include course image url if a course image has been set
     * - "banner_image": Include course banner image url if the course is a Canvas for
     * Elementary subject and a banner image has been set
     * - "concluded": Optional information to include with Course. Indicates whether
     * the course has been concluded, taking course and term dates into account.
     * @param teacherLimit The maximum number of teacher enrollments to show.
     * If the course contains more teachers than this, instead of giving the teacher
     * enrollments, the count of teachers will be given under a _teacher_count_ key.
     * @returns Course success
     * @throws ApiError
     */
    public getSingleCourseCourses(
        id: string,
        include?: 'needs_grading_count' | 'syllabus_body' | 'public_description' | 'total_scores' | 'current_grading_period_scores' | 'term' | 'account' | 'course_progress' | 'sections' | 'storage_quota_used_mb' | 'total_students' | 'passback_status' | 'favorites' | 'teachers' | 'observed_users' | 'all_courses' | 'permissions' | 'course_image' | 'banner_image' | 'concluded',
        teacherLimit?: number,
    ): CancelablePromise<Course> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{id}',
            path: {
                'id': id,
            },
            query: {
                'include': include,
                'teacher_limit': teacherLimit,
            },
        });
    }

    /**
     * Update a course
     * Update an existing course.
     *
     * Arguments are the same as Courses#create, with a few exceptions (enroll_me).
     *
     * If a user has content management rights, but not full course editing rights, the only attribute
     * editable through this endpoint will be "syllabus_body"
     * @param id ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateCourse(
        id: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete/Conclude a course
     * Delete or conclude an existing course
     * @param id ID
     * @param event The action to take on the course.
     * @returns any success
     * @throws ApiError
     */
    public deleteConcludeCourse(
        id: string,
        event: 'delete' | 'conclude',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{id}',
            path: {
                'id': id,
            },
            query: {
                'event': event,
            },
        });
    }

    /**
     * Copy course content
     * DEPRECATED: Please use the {api:ContentMigrationsController#create Content Migrations API}
     *
     * Copies content from one course into another. The default is to copy all course
     * content. You can control specific types to copy by using either the 'except' option
     * or the 'only' option.
     *
     * The response is the same as the course copy status endpoint
     * @param courseId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public copyCourseContent(
        courseId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/course_copy',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
