/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CalendarEvent } from '../models/CalendarEvent';
import type { ref } from '../models/ref';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CalendarEventsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create or update events directly for a course timetable
     * Creates and updates "timetable" events for a course or course section.
     * Similar to {api:CalendarEventsApiController#set_course_timetable setting a course timetable},
     * but instead of generating a list of events based on a timetable schedule,
     * this endpoint expects a complete list of events.
     * @param courseId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createOrUpdateEventsDirectlyForCourseTimetable(
        courseId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/calendar_events/timetable_events',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Reserve a time slot
     * Reserves a particular time slot and return the new reservation
     * @param id ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public reserveTimeSlot(
        id: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/calendar_events/{id}/reservations',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Reserve a time slot
     * Reserves a particular time slot and return the new reservation
     * @param id ID
     * @param participantId User or group id for whom you are making the reservation (depends on the
     * participant type). Defaults to the current user (or user's candidate group).
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public reserveTimeSlotParticipantId(
        id: string,
        participantId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/calendar_events/{id}/reservations/{participant_id}',
            path: {
                'id': id,
                'participant_id': participantId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List calendar events
     * Retrieve the paginated list of calendar events or assignments for the current user
     * @param type Defaults to "event"
     * @param startDate Only return events since the start_date (inclusive).
     * Defaults to today. The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
     * @param endDate Only return events before the end_date (inclusive).
     * Defaults to start_date. The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
     * If end_date is the same as start_date, then only events on that day are
     * returned.
     * @param undated Defaults to false (dated events only).
     * If true, only return undated events and ignore start_date and end_date.
     * @param allEvents Defaults to false (uses start_date, end_date, and undated criteria).
     * If true, all events are returned, ignoring start_date, end_date, and undated criteria.
     * @param contextCodes List of context codes of courses/groups/users whose events you want to see.
     * If not specified, defaults to the current user (i.e personal calendar,
     * no course/group events). Limited to 10 context codes, additional ones are
     * ignored. The format of this field is the context type, followed by an
     * underscore, followed by the context id. For example: course_42
     * @param excludes Array of attributes to exclude. Possible values are "description", "child_events" and "assignment"
     * @param includes Array of optional attributes to include. Possible values are "web_conferenes" and "series_natural_language"
     * @param importantDates Defaults to false.
     * If true, only events with important dates set to true will be returned.
     * @param blackoutDate Defaults to false.
     * If true, only events with blackout date set to true will be returned.
     * @returns CalendarEvent success
     * @throws ApiError
     */
    public listCalendarEvents(
        type?: 'event' | 'assignment',
        startDate?: ref,
        endDate?: ref,
        undated?: boolean,
        allEvents?: boolean,
        contextCodes?: Array<string>,
        excludes?: Array<Array<any>>,
        includes?: Array<Array<any>>,
        importantDates?: boolean,
        blackoutDate?: boolean,
    ): CancelablePromise<Array<CalendarEvent>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/calendar_events',
            query: {
                'type': type,
                'start_date': startDate,
                'end_date': endDate,
                'undated': undated,
                'all_events': allEvents,
                'context_codes': contextCodes,
                'excludes': excludes,
                'includes': includes,
                'important_dates': importantDates,
                'blackout_date': blackoutDate,
            },
        });
    }

    /**
     * Create a calendar event
     * Create and return a new calendar event
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createCalendarEvent(
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/calendar_events',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get course timetable
     * Returns the last timetable set by the
     * {api:CalendarEventsApiController#set_course_timetable Set a course timetable} endpoint
     * @param courseId ID
     * @returns any success
     * @throws ApiError
     */
    public getCourseTimetable(
        courseId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/calendar_events/timetable',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Set a course timetable
     * Creates and updates "timetable" events for a course.
     * Can automaticaly generate a series of calendar events based on simple schedules
     * (e.g. "Monday and Wednesday at 2:00pm" )
     *
     * Existing timetable events for the course and course sections
     * will be updated if they still are part of the timetable.
     * Otherwise, they will be deleted.
     * @param courseId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public setCourseTimetable(
        courseId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/calendar_events/timetable',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List calendar events for a user
     * Retrieve the paginated list of calendar events or assignments for the specified user.
     * To view calendar events for a user other than yourself,
     * you must either be an observer of that user or an administrator.
     * @param userId ID
     * @param type Defaults to "event"
     * @param startDate Only return events since the start_date (inclusive).
     * Defaults to today. The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
     * @param endDate Only return events before the end_date (inclusive).
     * Defaults to start_date. The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
     * If end_date is the same as start_date, then only events on that day are
     * returned.
     * @param undated Defaults to false (dated events only).
     * If true, only return undated events and ignore start_date and end_date.
     * @param allEvents Defaults to false (uses start_date, end_date, and undated criteria).
     * If true, all events are returned, ignoring start_date, end_date, and undated criteria.
     * @param contextCodes List of context codes of courses/groups/users whose events you want to see.
     * If not specified, defaults to the current user (i.e personal calendar,
     * no course/group events). Limited to 10 context codes, additional ones are
     * ignored. The format of this field is the context type, followed by an
     * underscore, followed by the context id. For example: course_42
     * @param excludes Array of attributes to exclude. Possible values are "description", "child_events" and "assignment"
     * @param submissionTypes When type is "assignment", specifies the allowable submission types for returned assignments.
     * Ignored if type is not "assignment" or if exclude_submission_types is provided.
     * @param excludeSubmissionTypes When type is "assignment", specifies the submission types to be excluded from the returned
     * assignments. Ignored if type is not "assignment".
     * @param includes Array of optional attributes to include. Possible values are "web_conferenes" and "series_natural_language"
     * @param importantDates Defaults to false
     * If true, only events with important dates set to true will be returned.
     * @param blackoutDate Defaults to false
     * If true, only events with blackout date set to true will be returned.
     * @returns CalendarEvent success
     * @throws ApiError
     */
    public listCalendarEventsForUser(
        userId: string,
        type?: 'event' | 'assignment',
        startDate?: ref,
        endDate?: ref,
        undated?: boolean,
        allEvents?: boolean,
        contextCodes?: Array<string>,
        excludes?: Array<Array<any>>,
        submissionTypes?: Array<Array<any>>,
        excludeSubmissionTypes?: Array<Array<any>>,
        includes?: Array<Array<any>>,
        importantDates?: boolean,
        blackoutDate?: boolean,
    ): CancelablePromise<Array<CalendarEvent>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/users/{user_id}/calendar_events',
            path: {
                'user_id': userId,
            },
            query: {
                'type': type,
                'start_date': startDate,
                'end_date': endDate,
                'undated': undated,
                'all_events': allEvents,
                'context_codes': contextCodes,
                'excludes': excludes,
                'submission_types': submissionTypes,
                'exclude_submission_types': excludeSubmissionTypes,
                'includes': includes,
                'important_dates': importantDates,
                'blackout_date': blackoutDate,
            },
        });
    }

    /**
     * Save enabled account calendars
     * Creates and updates the enabled_account_calendars and mark_feature_as_seen user preferences
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public saveEnabledAccountCalendars(
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/calendar_events/save_enabled_account_calendars',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get a single calendar event or assignment
     * @param id ID
     * @returns CalendarEvent success
     * @throws ApiError
     */
    public getSingleCalendarEventOrAssignment(
        id: string,
    ): CancelablePromise<CalendarEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/calendar_events/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a calendar event
     * Update and return a calendar event
     * @param id ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateCalendarEvent(
        id: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/calendar_events/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete a calendar event
     * Delete an event from the calendar and return the deleted event
     * @param id ID
     * @param cancelReason Reason for deleting/canceling the event.
     * @param which Valid if the calendar_series feature is enabled and the
     * event whose ID is in the URL is part of a series.
     * Delete just the event whose ID is in in the URL, all events
     * in the series, or the given event and all those following.
     * @returns any success
     * @throws ApiError
     */
    public deleteCalendarEvent(
        id: string,
        cancelReason?: string,
        which?: 'one' | 'all' | 'following',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/calendar_events/{id}',
            path: {
                'id': id,
            },
            query: {
                'cancel_reason': cancelReason,
                'which': which,
            },
        });
    }

}
