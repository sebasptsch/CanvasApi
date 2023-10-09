/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Progress } from "../models/Progress";
import type { ref } from "../models/ref";
import type { Submission } from "../models/Submission";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";
import { User } from "../models/User";

export class SubmissionsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List assignment submissions
   * A paginated list of all existing submissions for an assignment.
   * @param sectionId ID
   * @param assignmentId ID
   * @param include Associations to include with the group.  "group" will add group_id and group_name.
   * @param grouped If this argument is true, the response will be grouped by student groups.
   * @returns Submission success
   * @throws ApiError
   */
  public listAssignmentSubmissionsSections(
    sectionId: string,
    assignmentId: string,
    include?:
      | "submission_history"
      | "submission_comments"
      | "rubric_assessment"
      | "assignment"
      | "visibility"
      | "course"
      | "user"
      | "group"
      | "read_status",
    grouped?: boolean,
  ): CancelablePromise<Array<Submission>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
      },
      query: {
        include: include,
        grouped: grouped,
      },
    });
  }

  /**
   * Submit an assignment
   * Make a submission for an assignment. You must be enrolled as a student in
   * the course/section to do this.
   *
   * All online turn-in submission types are supported in this API. However,
   * there are a few things that are not yet supported:
   *
   * * Files can be submitted based on a file ID of a user or group file or through the {api:SubmissionsApiController#create_file file upload API}. However, there is no API yet for listing the user and group files.
   * * Media comments can be submitted, however, there is no API yet for creating a media comment to submit.
   * * Integration with Google Docs is not yet supported.
   * @param sectionId ID
   * @param assignmentId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public submitAssignmentSections(
    sectionId: string,
    assignmentId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Clear unread status for all submissions.
   * Site-admin-only endpoint.
   *
   * No request fields are necessary.
   *
   * On success, the response will be 204 No Content with an empty body.
   * @param sectionId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public clearUnreadStatusForAllSubmissionsSections(
    sectionId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/sections/{section_id}/submissions/{user_id}/clear_unread",
      path: {
        section_id: sectionId,
        user_id: userId,
      },
    });
  }

  /**
   * Mark submission as read
   * No request fields are necessary.
   *
   * On success, the response will be 204 No Content with an empty body.
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public markSubmissionAsReadCourses(
    courseId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Mark submission as unread
   * No request fields are necessary.
   *
   * On success, the response will be 204 No Content with an empty body.
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public markSubmissionAsUnreadCourses(
    courseId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * List submissions for multiple assignments
   * A paginated list of all existing submissions for a given set of students and assignments.
   * @param sectionId ID
   * @param studentIds List of student ids to return submissions for. If this argument is
   * omitted, return submissions for the calling user. Students may only list
   * their own submissions. Observers may only list those of associated
   * students. The special id "all" will return submissions for all students
   * in the course/section as appropriate.
   * @param assignmentIds List of assignments to return submissions for. If none are given,
   * submissions for all assignments are returned.
   * @param grouped If this argument is present, the response will be grouped by student,
   * rather than a flat array of submissions.
   * @param postToSis If this argument is set to true, the response will only include
   * submissions for assignments that have the post_to_sis flag set to true and
   * user enrollments that were added through sis.
   * @param submittedSince If this argument is set, the response will only include submissions that
   * were submitted after the specified date_time. This will exclude
   * submissions that do not have a submitted_at which will exclude unsubmitted
   * submissions.
   * The value must be formatted as ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
   * @param gradedSince If this argument is set, the response will only include submissions that
   * were graded after the specified date_time. This will exclude
   * submissions that have not been graded.
   * The value must be formatted as ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
   * @param gradingPeriodId The id of the grading period in which submissions are being requested
   * (Requires grading periods to exist on the account)
   * @param workflowState The current status of the submission
   * @param enrollmentState The current state of the enrollments. If omitted will include all
   * enrollments that are not deleted.
   * @param stateBasedOnDate If omitted it is set to true. When set to false it will ignore the effective
   * state of the student enrollments and use the workflow_state for the
   * enrollments. The argument is ignored unless enrollment_state argument is
   * also passed.
   * @param order The order submissions will be returned in.  Defaults to "id".  Doesn't
   * affect results for "grouped" mode.
   * @param orderDirection Determines whether ordered results are returned in ascending or descending
   * order.  Defaults to "ascending".  Doesn't affect results for "grouped" mode.
   * @param include Associations to include with the group. `total_scores` requires the
   * `grouped` argument.
   * @returns any success
   * @throws ApiError
   */
  public listSubmissionsForMultipleAssignmentsSections(
    sectionId: string,
    studentIds?: Array<string>,
    assignmentIds?: Array<string>,
    grouped?: boolean,
    postToSis?: boolean,
    submittedSince?: ref,
    gradedSince?: ref,
    gradingPeriodId?: number,
    workflowState?: "submitted" | "unsubmitted" | "graded" | "pending_review",
    enrollmentState?: "active" | "concluded",
    stateBasedOnDate?: boolean,
    order?: "id" | "graded_at",
    orderDirection?: "ascending" | "descending",
    include?:
      | "submission_history"
      | "submission_comments"
      | "rubric_assessment"
      | "assignment"
      | "total_scores"
      | "visibility"
      | "course"
      | "user",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sections/{section_id}/students/submissions",
      path: {
        section_id: sectionId,
      },
      query: {
        student_ids: studentIds,
        assignment_ids: assignmentIds,
        grouped: grouped,
        post_to_sis: postToSis,
        submitted_since: submittedSince,
        graded_since: gradedSince,
        grading_period_id: gradingPeriodId,
        workflow_state: workflowState,
        enrollment_state: enrollmentState,
        state_based_on_date: stateBasedOnDate,
        order: order,
        order_direction: orderDirection,
        include: include,
      },
    });
  }

  /**
   * Grade or comment on multiple submissions
   * Update the grading and comments on multiple student's assignment
   * submissions in an asynchronous job.
   *
   * The user must have permission to manage grades in the appropriate context
   * (course or section).
   * @param sectionId ID
   * @param formData
   * @returns Progress success
   * @throws ApiError
   */
  public gradeOrCommentOnMultipleSubmissionsSectionsSubmissions(
    sectionId: string,
    formData?: any,
  ): CancelablePromise<Progress> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/sections/{section_id}/submissions/update_grades",
      path: {
        section_id: sectionId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a single submission by anonymous id
   * Get a single submission, based on the submission's anonymous id.
   * @param sectionId ID
   * @param assignmentId ID
   * @param anonymousId ID
   * @param include Associations to include with the group.
   * @returns any success
   * @throws ApiError
   */
  public getSingleSubmissionByAnonymousIdSections(
    sectionId: string,
    assignmentId: string,
    anonymousId: string,
    include?:
      | "submission_history"
      | "submission_comments"
      | "rubric_assessment"
      | "full_rubric_assessment"
      | "visibility"
      | "course"
      | "user"
      | "read_status",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/anonymous_submissions/{anonymous_id}",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        anonymous_id: anonymousId,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Grade or comment on a submission by anonymous id
   * Comment on and/or update the grading for a student's assignment submission,
   * fetching the submission by anonymous id (instead of user id). If any
   * submission or rubric_assessment arguments are provided, the user must
   * have permission to manage grades in the appropriate context (course or
   * section).
   * @param sectionId ID
   * @param assignmentId ID
   * @param anonymousId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public gradeOrCommentOnSubmissionByAnonymousIdSections(
    sectionId: string,
    assignmentId: string,
    anonymousId: string,
    formData?: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/anonymous_submissions/{anonymous_id}",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        anonymous_id: anonymousId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Upload a file
   * Upload a file to a submission.
   *
   * This API endpoint is the first step in uploading a file to a submission as a student.
   * See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow.
   *
   * The final step of the file upload workflow will return the attachment data,
   * including the new file id. The caller can then POST to submit the
   * +online_upload+ assignment with these file ids.
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public uploadFileCourses(
    courseId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/files",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Submission Summary
   * Returns the number of submissions for the given assignment based on gradeable students
   * that fall into three categories: graded, ungraded, not submitted.
   * @param sectionId ID
   * @param assignmentId ID
   * @param grouped If this argument is true, the response will take into account student groups.
   * @returns any success
   * @throws ApiError
   */
  public submissionSummarySections(
    sectionId: string,
    assignmentId: string,
    grouped?: boolean,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submission_summary",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
      },
      query: {
        grouped: grouped,
      },
    });
  }

  /**
   * Get a single submission by anonymous id
   * Get a single submission, based on the submission's anonymous id.
   * @param courseId ID
   * @param assignmentId ID
   * @param anonymousId ID
   * @param include Associations to include with the group.
   * @returns any success
   * @throws ApiError
   */
  public getSingleSubmissionByAnonymousIdCourses(
    courseId: string,
    assignmentId: string,
    anonymousId: string,
    include?:
      | "submission_history"
      | "submission_comments"
      | "rubric_assessment"
      | "full_rubric_assessment"
      | "visibility"
      | "course"
      | "user"
      | "read_status",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/anonymous_submissions/{anonymous_id}",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        anonymous_id: anonymousId,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Grade or comment on a submission by anonymous id
   * Comment on and/or update the grading for a student's assignment submission,
   * fetching the submission by anonymous id (instead of user id). If any
   * submission or rubric_assessment arguments are provided, the user must
   * have permission to manage grades in the appropriate context (course or
   * section).
   * @param courseId ID
   * @param assignmentId ID
   * @param anonymousId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public gradeOrCommentOnSubmissionByAnonymousIdCourses(
    courseId: string,
    assignmentId: string,
    anonymousId: string,
    formData?: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/anonymous_submissions/{anonymous_id}",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        anonymous_id: anonymousId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List gradeable students
   * A paginated list of students eligible to submit the assignment. The caller must have permission to view grades.
   *
   * If anonymous grading is enabled for the current assignment and the allow_new_anonymous_id parameter is passed,
   * the returned data will not include any values identifying the student, but will instead include an
   * assignment-specific anonymous ID for each student.
   *
   * Section-limited instructors will only see students in their own sections.
   * @param courseId ID
   * @param assignmentId ID
   * @returns UserDisplay_if_anonymous_grading_is_not_enabled_for_the_assignment_or_if_the_allow_new_anonymous_id_parameter_is_not_true success
   * @throws ApiError
   */
  public listGradeableStudents(
    courseId: string,
    assignmentId: string,
  ): CancelablePromise<Array<User>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/gradeable_students",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
      },
    });
  }

  /**
   * Mark bulk submissions as read
   * Accepts a string array of submission ids. Loops through and marks each submission as read
   *
   * On success, the response will be 204 No Content with an empty body.
   * @param courseId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public markBulkSubmissionsAsReadCourses(
    courseId: string,
    formData?: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/submissions/bulk_mark_read",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Mark submission item as read
   * No request fields are necessary.
   *
   * A submission item can be "grade", "comment" or "rubric"
   *
   * On success, the response will be 204 No Content with an empty body.
   * @param sectionId ID
   * @param assignmentId ID
   * @param userId ID
   * @param item ID
   * @returns any success
   * @throws ApiError
   */
  public markSubmissionItemAsReadSections(
    sectionId: string,
    assignmentId: string,
    userId: string,
    item: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/read/{item}",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        user_id: userId,
        item: item,
      },
    });
  }

  /**
   * Get rubric assessments read state
   * Return whether new rubric comments/grading made on a submission have been seen by the student being assessed.
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public getRubricAssessmentsReadStateCoursesRubricComments(
    courseId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Mark rubric assessments as read
   * Indicate that rubric comments/grading made on a submission have been read by the student being assessed.
   * Only the student who owns the submission can use this endpoint.
   *
   * NOTE: Rubric assessments will be marked as read automatically when they are viewed in Canvas web.
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public markRubricAssessmentsAsReadCoursesRubricComments(
    courseId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Get rubric assessments read state
   * Return whether new rubric comments/grading made on a submission have been seen by the student being assessed.
   * @param sectionId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public getRubricAssessmentsReadStateSectionsRubricAssessments(
    sectionId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_assessments/read",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Mark rubric assessments as read
   * Indicate that rubric comments/grading made on a submission have been read by the student being assessed.
   * Only the student who owns the submission can use this endpoint.
   *
   * NOTE: Rubric assessments will be marked as read automatically when they are viewed in Canvas web.
   * @param sectionId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public markRubricAssessmentsAsReadSectionsRubricAssessments(
    sectionId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_assessments/read",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * List multiple assignments gradeable students
   * A paginated list of students eligible to submit a list of assignments. The caller must have
   * permission to view grades for the requested course.
   *
   * Section-limited instructors will only see students in their own sections.
   * @param courseId ID
   * @param assignmentIds Assignments being requested
   * @returns any success
   * @throws ApiError
   */
  public listMultipleAssignmentsGradeableStudents(
    courseId: string,
    assignmentIds?: Array<string>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/assignments/gradeable_students",
      path: {
        course_id: courseId,
      },
      query: {
        assignment_ids: assignmentIds,
      },
    });
  }

  /**
   * List assignment submissions
   * A paginated list of all existing submissions for an assignment.
   * @param courseId ID
   * @param assignmentId ID
   * @param include Associations to include with the group.  "group" will add group_id and group_name.
   * @param grouped If this argument is true, the response will be grouped by student groups.
   * @returns Submission success
   * @throws ApiError
   */
  public listAssignmentSubmissionsCourses(
    courseId: string,
    assignmentId: string,
    include?:
      | "submission_history"
      | "submission_comments"
      | "rubric_assessment"
      | "assignment"
      | "visibility"
      | "course"
      | "user"
      | "group"
      | "read_status",
    grouped?: boolean,
  ): CancelablePromise<Array<Submission>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
      },
      query: {
        include: include,
        grouped: grouped,
      },
    });
  }

  /**
   * Submit an assignment
   * Make a submission for an assignment. You must be enrolled as a student in
   * the course/section to do this.
   *
   * All online turn-in submission types are supported in this API. However,
   * there are a few things that are not yet supported:
   *
   * * Files can be submitted based on a file ID of a user or group file or through the {api:SubmissionsApiController#create_file file upload API}. However, there is no API yet for listing the user and group files.
   * * Media comments can be submitted, however, there is no API yet for creating a media comment to submit.
   * * Integration with Google Docs is not yet supported.
   * @param courseId ID
   * @param assignmentId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public submitAssignmentCourses(
    courseId: string,
    assignmentId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Mark submission as read
   * No request fields are necessary.
   *
   * On success, the response will be 204 No Content with an empty body.
   * @param sectionId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public markSubmissionAsReadSections(
    sectionId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/read",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Mark submission as unread
   * No request fields are necessary.
   *
   * On success, the response will be 204 No Content with an empty body.
   * @param sectionId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public markSubmissionAsUnreadSections(
    sectionId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/read",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Get a single submission
   * Get a single submission, based on user id.
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @param include Associations to include with the group.
   * @returns any success
   * @throws ApiError
   */
  public getSingleSubmissionCourses(
    courseId: string,
    assignmentId: string,
    userId: string,
    include?:
      | "submission_history"
      | "submission_comments"
      | "rubric_assessment"
      | "full_rubric_assessment"
      | "visibility"
      | "course"
      | "user"
      | "read_status",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Grade or comment on a submission
   * Comment on and/or update the grading for a student's assignment submission.
   * If any submission or rubric_assessment arguments are provided, the user
   * must have permission to manage grades in the appropriate context (course or
   * section).
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public gradeOrCommentOnSubmissionCourses(
    courseId: string,
    assignmentId: string,
    userId: string,
    formData?: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get document annotations read state
   * Return whether annotations made on a submitted document have been read by the student
   * @param sectionId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public getDocumentAnnotationsReadStateSections(
    sectionId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Mark document annotations as read
   * Indicate that annotations made on a submitted document have been read by the student.
   * Only the student who owns the submission can use this endpoint.
   *
   * NOTE: Document annotations will be marked as read automatically when they are viewed in Canvas web.
   * @param sectionId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public markDocumentAnnotationsAsReadSections(
    sectionId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Mark bulk submissions as read
   * Accepts a string array of submission ids. Loops through and marks each submission as read
   *
   * On success, the response will be 204 No Content with an empty body.
   * @param sectionId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public markBulkSubmissionsAsReadSections(
    sectionId: string,
    formData?: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/sections/{section_id}/submissions/bulk_mark_read",
      path: {
        section_id: sectionId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get rubric assessments read state
   * Return whether new rubric comments/grading made on a submission have been seen by the student being assessed.
   * @param sectionId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public getRubricAssessmentsReadStateSectionsRubricComments(
    sectionId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Mark rubric assessments as read
   * Indicate that rubric comments/grading made on a submission have been read by the student being assessed.
   * Only the student who owns the submission can use this endpoint.
   *
   * NOTE: Rubric assessments will be marked as read automatically when they are viewed in Canvas web.
   * @param sectionId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public markRubricAssessmentsAsReadSectionsRubricComments(
    sectionId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Get rubric assessments read state
   * Return whether new rubric comments/grading made on a submission have been seen by the student being assessed.
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public getRubricAssessmentsReadStateCoursesRubricAssessments(
    courseId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_assessments/read",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Mark rubric assessments as read
   * Indicate that rubric comments/grading made on a submission have been read by the student being assessed.
   * Only the student who owns the submission can use this endpoint.
   *
   * NOTE: Rubric assessments will be marked as read automatically when they are viewed in Canvas web.
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public markRubricAssessmentsAsReadCoursesRubricAssessments(
    courseId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_assessments/read",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * List submissions for multiple assignments
   * A paginated list of all existing submissions for a given set of students and assignments.
   * @param courseId ID
   * @param studentIds List of student ids to return submissions for. If this argument is
   * omitted, return submissions for the calling user. Students may only list
   * their own submissions. Observers may only list those of associated
   * students. The special id "all" will return submissions for all students
   * in the course/section as appropriate.
   * @param assignmentIds List of assignments to return submissions for. If none are given,
   * submissions for all assignments are returned.
   * @param grouped If this argument is present, the response will be grouped by student,
   * rather than a flat array of submissions.
   * @param postToSis If this argument is set to true, the response will only include
   * submissions for assignments that have the post_to_sis flag set to true and
   * user enrollments that were added through sis.
   * @param submittedSince If this argument is set, the response will only include submissions that
   * were submitted after the specified date_time. This will exclude
   * submissions that do not have a submitted_at which will exclude unsubmitted
   * submissions.
   * The value must be formatted as ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
   * @param gradedSince If this argument is set, the response will only include submissions that
   * were graded after the specified date_time. This will exclude
   * submissions that have not been graded.
   * The value must be formatted as ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
   * @param gradingPeriodId The id of the grading period in which submissions are being requested
   * (Requires grading periods to exist on the account)
   * @param workflowState The current status of the submission
   * @param enrollmentState The current state of the enrollments. If omitted will include all
   * enrollments that are not deleted.
   * @param stateBasedOnDate If omitted it is set to true. When set to false it will ignore the effective
   * state of the student enrollments and use the workflow_state for the
   * enrollments. The argument is ignored unless enrollment_state argument is
   * also passed.
   * @param order The order submissions will be returned in.  Defaults to "id".  Doesn't
   * affect results for "grouped" mode.
   * @param orderDirection Determines whether ordered results are returned in ascending or descending
   * order.  Defaults to "ascending".  Doesn't affect results for "grouped" mode.
   * @param include Associations to include with the group. `total_scores` requires the
   * `grouped` argument.
   * @returns any success
   * @throws ApiError
   */
  public listSubmissionsForMultipleAssignmentsCourses(
    courseId: string,
    studentIds?: Array<string>,
    assignmentIds?: Array<string>,
    grouped?: boolean,
    postToSis?: boolean,
    submittedSince?: ref,
    gradedSince?: ref,
    gradingPeriodId?: number,
    workflowState?: "submitted" | "unsubmitted" | "graded" | "pending_review",
    enrollmentState?: "active" | "concluded",
    stateBasedOnDate?: boolean,
    order?: "id" | "graded_at",
    orderDirection?: "ascending" | "descending",
    include?:
      | "submission_history"
      | "submission_comments"
      | "rubric_assessment"
      | "assignment"
      | "total_scores"
      | "visibility"
      | "course"
      | "user",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/students/submissions",
      path: {
        course_id: courseId,
      },
      query: {
        student_ids: studentIds,
        assignment_ids: assignmentIds,
        grouped: grouped,
        post_to_sis: postToSis,
        submitted_since: submittedSince,
        graded_since: gradedSince,
        grading_period_id: gradingPeriodId,
        workflow_state: workflowState,
        enrollment_state: enrollmentState,
        state_based_on_date: stateBasedOnDate,
        order: order,
        order_direction: orderDirection,
        include: include,
      },
    });
  }

  /**
   * Grade or comment on multiple submissions
   * Update the grading and comments on multiple student's assignment
   * submissions in an asynchronous job.
   *
   * The user must have permission to manage grades in the appropriate context
   * (course or section).
   * @param courseId ID
   * @param assignmentId ID
   * @param formData
   * @returns Progress success
   * @throws ApiError
   */
  public gradeOrCommentOnMultipleSubmissionsCoursesAssignments(
    courseId: string,
    assignmentId: string,
    formData?: any,
  ): CancelablePromise<Progress> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/update_grades",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get document annotations read state
   * Return whether annotations made on a submitted document have been read by the student
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public getDocumentAnnotationsReadStateCourses(
    courseId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Mark document annotations as read
   * Indicate that annotations made on a submitted document have been read by the student.
   * Only the student who owns the submission can use this endpoint.
   *
   * NOTE: Document annotations will be marked as read automatically when they are viewed in Canvas web.
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public markDocumentAnnotationsAsReadCourses(
    courseId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }

  /**
   * Get a single submission
   * Get a single submission, based on user id.
   * @param sectionId ID
   * @param assignmentId ID
   * @param userId ID
   * @param include Associations to include with the group.
   * @returns any success
   * @throws ApiError
   */
  public getSingleSubmissionSections(
    sectionId: string,
    assignmentId: string,
    userId: string,
    include?:
      | "submission_history"
      | "submission_comments"
      | "rubric_assessment"
      | "full_rubric_assessment"
      | "visibility"
      | "course"
      | "user"
      | "read_status",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        user_id: userId,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Grade or comment on a submission
   * Comment on and/or update the grading for a student's assignment submission.
   * If any submission or rubric_assessment arguments are provided, the user
   * must have permission to manage grades in the appropriate context (course or
   * section).
   * @param sectionId ID
   * @param assignmentId ID
   * @param userId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public gradeOrCommentOnSubmissionSections(
    sectionId: string,
    assignmentId: string,
    userId: string,
    formData?: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        user_id: userId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Grade or comment on multiple submissions
   * Update the grading and comments on multiple student's assignment
   * submissions in an asynchronous job.
   *
   * The user must have permission to manage grades in the appropriate context
   * (course or section).
   * @param courseId ID
   * @param formData
   * @returns Progress success
   * @throws ApiError
   */
  public gradeOrCommentOnMultipleSubmissionsCoursesSubmissions(
    courseId: string,
    formData?: any,
  ): CancelablePromise<Progress> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/submissions/update_grades",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Mark submission item as read
   * No request fields are necessary.
   *
   * A submission item can be "grade", "comment" or "rubric"
   *
   * On success, the response will be 204 No Content with an empty body.
   * @param courseId ID
   * @param assignmentId ID
   * @param userId ID
   * @param item ID
   * @returns any success
   * @throws ApiError
   */
  public markSubmissionItemAsReadCourses(
    courseId: string,
    assignmentId: string,
    userId: string,
    item: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read/{item}",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        user_id: userId,
        item: item,
      },
    });
  }

  /**
   * Clear unread status for all submissions.
   * Site-admin-only endpoint.
   *
   * No request fields are necessary.
   *
   * On success, the response will be 204 No Content with an empty body.
   * @param courseId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public clearUnreadStatusForAllSubmissionsCourses(
    courseId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/submissions/{user_id}/clear_unread",
      path: {
        course_id: courseId,
        user_id: userId,
      },
    });
  }

  /**
   * Submission Summary
   * Returns the number of submissions for the given assignment based on gradeable students
   * that fall into three categories: graded, ungraded, not submitted.
   * @param courseId ID
   * @param assignmentId ID
   * @param grouped If this argument is true, the response will take into account student groups.
   * @returns any success
   * @throws ApiError
   */
  public submissionSummaryCourses(
    courseId: string,
    assignmentId: string,
    grouped?: boolean,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submission_summary",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
      },
      query: {
        grouped: grouped,
      },
    });
  }

  /**
   * Grade or comment on multiple submissions
   * Update the grading and comments on multiple student's assignment
   * submissions in an asynchronous job.
   *
   * The user must have permission to manage grades in the appropriate context
   * (course or section).
   * @param sectionId ID
   * @param assignmentId ID
   * @param formData
   * @returns Progress success
   * @throws ApiError
   */
  public gradeOrCommentOnMultipleSubmissionsSectionsAssignments(
    sectionId: string,
    assignmentId: string,
    formData?: any,
  ): CancelablePromise<Progress> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/update_grades",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Upload a file
   * Upload a file to a submission.
   *
   * This API endpoint is the first step in uploading a file to a submission as a student.
   * See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow.
   *
   * The final step of the file upload workflow will return the attachment data,
   * including the new file id. The caller can then POST to submit the
   * +online_upload+ assignment with these file ids.
   * @param sectionId ID
   * @param assignmentId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public uploadFileSections(
    sectionId: string,
    assignmentId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/files",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        user_id: userId,
      },
    });
  }
}
