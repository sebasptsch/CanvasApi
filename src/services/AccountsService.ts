/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from "../models/Account";
import type { HelpLinks } from "../models/HelpLinks";
import type { TermsOfService } from "../models/TermsOfService";
import type { User } from "../models/User";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class AccountsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get a single account
   * Retrieve information on an individual account, given by id or sis
   * sis_account_id.
   * @param id ID
   * @returns Account success
   * @throws ApiError
   */
  public getSingleAccount(id: string): CancelablePromise<Account> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * Update an account
   * Update an existing account.
   * @param id ID
   * @param formData
   * @returns Account success
   * @throws ApiError
   */
  public updateAccount(id: string, formData?: any): CancelablePromise<Account> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/accounts/{id}",
      path: {
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List accounts for course admins
   * A paginated list of accounts that the current user can view through their
   * admin course enrollments. (Teacher, TA, or designer enrollments).
   * Only returns "id", "name", "workflow_state", "root_account_id" and "parent_account_id"
   * @returns Account success
   * @throws ApiError
   */
  public listAccountsForCourseAdmins(): CancelablePromise<Array<Account>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/course_accounts",
    });
  }

  /**
   * Permissions
   * Returns permission information for the calling user and the given account.
   * You may use `self` as the account id to check permissions against the domain root account.
   * The caller must have an account role or admin (teacher/TA/designer) enrollment in a course
   * in the account.
   *
   * See also the {api:CoursesController#permissions Course} and {api:GroupsController#permissions Group}
   * counterparts.
   * @param accountId ID
   * @param permissions List of permissions to check against the authenticated user.
   * Permission names are documented in the {api:RoleOverridesController#add_role Create a role} endpoint.
   * @returns any success
   * @throws ApiError
   */
  public permissions(
    accountId: string,
    permissions?: Array<string>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/permissions",
      path: {
        account_id: accountId,
      },
      query: {
        permissions: permissions,
      },
    });
  }

  /**
   * Get help links
   * Returns the help links for that account
   * @param accountId ID
   * @returns HelpLinks success
   * @throws ApiError
   */
  public getHelpLinks(accountId: string): CancelablePromise<HelpLinks> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/help_links",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Get the manually-created courses sub-account for the domain root account
   * @returns Account success
   * @throws ApiError
   */
  public getManuallyCreatedCoursesSubAccountForDomainRootAccount(): CancelablePromise<Account> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/manually_created_courses_account",
    });
  }

  /**
   * List accounts
   * A paginated list of accounts that the current user can view or manage.
   * Typically, students and even teachers will get an empty list in response,
   * only account admins can view the accounts that they are in.
   * @param include Array of additional information to include.
   *
   * "lti_guid":: the 'tool_consumer_instance_guid' that will be sent for this account on LTI launches
   * "registration_settings":: returns info about the privacy policy and terms of use
   * "services":: returns services and whether they are enabled (requires account management permissions)
   * @returns Account success
   * @throws ApiError
   */
  public listAccounts(
    include?: "lti_guid" | "registration_settings" | "services",
  ): CancelablePromise<Array<Account>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts",
      query: {
        include: include,
      },
    });
  }

  /**
   * Get the sub-accounts of an account
   * List accounts that are sub-accounts of the given account.
   * @param accountId ID
   * @param recursive If true, the entire account tree underneath
   * this account will be returned (though still paginated). If false, only
   * direct sub-accounts of this account will be returned. Defaults to false.
   * @returns Account success
   * @throws ApiError
   */
  public getSubAccountsOfAccount(
    accountId: string,
    recursive?: boolean,
  ): CancelablePromise<Array<Account>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/sub_accounts",
      path: {
        account_id: accountId,
      },
      query: {
        recursive: recursive,
      },
    });
  }

  /**
   * Create a new sub-account
   * Add a new sub-account to a given account.
   * @param accountId ID
   * @param formData
   * @returns Account success
   * @throws ApiError
   */
  public createNewSubAccount(
    accountId: string,
    formData: any,
  ): CancelablePromise<Account> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/accounts/{account_id}/sub_accounts",
      path: {
        account_id: accountId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get the Terms of Service
   * Returns the terms of service for that account
   * @param accountId ID
   * @returns TermsOfService success
   * @throws ApiError
   */
  public getTermsOfService(
    accountId: string,
  ): CancelablePromise<TermsOfService> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/terms_of_service",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Get accounts that users can create courses in
   * A paginated list of accounts where the current user has permission to create
   * courses.
   * @returns Account success
   * @throws ApiError
   */
  public getAccountsThatUsersCanCreateCoursesIn(): CancelablePromise<
    Array<Account>
  > {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/course_creation_accounts",
    });
  }

  /**
   * Delete a sub-account
   * Cannot delete an account with active courses or active sub_accounts.
   * Cannot delete a root_account
   * @param accountId ID
   * @param id ID
   * @returns Account success
   * @throws ApiError
   */
  public deleteSubAccount(
    accountId: string,
    id: string,
  ): CancelablePromise<Account> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/accounts/{account_id}/sub_accounts/{id}",
      path: {
        account_id: accountId,
        id: id,
      },
    });
  }

  /**
   * Get accounts that admins can manage
   * A paginated list of accounts where the current user has permission to create
   * or manage courses. List will be empty for students and teachers as only admins
   * can view which accounts they are in.
   * @returns Account success
   * @throws ApiError
   */
  public getAccountsThatAdminsCanManage(): CancelablePromise<Array<Account>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/manageable_accounts",
    });
  }

  /**
   * Settings
   * Returns a JSON object containing a subset of settings for the specified account.
   * It's possible an empty set will be returned if no settings are applicable.
   * The caller must be an Account admin with the manage_account_settings permission.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public settings(accountId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/settings",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Delete a user from the root account
   * Delete a user record from a Canvas root account. If a user is associated
   * with multiple root accounts (in a multi-tenant instance of Canvas), this
   * action will NOT remove them from the other accounts.
   *
   * WARNING: This API will allow a user to remove themselves from the account.
   * If they do this, they won't be able to make API calls or log into Canvas at
   * that account.
   * @param accountId ID
   * @param userId ID
   * @returns User success
   * @throws ApiError
   */
  public deleteUserFromRootAccount(
    accountId: string,
    userId: string,
  ): CancelablePromise<User> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/accounts/{account_id}/users/{user_id}",
      path: {
        account_id: accountId,
        user_id: userId,
      },
    });
  }
}
