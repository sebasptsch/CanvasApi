/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QuestionFeedback = {
    /**
     * general feedback to show regardless of answer (rich content)
     */
    neutral?: string;
    /**
     * feedback to show if the question is answered correctly (rich content)
     */
    correct?: string;
    /**
     * feedback to show if the question is answered incorrectly (rich content)
     */
    incorrect?: string;
};

