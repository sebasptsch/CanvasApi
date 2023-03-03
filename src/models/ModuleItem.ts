/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompletionRequirement } from './CompletionRequirement';
import type { ContentDetails } from './ContentDetails';

export type ModuleItem = {
    /**
     * the unique identifier for the module item
     */
    id?: number;
    /**
     * the id of the Module this item appears in
     */
    module_id?: number;
    /**
     * the position of this item in the module (1-based)
     */
    position?: number;
    /**
     * the title of this item
     */
    title?: string;
    /**
     * 0-based indent level; module items may be indented to show a hierarchy
     */
    indent?: number;
    /**
     * the type of object referred to one of 'File', 'Page', 'Discussion', 'Assignment', 'Quiz', 'SubHeader', 'ExternalUrl', 'ExternalTool'
     */
    type?: string;
    /**
     * the id of the object referred to applies to 'File', 'Discussion', 'Assignment', 'Quiz', 'ExternalTool' types
     */
    content_id?: number;
    /**
     * link to the item in Canvas
     */
    html_url?: string;
    /**
     * (Optional) link to the Canvas API object, if applicable
     */
    url?: string;
    /**
     * (only for 'Page' type) unique locator for the linked wiki page
     */
    page_url?: string;
    /**
     * (only for 'ExternalUrl' and 'ExternalTool' types) external url that the item points to
     */
    external_url?: string;
    /**
     * (only for 'ExternalTool' type) whether the external tool opens in a new tab
     */
    new_tab?: boolean;
    completion_requirement?: CompletionRequirement;
    content_details?: ContentDetails;
    /**
     * (Optional) Whether this module item is published. This field is present only if the caller has permission to view unpublished items.
     */
    published?: boolean;
};

