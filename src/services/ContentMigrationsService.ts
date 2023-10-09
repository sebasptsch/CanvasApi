/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContentMigration } from "../models/ContentMigration";
import type { MigrationIssue } from "../models/MigrationIssue";
import type { Migrator } from "../models/Migrator";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class ContentMigrationsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get a migration issue
   * Returns data on an individual migration issue
   * @param userId ID
   * @param contentMigrationId ID
   * @param id ID
   * @returns MigrationIssue success
   * @throws ApiError
   */
  public getMigrationIssueUsers(
    userId: string,
    contentMigrationId: string,
    id: string,
  ): CancelablePromise<MigrationIssue> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/content_migrations/{content_migration_id}/migration_issues/{id}",
      path: {
        user_id: userId,
        content_migration_id: contentMigrationId,
        id: id,
      },
    });
  }

  /**
   * Update a migration issue
   * Update the workflow_state of a migration issue
   * @param userId ID
   * @param contentMigrationId ID
   * @param id ID
   * @param formData
   * @returns MigrationIssue success
   * @throws ApiError
   */
  public updateMigrationIssueUsers(
    userId: string,
    contentMigrationId: string,
    id: string,
    formData: any,
  ): CancelablePromise<MigrationIssue> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/{user_id}/content_migrations/{content_migration_id}/migration_issues/{id}",
      path: {
        user_id: userId,
        content_migration_id: contentMigrationId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List content migrations
   * Returns paginated content migrations
   * @param userId ID
   * @returns ContentMigration success
   * @throws ApiError
   */
  public listContentMigrationsUsers(
    userId: string,
  ): CancelablePromise<Array<ContentMigration>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/content_migrations",
      path: {
        user_id: userId,
      },
    });
  }

  /**
   * Create a content migration
   * Create a content migration. If the migration requires a file to be uploaded
   * the actual processing of the file will start once the file upload process is completed.
   * File uploading works as described in the {file:file_uploads.html File Upload Documentation}
   * except that the values are set on a *pre_attachment* sub-hash.
   *
   * For migrations that don't require a file to be uploaded, like course copy, the
   * processing will begin as soon as the migration is created.
   *
   * You can use the {api:ProgressController#show Progress API} to track the
   * progress of the migration. The migration's progress is linked to with the
   * _progress_url_ value.
   *
   * The two general workflows are:
   *
   * If no file upload is needed:
   *
   * 1. POST to create
   * 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
   *
   * For file uploading:
   *
   * 1. POST to create with file info in *pre_attachment*
   * 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data
   * 3. {api:ContentMigrationsController#show GET} the ContentMigration
   * 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
   *
   * (required if doing .zip file upload)
   * @param userId ID
   * @param formData
   * @returns ContentMigration success
   * @throws ApiError
   */
  public createContentMigrationUsers(
    userId: string,
    formData: any,
  ): CancelablePromise<ContentMigration> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/users/{user_id}/content_migrations",
      path: {
        user_id: userId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a content migration
   * Returns data on an individual content migration
   * @param courseId ID
   * @param id ID
   * @returns ContentMigration success
   * @throws ApiError
   */
  public getContentMigrationCourses(
    courseId: string,
    id: string,
  ): CancelablePromise<ContentMigration> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/content_migrations/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
    });
  }

  /**
   * Update a content migration
   * Update a content migration. Takes same arguments as {api:ContentMigrationsController#create create} except that you
   * can't change the migration type. However, changing most settings after the
   * migration process has started will not do anything. Generally updating the
   * content migration will be used when there is a file upload problem, or when
   * importing content selectively. If the first upload has a problem you can
   * supply new _pre_attachment_ values to start the process again.
   * @param courseId ID
   * @param id ID
   * @returns ContentMigration success
   * @throws ApiError
   */
  public updateContentMigrationCourses(
    courseId: string,
    id: string,
  ): CancelablePromise<ContentMigration> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/content_migrations/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
    });
  }

  /**
   * List migration issues
   * Returns paginated migration issues
   * @param courseId ID
   * @param contentMigrationId ID
   * @returns MigrationIssue success
   * @throws ApiError
   */
  public listMigrationIssuesCourses(
    courseId: string,
    contentMigrationId: string,
  ): CancelablePromise<Array<MigrationIssue>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/content_migrations/{content_migration_id}/migration_issues",
      path: {
        course_id: courseId,
        content_migration_id: contentMigrationId,
      },
    });
  }

  /**
   * List content migrations
   * Returns paginated content migrations
   * @param courseId ID
   * @returns ContentMigration success
   * @throws ApiError
   */
  public listContentMigrationsCourses(
    courseId: string,
  ): CancelablePromise<Array<ContentMigration>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/content_migrations",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * Create a content migration
   * Create a content migration. If the migration requires a file to be uploaded
   * the actual processing of the file will start once the file upload process is completed.
   * File uploading works as described in the {file:file_uploads.html File Upload Documentation}
   * except that the values are set on a *pre_attachment* sub-hash.
   *
   * For migrations that don't require a file to be uploaded, like course copy, the
   * processing will begin as soon as the migration is created.
   *
   * You can use the {api:ProgressController#show Progress API} to track the
   * progress of the migration. The migration's progress is linked to with the
   * _progress_url_ value.
   *
   * The two general workflows are:
   *
   * If no file upload is needed:
   *
   * 1. POST to create
   * 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
   *
   * For file uploading:
   *
   * 1. POST to create with file info in *pre_attachment*
   * 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data
   * 3. {api:ContentMigrationsController#show GET} the ContentMigration
   * 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
   *
   * (required if doing .zip file upload)
   * @param courseId ID
   * @param formData
   * @returns ContentMigration success
   * @throws ApiError
   */
  public createContentMigrationCourses(
    courseId: string,
    formData: any,
  ): CancelablePromise<ContentMigration> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/content_migrations",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List Migration Systems
   * Lists the currently available migration types. These values may change.
   * @param courseId ID
   * @returns Migrator success
   * @throws ApiError
   */
  public listMigrationSystemsCourses(
    courseId: string,
  ): CancelablePromise<Array<Migrator>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/content_migrations/migrators",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * List Migration Systems
   * Lists the currently available migration types. These values may change.
   * @param userId ID
   * @returns Migrator success
   * @throws ApiError
   */
  public listMigrationSystemsUsers(
    userId: string,
  ): CancelablePromise<Array<Migrator>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/content_migrations/migrators",
      path: {
        user_id: userId,
      },
    });
  }

  /**
   * List content migrations
   * Returns paginated content migrations
   * @param groupId ID
   * @returns ContentMigration success
   * @throws ApiError
   */
  public listContentMigrationsGroups(
    groupId: string,
  ): CancelablePromise<Array<ContentMigration>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/content_migrations",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * Create a content migration
   * Create a content migration. If the migration requires a file to be uploaded
   * the actual processing of the file will start once the file upload process is completed.
   * File uploading works as described in the {file:file_uploads.html File Upload Documentation}
   * except that the values are set on a *pre_attachment* sub-hash.
   *
   * For migrations that don't require a file to be uploaded, like course copy, the
   * processing will begin as soon as the migration is created.
   *
   * You can use the {api:ProgressController#show Progress API} to track the
   * progress of the migration. The migration's progress is linked to with the
   * _progress_url_ value.
   *
   * The two general workflows are:
   *
   * If no file upload is needed:
   *
   * 1. POST to create
   * 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
   *
   * For file uploading:
   *
   * 1. POST to create with file info in *pre_attachment*
   * 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data
   * 3. {api:ContentMigrationsController#show GET} the ContentMigration
   * 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
   *
   * (required if doing .zip file upload)
   * @param groupId ID
   * @param formData
   * @returns ContentMigration success
   * @throws ApiError
   */
  public createContentMigrationGroups(
    groupId: string,
    formData: any,
  ): CancelablePromise<ContentMigration> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/groups/{group_id}/content_migrations",
      path: {
        group_id: groupId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a content migration
   * Returns data on an individual content migration
   * @param userId ID
   * @param id ID
   * @returns ContentMigration success
   * @throws ApiError
   */
  public getContentMigrationUsers(
    userId: string,
    id: string,
  ): CancelablePromise<ContentMigration> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/content_migrations/{id}",
      path: {
        user_id: userId,
        id: id,
      },
    });
  }

  /**
   * Update a content migration
   * Update a content migration. Takes same arguments as {api:ContentMigrationsController#create create} except that you
   * can't change the migration type. However, changing most settings after the
   * migration process has started will not do anything. Generally updating the
   * content migration will be used when there is a file upload problem, or when
   * importing content selectively. If the first upload has a problem you can
   * supply new _pre_attachment_ values to start the process again.
   * @param userId ID
   * @param id ID
   * @returns ContentMigration success
   * @throws ApiError
   */
  public updateContentMigrationUsers(
    userId: string,
    id: string,
  ): CancelablePromise<ContentMigration> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/{user_id}/content_migrations/{id}",
      path: {
        user_id: userId,
        id: id,
      },
    });
  }

  /**
   * List migration issues
   * Returns paginated migration issues
   * @param groupId ID
   * @param contentMigrationId ID
   * @returns MigrationIssue success
   * @throws ApiError
   */
  public listMigrationIssuesGroups(
    groupId: string,
    contentMigrationId: string,
  ): CancelablePromise<Array<MigrationIssue>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/content_migrations/{content_migration_id}/migration_issues",
      path: {
        group_id: groupId,
        content_migration_id: contentMigrationId,
      },
    });
  }

  /**
   * List Migration Systems
   * Lists the currently available migration types. These values may change.
   * @param groupId ID
   * @returns Migrator success
   * @throws ApiError
   */
  public listMigrationSystemsGroups(
    groupId: string,
  ): CancelablePromise<Array<Migrator>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/content_migrations/migrators",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * Get asset id mapping
   * Given a complete course copy or blueprint import content migration, return a mapping of asset ids
   * from the source course to the destination course that were copied in this migration or an earlier one
   * with the same course pair and migration_type (course copy or blueprint).
   *
   * The returned object's keys are asset types as they appear in API URLs (+announcements+, +assignments+,
   * +discussion_topics+, +files+, +module_items+, +modules+, +pages+, and +quizzes+). The values are a mapping
   * from id in source course to id in destination course for objects of this type.
   * @param courseId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public getAssetIdMapping(
    courseId: string,
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/content_migrations/{id}/asset_id_mapping",
      path: {
        course_id: courseId,
        id: id,
      },
    });
  }

  /**
   * List items for selective import
   * Enumerates the content available for selective import in a tree structure. Each node provides
   * a +property+ copy argument that can be supplied to the {api:ContentMigrationsController#update Update endpoint}
   * to selectively copy the content associated with that tree node and its children. Each node may also
   * provide a +sub_items_url+ or an array of +sub_items+ which you can use to obtain copy parameters
   * for a subset of the resources in a given node.
   *
   * If no +type+ is sent you will get a list of the top-level sections in the content. It will look something like this:
   *
   * [{
   * "type": "course_settings",
   * "property": "copy[all_course_settings]",
   * "title": "Course Settings"
   * },
   * {
   * "type": "context_modules",
   * "property": "copy[all_context_modules]",
   * "title": "Modules",
   * "count": 5,
   * "sub_items_url": "http://example.com/api/v1/courses/22/content_migrations/77/selective_data?type=context_modules"
   * },
   * {
   * "type": "assignments",
   * "property": "copy[all_assignments]",
   * "title": "Assignments",
   * "count": 2,
   * "sub_items_url": "http://localhost:3000/api/v1/courses/22/content_migrations/77/selective_data?type=assignments"
   * }]
   *
   * When a +type+ is provided, nodes may be further divided via +sub_items+. For example, using +type=assignments+
   * results in a node for each assignment group and a sub_item for each assignment, like this:
   *
   * [{
   * "type": "assignment_groups",
   * "title": "An Assignment Group",
   * "property": "copy[assignment_groups][id_i855cf145e5acc7435e1bf1c6e2126e5f]",
   * "sub_items": [{
   * "type": "assignments",
   * "title": "Assignment 1",
   * "property": "copy[assignments][id_i2102a7fa93b29226774949298626719d]"
   * }, {
   * "type": "assignments",
   * "title": "Assignment 2",
   * "property": "copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]"
   * }]
   * }]
   *
   *
   * To import the items corresponding to a particular tree node, use the +property+ as a parameter to the
   * {api:ContentMigrationsController#update Update endpoint} and assign a value of 1, for example:
   *
   * copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]=1
   *
   * You can include multiple copy parameters to selectively import multiple items or groups of items.
   * @param courseId ID
   * @param id ID
   * @param type The type of content to enumerate.
   * @returns unknown success
   * @throws ApiError
   */
  public listItemsForSelectiveImportCourses(
    courseId: string,
    id: string,
    type?:
      | "context_modules"
      | "assignments"
      | "quizzes"
      | "assessment_question_banks"
      | "discussion_topics"
      | "wiki_pages"
      | "context_external_tools"
      | "tool_profiles"
      | "announcements"
      | "calendar_events"
      | "rubrics"
      | "groups"
      | "learning_outcomes"
      | "attachments",
  ): CancelablePromise<unknown> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/content_migrations/{id}/selective_data",
      path: {
        course_id: courseId,
        id: id,
      },
      query: {
        type: type,
      },
    });
  }

  /**
   * List migration issues
   * Returns paginated migration issues
   * @param userId ID
   * @param contentMigrationId ID
   * @returns MigrationIssue success
   * @throws ApiError
   */
  public listMigrationIssuesUsers(
    userId: string,
    contentMigrationId: string,
  ): CancelablePromise<Array<MigrationIssue>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/content_migrations/{content_migration_id}/migration_issues",
      path: {
        user_id: userId,
        content_migration_id: contentMigrationId,
      },
    });
  }

  /**
   * List content migrations
   * Returns paginated content migrations
   * @param accountId ID
   * @returns ContentMigration success
   * @throws ApiError
   */
  public listContentMigrationsAccounts(
    accountId: string,
  ): CancelablePromise<Array<ContentMigration>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/content_migrations",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Create a content migration
   * Create a content migration. If the migration requires a file to be uploaded
   * the actual processing of the file will start once the file upload process is completed.
   * File uploading works as described in the {file:file_uploads.html File Upload Documentation}
   * except that the values are set on a *pre_attachment* sub-hash.
   *
   * For migrations that don't require a file to be uploaded, like course copy, the
   * processing will begin as soon as the migration is created.
   *
   * You can use the {api:ProgressController#show Progress API} to track the
   * progress of the migration. The migration's progress is linked to with the
   * _progress_url_ value.
   *
   * The two general workflows are:
   *
   * If no file upload is needed:
   *
   * 1. POST to create
   * 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
   *
   * For file uploading:
   *
   * 1. POST to create with file info in *pre_attachment*
   * 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data
   * 3. {api:ContentMigrationsController#show GET} the ContentMigration
   * 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
   *
   * (required if doing .zip file upload)
   * @param accountId ID
   * @param formData
   * @returns ContentMigration success
   * @throws ApiError
   */
  public createContentMigrationAccounts(
    accountId: string,
    formData: any,
  ): CancelablePromise<ContentMigration> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/accounts/{account_id}/content_migrations",
      path: {
        account_id: accountId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List Migration Systems
   * Lists the currently available migration types. These values may change.
   * @param accountId ID
   * @returns Migrator success
   * @throws ApiError
   */
  public listMigrationSystemsAccounts(
    accountId: string,
  ): CancelablePromise<Array<Migrator>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/content_migrations/migrators",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * List items for selective import
   * Enumerates the content available for selective import in a tree structure. Each node provides
   * a +property+ copy argument that can be supplied to the {api:ContentMigrationsController#update Update endpoint}
   * to selectively copy the content associated with that tree node and its children. Each node may also
   * provide a +sub_items_url+ or an array of +sub_items+ which you can use to obtain copy parameters
   * for a subset of the resources in a given node.
   *
   * If no +type+ is sent you will get a list of the top-level sections in the content. It will look something like this:
   *
   * [{
   * "type": "course_settings",
   * "property": "copy[all_course_settings]",
   * "title": "Course Settings"
   * },
   * {
   * "type": "context_modules",
   * "property": "copy[all_context_modules]",
   * "title": "Modules",
   * "count": 5,
   * "sub_items_url": "http://example.com/api/v1/courses/22/content_migrations/77/selective_data?type=context_modules"
   * },
   * {
   * "type": "assignments",
   * "property": "copy[all_assignments]",
   * "title": "Assignments",
   * "count": 2,
   * "sub_items_url": "http://localhost:3000/api/v1/courses/22/content_migrations/77/selective_data?type=assignments"
   * }]
   *
   * When a +type+ is provided, nodes may be further divided via +sub_items+. For example, using +type=assignments+
   * results in a node for each assignment group and a sub_item for each assignment, like this:
   *
   * [{
   * "type": "assignment_groups",
   * "title": "An Assignment Group",
   * "property": "copy[assignment_groups][id_i855cf145e5acc7435e1bf1c6e2126e5f]",
   * "sub_items": [{
   * "type": "assignments",
   * "title": "Assignment 1",
   * "property": "copy[assignments][id_i2102a7fa93b29226774949298626719d]"
   * }, {
   * "type": "assignments",
   * "title": "Assignment 2",
   * "property": "copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]"
   * }]
   * }]
   *
   *
   * To import the items corresponding to a particular tree node, use the +property+ as a parameter to the
   * {api:ContentMigrationsController#update Update endpoint} and assign a value of 1, for example:
   *
   * copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]=1
   *
   * You can include multiple copy parameters to selectively import multiple items or groups of items.
   * @param userId ID
   * @param id ID
   * @param type The type of content to enumerate.
   * @returns unknown success
   * @throws ApiError
   */
  public listItemsForSelectiveImportUsers(
    userId: string,
    id: string,
    type?:
      | "context_modules"
      | "assignments"
      | "quizzes"
      | "assessment_question_banks"
      | "discussion_topics"
      | "wiki_pages"
      | "context_external_tools"
      | "tool_profiles"
      | "announcements"
      | "calendar_events"
      | "rubrics"
      | "groups"
      | "learning_outcomes"
      | "attachments",
  ): CancelablePromise<unknown> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/content_migrations/{id}/selective_data",
      path: {
        user_id: userId,
        id: id,
      },
      query: {
        type: type,
      },
    });
  }

  /**
   * Get a migration issue
   * Returns data on an individual migration issue
   * @param courseId ID
   * @param contentMigrationId ID
   * @param id ID
   * @returns MigrationIssue success
   * @throws ApiError
   */
  public getMigrationIssueCourses(
    courseId: string,
    contentMigrationId: string,
    id: string,
  ): CancelablePromise<MigrationIssue> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/content_migrations/{content_migration_id}/migration_issues/{id}",
      path: {
        course_id: courseId,
        content_migration_id: contentMigrationId,
        id: id,
      },
    });
  }

  /**
   * Update a migration issue
   * Update the workflow_state of a migration issue
   * @param courseId ID
   * @param contentMigrationId ID
   * @param id ID
   * @param formData
   * @returns MigrationIssue success
   * @throws ApiError
   */
  public updateMigrationIssueCourses(
    courseId: string,
    contentMigrationId: string,
    id: string,
    formData: any,
  ): CancelablePromise<MigrationIssue> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/content_migrations/{content_migration_id}/migration_issues/{id}",
      path: {
        course_id: courseId,
        content_migration_id: contentMigrationId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a migration issue
   * Returns data on an individual migration issue
   * @param groupId ID
   * @param contentMigrationId ID
   * @param id ID
   * @returns MigrationIssue success
   * @throws ApiError
   */
  public getMigrationIssueGroups(
    groupId: string,
    contentMigrationId: string,
    id: string,
  ): CancelablePromise<MigrationIssue> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/content_migrations/{content_migration_id}/migration_issues/{id}",
      path: {
        group_id: groupId,
        content_migration_id: contentMigrationId,
        id: id,
      },
    });
  }

  /**
   * Update a migration issue
   * Update the workflow_state of a migration issue
   * @param groupId ID
   * @param contentMigrationId ID
   * @param id ID
   * @param formData
   * @returns MigrationIssue success
   * @throws ApiError
   */
  public updateMigrationIssueGroups(
    groupId: string,
    contentMigrationId: string,
    id: string,
    formData: any,
  ): CancelablePromise<MigrationIssue> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/groups/{group_id}/content_migrations/{content_migration_id}/migration_issues/{id}",
      path: {
        group_id: groupId,
        content_migration_id: contentMigrationId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a content migration
   * Returns data on an individual content migration
   * @param accountId ID
   * @param id ID
   * @returns ContentMigration success
   * @throws ApiError
   */
  public getContentMigrationAccounts(
    accountId: string,
    id: string,
  ): CancelablePromise<ContentMigration> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/content_migrations/{id}",
      path: {
        account_id: accountId,
        id: id,
      },
    });
  }

  /**
   * Update a content migration
   * Update a content migration. Takes same arguments as {api:ContentMigrationsController#create create} except that you
   * can't change the migration type. However, changing most settings after the
   * migration process has started will not do anything. Generally updating the
   * content migration will be used when there is a file upload problem, or when
   * importing content selectively. If the first upload has a problem you can
   * supply new _pre_attachment_ values to start the process again.
   * @param accountId ID
   * @param id ID
   * @returns ContentMigration success
   * @throws ApiError
   */
  public updateContentMigrationAccounts(
    accountId: string,
    id: string,
  ): CancelablePromise<ContentMigration> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/accounts/{account_id}/content_migrations/{id}",
      path: {
        account_id: accountId,
        id: id,
      },
    });
  }

  /**
   * List migration issues
   * Returns paginated migration issues
   * @param accountId ID
   * @param contentMigrationId ID
   * @returns MigrationIssue success
   * @throws ApiError
   */
  public listMigrationIssuesAccounts(
    accountId: string,
    contentMigrationId: string,
  ): CancelablePromise<Array<MigrationIssue>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues",
      path: {
        account_id: accountId,
        content_migration_id: contentMigrationId,
      },
    });
  }

  /**
   * Get a migration issue
   * Returns data on an individual migration issue
   * @param accountId ID
   * @param contentMigrationId ID
   * @param id ID
   * @returns MigrationIssue success
   * @throws ApiError
   */
  public getMigrationIssueAccounts(
    accountId: string,
    contentMigrationId: string,
    id: string,
  ): CancelablePromise<MigrationIssue> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues/{id}",
      path: {
        account_id: accountId,
        content_migration_id: contentMigrationId,
        id: id,
      },
    });
  }

  /**
   * Update a migration issue
   * Update the workflow_state of a migration issue
   * @param accountId ID
   * @param contentMigrationId ID
   * @param id ID
   * @param formData
   * @returns MigrationIssue success
   * @throws ApiError
   */
  public updateMigrationIssueAccounts(
    accountId: string,
    contentMigrationId: string,
    id: string,
    formData: any,
  ): CancelablePromise<MigrationIssue> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues/{id}",
      path: {
        account_id: accountId,
        content_migration_id: contentMigrationId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List items for selective import
   * Enumerates the content available for selective import in a tree structure. Each node provides
   * a +property+ copy argument that can be supplied to the {api:ContentMigrationsController#update Update endpoint}
   * to selectively copy the content associated with that tree node and its children. Each node may also
   * provide a +sub_items_url+ or an array of +sub_items+ which you can use to obtain copy parameters
   * for a subset of the resources in a given node.
   *
   * If no +type+ is sent you will get a list of the top-level sections in the content. It will look something like this:
   *
   * [{
   * "type": "course_settings",
   * "property": "copy[all_course_settings]",
   * "title": "Course Settings"
   * },
   * {
   * "type": "context_modules",
   * "property": "copy[all_context_modules]",
   * "title": "Modules",
   * "count": 5,
   * "sub_items_url": "http://example.com/api/v1/courses/22/content_migrations/77/selective_data?type=context_modules"
   * },
   * {
   * "type": "assignments",
   * "property": "copy[all_assignments]",
   * "title": "Assignments",
   * "count": 2,
   * "sub_items_url": "http://localhost:3000/api/v1/courses/22/content_migrations/77/selective_data?type=assignments"
   * }]
   *
   * When a +type+ is provided, nodes may be further divided via +sub_items+. For example, using +type=assignments+
   * results in a node for each assignment group and a sub_item for each assignment, like this:
   *
   * [{
   * "type": "assignment_groups",
   * "title": "An Assignment Group",
   * "property": "copy[assignment_groups][id_i855cf145e5acc7435e1bf1c6e2126e5f]",
   * "sub_items": [{
   * "type": "assignments",
   * "title": "Assignment 1",
   * "property": "copy[assignments][id_i2102a7fa93b29226774949298626719d]"
   * }, {
   * "type": "assignments",
   * "title": "Assignment 2",
   * "property": "copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]"
   * }]
   * }]
   *
   *
   * To import the items corresponding to a particular tree node, use the +property+ as a parameter to the
   * {api:ContentMigrationsController#update Update endpoint} and assign a value of 1, for example:
   *
   * copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]=1
   *
   * You can include multiple copy parameters to selectively import multiple items or groups of items.
   * @param groupId ID
   * @param id ID
   * @param type The type of content to enumerate.
   * @returns unknown success
   * @throws ApiError
   */
  public listItemsForSelectiveImportGroups(
    groupId: string,
    id: string,
    type?:
      | "context_modules"
      | "assignments"
      | "quizzes"
      | "assessment_question_banks"
      | "discussion_topics"
      | "wiki_pages"
      | "context_external_tools"
      | "tool_profiles"
      | "announcements"
      | "calendar_events"
      | "rubrics"
      | "groups"
      | "learning_outcomes"
      | "attachments",
  ): CancelablePromise<unknown> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/content_migrations/{id}/selective_data",
      path: {
        group_id: groupId,
        id: id,
      },
      query: {
        type: type,
      },
    });
  }

  /**
   * List items for selective import
   * Enumerates the content available for selective import in a tree structure. Each node provides
   * a +property+ copy argument that can be supplied to the {api:ContentMigrationsController#update Update endpoint}
   * to selectively copy the content associated with that tree node and its children. Each node may also
   * provide a +sub_items_url+ or an array of +sub_items+ which you can use to obtain copy parameters
   * for a subset of the resources in a given node.
   *
   * If no +type+ is sent you will get a list of the top-level sections in the content. It will look something like this:
   *
   * [{
   * "type": "course_settings",
   * "property": "copy[all_course_settings]",
   * "title": "Course Settings"
   * },
   * {
   * "type": "context_modules",
   * "property": "copy[all_context_modules]",
   * "title": "Modules",
   * "count": 5,
   * "sub_items_url": "http://example.com/api/v1/courses/22/content_migrations/77/selective_data?type=context_modules"
   * },
   * {
   * "type": "assignments",
   * "property": "copy[all_assignments]",
   * "title": "Assignments",
   * "count": 2,
   * "sub_items_url": "http://localhost:3000/api/v1/courses/22/content_migrations/77/selective_data?type=assignments"
   * }]
   *
   * When a +type+ is provided, nodes may be further divided via +sub_items+. For example, using +type=assignments+
   * results in a node for each assignment group and a sub_item for each assignment, like this:
   *
   * [{
   * "type": "assignment_groups",
   * "title": "An Assignment Group",
   * "property": "copy[assignment_groups][id_i855cf145e5acc7435e1bf1c6e2126e5f]",
   * "sub_items": [{
   * "type": "assignments",
   * "title": "Assignment 1",
   * "property": "copy[assignments][id_i2102a7fa93b29226774949298626719d]"
   * }, {
   * "type": "assignments",
   * "title": "Assignment 2",
   * "property": "copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]"
   * }]
   * }]
   *
   *
   * To import the items corresponding to a particular tree node, use the +property+ as a parameter to the
   * {api:ContentMigrationsController#update Update endpoint} and assign a value of 1, for example:
   *
   * copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]=1
   *
   * You can include multiple copy parameters to selectively import multiple items or groups of items.
   * @param accountId ID
   * @param id ID
   * @param type The type of content to enumerate.
   * @returns unknown success
   * @throws ApiError
   */
  public listItemsForSelectiveImportAccounts(
    accountId: string,
    id: string,
    type?:
      | "context_modules"
      | "assignments"
      | "quizzes"
      | "assessment_question_banks"
      | "discussion_topics"
      | "wiki_pages"
      | "context_external_tools"
      | "tool_profiles"
      | "announcements"
      | "calendar_events"
      | "rubrics"
      | "groups"
      | "learning_outcomes"
      | "attachments",
  ): CancelablePromise<unknown> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/content_migrations/{id}/selective_data",
      path: {
        account_id: accountId,
        id: id,
      },
      query: {
        type: type,
      },
    });
  }

  /**
   * Get a content migration
   * Returns data on an individual content migration
   * @param groupId ID
   * @param id ID
   * @returns ContentMigration success
   * @throws ApiError
   */
  public getContentMigrationGroups(
    groupId: string,
    id: string,
  ): CancelablePromise<ContentMigration> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/content_migrations/{id}",
      path: {
        group_id: groupId,
        id: id,
      },
    });
  }

  /**
   * Update a content migration
   * Update a content migration. Takes same arguments as {api:ContentMigrationsController#create create} except that you
   * can't change the migration type. However, changing most settings after the
   * migration process has started will not do anything. Generally updating the
   * content migration will be used when there is a file upload problem, or when
   * importing content selectively. If the first upload has a problem you can
   * supply new _pre_attachment_ values to start the process again.
   * @param groupId ID
   * @param id ID
   * @returns ContentMigration success
   * @throws ApiError
   */
  public updateContentMigrationGroups(
    groupId: string,
    id: string,
  ): CancelablePromise<ContentMigration> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/groups/{group_id}/content_migrations/{id}",
      path: {
        group_id: groupId,
        id: id,
      },
    });
  }
}
