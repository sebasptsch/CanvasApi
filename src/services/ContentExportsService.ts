/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContentExport } from '../models/ContentExport';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ContentExportsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List content exports
     * A paginated list of the past and pending content export jobs for a course,
     * group, or user. Exports are returned newest first.
     * @param groupId ID
     * @returns ContentExport success
     * @throws ApiError
     */
    public listContentExportsGroups(
        groupId: string,
    ): CancelablePromise<Array<ContentExport>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/groups/{group_id}/content_exports',
            path: {
                'group_id': groupId,
            },
        });
    }

    /**
     * Export content
     * Begin a content export job for a course, group, or user.
     *
     * You can use the {api:ProgressController#show Progress API} to track the
     * progress of the export. The migration's progress is linked to with the
     * _progress_url_ value.
     *
     * When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint
     * to retrieve a download URL for the exported content.
     * @param groupId ID
     * @param formData
     * @returns ContentExport success
     * @throws ApiError
     */
    public exportContentGroups(
        groupId: string,
        formData: any,
    ): CancelablePromise<ContentExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/groups/{group_id}/content_exports',
            path: {
                'group_id': groupId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List content exports
     * A paginated list of the past and pending content export jobs for a course,
     * group, or user. Exports are returned newest first.
     * @param userId ID
     * @returns ContentExport success
     * @throws ApiError
     */
    public listContentExportsUsers(
        userId: string,
    ): CancelablePromise<Array<ContentExport>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}/content_exports',
            path: {
                'user_id': userId,
            },
        });
    }

    /**
     * Export content
     * Begin a content export job for a course, group, or user.
     *
     * You can use the {api:ProgressController#show Progress API} to track the
     * progress of the export. The migration's progress is linked to with the
     * _progress_url_ value.
     *
     * When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint
     * to retrieve a download URL for the exported content.
     * @param userId ID
     * @param formData
     * @returns ContentExport success
     * @throws ApiError
     */
    public exportContentUsers(
        userId: string,
        formData: any,
    ): CancelablePromise<ContentExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/users/{user_id}/content_exports',
            path: {
                'user_id': userId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List content exports
     * A paginated list of the past and pending content export jobs for a course,
     * group, or user. Exports are returned newest first.
     * @param courseId ID
     * @returns ContentExport success
     * @throws ApiError
     */
    public listContentExportsCourses(
        courseId: string,
    ): CancelablePromise<Array<ContentExport>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/content_exports',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Export content
     * Begin a content export job for a course, group, or user.
     *
     * You can use the {api:ProgressController#show Progress API} to track the
     * progress of the export. The migration's progress is linked to with the
     * _progress_url_ value.
     *
     * When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint
     * to retrieve a download URL for the exported content.
     * @param courseId ID
     * @param formData
     * @returns ContentExport success
     * @throws ApiError
     */
    public exportContentCourses(
        courseId: string,
        formData: any,
    ): CancelablePromise<ContentExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/content_exports',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Show content export
     * Get information about a single content export.
     * @param userId ID
     * @param id ID
     * @returns ContentExport success
     * @throws ApiError
     */
    public showContentExportUsers(
        userId: string,
        id: string,
    ): CancelablePromise<ContentExport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}/content_exports/{id}',
            path: {
                'user_id': userId,
                'id': id,
            },
        });
    }

    /**
     * Show content export
     * Get information about a single content export.
     * @param groupId ID
     * @param id ID
     * @returns ContentExport success
     * @throws ApiError
     */
    public showContentExportGroups(
        groupId: string,
        id: string,
    ): CancelablePromise<ContentExport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/groups/{group_id}/content_exports/{id}',
            path: {
                'group_id': groupId,
                'id': id,
            },
        });
    }

    /**
     * Show content export
     * Get information about a single content export.
     * @param courseId ID
     * @param id ID
     * @returns ContentExport success
     * @throws ApiError
     */
    public showContentExportCourses(
        courseId: string,
        id: string,
    ): CancelablePromise<ContentExport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/content_exports/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

}
