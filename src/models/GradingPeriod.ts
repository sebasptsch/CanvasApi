/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GradingPeriod = {
    /**
     * The unique identifier for the grading period.
     */
    id: number;
    /**
     * The title for the grading period.
     */
    title?: string;
    /**
     * The start date of the grading period.
     */
    start_date: string;
    /**
     * The end date of the grading period.
     */
    end_date: string;
    /**
     * Grades can only be changed before the close date of the grading period.
     */
    close_date?: string;
    /**
     * A weight value that contributes to the overall weight of a grading period set which is used to calculate how much assignments in this period contribute to the total grade
     */
    weight?: number;
    /**
     * If true, the grading period's close_date has passed.
     */
    is_closed?: boolean;
};

