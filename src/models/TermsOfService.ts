/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TermsOfService = {
    /**
     * Terms Of Service id
     */
    id?: number;
    /**
     * The given type for the Terms of Service
     */
    terms_type?: TermsOfService.terms_type;
    /**
     * Boolean dictating if the user must accept Terms of Service
     */
    passive?: boolean;
    /**
     * The id of the root account that owns the Terms of Service
     */
    account_id?: number;
    /**
     * Content of the Terms of Service
     */
    content?: string;
    /**
     * The type of self registration allowed
     */
    self_registration_type?: string;
};

export namespace TermsOfService {

    /**
     * The given type for the Terms of Service
     */
    export enum terms_type {
        DEFAULT = 'default',
        CUSTOM = 'custom',
        NO_TERMS = 'no_terms',
    }


}

