/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Associates a course with a blueprint
 */
export type BlueprintSubscription = {
    /**
     * The ID of the blueprint course subscription
     */
    id?: number;
    /**
     * The ID of the blueprint template the associated course is subscribed to
     */
    template_id?: number;
    /**
     * The blueprint course subscribed to
     */
    blueprint_course?: any;
};

