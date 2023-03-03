/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccountCalendar = {
    /**
     * the ID of the account associated with this calendar
     */
    id?: number;
    /**
     * the name of the account associated with this calendar
     */
    name?: string;
    /**
     * the account's parent ID, or null if this is the root account
     */
    parent_account_id?: number;
    /**
     * the ID of the root account, or null if this is the root account
     */
    root_account_id?: number;
    /**
     * whether this calendar is visible to users
     */
    visible?: boolean;
    /**
     * number of this account's direct sub-accounts
     */
    sub_account_count?: number;
    /**
     * Asset string of the account
     */
    asset_string?: string;
    /**
     * Object type
     */
    type?: string;
    /**
     * url to get full detailed events
     */
    calendar_event_url?: string;
    /**
     * whether the user can create calendar events
     */
    can_create_calendar_events?: boolean;
    /**
     * API path to create events for the account
     */
    create_calendar_event_url?: string;
    /**
     * url to open the more options event editor
     */
    new_calendar_event_url?: string;
};

