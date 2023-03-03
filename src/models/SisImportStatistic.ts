/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SisImportStatistic = {
    /**
     * This is the number of items that were created.
     */
    created?: number;
    /**
     * This is the number of items that marked as completed. This only applies to courses and enrollments.
     */
    concluded?: number;
    /**
     * This is the number of Enrollments that were marked as 'inactive'. This only applies to enrollments.
     */
    deactivated?: number;
    /**
     * This is the number of items that were set to an active state from a completed, inactive, or deleted state.
     */
    restored?: number;
    /**
     * This is the number of items that were deleted.
     */
    deleted?: number;
};

