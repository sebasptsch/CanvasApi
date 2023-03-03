/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RubricAssessment = {
    /**
     * the ID of the rubric
     */
    id?: number;
    /**
     * the rubric the assessment belongs to
     */
    rubric_id?: number;
    rubric_association_id?: number;
    score?: number;
    /**
     * the object of the assessment
     */
    artifact_type?: string;
    /**
     * the id of the object of the assessment
     */
    artifact_id?: number;
    /**
     * the current number of attempts made on the object of the assessment
     */
    artifact_attempt?: number;
    /**
     * the type of assessment. values will be either 'grading', 'peer_review', or 'provisional_grade'
     */
    assessment_type?: string;
    /**
     * user id of the person who made the assessment
     */
    assessor_id?: number;
    /**
     * (Optional) If 'full' is included in the 'style' parameter, returned assessments will have their full details contained in their data hash. If the user does not request a style, this key will be absent.
     */
    data?: Array<any>;
    /**
     * (Optional) If 'comments_only' is included in the 'style' parameter, returned assessments will include only the comments portion of their data hash. If the user does not request a style, this key will be absent.
     */
    comments?: Array<string>;
};

