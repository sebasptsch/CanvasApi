/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Attributes of student.  See Users API for more details
 */
export type StudentAttributes = {
    /**
     * The unique Canvas identifier for the user
     */
    user_id?: number;
    /**
     * The SIS ID associated with the user.  This field is only included if the user came from a SIS import and has permissions to view SIS information.
     */
    sis_user_id?: string;
};

