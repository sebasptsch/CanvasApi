/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The links of a page view access in Canvas
 */
export type PageViewLinks = {
    /**
     * The ID of the user for this page view
     */
    user?: number;
    /**
     * The ID of the context for the request (course id if context_type is Course, etc)
     */
    context?: number;
    /**
     * The ID of the asset for the request, if any
     */
    asset?: number;
    /**
     * The ID of the actual user who made this request, if the request was made by a user who was masquerading
     */
    real_user?: number;
    /**
     * The ID of the account context for this page view
     */
    account?: number;
};

