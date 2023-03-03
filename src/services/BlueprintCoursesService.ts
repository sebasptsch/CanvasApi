/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlueprintMigration } from '../models/BlueprintMigration';
import type { BlueprintSubscription } from '../models/BlueprintSubscription';
import type { BlueprintTemplate } from '../models/BlueprintTemplate';
import type { ChangeRecord } from '../models/ChangeRecord';
import type { Course } from '../models/Course';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BlueprintCoursesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get unsynced changes
     * Retrieve a list of learning objects that have changed since the last blueprint sync operation.
     * If no syncs have been completed, a ChangeRecord with a change_type of +initial_sync+ is returned.
     * @param courseId ID
     * @param templateId ID
     * @returns ChangeRecord success
     * @throws ApiError
     */
    public getUnsyncedChanges(
        courseId: string,
        templateId: string,
    ): CancelablePromise<Array<ChangeRecord>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/blueprint_templates/{template_id}/unsynced_changes',
            path: {
                'course_id': courseId,
                'template_id': templateId,
            },
        });
    }

    /**
     * Get import details
     * Show the changes that were propagated to a course associated with a blueprint.  See also
     * {api:MasterCourses::MasterTemplatesController#migration_details the blueprint course side}.
     * @param courseId ID
     * @param subscriptionId ID
     * @param id ID
     * @returns ChangeRecord success
     * @throws ApiError
     */
    public getImportDetails(
        courseId: string,
        subscriptionId: string,
        id: string,
    ): CancelablePromise<Array<ChangeRecord>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/blueprint_subscriptions/{subscription_id}/migrations/{id}/details',
            path: {
                'course_id': courseId,
                'subscription_id': subscriptionId,
                'id': id,
            },
        });
    }

    /**
     * Set or remove restrictions on a blueprint course object
     * If a blueprint course object is restricted, editing will be limited for copies in associated courses.
     * @param courseId ID
     * @param templateId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public setOrRemoveRestrictionsOnBlueprintCourseObject(
        courseId: string,
        templateId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/blueprint_templates/{template_id}/restrict_item',
            path: {
                'course_id': courseId,
                'template_id': templateId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get migration details
     * Show the changes that were propagated in a blueprint migration. This endpoint can be called on a
     * blueprint course. See also {api:MasterCourses::MasterTemplatesController#import_details the associated course side}.
     * @param courseId ID
     * @param templateId ID
     * @param id ID
     * @returns ChangeRecord success
     * @throws ApiError
     */
    public getMigrationDetails(
        courseId: string,
        templateId: string,
        id: string,
    ): CancelablePromise<Array<ChangeRecord>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations/{id}/details',
            path: {
                'course_id': courseId,
                'template_id': templateId,
                'id': id,
            },
        });
    }

    /**
     * Show a blueprint import
     * Shows the status of an import into a course associated with a blueprint. See also
     * {api:MasterCourses::MasterTemplatesController#migrations_show the blueprint course side}.
     * @param courseId ID
     * @param subscriptionId ID
     * @param id ID
     * @returns BlueprintMigration success
     * @throws ApiError
     */
    public showBlueprintImport(
        courseId: string,
        subscriptionId: string,
        id: string,
    ): CancelablePromise<BlueprintMigration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/blueprint_subscriptions/{subscription_id}/migrations/{id}',
            path: {
                'course_id': courseId,
                'subscription_id': subscriptionId,
                'id': id,
            },
        });
    }

    /**
     * Get associated course information
     * Returns a list of courses that are configured to receive updates from this blueprint
     * @param courseId ID
     * @param templateId ID
     * @returns Course success
     * @throws ApiError
     */
    public getAssociatedCourseInformation(
        courseId: string,
        templateId: string,
    ): CancelablePromise<Array<Course>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/blueprint_templates/{template_id}/associated_courses',
            path: {
                'course_id': courseId,
                'template_id': templateId,
            },
        });
    }

    /**
     * List blueprint migrations
     * Shows a paginated list of migrations for the template, starting with the most recent. This endpoint can be called on a
     * blueprint course. See also {api:MasterCourses::MasterTemplatesController#imports_index the associated course side}.
     * @param courseId ID
     * @param templateId ID
     * @returns BlueprintMigration success
     * @throws ApiError
     */
    public listBlueprintMigrations(
        courseId: string,
        templateId: string,
    ): CancelablePromise<Array<BlueprintMigration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations',
            path: {
                'course_id': courseId,
                'template_id': templateId,
            },
        });
    }

    /**
     * Begin a migration to push to associated courses
     * Begins a migration to push recently updated content to all associated courses.
     * Only one migration can be running at a time.
     * @param courseId ID
     * @param templateId ID
     * @param formData
     * @returns BlueprintMigration success
     * @throws ApiError
     */
    public beginMigrationToPushToAssociatedCourses(
        courseId: string,
        templateId: string,
        formData?: any,
    ): CancelablePromise<BlueprintMigration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations',
            path: {
                'course_id': courseId,
                'template_id': templateId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List blueprint subscriptions
     * Returns a list of blueprint subscriptions for the given course. (Currently a course may have no more than one.)
     * @param courseId ID
     * @returns BlueprintSubscription success
     * @throws ApiError
     */
    public listBlueprintSubscriptions(
        courseId: string,
    ): CancelablePromise<Array<BlueprintSubscription>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/blueprint_subscriptions',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Update associated courses
     * Send a list of course ids to add or remove new associations for the template.
     * Cannot add courses that do not belong to the blueprint course's account. Also cannot add
     * other blueprint courses or courses that already have an association with another blueprint course.
     *
     * After associating new courses, {api:MasterCourses::MasterTemplatesController#queue_migration start a sync} to populate their contents from the blueprint.
     * @param courseId ID
     * @param templateId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateAssociatedCourses(
        courseId: string,
        templateId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/blueprint_templates/{template_id}/update_associations',
            path: {
                'course_id': courseId,
                'template_id': templateId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List blueprint imports
     * Shows a paginated list of migrations imported into a course associated with a blueprint, starting with the most recent. See also
     * {api:MasterCourses::MasterTemplatesController#migrations_index the blueprint course side}.
     *
     * Use 'default' as the subscription_id to use the currently active blueprint subscription.
     * @param courseId ID
     * @param subscriptionId ID
     * @returns BlueprintMigration success
     * @throws ApiError
     */
    public listBlueprintImports(
        courseId: string,
        subscriptionId: string,
    ): CancelablePromise<Array<BlueprintMigration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/blueprint_subscriptions/{subscription_id}/migrations',
            path: {
                'course_id': courseId,
                'subscription_id': subscriptionId,
            },
        });
    }

    /**
     * Get blueprint information
     * Using 'default' as the template_id should suffice for the current implmentation (as there should be only one template per course).
     * However, using specific template ids may become necessary in the future
     * @param courseId ID
     * @param templateId ID
     * @returns BlueprintTemplate success
     * @throws ApiError
     */
    public getBlueprintInformation(
        courseId: string,
        templateId: string,
    ): CancelablePromise<BlueprintTemplate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/blueprint_templates/{template_id}',
            path: {
                'course_id': courseId,
                'template_id': templateId,
            },
        });
    }

    /**
     * Show a blueprint migration
     * Shows the status of a migration. This endpoint can be called on a blueprint course. See also
     * {api:MasterCourses::MasterTemplatesController#imports_show the associated course side}.
     * @param courseId ID
     * @param templateId ID
     * @param id ID
     * @returns BlueprintMigration success
     * @throws ApiError
     */
    public showBlueprintMigration(
        courseId: string,
        templateId: string,
        id: string,
    ): CancelablePromise<BlueprintMigration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations/{id}',
            path: {
                'course_id': courseId,
                'template_id': templateId,
                'id': id,
            },
        });
    }

}
