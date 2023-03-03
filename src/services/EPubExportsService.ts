/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CourseEpubExport } from '../models/CourseEpubExport';
import type { EpubExport } from '../models/EpubExport';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EPubExportsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List courses with their latest ePub export
     * A paginated list of all courses a user is actively participating in, and
     * the latest ePub export associated with the user & course.
     * @returns CourseEpubExport success
     * @throws ApiError
     */
    public listCoursesWithTheirLatestEpubExport(): CancelablePromise<Array<CourseEpubExport>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/epub_exports',
        });
    }

    /**
     * Create ePub Export
     * Begin an ePub export for a course.
     *
     * You can use the {api:ProgressController#show Progress API} to track the
     * progress of the export. The export's progress is linked to with the
     * _progress_url_ value.
     *
     * When the export completes, use the {api:EpubExportsController#show Show content export} endpoint
     * to retrieve a download URL for the exported content.
     * @param courseId ID
     * @returns EpubExport success
     * @throws ApiError
     */
    public createEpubExport(
        courseId: string,
    ): CancelablePromise<EpubExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/epub_exports',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Show ePub export
     * Get information about a single ePub export.
     * @param courseId ID
     * @param id ID
     * @returns EpubExport success
     * @throws ApiError
     */
    public showEpubExport(
        courseId: string,
        id: string,
    ): CancelablePromise<EpubExport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/epub_exports/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

}
