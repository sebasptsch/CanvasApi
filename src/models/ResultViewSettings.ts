/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResultViewSettings = {
    /**
     * whether to restrict the student result view
     */
    result_view_restricted?: boolean;
    /**
     * whether to show points awarded (overall and per question)
     */
    display_points_awarded?: boolean;
    /**
     * whether to show points possible (overall and per question)
     */
    display_points_possible?: boolean;
    /**
     * whether to show questions in the result view
     */
    display_items?: boolean;
    /**
     * whether to show student's responses in the result view
     */
    display_item_response?: boolean;
    /**
     * whether to indicate whether the student's response is correct/incorrect
     */
    display_item_response_correctness?: boolean;
    /**
     * whether to show the correct answer for each question
     */
    display_item_correct_answer?: boolean;
    /**
     * whether to show feedback for each item
     */
    display_item_feedback?: boolean;
};

