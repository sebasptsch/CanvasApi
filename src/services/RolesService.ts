/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Role } from "../models/Role";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class RolesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Activate a role
   * Re-activates an inactive role (allowing it to be assigned to new users)
   * @param accountId ID
   * @param id ID
   * @param formData
   * @returns Role success
   * @throws ApiError
   */
  public activateRole(
    accountId: string,
    id: string,
    formData: any,
  ): CancelablePromise<Role> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/accounts/{account_id}/roles/{id}/activate",
      path: {
        account_id: accountId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a single role
   * Retrieve information about a single role
   * @param id ID
   * @param accountId The id of the account containing the role
   * @param roleId The unique identifier for the role
   * @param role The name for the role
   * @returns Role success
   * @throws ApiError
   */
  public getSingleRole(
    id: string,
    accountId: string,
    roleId: number,
    role?: string,
  ): CancelablePromise<Role> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/roles/{id}",
      path: {
        id: id,
        account_id: accountId,
      },
      query: {
        role_id: roleId,
        role: role,
      },
    });
  }

  /**
   * Update a role
   * Update permissions for an existing role.
   *
   * Recognized roles are:
   * * TeacherEnrollment
   * * StudentEnrollment
   * * TaEnrollment
   * * ObserverEnrollment
   * * DesignerEnrollment
   * * AccountAdmin
   * * Any previously created custom role
   * @param accountId ID
   * @param id ID
   * @param formData
   * @returns Role success
   * @throws ApiError
   */
  public updateRole(
    accountId: string,
    id: string,
    formData?: any,
  ): CancelablePromise<Role> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/accounts/{account_id}/roles/{id}",
      path: {
        account_id: accountId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Deactivate a role
   * Deactivates a custom role.  This hides it in the user interface and prevents it
   * from being assigned to new users.  Existing users assigned to the role will
   * continue to function with the same permissions they had previously.
   * Built-in roles cannot be deactivated.
   * @param accountId ID
   * @param id ID
   * @param roleId The unique identifier for the role
   * @param role The name for the role
   * @returns Role success
   * @throws ApiError
   */
  public deactivateRole(
    accountId: string,
    id: string,
    roleId: number,
    role?: string,
  ): CancelablePromise<Role> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/accounts/{account_id}/roles/{id}",
      path: {
        account_id: accountId,
        id: id,
      },
      query: {
        role_id: roleId,
        role: role,
      },
    });
  }

  /**
   * List roles
   * A paginated list of the roles available to an account.
   * @param accountId The id of the account to retrieve roles for.
   * @param state Filter by role state. If this argument is omitted, only 'active' roles are
   * returned.
   * @param showInherited If this argument is true, all roles inherited from parent accounts will
   * be included.
   * @returns Role success
   * @throws ApiError
   */
  public listRoles(
    accountId: string,
    state?: "active" | "inactive",
    showInherited?: boolean,
  ): CancelablePromise<Array<Role>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/roles",
      path: {
        account_id: accountId,
      },
      query: {
        state: state,
        show_inherited: showInherited,
      },
    });
  }

  /**
   * Create a new role
   * Create a new course-level or account-level role.
   * @param accountId ID
   * @param formData
   * @returns Role success
   * @throws ApiError
   */
  public createNewRole(
    accountId: string,
    formData: any,
  ): CancelablePromise<Role> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/accounts/{account_id}/roles",
      path: {
        account_id: accountId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
