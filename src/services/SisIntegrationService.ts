/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ref } from "../models/ref";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class SisIntegrationService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Retrieve assignments enabled for grade export to SIS
   * Retrieve a list of published assignments flagged as "post_to_sis".
   * See the Assignments API for more details on assignments.
   * Assignment group and section information are included for convenience.
   *
   * Each section includes course information for the origin course and the
   * cross-listed course, if applicable. The `origin_course` is the course to
   * which the section belongs or the course from which the section was
   * cross-listed. Generally, the `origin_course` should be preferred when
   * performing integration work. The `xlist_course` is provided for consistency
   * and is only present when the section has been cross-listed.
   * See Sections API and Courses Api for me details.
   *
   * The `override` is only provided if the Differentiated Assignments course
   * feature is turned on and the assignment has an override for that section.
   * When there is an override for the assignment the override object's
   * keys/values can be merged with the top level assignment object to create a
   * view of the assignment object specific to that section.
   * See Assignments api for more information on assignment overrides.
   *
   * restricts to courses that start before this date (if they have a start date)
   * restricts to courses that end after this date (if they have an end date)
   * information to include.
   *
   * "student_overrides":: returns individual student override information
   * @param accountId The ID of the account to query.
   * @param courseId The ID of the course to query.
   * @param startsBefore When searching on an account,
   * @param endsAfter When searching on an account,
   * @param include Array of additional
   * @returns any success
   * @throws ApiError
   */
  public retrieveAssignmentsEnabledForGradeExportToSisAccounts(
    accountId: number,
    courseId?: number,
    startsBefore?: ref,
    endsAfter?: ref,
    include?: "student_overrides",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/sis/accounts/{account_id}/assignments",
      path: {
        account_id: accountId,
      },
      query: {
        course_id: courseId,
        starts_before: startsBefore,
        ends_after: endsAfter,
        include: include,
      },
    });
  }

  /**
   * Retrieve assignments enabled for grade export to SIS
   * Retrieve a list of published assignments flagged as "post_to_sis".
   * See the Assignments API for more details on assignments.
   * Assignment group and section information are included for convenience.
   *
   * Each section includes course information for the origin course and the
   * cross-listed course, if applicable. The `origin_course` is the course to
   * which the section belongs or the course from which the section was
   * cross-listed. Generally, the `origin_course` should be preferred when
   * performing integration work. The `xlist_course` is provided for consistency
   * and is only present when the section has been cross-listed.
   * See Sections API and Courses Api for me details.
   *
   * The `override` is only provided if the Differentiated Assignments course
   * feature is turned on and the assignment has an override for that section.
   * When there is an override for the assignment the override object's
   * keys/values can be merged with the top level assignment object to create a
   * view of the assignment object specific to that section.
   * See Assignments api for more information on assignment overrides.
   *
   * restricts to courses that start before this date (if they have a start date)
   * restricts to courses that end after this date (if they have an end date)
   * information to include.
   *
   * "student_overrides":: returns individual student override information
   * @param courseId The ID of the course to query.
   * @param accountId The ID of the account to query.
   * @param startsBefore When searching on an account,
   * @param endsAfter When searching on an account,
   * @param include Array of additional
   * @returns any success
   * @throws ApiError
   */
  public retrieveAssignmentsEnabledForGradeExportToSisCourses(
    courseId: number,
    accountId?: number,
    startsBefore?: ref,
    endsAfter?: ref,
    include?: "student_overrides",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/sis/courses/{course_id}/assignments",
      path: {
        course_id: courseId,
      },
      query: {
        account_id: accountId,
        starts_before: startsBefore,
        ends_after: endsAfter,
        include: include,
      },
    });
  }

  /**
   * Disable assignments currently enabled for grade export to SIS
   * Disable all assignments flagged as "post_to_sis", with the option of making it
   * specific to a grading period, in a course.
   *
   * On success, the response will be 204 No Content with an empty body.
   *
   * On failure, the response will be 400 Bad Request with a body of a specific
   * message.
   *
   * For disabling assignments in a specific grading period
   * @param courseId The ID of the course.
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public disableAssignmentsCurrentlyEnabledForGradeExportToSis(
    courseId: number,
    formData?: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/sis/courses/{course_id}/disable_post_to_sis",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
