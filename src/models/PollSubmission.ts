/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PollSubmission = {
    /**
     * The unique identifier for the poll submission.
     */
    id: number;
    /**
     * The unique identifier of the poll choice chosen for this submission.
     */
    poll_choice_id?: number;
    /**
     * the unique identifier of the user who submitted this poll submission.
     */
    user_id?: number;
    /**
     * The date and time the poll submission was submitted.
     */
    created_at?: string;
};

