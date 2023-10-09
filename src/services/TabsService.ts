/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tab } from "../models/Tab";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class TabsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List available tabs for a course or group
   * Returns a paginated list of navigation tabs available in the current context.
   * @param accountId ID
   * @param include - "course_subject_tabs": Optional flag to return the tabs associated with a canvas_for_elementary subject course's
   * home page instead of the typical sidebar navigation. Only takes effect if this request is for a course context
   * in a canvas_for_elementary-enabled account or sub-account.
   * @returns any success
   * @throws ApiError
   */
  public listAvailableTabsForCourseOrGroupAccounts(
    accountId: string,
    include?: "course_subject_tabs",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/tabs",
      path: {
        account_id: accountId,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * List available tabs for a course or group
   * Returns a paginated list of navigation tabs available in the current context.
   * @param courseId ID
   * @param include - "course_subject_tabs": Optional flag to return the tabs associated with a canvas_for_elementary subject course's
   * home page instead of the typical sidebar navigation. Only takes effect if this request is for a course context
   * in a canvas_for_elementary-enabled account or sub-account.
   * @returns any success
   * @throws ApiError
   */
  public listAvailableTabsForCourseOrGroupCourses(
    courseId: string,
    include?: "course_subject_tabs",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/tabs",
      path: {
        course_id: courseId,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Update a tab for a course
   * Home and Settings tabs are not manageable, and can't be hidden or moved
   *
   * Returns a tab object
   * @param courseId ID
   * @param tabId ID
   * @param formData
   * @returns Tab success
   * @throws ApiError
   */
  public updateTabForCourse(
    courseId: string,
    tabId: string,
    formData?: any,
  ): CancelablePromise<Tab> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/tabs/{tab_id}",
      path: {
        course_id: courseId,
        tab_id: tabId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List available tabs for a course or group
   * Returns a paginated list of navigation tabs available in the current context.
   * @param groupId ID
   * @param include - "course_subject_tabs": Optional flag to return the tabs associated with a canvas_for_elementary subject course's
   * home page instead of the typical sidebar navigation. Only takes effect if this request is for a course context
   * in a canvas_for_elementary-enabled account or sub-account.
   * @returns any success
   * @throws ApiError
   */
  public listAvailableTabsForCourseOrGroupGroups(
    groupId: string,
    include?: "course_subject_tabs",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/tabs",
      path: {
        group_id: groupId,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * List available tabs for a course or group
   * Returns a paginated list of navigation tabs available in the current context.
   * @param userId ID
   * @param include - "course_subject_tabs": Optional flag to return the tabs associated with a canvas_for_elementary subject course's
   * home page instead of the typical sidebar navigation. Only takes effect if this request is for a course context
   * in a canvas_for_elementary-enabled account or sub-account.
   * @returns any success
   * @throws ApiError
   */
  public listAvailableTabsForCourseOrGroupUsers(
    userId: string,
    include?: "course_subject_tabs",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/tabs",
      path: {
        user_id: userId,
      },
      query: {
        include: include,
      },
    });
  }
}
