/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CalendarEvent } from '../models/CalendarEvent';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AppointmentGroupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a single appointment group
     * Returns information for a single appointment group
     * @param id ID
     * @param include Array of additional information to include. See include[] argument of
     * "List appointment groups" action.
     *
     * "child_events":: reservations of time slots time slots
     * "appointments":: will always be returned
     * "all_context_codes":: all context codes associated with this appointment group
     * @returns any success
     * @throws ApiError
     */
    public getSingleAppointmentGroup(
        id: string,
        include?: 'child_events' | 'appointments' | 'all_context_codes',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/appointment_groups/{id}',
            path: {
                'id': id,
            },
            query: {
                'include': include,
            },
        });
    }

    /**
     * Update an appointment group
     * Update and return an appointment group. If new_appointments are specified,
     * the response will return a new_appointments array (same format as
     * appointments array, see "List appointment groups" action).
     * @param id ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateAppointmentGroup(
        id: string,
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/appointment_groups/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete an appointment group
     * Delete an appointment group (and associated time slots and reservations)
     * and return the deleted group
     * @param id ID
     * @param cancelReason Reason for deleting/canceling the appointment group.
     * @returns any success
     * @throws ApiError
     */
    public deleteAppointmentGroup(
        id: string,
        cancelReason?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/appointment_groups/{id}',
            path: {
                'id': id,
            },
            query: {
                'cancel_reason': cancelReason,
            },
        });
    }

    /**
     * Get next appointment
     * Return the next appointment available to sign up for. The appointment
     * is returned in a one-element array. If no future appointments are
     * available, an empty array is returned.
     * @param appointmentGroupIds List of ids of appointment groups to search.
     * @returns CalendarEvent success
     * @throws ApiError
     */
    public getNextAppointment(
        appointmentGroupIds?: Array<string>,
    ): CancelablePromise<Array<CalendarEvent>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/appointment_groups/next_appointment',
            query: {
                'appointment_group_ids': appointmentGroupIds,
            },
        });
    }

    /**
     * List user participants
     * A paginated list of users that are (or may be) participating in this
     * appointment group.  Refer to the Users API for the response fields. Returns
     * no results for appointment groups with the "Group" participant_type.
     * @param id ID
     * @param registrationStatus Limits results to the a given participation status, defaults to "all"
     * @returns any success
     * @throws ApiError
     */
    public listUserParticipants(
        id: string,
        registrationStatus?: 'all' | 'registered',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/appointment_groups/{id}/users',
            path: {
                'id': id,
            },
            query: {
                'registration_status': registrationStatus,
            },
        });
    }

    /**
     * List student group participants
     * A paginated list of student groups that are (or may be) participating in
     * this appointment group. Refer to the Groups API for the response fields.
     * Returns no results for appointment groups with the "User" participant_type.
     * @param id ID
     * @param registrationStatus Limits results to the a given participation status, defaults to "all"
     * @returns any success
     * @throws ApiError
     */
    public listStudentGroupParticipants(
        id: string,
        registrationStatus?: 'all' | 'registered',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/appointment_groups/{id}/groups',
            path: {
                'id': id,
            },
            query: {
                'registration_status': registrationStatus,
            },
        });
    }

    /**
     * List appointment groups
     * Retrieve the paginated list of appointment groups that can be reserved or
     * managed by the current user.
     * @param scope Defaults to "reservable"
     * @param contextCodes Array of context codes used to limit returned results.
     * @param includePastAppointments Defaults to false. If true, includes past appointment groups
     * @param include Array of additional information to include.
     *
     * "appointments":: calendar event time slots for this appointment group
     * "child_events":: reservations of those time slots
     * "participant_count":: number of reservations
     * "reserved_times":: the event id, start time and end time of reservations
     * the current user has made)
     * "all_context_codes":: all context codes associated with this appointment group
     * @returns any success
     * @throws ApiError
     */
    public listAppointmentGroups(
        scope?: 'reservable' | 'manageable',
        contextCodes?: Array<string>,
        includePastAppointments?: boolean,
        include?: 'appointments' | 'child_events' | 'participant_count' | 'reserved_times' | 'all_context_codes',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/appointment_groups',
            query: {
                'scope': scope,
                'context_codes': contextCodes,
                'include_past_appointments': includePastAppointments,
                'include': include,
            },
        });
    }

    /**
     * Create an appointment group
     * Create and return a new appointment group. If new_appointments are
     * specified, the response will return a new_appointments array (same format
     * as appointments array, see "List appointment groups" action)
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createAppointmentGroup(
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/appointment_groups',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
