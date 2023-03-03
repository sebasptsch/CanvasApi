/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from './datetime';

export type AccountNotification = {
    /**
     * The subject of the notifications
     */
    subject?: string;
    /**
     * The message to be sent in the notification.
     */
    message?: string;
    start_at?: datetime;
    end_at?: datetime;
    /**
     * The icon to display with the message.  Defaults to warning.
     */
    icon?: string;
    /**
     * (Deprecated) The roles to send the notification to.  If roles is not passed it defaults to all roles
     */
    roles?: Array<string>;
    /**
     * The roles to send the notification to.  If roles is not passed it defaults to all roles
     */
    role_ids?: Array<number>;
};

