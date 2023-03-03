/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A point-biserial construct for a single pre-defined answer in a Multiple-Choice or True/False question.
 */
export type QuizStatisticsAnswerPointBiserial = {
    /**
     * ID of the answer the point biserial is for.
     */
    answer_id?: number;
    /**
     * The point biserial value for this answer. Value ranges between -1 and 1.
     */
    point_biserial?: number;
    /**
     * Convenience attribute that denotes whether this is the correct answer as opposed to being a distractor. This is mutually exclusive with the `distractor` value
     */
    correct?: boolean;
    /**
     * Convenience attribute that denotes whether this is a distractor answer and not the correct one. This is mutually exclusive with the `correct` value
     */
    distractor?: boolean;
};

