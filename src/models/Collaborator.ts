/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Collaborator = {
    /**
     * The unique user or group identifier for the collaborator.
     */
    id: number;
    /**
     * The type of collaborator (e.g. 'user' or 'group').
     */
    type?: string;
    /**
     * The name of the collaborator.
     */
    name?: string;
};

