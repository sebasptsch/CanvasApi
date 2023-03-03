/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CustomColumn = {
    /**
     * The ID of the custom gradebook column
     */
    id?: number;
    /**
     * When true, this column's visibility will be toggled in the Gradebook when a user selects to show or hide notes
     */
    teacher_notes?: boolean;
    /**
     * header text
     */
    title?: string;
    /**
     * column order
     */
    position?: number;
    /**
     * won't be displayed if hidden is true
     */
    hidden?: boolean;
    /**
     * won't be editable in the gradebook UI
     */
    read_only?: boolean;
};

