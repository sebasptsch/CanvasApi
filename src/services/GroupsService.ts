/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Group } from "../models/Group";
import type { GroupMembership } from "../models/GroupMembership";
import type { User } from "../models/User";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class GroupsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Upload a file
   * Upload a file to the group.
   *
   * This API endpoint is the first step in uploading a file to a group.
   * See the {file:file_uploads.html File Upload Documentation} for details on
   * the file upload workflow.
   *
   * Only those with the "Manage Files" permission on a group can upload files
   * to the group. By default, this is anybody participating in the
   * group, or any admin over the group.
   * @param groupId ID
   * @returns any success
   * @throws ApiError
   */
  public uploadFile(groupId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/groups/{group_id}/files",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * Create a group
   * Creates a new group. Groups created using the "/api/v1/groups/"
   * endpoint will be community groups.
   * @param groupCategoryId ID
   * @param formData
   * @returns Group success
   * @throws ApiError
   */
  public createGroupGroupCategories(
    groupCategoryId: string,
    formData?: any,
  ): CancelablePromise<Group> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/group_categories/{group_category_id}/groups",
      path: {
        group_category_id: groupCategoryId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Invite others to a group
   * Sends an invitation to all supplied email addresses which will allow the
   * receivers to join the group.
   * @param groupId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public inviteOthersToGroup(
    groupId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/groups/{group_id}/invite",
      path: {
        group_id: groupId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Preview processed html
   * Preview html content processed for this group
   * @param groupId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public previewProcessedHtml(
    groupId: string,
    formData?: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/groups/{group_id}/preview_html",
      path: {
        group_id: groupId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a single group membership
   * Returns the group membership with the given membership id or user id.
   * @param groupId ID
   * @param userId ID
   * @returns GroupMembership success
   * @throws ApiError
   */
  public getSingleGroupMembershipUsers(
    groupId: string,
    userId: string,
  ): CancelablePromise<GroupMembership> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/users/{user_id}",
      path: {
        group_id: groupId,
        user_id: userId,
      },
    });
  }

  /**
   * Update a membership
   * Accept a membership request, or add/remove moderator rights.
   * @param groupId ID
   * @param userId ID
   * @param formData
   * @returns GroupMembership success
   * @throws ApiError
   */
  public updateMembershipUsers(
    groupId: string,
    userId: string,
    formData?: any,
  ): CancelablePromise<GroupMembership> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/groups/{group_id}/users/{user_id}",
      path: {
        group_id: groupId,
        user_id: userId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Leave a group
   * Leave a group if you are allowed to leave (some groups, such as sets of
   * course groups created by teachers, cannot be left). You may also use 'self'
   * in place of a membership_id.
   * @param groupId ID
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public leaveGroupUsers(
    groupId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/groups/{group_id}/users/{user_id}",
      path: {
        group_id: groupId,
        user_id: userId,
      },
    });
  }

  /**
   * List the groups available in a context.
   * Returns the paginated list of active groups in the given context that are visible to user.
   * @param accountId ID
   * @param onlyOwnGroups Will only include groups that the user belongs to if this is set
   * @param include - "tabs": Include the list of tabs configured for each group.  See the
   * {api:TabsController#index List available tabs API} for more information.
   * @returns Group success
   * @throws ApiError
   */
  public listGroupsAvailableInContextAccounts(
    accountId: string,
    onlyOwnGroups?: boolean,
    include?: "tabs",
  ): CancelablePromise<Array<Group>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/groups",
      path: {
        account_id: accountId,
      },
      query: {
        only_own_groups: onlyOwnGroups,
        include: include,
      },
    });
  }

  /**
   * List the groups available in a context.
   * Returns the paginated list of active groups in the given context that are visible to user.
   * @param courseId ID
   * @param onlyOwnGroups Will only include groups that the user belongs to if this is set
   * @param include - "tabs": Include the list of tabs configured for each group.  See the
   * {api:TabsController#index List available tabs API} for more information.
   * @returns Group success
   * @throws ApiError
   */
  public listGroupsAvailableInContextCourses(
    courseId: string,
    onlyOwnGroups?: boolean,
    include?: "tabs",
  ): CancelablePromise<Array<Group>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/groups",
      path: {
        course_id: courseId,
      },
      query: {
        only_own_groups: onlyOwnGroups,
        include: include,
      },
    });
  }

  /**
   * List group memberships
   * A paginated list of the members of a group.
   * @param groupId ID
   * @param filterStates Only list memberships with the given workflow_states. By default it will
   * return all memberships.
   * @returns GroupMembership success
   * @throws ApiError
   */
  public listGroupMemberships(
    groupId: string,
    filterStates?: "accepted" | "invited" | "requested",
  ): CancelablePromise<Array<GroupMembership>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/memberships",
      path: {
        group_id: groupId,
      },
      query: {
        filter_states: filterStates,
      },
    });
  }

  /**
   * Create a membership
   * Join, or request to join, a group, depending on the join_level of the
   * group.  If the membership or join request already exists, then it is simply
   * returned
   * @param groupId ID
   * @param formData
   * @returns GroupMembership success
   * @throws ApiError
   */
  public createMembership(
    groupId: string,
    formData?: any,
  ): CancelablePromise<GroupMembership> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/groups/{group_id}/memberships",
      path: {
        group_id: groupId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List your groups
   * Returns a paginated list of active groups for the current user.
   * @param contextType Only include groups that are in this type of context.
   * @param include - "tabs": Include the list of tabs configured for each group.  See the
   * {api:TabsController#index List available tabs API} for more information.
   * @returns Group success
   * @throws ApiError
   */
  public listYourGroups(
    contextType?: "Account" | "Course",
    include?: "tabs",
  ): CancelablePromise<Array<Group>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/self/groups",
      query: {
        context_type: contextType,
        include: include,
      },
    });
  }

  /**
   * Permissions
   * Returns permission information for the calling user in the given group.
   * See also the {api:AccountsController#permissions Account} and
   * {api:CoursesController#permissions Course} counterparts.
   * @param groupId ID
   * @param permissions List of permissions to check against the authenticated user.
   * Permission names are documented in the {api:RoleOverridesController#add_role Create a role} endpoint.
   * @returns any success
   * @throws ApiError
   */
  public permissions(
    groupId: string,
    permissions?: Array<string>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/permissions",
      path: {
        group_id: groupId,
      },
      query: {
        permissions: permissions,
      },
    });
  }

  /**
   * List group's users
   * Returns a paginated list of users in the group.
   * @param groupId ID
   * @param searchTerm The partial name or full ID of the users to match and return in the
   * results list. Must be at least 3 characters.
   * @param include "avatar_url": Include users' avatar_urls.
   * @param excludeInactive Whether to filter out inactive users from the results. Defaults to
   * false unless explicitly provided.
   * @returns User success
   * @throws ApiError
   */
  public listGroupSUsers(
    groupId: string,
    searchTerm?: string,
    include?: "avatar_url",
    excludeInactive?: boolean,
  ): CancelablePromise<Array<User>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/users",
      path: {
        group_id: groupId,
      },
      query: {
        search_term: searchTerm,
        include: include,
        exclude_inactive: excludeInactive,
      },
    });
  }

  /**
   * Get a single group
   * Returns the data for a single group, or a 401 if the caller doesn't have
   * the rights to see it.
   * @param groupId ID
   * @param include - "permissions": Include permissions the current user has
   * for the group.
   * - "tabs": Include the list of tabs configured for each group.  See the
   * {api:TabsController#index List available tabs API} for more information.
   * @returns Group success
   * @throws ApiError
   */
  public getSingleGroup(
    groupId: string,
    include?: "permissions" | "tabs",
  ): CancelablePromise<Group> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}",
      path: {
        group_id: groupId,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Edit a group
   * Modifies an existing group.  Note that to set an avatar image for the
   * group, you must first upload the image file to the group, and the use the
   * id in the response as the argument to this function.  See the
   * {file:file_uploads.html File Upload Documentation} for details on the file
   * upload workflow.
   * @param groupId ID
   * @param formData
   * @returns Group success
   * @throws ApiError
   */
  public editGroup(groupId: string, formData?: any): CancelablePromise<Group> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/groups/{group_id}",
      path: {
        group_id: groupId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete a group
   * Deletes a group and removes all members.
   * @param groupId ID
   * @returns Group success
   * @throws ApiError
   */
  public deleteGroup(groupId: string): CancelablePromise<Group> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/groups/{group_id}",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * Create a group
   * Creates a new group. Groups created using the "/api/v1/groups/"
   * endpoint will be community groups.
   * @param formData
   * @returns Group success
   * @throws ApiError
   */
  public createGroupGroups(formData?: any): CancelablePromise<Group> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/groups",
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Group activity stream
   * Returns the current user's group-specific activity stream, paginated.
   *
   * For full documentation, see the API documentation for the user activity
   * stream, in the user api.
   * @param groupId ID
   * @returns any success
   * @throws ApiError
   */
  public groupActivityStream(groupId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/activity_stream",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * Get a single group membership
   * Returns the group membership with the given membership id or user id.
   * @param groupId ID
   * @param membershipId ID
   * @returns GroupMembership success
   * @throws ApiError
   */
  public getSingleGroupMembershipMemberships(
    groupId: string,
    membershipId: string,
  ): CancelablePromise<GroupMembership> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/memberships/{membership_id}",
      path: {
        group_id: groupId,
        membership_id: membershipId,
      },
    });
  }

  /**
   * Update a membership
   * Accept a membership request, or add/remove moderator rights.
   * @param groupId ID
   * @param membershipId ID
   * @param formData
   * @returns GroupMembership success
   * @throws ApiError
   */
  public updateMembershipMemberships(
    groupId: string,
    membershipId: string,
    formData?: any,
  ): CancelablePromise<GroupMembership> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/groups/{group_id}/memberships/{membership_id}",
      path: {
        group_id: groupId,
        membership_id: membershipId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Leave a group
   * Leave a group if you are allowed to leave (some groups, such as sets of
   * course groups created by teachers, cannot be left). You may also use 'self'
   * in place of a membership_id.
   * @param groupId ID
   * @param membershipId ID
   * @returns any success
   * @throws ApiError
   */
  public leaveGroupMemberships(
    groupId: string,
    membershipId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/groups/{group_id}/memberships/{membership_id}",
      path: {
        group_id: groupId,
        membership_id: membershipId,
      },
    });
  }

  /**
   * Group activity stream summary
   * Returns a summary of the current user's group-specific activity stream.
   *
   * For full documentation, see the API documentation for the user activity
   * stream summary, in the user api.
   * @param groupId ID
   * @returns any success
   * @throws ApiError
   */
  public groupActivityStreamSummary(groupId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/activity_stream/summary",
      path: {
        group_id: groupId,
      },
    });
  }
}
