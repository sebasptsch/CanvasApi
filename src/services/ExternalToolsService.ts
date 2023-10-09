/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class ExternalToolsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get visible course navigation tools
   * Get a list of external tools with the course_navigation placement that have not been hidden in
   * course settings and whose visibility settings apply to the requesting user. These tools are the
   * same that appear in the course navigation.
   *
   * The response format is the same as for List external tools, but with additional context_id and
   * context_name fields on each element in the array.
   * @param contextCodes List of context_codes to retrieve visible course nav tools for (for example, +course_123+). Only
   * courses are presently supported.
   * @returns any success
   * @throws ApiError
   */
  public getVisibleCourseNavigationTools(
    contextCodes: Array<string>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/external_tools/visible_course_nav_tools",
      query: {
        context_codes: contextCodes,
      },
    });
  }

  /**
   * Get visible course navigation tools for a single course
   * Get a list of external tools with the course_navigation placement that have not been hidden in
   * course settings and whose visibility settings apply to the requesting user. These tools are the
   * same that appear in the course navigation.
   *
   * The response format is the same as Get visible course navigation tools.
   * @param courseId ID
   * @returns any success
   * @throws ApiError
   */
  public getVisibleCourseNavigationToolsForSingleCourse(
    courseId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/external_tools/visible_course_nav_tools",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * Get a single external tool
   * Returns the specified external tool.
   * @param courseId ID
   * @param externalToolId ID
   * @returns any success
   * @throws ApiError
   */
  public getSingleExternalToolCourses(
    courseId: string,
    externalToolId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/external_tools/{external_tool_id}",
      path: {
        course_id: courseId,
        external_tool_id: externalToolId,
      },
    });
  }

  /**
   * Edit an external tool
   * Update the specified external tool. Uses same parameters as create
   * @param courseId ID
   * @param externalToolId ID
   * @returns any success
   * @throws ApiError
   */
  public editExternalToolCourses(
    courseId: string,
    externalToolId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/external_tools/{external_tool_id}",
      path: {
        course_id: courseId,
        external_tool_id: externalToolId,
      },
    });
  }

  /**
   * Delete an external tool
   * Remove the specified external tool
   * @param courseId ID
   * @param externalToolId ID
   * @returns any success
   * @throws ApiError
   */
  public deleteExternalToolCourses(
    courseId: string,
    externalToolId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/external_tools/{external_tool_id}",
      path: {
        course_id: courseId,
        external_tool_id: externalToolId,
      },
    });
  }

  /**
   * Add tool to RCE Favorites
   * Add the specified editor_button external tool to a preferred location in the RCE
   * for courses in the given account and its subaccounts (if the subaccounts
   * haven't set their own RCE Favorites). Cannot set more than 2 RCE Favorites.
   * @param accountId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public addToolToRceFavorites(
    accountId: string,
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/accounts/{account_id}/external_tools/rce_favorites/{id}",
      path: {
        account_id: accountId,
        id: id,
      },
    });
  }

  /**
   * Remove tool from RCE Favorites
   * Remove the specified external tool from a preferred location in the RCE
   * for the given account
   * @param accountId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public removeToolFromRceFavorites(
    accountId: string,
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/accounts/{account_id}/external_tools/rce_favorites/{id}",
      path: {
        account_id: accountId,
        id: id,
      },
    });
  }

  /**
   * List external tools
   * Returns the paginated list of external tools for the current context.
   * See the get request docs for a single tool for a list of properties on an external tool.
   * @param groupId ID
   * @param searchTerm The partial name of the tools to match and return.
   * @param selectable If true, then only tools that are meant to be selectable are returned.
   * @param includeParents If true, then include tools installed in all accounts above the current context
   * @param placement The placement type to filter by.
   * @returns any success
   * @throws ApiError
   */
  public listExternalToolsGroups(
    groupId: string,
    searchTerm?: string,
    selectable?: boolean,
    includeParents?: boolean,
    placement?: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/external_tools",
      path: {
        group_id: groupId,
      },
      query: {
        search_term: searchTerm,
        selectable: selectable,
        include_parents: includeParents,
        placement: placement,
      },
    });
  }

  /**
   * Get a sessionless launch url for an external tool.
   * Returns a sessionless launch url for an external tool.
   * Prefers the resource_link_lookup_uuid, but defaults to the other passed
   * parameters id, url, and launch_type
   *
   * NOTE: Either the resource_link_lookup_uuid, id, or url must be provided unless launch_type is assessment or module_item.
   * @param courseId ID
   * @param id The external id of the tool to launch.
   * @param url The LTI launch url for the external tool.
   * @param assignmentId The assignment id for an assignment launch. Required if launch_type is set to "assessment".
   * @param moduleItemId The assignment id for a module item launch. Required if launch_type is set to "module_item".
   * @param launchType The type of launch to perform on the external tool. Placement names (eg. "course_navigation")
   * can also be specified to use the custom launch url for that placement; if done, the tool id
   * must be provided.
   * @param resourceLinkLookupUuid The identifier to lookup a resource link.
   * @returns any success
   * @throws ApiError
   */
  public getSessionlessLaunchUrlForExternalToolCourses(
    courseId: string,
    id?: string,
    url?: string,
    assignmentId?: string,
    moduleItemId?: string,
    launchType?: "assessment" | "module_item",
    resourceLinkLookupUuid?: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/external_tools/sessionless_launch",
      path: {
        course_id: courseId,
      },
      query: {
        id: id,
        url: url,
        assignment_id: assignmentId,
        module_item_id: moduleItemId,
        launch_type: launchType,
        resource_link_lookup_uuid: resourceLinkLookupUuid,
      },
    });
  }

  /**
   * List external tools
   * Returns the paginated list of external tools for the current context.
   * See the get request docs for a single tool for a list of properties on an external tool.
   * @param accountId ID
   * @param searchTerm The partial name of the tools to match and return.
   * @param selectable If true, then only tools that are meant to be selectable are returned.
   * @param includeParents If true, then include tools installed in all accounts above the current context
   * @param placement The placement type to filter by.
   * @returns any success
   * @throws ApiError
   */
  public listExternalToolsAccounts(
    accountId: string,
    searchTerm?: string,
    selectable?: boolean,
    includeParents?: boolean,
    placement?: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/external_tools",
      path: {
        account_id: accountId,
      },
      query: {
        search_term: searchTerm,
        selectable: selectable,
        include_parents: includeParents,
        placement: placement,
      },
    });
  }

  /**
   * Create an external tool
   * Create an external tool in the specified course/account.
   * The created tool will be returned, see the "show" endpoint for an example.
   * If a client ID is supplied canvas will attempt to create a context external
   * tool using the LTI 1.3 standard.
   * @param accountId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public createExternalToolAccounts(
    accountId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/accounts/{account_id}/external_tools",
      path: {
        account_id: accountId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a sessionless launch url for an external tool.
   * Returns a sessionless launch url for an external tool.
   * Prefers the resource_link_lookup_uuid, but defaults to the other passed
   * parameters id, url, and launch_type
   *
   * NOTE: Either the resource_link_lookup_uuid, id, or url must be provided unless launch_type is assessment or module_item.
   * @param accountId ID
   * @param id The external id of the tool to launch.
   * @param url The LTI launch url for the external tool.
   * @param assignmentId The assignment id for an assignment launch. Required if launch_type is set to "assessment".
   * @param moduleItemId The assignment id for a module item launch. Required if launch_type is set to "module_item".
   * @param launchType The type of launch to perform on the external tool. Placement names (eg. "course_navigation")
   * can also be specified to use the custom launch url for that placement; if done, the tool id
   * must be provided.
   * @param resourceLinkLookupUuid The identifier to lookup a resource link.
   * @returns any success
   * @throws ApiError
   */
  public getSessionlessLaunchUrlForExternalToolAccounts(
    accountId: string,
    id?: string,
    url?: string,
    assignmentId?: string,
    moduleItemId?: string,
    launchType?: "assessment" | "module_item",
    resourceLinkLookupUuid?: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/external_tools/sessionless_launch",
      path: {
        account_id: accountId,
      },
      query: {
        id: id,
        url: url,
        assignment_id: assignmentId,
        module_item_id: moduleItemId,
        launch_type: launchType,
        resource_link_lookup_uuid: resourceLinkLookupUuid,
      },
    });
  }

  /**
   * Get a single external tool
   * Returns the specified external tool.
   * @param accountId ID
   * @param externalToolId ID
   * @returns any success
   * @throws ApiError
   */
  public getSingleExternalToolAccounts(
    accountId: string,
    externalToolId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/external_tools/{external_tool_id}",
      path: {
        account_id: accountId,
        external_tool_id: externalToolId,
      },
    });
  }

  /**
   * Edit an external tool
   * Update the specified external tool. Uses same parameters as create
   * @param accountId ID
   * @param externalToolId ID
   * @returns any success
   * @throws ApiError
   */
  public editExternalToolAccounts(
    accountId: string,
    externalToolId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/accounts/{account_id}/external_tools/{external_tool_id}",
      path: {
        account_id: accountId,
        external_tool_id: externalToolId,
      },
    });
  }

  /**
   * Delete an external tool
   * Remove the specified external tool
   * @param accountId ID
   * @param externalToolId ID
   * @returns any success
   * @throws ApiError
   */
  public deleteExternalToolAccounts(
    accountId: string,
    externalToolId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/accounts/{account_id}/external_tools/{external_tool_id}",
      path: {
        account_id: accountId,
        external_tool_id: externalToolId,
      },
    });
  }

  /**
   * List external tools
   * Returns the paginated list of external tools for the current context.
   * See the get request docs for a single tool for a list of properties on an external tool.
   * @param courseId ID
   * @param searchTerm The partial name of the tools to match and return.
   * @param selectable If true, then only tools that are meant to be selectable are returned.
   * @param includeParents If true, then include tools installed in all accounts above the current context
   * @param placement The placement type to filter by.
   * @returns any success
   * @throws ApiError
   */
  public listExternalToolsCourses(
    courseId: string,
    searchTerm?: string,
    selectable?: boolean,
    includeParents?: boolean,
    placement?: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/external_tools",
      path: {
        course_id: courseId,
      },
      query: {
        search_term: searchTerm,
        selectable: selectable,
        include_parents: includeParents,
        placement: placement,
      },
    });
  }

  /**
   * Create an external tool
   * Create an external tool in the specified course/account.
   * The created tool will be returned, see the "show" endpoint for an example.
   * If a client ID is supplied canvas will attempt to create a context external
   * tool using the LTI 1.3 standard.
   * @param courseId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public createExternalToolCourses(
    courseId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/external_tools",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
