/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OutcomeGroup = {
    /**
     * the ID of the outcome group
     */
    id?: number;
    /**
     * the URL for fetching/updating the outcome group. should be treated as opaque
     */
    url?: string;
    parent_outcome_group?: OutcomeGroup;
    /**
     * the context owning the outcome group. may be null for global outcome groups. omitted in the abbreviated form.
     */
    context_id?: number;
    context_type?: string;
    /**
     * title of the outcome group
     */
    title?: string;
    /**
     * description of the outcome group. omitted in the abbreviated form.
     */
    description?: string;
    /**
     * A custom GUID for the learning standard.
     */
    vendor_guid?: string;
    /**
     * the URL for listing/creating subgroups under the outcome group. should be treated as opaque
     */
    subgroups_url?: string;
    /**
     * the URL for listing/creating outcome links under the outcome group. should be treated as opaque
     */
    outcomes_url?: string;
    /**
     * the URL for importing another group into this outcome group. should be treated as opaque. omitted in the abbreviated form.
     */
    import_url?: string;
    /**
     * whether the current user can update the outcome group
     */
    can_edit?: boolean;
};

