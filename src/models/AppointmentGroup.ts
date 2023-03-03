/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Appointment } from './Appointment';
import type { CalendarEvent } from './CalendarEvent';
import type { datetime } from './datetime';

export type AppointmentGroup = {
    /**
     * The ID of the appointment group
     */
    id?: number;
    /**
     * The title of the appointment group
     */
    title?: string;
    start_at?: datetime;
    end_at?: datetime;
    /**
     * The text description of the appointment group
     */
    description?: string;
    /**
     * The location name of the appointment group
     */
    location_name?: string;
    /**
     * The address of the appointment group's location
     */
    location_address?: string;
    /**
     * The number of participant who have reserved slots (see include[] argument)
     */
    participant_count?: number;
    /**
     * The start and end times of slots reserved by the current user as well as the id of the calendar event for the reservation (see include[] argument)
     */
    reserved_times?: Array<Appointment>;
    /**
     * The context codes (i.e. courses) this appointment group belongs to. Only people in these courses will be eligible to sign up.
     */
    context_codes?: Array<string>;
    /**
     * The sub-context codes (i.e. course sections and group categories) this appointment group is restricted to
     */
    sub_context_codes?: Array<number>;
    /**
     * Current state of the appointment group ('pending', 'active' or 'deleted'). 'pending' indicates that it has not been published yet and is invisible to participants.
     */
    workflow_state?: string;
    /**
     * Boolean indicating whether the current user needs to sign up for this appointment group (i.e. it's reservable and the min_appointments_per_participant limit has not been met by this user).
     */
    requiring_action?: boolean;
    /**
     * Number of time slots in this appointment group
     */
    appointments_count?: number;
    /**
     * Calendar Events representing the time slots (see include[] argument) Refer to the Calendar Events API for more information
     */
    appointments?: Array<CalendarEvent>;
    /**
     * Newly created time slots (same format as appointments above). Only returned in Create/Update responses where new time slots have been added
     */
    new_appointments?: Array<CalendarEvent>;
    /**
     * Maximum number of time slots a user may register for, or null if no limit
     */
    max_appointments_per_participant?: number;
    /**
     * Minimum number of time slots a user must register for. If not set, users do not need to sign up for any time slots
     */
    min_appointments_per_participant?: number;
    /**
     * Maximum number of participants that may register for each time slot, or null if no limit
     */
    participants_per_appointment?: number;
    /**
     * 'private' means participants cannot see who has signed up for a particular time slot, 'protected' means that they can
     */
    participant_visibility?: string;
    /**
     * Indicates how participants sign up for the appointment group, either as individuals ('User') or in student groups ('Group'). Related to sub_context_codes (i.e. 'Group' signups always have a single group category)
     */
    participant_type?: string;
    /**
     * URL for this appointment group (to update, delete, etc.)
     */
    url?: string;
    /**
     * URL for a user to view this appointment group
     */
    html_url?: string;
    created_at?: datetime;
    updated_at?: datetime;
};

