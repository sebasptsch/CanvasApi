/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Permissions the user has for the quiz
 */
export type QuizPermissions = {
    /**
     * whether the user can view the quiz
     */
    read?: boolean;
    /**
     * whether the user may submit a submission for the quiz
     */
    submit?: boolean;
    /**
     * whether the user may create a new quiz
     */
    create?: boolean;
    /**
     * whether the user may edit, update, or delete the quiz
     */
    manage?: boolean;
    /**
     * whether the user may view quiz statistics for this quiz
     */
    read_statistics?: boolean;
    /**
     * whether the user may review grades for all quiz submissions for this quiz
     */
    review_grades?: boolean;
    /**
     * whether the user may update the quiz
     */
    update?: boolean;
};

