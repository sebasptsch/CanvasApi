/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class AnalyticsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get department-level statistics, broken down by subaccount
   * Returns numeric statistics about the department subaccounts and term (or filter).
   *
   * Shares the same variations on endpoint as the participation data.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public getDepartmentLevelStatisticsBrokenDownBySubaccountCompleted(
    accountId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/analytics/completed/statistics_by_subaccount",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Get course-level student summary data
   * Returns a summary of per-user access information for all students in
   * a course. This includes total page views, total participations, and a
   * breakdown of on-time/late status for all homework submissions in the course.
   *
   * Each student's summary also includes the maximum number of page views and
   * participations by any student in the course, which may be useful for some
   * visualizations (since determining maximums client side can be tricky with
   * pagination).
   * @param courseId ID
   * @param sortColumn The order results in which results are returned.  Defaults to "name".
   * @param studentId If set, returns only the specified student.
   * @returns any success
   * @throws ApiError
   */
  public getCourseLevelStudentSummaryData(
    courseId: string,
    sortColumn?:
      | "name"
      | "name_descending"
      | "score"
      | "score_descending"
      | "participations"
      | "participations_descending"
      | "page_views"
      | "page_views_descending",
    studentId?: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/analytics/student_summaries",
      path: {
        course_id: courseId,
      },
      query: {
        sort_column: sortColumn,
        student_id: studentId,
      },
    });
  }

  /**
   * Get department-level participation data
   * Returns page view hits summed across all courses in the department. Two
   * groupings of these counts are returned; one by day (+by_date+), the other
   * by category (+by_category+). The possible categories are announcements,
   * assignments, collaborations, conferences, discussions, files, general,
   * grades, groups, modules, other, pages, and quizzes.
   *
   * This and the other department-level endpoints have three variations which
   * all return the same style of data but for different subsets of courses. All
   * share the prefix /api/v1/accounts/<account_id>/analytics. The possible
   * suffixes are:
   *
   * * /current: includes all available courses in the default term
   * * /completed: includes all concluded courses in the default term
   * * /terms/<term_id>: includes all available or concluded courses in the
   * given term.
   *
   * Courses not yet offered or which have been deleted are never included.
   *
   * /current and /completed are intended for use when the account has only one
   * term. /terms/<term_id> is intended for use when the account has multiple
   * terms.
   *
   * The action follows the suffix.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public getDepartmentLevelParticipationDataCompleted(
    accountId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/analytics/completed/activity",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Get department-level statistics, broken down by subaccount
   * Returns numeric statistics about the department subaccounts and term (or filter).
   *
   * Shares the same variations on endpoint as the participation data.
   * @param accountId ID
   * @param termId ID
   * @returns any success
   * @throws ApiError
   */
  public getDepartmentLevelStatisticsBrokenDownBySubaccountTerms(
    accountId: string,
    termId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/analytics/terms/{term_id}/statistics_by_subaccount",
      path: {
        account_id: accountId,
        term_id: termId,
      },
    });
  }

  /**
   * Get department-level participation data
   * Returns page view hits summed across all courses in the department. Two
   * groupings of these counts are returned; one by day (+by_date+), the other
   * by category (+by_category+). The possible categories are announcements,
   * assignments, collaborations, conferences, discussions, files, general,
   * grades, groups, modules, other, pages, and quizzes.
   *
   * This and the other department-level endpoints have three variations which
   * all return the same style of data but for different subsets of courses. All
   * share the prefix /api/v1/accounts/<account_id>/analytics. The possible
   * suffixes are:
   *
   * * /current: includes all available courses in the default term
   * * /completed: includes all concluded courses in the default term
   * * /terms/<term_id>: includes all available or concluded courses in the
   * given term.
   *
   * Courses not yet offered or which have been deleted are never included.
   *
   * /current and /completed are intended for use when the account has only one
   * term. /terms/<term_id> is intended for use when the account has multiple
   * terms.
   *
   * The action follows the suffix.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public getDepartmentLevelParticipationDataCurrent(
    accountId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/analytics/current/activity",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Get department-level statistics
   * Returns numeric statistics about the department and term (or filter).
   *
   * Shares the same variations on endpoint as the participation data.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public getDepartmentLevelStatisticsCurrent(
    accountId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/analytics/current/statistics",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Get department-level grade data
   * Returns the distribution of grades for students in courses in the
   * department.  Each data point is one student's current grade in one course;
   * if a student is in multiple courses, he contributes one value per course,
   * but if he's enrolled multiple times in the same course (e.g. a lecture
   * section and a lab section), he only constributes on value for that course.
   *
   * Grades are binned to the nearest integer score; anomalous grades outside
   * the 0 to 100 range are ignored. The raw counts are returned, not yet
   * normalized by the total count.
   *
   * Shares the same variations on endpoint as the participation data.
   * @param accountId ID
   * @param termId ID
   * @returns any success
   * @throws ApiError
   */
  public getDepartmentLevelGradeDataTerms(
    accountId: string,
    termId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/analytics/terms/{term_id}/grades",
      path: {
        account_id: accountId,
        term_id: termId,
      },
    });
  }

  /**
   * Get course-level participation data
   * Returns page view hits and participation numbers grouped by day through the
   * entire history of the course. Page views is returned as a hash, where the
   * hash keys are dates in the format "YYYY-MM-DD". The page_views result set
   * includes page views broken out by access category. Participations is
   * returned as an array of dates in the format "YYYY-MM-DD".
   * @param courseId ID
   * @returns any success
   * @throws ApiError
   */
  public getCourseLevelParticipationData(
    courseId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/analytics/activity",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * Get user-in-a-course-level assignment data
   * Returns a list of assignments for the course sorted by due date. For
   * each assignment returns basic assignment information, the grade breakdown
   * (including the student's actual grade), and the basic submission
   * information for the student's submission if it exists.
   * @param courseId ID
   * @param studentId ID
   * @returns any success
   * @throws ApiError
   */
  public getUserInACourseLevelAssignmentData(
    courseId: string,
    studentId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/analytics/users/{student_id}/assignments",
      path: {
        course_id: courseId,
        student_id: studentId,
      },
    });
  }

  /**
   * Get department-level grade data
   * Returns the distribution of grades for students in courses in the
   * department.  Each data point is one student's current grade in one course;
   * if a student is in multiple courses, he contributes one value per course,
   * but if he's enrolled multiple times in the same course (e.g. a lecture
   * section and a lab section), he only constributes on value for that course.
   *
   * Grades are binned to the nearest integer score; anomalous grades outside
   * the 0 to 100 range are ignored. The raw counts are returned, not yet
   * normalized by the total count.
   *
   * Shares the same variations on endpoint as the participation data.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public getDepartmentLevelGradeDataCurrent(
    accountId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/analytics/current/grades",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Get course-level assignment data
   * Returns a list of assignments for the course sorted by due date. For
   * each assignment returns basic assignment information, the grade breakdown,
   * and a breakdown of on-time/late status of homework submissions.
   * @param courseId ID
   * @param async If async is true, then the course_assignments call can happen asynch-
   * ronously and MAY return a response containing a progress_url key instead
   * of an assignments array. If it does, then it is the caller's
   * responsibility to poll the API again to see if the progress is complete.
   * If the data is ready (possibly even on the first async call) then it
   * will be passed back normally, as documented in the example response.
   * @returns any success
   * @throws ApiError
   */
  public getCourseLevelAssignmentData(
    courseId: string,
    async?: boolean,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/analytics/assignments",
      path: {
        course_id: courseId,
      },
      query: {
        async: async,
      },
    });
  }

  /**
   * Get user-in-a-course-level participation data
   * Returns page view hits grouped by hour, and participation details through the
   * entire history of the course.
   *
   * `page_views` are returned as a hash, where the keys are iso8601 dates, bucketed by the hour.
   * `participations` are returned as an array of hashes, sorted oldest to newest.
   * @param courseId ID
   * @param studentId ID
   * @returns any success
   * @throws ApiError
   */
  public getUserInACourseLevelParticipationData(
    courseId: string,
    studentId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/analytics/users/{student_id}/activity",
      path: {
        course_id: courseId,
        student_id: studentId,
      },
    });
  }

  /**
   * Get department-level grade data
   * Returns the distribution of grades for students in courses in the
   * department.  Each data point is one student's current grade in one course;
   * if a student is in multiple courses, he contributes one value per course,
   * but if he's enrolled multiple times in the same course (e.g. a lecture
   * section and a lab section), he only constributes on value for that course.
   *
   * Grades are binned to the nearest integer score; anomalous grades outside
   * the 0 to 100 range are ignored. The raw counts are returned, not yet
   * normalized by the total count.
   *
   * Shares the same variations on endpoint as the participation data.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public getDepartmentLevelGradeDataCompleted(
    accountId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/analytics/completed/grades",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Get user-in-a-course-level messaging data
   * Returns messaging "hits" grouped by day through the entire history of the
   * course. Returns a hash containing the number of instructor-to-student messages,
   * and student-to-instructor messages, where the hash keys are dates
   * in the format "YYYY-MM-DD". Message hits include Conversation messages and
   * comments on homework submissions.
   * @param courseId ID
   * @param studentId ID
   * @returns any success
   * @throws ApiError
   */
  public getUserInACourseLevelMessagingData(
    courseId: string,
    studentId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/analytics/users/{student_id}/communication",
      path: {
        course_id: courseId,
        student_id: studentId,
      },
    });
  }

  /**
   * Get department-level statistics
   * Returns numeric statistics about the department and term (or filter).
   *
   * Shares the same variations on endpoint as the participation data.
   * @param accountId ID
   * @param termId ID
   * @returns any success
   * @throws ApiError
   */
  public getDepartmentLevelStatisticsTerms(
    accountId: string,
    termId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/analytics/terms/{term_id}/statistics",
      path: {
        account_id: accountId,
        term_id: termId,
      },
    });
  }

  /**
   * Get department-level statistics
   * Returns numeric statistics about the department and term (or filter).
   *
   * Shares the same variations on endpoint as the participation data.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public getDepartmentLevelStatisticsCompleted(
    accountId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/analytics/completed/statistics",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Get department-level statistics, broken down by subaccount
   * Returns numeric statistics about the department subaccounts and term (or filter).
   *
   * Shares the same variations on endpoint as the participation data.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public getDepartmentLevelStatisticsBrokenDownBySubaccountCurrent(
    accountId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/analytics/current/statistics_by_subaccount",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Get department-level participation data
   * Returns page view hits summed across all courses in the department. Two
   * groupings of these counts are returned; one by day (+by_date+), the other
   * by category (+by_category+). The possible categories are announcements,
   * assignments, collaborations, conferences, discussions, files, general,
   * grades, groups, modules, other, pages, and quizzes.
   *
   * This and the other department-level endpoints have three variations which
   * all return the same style of data but for different subsets of courses. All
   * share the prefix /api/v1/accounts/<account_id>/analytics. The possible
   * suffixes are:
   *
   * * /current: includes all available courses in the default term
   * * /completed: includes all concluded courses in the default term
   * * /terms/<term_id>: includes all available or concluded courses in the
   * given term.
   *
   * Courses not yet offered or which have been deleted are never included.
   *
   * /current and /completed are intended for use when the account has only one
   * term. /terms/<term_id> is intended for use when the account has multiple
   * terms.
   *
   * The action follows the suffix.
   * @param accountId ID
   * @param termId ID
   * @returns any success
   * @throws ApiError
   */
  public getDepartmentLevelParticipationDataTerms(
    accountId: string,
    termId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/analytics/terms/{term_id}/activity",
      path: {
        account_id: accountId,
        term_id: termId,
      },
    });
  }
}
