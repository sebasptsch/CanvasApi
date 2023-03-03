/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A single attribute name to be federated when a user logs in
 */
export type FederatedAttributeConfig = {
    /**
     * The name of the attribute as it will be sent from the authentication provider
     */
    attribute?: string;
    /**
     * If the attribute should be applied only when provisioning a new user, rather than all logins
     */
    provisioning_only?: boolean;
};

