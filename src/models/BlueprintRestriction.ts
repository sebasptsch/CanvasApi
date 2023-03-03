/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A set of restrictions on editing for copied objects in associated courses
 */
export type BlueprintRestriction = {
    /**
     * Restriction on main content (e.g. title, description).
     */
    content?: boolean;
    /**
     * Restriction on points possible for assignments and graded learning objects
     */
    points?: boolean;
    /**
     * Restriction on due dates for assignments and graded learning objects
     */
    due_dates?: boolean;
    /**
     * Restriction on availability dates for an object
     */
    availability_dates?: boolean;
};

