/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscussionTopic } from '../models/DiscussionTopic';
import type { ref } from '../models/ref';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AnnouncementsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List announcements
     * Returns the paginated list of announcements for the given courses and date range.  Note that
     * a +context_code+ field is added to the responses so you can tell which course each announcement
     * belongs to.
     * @param contextCodes List of context_codes to retrieve announcements for (for example, +course_123+). Only courses
     * are presently supported. The call will fail unless the caller has View Announcements permission
     * in all listed courses.
     * @param startDate Only return announcements posted since the start_date (inclusive).
     * Defaults to 14 days ago. The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
     * @param endDate Only return announcements posted before the end_date (inclusive).
     * Defaults to 28 days from start_date. The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
     * Announcements scheduled for future posting will only be returned to course administrators.
     * @param activeOnly Only return active announcements that have been published.
     * Applies only to requesting users that have permission to view
     * unpublished items.
     * Defaults to false for users with access to view unpublished items,
     * otherwise true and unmodifiable.
     * @param latestOnly Only return the latest announcement for each associated context.
     * The response will include at most one announcement for each
     * specified context in the context_codes[] parameter.
     * Defaults to false.
     * @param include Optional list of resources to include with the response. May include
     * a string of the name of the resource. Possible values are:
     * "sections", "sections_user_count"
     * if "sections" is passed, includes the course sections that are associated
     * with the topic, if the topic is specific to certain sections of the course.
     * If "sections_user_count" is passed, then:
     * (a) If sections were asked for *and* the topic is specific to certain
     * course sections sections, includes the number of users in each
     * section. (as part of the section json asked for above)
     * (b) Else, includes at the root level the total number of users in the
     * topic's context (group or course) that the topic applies to.
     * @returns DiscussionTopic success
     * @throws ApiError
     */
    public listAnnouncements(
        contextCodes: Array<string>,
        startDate?: ref,
        endDate?: ref,
        activeOnly?: boolean,
        latestOnly?: boolean,
        include?: Array<any>,
    ): CancelablePromise<Array<DiscussionTopic>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/announcements',
            query: {
                'context_codes': contextCodes,
                'start_date': startDate,
                'end_date': endDate,
                'active_only': activeOnly,
                'latest_only': latestOnly,
                'include': include,
            },
        });
    }

}
