/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CommunicationChannel = {
    /**
     * The ID of the communication channel.
     */
    id?: number;
    /**
     * The address, or path, of the communication channel.
     */
    address?: string;
    /**
     * The type of communcation channel being described. Possible values are: 'email', 'push', 'sms', or 'twitter'. This field determines the type of value seen in 'address'.
     */
    type?: string;
    /**
     * The position of this communication channel relative to the user's other channels when they are ordered.
     */
    position?: number;
    /**
     * The ID of the user that owns this communication channel.
     */
    user_id?: number;
    /**
     * The current state of the communication channel. Possible values are: 'unconfirmed' or 'active'.
     */
    workflow_state?: string;
};

