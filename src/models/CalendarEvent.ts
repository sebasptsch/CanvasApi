/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';
import type { uuid } from './uuid';

export type CalendarEvent = {
    /**
     * The ID of the calendar event
     */
    id?: number;
    /**
     * The title of the calendar event
     */
    title?: string;
    start_at?: datetime;
    end_at?: datetime;
    /**
     * The HTML description of the event
     */
    description?: string;
    /**
     * The location name of the event
     */
    location_name?: string;
    /**
     * The address where the event is taking place
     */
    location_address?: string;
    /**
     * the context code of the calendar this event belongs to (course, user or group)
     */
    context_code?: string;
    /**
     * if specified, it indicates which calendar this event should be displayed on. for example, a section-level event would have the course's context code here, while the section's context code would be returned above)
     */
    effective_context_code?: string;
    /**
     * the context name of the calendar this event belongs to (course, user or group)
     */
    context_name?: string;
    /**
     * a comma-separated list of all calendar contexts this event is part of
     */
    all_context_codes?: string;
    /**
     * Current state of the event ('active', 'locked' or 'deleted') 'locked' indicates that start_at/end_at cannot be changed (though the event could be deleted). Normally only reservations or time slots with reservations are locked (see the Appointment Groups API)
     */
    workflow_state?: string;
    /**
     * Whether this event should be displayed on the calendar. Only true for course-level events with section-level child events.
     */
    hidden?: boolean;
    /**
     * Normally null. If this is a reservation (see the Appointment Groups API), the id will indicate the time slot it is for. If this is a section-level event, this will be the course-level parent event.
     */
    parent_event_id?: number;
    /**
     * The number of child_events. See child_events (and parent_event_id)
     */
    child_events_count?: number;
    /**
     * Included by default, but may be excluded (see include[] option). If this is a time slot (see the Appointment Groups API) this will be a list of any reservations. If this is a course-level event, this will be a list of section-level events (if any)
     */
    child_events?: Array<number>;
    /**
     * URL for this calendar event (to update, delete, etc.)
     */
    url?: string;
    /**
     * URL for a user to view this event
     */
    html_url?: string;
    all_day_date?: datetime;
    /**
     * Boolean indicating whether this is an all-day event (midnight to midnight)
     */
    all_day?: boolean;
    created_at?: datetime;
    updated_at?: datetime;
    /**
     * Various Appointment-Group-related fields.These fields are only pertinent to time slots (appointments) and reservations of those time slots. See the Appointment Groups API. The id of the appointment group
     */
    appointment_group_id?: number;
    /**
     * The API URL of the appointment group
     */
    appointment_group_url?: string;
    /**
     * If the event is a reservation, this a boolean indicating whether it is the current user's reservation, or someone else's
     */
    own_reservation?: boolean;
    /**
     * If the event is a time slot, the API URL for reserving it
     */
    reserve_url?: string;
    /**
     * If the event is a time slot, a boolean indicating whether the user has already made a reservation for it
     */
    reserved?: boolean;
    /**
     * The type of participant to sign up for a slot: 'User' or 'Group'
     */
    participant_type?: string;
    /**
     * If the event is a time slot, this is the participant limit
     */
    participants_per_appointment?: number;
    /**
     * If the event is a time slot and it has a participant limit, an integer indicating how many slots are available
     */
    available_slots?: number;
    /**
     * If the event is a user-level reservation, this will contain the user participant JSON (refer to the Users API).
     */
    user?: string;
    /**
     * If the event is a group-level reservation, this will contain the group participant JSON (refer to the Groups API).
     */
    group?: string;
    /**
     * Boolean indicating whether this has important dates.
     */
    important_dates?: boolean;
    series_uuid?: uuid;
    /**
     * An iCalendar RRULE for defining how events in a recurring event series repeat.
     */
    rrule?: string;
    /**
     * A natural language expression of how events occur in the series. (e.g. Daily, 2 times)
     */
    series_natural_language?: string;
    /**
     * Boolean indicating whether this has blackout date.
     */
    blackout_date?: boolean;
};

