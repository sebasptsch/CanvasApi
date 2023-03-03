/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FederatedAttributesConfig } from './FederatedAttributesConfig';

export type AuthenticationProvider = {
    /**
     * Valid for SAML providers.
     */
    identifier_format?: string;
    /**
     * Valid for all providers.
     */
    auth_type?: string;
    /**
     * Valid for all providers.
     */
    id?: number;
    /**
     * Valid for SAML providers.
     */
    log_out_url?: string;
    /**
     * Valid for SAML and CAS providers.
     */
    log_in_url?: string;
    /**
     * Valid for SAML providers.
     */
    certificate_fingerprint?: string;
    /**
     * Valid for SAML providers.
     */
    requested_authn_context?: string;
    /**
     * Valid for LDAP providers.
     */
    auth_host?: string;
    /**
     * Valid for LDAP providers.
     */
    auth_filter?: string;
    /**
     * Valid for LDAP providers.
     */
    auth_over_tls?: number;
    /**
     * Valid for LDAP and CAS providers.
     */
    auth_base?: string;
    /**
     * Valid for LDAP providers.
     */
    auth_username?: string;
    /**
     * Valid for LDAP providers.
     */
    auth_port?: number;
    /**
     * Valid for all providers.
     */
    position?: number;
    /**
     * Valid for SAML providers.
     */
    idp_entity_id?: string;
    /**
     * Valid for SAML providers.
     */
    login_attribute?: string;
    /**
     * Valid for SAML providers.
     */
    sig_alg?: string;
    /**
     * Just In Time provisioning. Valid for all providers except Canvas (which has the similar in concept self_registration setting).
     */
    jit_provisioning?: boolean;
    federated_attributes?: FederatedAttributesConfig;
    /**
     * If multi-factor authentication is required when logging in with this authentication provider. The account must not have MFA disabled.
     */
    mfa_required?: boolean;
};

