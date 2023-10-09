/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class GradingPeriodsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Delete a grading period
   * <b>204 No Content</b> response code is returned if the deletion was
   * successful.
   * @param accountId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public deleteGradingPeriodAccounts(
    accountId: string,
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/accounts/{account_id}/grading_periods/{id}",
      path: {
        account_id: accountId,
        id: id,
      },
    });
  }

  /**
   * Get a single grading period
   * Returns the grading period with the given id
   * @param courseId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public getSingleGradingPeriod(
    courseId: string,
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/grading_periods/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
    });
  }

  /**
   * Update a single grading period
   * Update an existing grading period.
   * @param courseId ID
   * @param id ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public updateSingleGradingPeriod(
    courseId: string,
    id: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/grading_periods/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete a grading period
   * <b>204 No Content</b> response code is returned if the deletion was
   * successful.
   * @param courseId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public deleteGradingPeriodCourses(
    courseId: string,
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/grading_periods/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
    });
  }

  /**
   * List grading periods
   * Returns the paginated list of grading periods for the current course.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public listGradingPeriodsAccounts(accountId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/grading_periods",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Batch update grading periods
   * Update multiple grading periods
   * @param setId The id of the grading period set.
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public batchUpdateGradingPeriodsGradingPeriodSets(
    setId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/v1/grading_period_sets/{set_id}/grading_periods/batch_update",
      path: {
        set_id: setId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List grading periods
   * Returns the paginated list of grading periods for the current course.
   * @param courseId ID
   * @returns any success
   * @throws ApiError
   */
  public listGradingPeriodsCourses(courseId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/grading_periods",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * Batch update grading periods
   * Update multiple grading periods
   * @param courseId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public batchUpdateGradingPeriodsCourses(
    courseId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/v1/courses/{course_id}/grading_periods/batch_update",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
