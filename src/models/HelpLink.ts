/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HelpLink = {
    /**
     * The ID of the help link
     */
    id?: string;
    /**
     * The name of the help link
     */
    text?: string;
    /**
     * The description of the help link
     */
    subtext?: string;
    /**
     * The URL of the help link
     */
    url?: string;
    /**
     * The type of the help link
     */
    type?: HelpLink.type;
    /**
     * The roles that have access to this help link
     */
    available_to?: Array<string>;
};

export namespace HelpLink {

    /**
     * The type of the help link
     */
    export enum type {
        DEFAULT = 'default',
        CUSTOM = 'custom',
    }


}

