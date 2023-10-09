/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupCategory } from "../models/GroupCategory";
import type { Progress } from "../models/Progress";
import type { User } from "../models/User";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class GroupCategoriesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Import category groups
   * Create Groups in a Group Category through a CSV import
   *
   * For more information on the format that's expected here, please see the
   * "Group Category CSV" section in the API docs.
   * @param groupCategoryId ID
   * @param formData
   * @returns Progress success
   * @throws ApiError
   */
  public importCategoryGroups(
    groupCategoryId: string,
    formData?: any,
  ): CancelablePromise<Progress> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/group_categories/{group_category_id}/import",
      path: {
        group_category_id: groupCategoryId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a single group category
   * Returns the data for a single group category, or a 401 if the caller doesn't have
   * the rights to see it.
   * @param groupCategoryId ID
   * @returns GroupCategory success
   * @throws ApiError
   */
  public getSingleGroupCategory(
    groupCategoryId: string,
  ): CancelablePromise<GroupCategory> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/group_categories/{group_category_id}",
      path: {
        group_category_id: groupCategoryId,
      },
    });
  }

  /**
   * Update a Group Category
   * Modifies an existing group category.
   * @param groupCategoryId ID
   * @param formData
   * @returns GroupCategory success
   * @throws ApiError
   */
  public updateGroupCategory(
    groupCategoryId: string,
    formData?: any,
  ): CancelablePromise<GroupCategory> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/group_categories/{group_category_id}",
      path: {
        group_category_id: groupCategoryId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete a Group Category
   * Deletes a group category and all groups under it. Protected group
   * categories can not be deleted, i.e. "communities" and "student_organized".
   * @param groupCategoryId ID
   * @returns any success
   * @throws ApiError
   */
  public deleteGroupCategory(groupCategoryId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/group_categories/{group_category_id}",
      path: {
        group_category_id: groupCategoryId,
      },
    });
  }

  /**
   * Assign unassigned members
   * Assign all unassigned members as evenly as possible among the existing
   * student groups.
   * @param groupCategoryId ID
   * @param formData
   * @returns GroupMembership_Progress success
   * @throws ApiError
   */
  public assignUnassignedMembers(
    groupCategoryId: string,
    formData?: any,
  ): CancelablePromise<unknown> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/group_categories/{group_category_id}/assign_unassigned_members",
      path: {
        group_category_id: groupCategoryId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List group categories for a context
   * Returns a paginated list of group categories in a context
   * @param accountId ID
   * @returns GroupCategory success
   * @throws ApiError
   */
  public listGroupCategoriesForContextAccounts(
    accountId: string,
  ): CancelablePromise<Array<GroupCategory>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/group_categories",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Create a Group Category
   * Create a new group category
   * @param accountId ID
   * @param formData
   * @returns GroupCategory success
   * @throws ApiError
   */
  public createGroupCategoryAccounts(
    accountId: string,
    formData: any,
  ): CancelablePromise<GroupCategory> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/accounts/{account_id}/group_categories",
      path: {
        account_id: accountId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * export groups in and users in category
   * Returns a csv file of users in format ready to import.
   * @param groupCategoryId ID
   * @returns any success
   * @throws ApiError
   */
  public exportGroupsInAndUsersInCategory(
    groupCategoryId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/group_categories/{group_category_id}/export",
      path: {
        group_category_id: groupCategoryId,
      },
    });
  }

  /**
   * List group categories for a context
   * Returns a paginated list of group categories in a context
   * @param courseId ID
   * @returns GroupCategory success
   * @throws ApiError
   */
  public listGroupCategoriesForContextCourses(
    courseId: string,
  ): CancelablePromise<Array<GroupCategory>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/group_categories",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * Create a Group Category
   * Create a new group category
   * @param courseId ID
   * @param formData
   * @returns GroupCategory success
   * @throws ApiError
   */
  public createGroupCategoryCourses(
    courseId: string,
    formData: any,
  ): CancelablePromise<GroupCategory> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/group_categories",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List users in group category
   * Returns a paginated list of users in the group category.
   * @param groupCategoryId ID
   * @param searchTerm The partial name or full ID of the users to match and return in the results
   * list. Must be at least 3 characters.
   * @param unassigned Set this value to true if you wish only to search unassigned users in the
   * group category.
   * @returns User success
   * @throws ApiError
   */
  public listUsersInGroupCategory(
    groupCategoryId: string,
    searchTerm?: string,
    unassigned?: boolean,
  ): CancelablePromise<Array<User>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/group_categories/{group_category_id}/users",
      path: {
        group_category_id: groupCategoryId,
      },
      query: {
        search_term: searchTerm,
        unassigned: unassigned,
      },
    });
  }
}
