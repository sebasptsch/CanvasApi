/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GroupMembership = {
    /**
     * The id of the membership object
     */
    id?: number;
    /**
     * The id of the group object to which the membership belongs
     */
    group_id?: number;
    /**
     * The id of the user object to which the membership belongs
     */
    user_id?: number;
    /**
     * The current state of the membership. Current possible values are 'accepted', 'invited', and 'requested'
     */
    workflow_state?: string;
    /**
     * Whether or not the user is a moderator of the group (the must also be an active member of the group to moderate)
     */
    moderator?: boolean;
    /**
     * optional: whether or not the record was just created on a create call (POST), i.e. was the user just added to the group, or was the user already a member
     */
    just_created?: boolean;
    /**
     * The id of the SIS import if created through SIS. Only included if the user has permission to manage SIS information.
     */
    sis_import_id?: number;
};

