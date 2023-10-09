/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticationProvider } from "../models/AuthenticationProvider";
import type { SSOSettings } from "../models/SSOSettings";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class AuthenticationProvidersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get authentication provider
   * Get the specified authentication provider
   * @param accountId ID
   * @param id ID
   * @returns AuthenticationProvider success
   * @throws ApiError
   */
  public getAuthenticationProvider(
    accountId: string,
    id: string,
  ): CancelablePromise<AuthenticationProvider> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/authentication_providers/{id}",
      path: {
        account_id: accountId,
        id: id,
      },
    });
  }

  /**
   * Update authentication provider
   * Update an authentication provider using the same options as the create endpoint.
   * You can not update an existing provider to a new authentication type.
   * @param accountId ID
   * @param id ID
   * @returns AuthenticationProvider success
   * @throws ApiError
   */
  public updateAuthenticationProvider(
    accountId: string,
    id: string,
  ): CancelablePromise<AuthenticationProvider> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/accounts/{account_id}/authentication_providers/{id}",
      path: {
        account_id: accountId,
        id: id,
      },
    });
  }

  /**
   * Delete authentication provider
   * Delete the config
   * @param accountId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public deleteAuthenticationProvider(
    accountId: string,
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/accounts/{account_id}/authentication_providers/{id}",
      path: {
        account_id: accountId,
        id: id,
      },
    });
  }

  /**
   * List authentication providers
   * Returns a paginated list of authentication providers
   * @param accountId ID
   * @returns AuthenticationProvider success
   * @throws ApiError
   */
  public listAuthenticationProviders(
    accountId: string,
  ): CancelablePromise<Array<AuthenticationProvider>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/authentication_providers",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * Add authentication provider
   * Add external authentication provider(s) for the account.
   * Services may be Apple, CAS, Facebook, GitHub, Google, LDAP, LinkedIn,
   * Microsoft, OpenID Connect, SAML, or Twitter.
   *
   * Each authentication provider is specified as a set of parameters as
   * described below. A provider specification must include an 'auth_type'
   * parameter with a value of 'apple', 'canvas', 'cas', 'clever', 'facebook',
   * 'github', 'google', 'ldap', 'linkedin', 'microsoft', 'openid_connect',
   * 'saml', or 'twitter'. The other recognized parameters depend on this
   * auth_type; unrecognized parameters are discarded. Provider specifications
   * not specifying a valid auth_type are ignored.
   *
   * You can set the 'position' for any provider. The config in the 1st position
   * is considered the default. You can set 'jit_provisioning' for any provider
   * besides Canvas. You can set 'mfa_required' for any provider.
   *
   * For Apple, the additional recognized parameters are:
   *
   * - client_id [Required]
   *
   * The developer’s client identifier, as provided by WWDR. Not available if
   * configured globally for Canvas.
   *
   * - login_attribute [Optional]
   *
   * The attribute to use to look up the user's login in Canvas. Either
   * 'sub' (the default), or 'email'
   *
   * - federated_attributes [Optional]
   *
   * See FederatedAttributesConfig. Valid provider attributes are 'email',
   * 'firstName', 'lastName', and 'sub'.
   *
   * For Canvas, the additional recognized parameter is:
   *
   * - self_registration
   *
   * 'all', 'none', or 'observer' - who is allowed to register as a new user
   *
   * For CAS, the additional recognized parameters are:
   *
   * - auth_base
   *
   * The CAS server's URL.
   *
   * - log_in_url [Optional]
   *
   * An alternate SSO URL for logging into CAS. You probably should not set
   * this.
   *
   * For Clever, the additional recognized parameters are:
   *
   * - client_id [Required]
   *
   * The Clever application's Client ID. Not available if configured globally
   * for Canvas.
   *
   * - client_secret [Required]
   *
   * The Clever application's Client Secret. Not available if configured
   * globally for Canvas.
   *
   * - district_id [Optional]
   *
   * A district's Clever ID. Leave this blank to let Clever handle the details
   * with its District Picker. This is required for Clever Instant Login to
   * work in a multi-tenant environment.
   *
   * - login_attribute [Optional]
   *
   * The attribute to use to look up the user's login in Canvas. Either
   * 'id' (the default), 'sis_id', 'email', 'student_number', or
   * 'teacher_number'. Note that some fields may not be populated for
   * all users at Clever.
   *
   * - federated_attributes [Optional]
   *
   * See FederatedAttributesConfig. Valid provider attributes are 'id',
   * 'sis_id', 'email', 'student_number', and 'teacher_number'.
   *
   * For Facebook, the additional recognized parameters are:
   *
   * - app_id [Required]
   *
   * The Facebook App ID. Not available if configured globally for Canvas.
   *
   * - app_secret [Required]
   *
   * The Facebook App Secret. Not available if configured globally for Canvas.
   *
   * - login_attribute [Optional]
   *
   * The attribute to use to look up the user's login in Canvas. Either
   * 'id' (the default), or 'email'
   *
   * - federated_attributes [Optional]
   *
   * See FederatedAttributesConfig. Valid provider attributes are 'email',
   * 'first_name', 'id', 'last_name', 'locale', and 'name'.
   *
   * For GitHub, the additional recognized parameters are:
   *
   * - domain [Optional]
   *
   * The domain of a GitHub Enterprise installation. I.e.
   * github.mycompany.com. If not set, it will default to the public
   * github.com.
   *
   * - client_id [Required]
   *
   * The GitHub application's Client ID. Not available if configured globally
   * for Canvas.
   *
   * - client_secret [Required]
   *
   * The GitHub application's Client Secret. Not available if configured
   * globally for Canvas.
   *
   * - login_attribute [Optional]
   *
   * The attribute to use to look up the user's login in Canvas. Either
   * 'id' (the default), or 'login'
   *
   * - federated_attributes [Optional]
   *
   * See FederatedAttributesConfig. Valid provider attributes are 'email',
   * 'id', 'login', and 'name'.
   *
   * For Google, the additional recognized parameters are:
   *
   * - client_id [Required]
   *
   * The Google application's Client ID. Not available if configured globally
   * for Canvas.
   *
   * - client_secret [Required]
   *
   * The Google application's Client Secret. Not available if configured
   * globally for Canvas.
   *
   * - hosted_domain [Optional]
   *
   * A Google Apps domain to restrict logins to. See
   * https://developers.google.com/identity/protocols/OpenIDConnect?hl=en#hd-param
   *
   * - login_attribute [Optional]
   *
   * The attribute to use to look up the user's login in Canvas. Either
   * 'sub' (the default), or 'email'
   *
   * - federated_attributes [Optional]
   *
   * See FederatedAttributesConfig. Valid provider attributes are 'email',
   * 'family_name', 'given_name', 'locale', 'name', and 'sub'.
   *
   * For LDAP, the additional recognized parameters are:
   *
   * - auth_host
   *
   * The LDAP server's URL.
   *
   * - auth_port [Optional, Integer]
   *
   * The LDAP server's TCP port. (default: 389)
   *
   * - auth_over_tls [Optional]
   *
   * Whether to use TLS. Can be 'simple_tls', or 'start_tls'. For backwards
   * compatibility, booleans are also accepted, with true meaning simple_tls.
   * If not provided, it will default to start_tls.
   *
   * - auth_base [Optional]
   *
   * A default treebase parameter for searches performed against the LDAP
   * server.
   *
   * - auth_filter
   *
   * LDAP search filter. Use !{{login}} as a placeholder for the username
   * supplied by the user. For example: "(sAMAccountName=!{{login}})".
   *
   * - identifier_format [Optional]
   *
   * The LDAP attribute to use to look up the Canvas login. Omit to use
   * the username supplied by the user.
   *
   * - auth_username
   *
   * Username
   *
   * - auth_password
   *
   * Password
   *
   * For LinkedIn, the additional recognized parameters are:
   *
   * - client_id [Required]
   *
   * The LinkedIn application's Client ID. Not available if configured globally
   * for Canvas.
   *
   * - client_secret [Required]
   *
   * The LinkedIn application's Client Secret. Not available if configured
   * globally for Canvas.
   *
   * - login_attribute [Optional]
   *
   * The attribute to use to look up the user's login in Canvas. Either
   * 'id' (the default), or 'emailAddress'
   *
   * - federated_attributes [Optional]
   *
   * See FederatedAttributesConfig. Valid provider attributes are 'emailAddress',
   * 'firstName', 'id', 'formattedName', and 'lastName'.
   *
   * For Microsoft, the additional recognized parameters are:
   *
   * - application_id [Required]
   *
   * The application's ID.
   *
   * - application_secret [Required]
   *
   * The application's Client Secret (Password)
   *
   * - tenant [Optional]
   *
   * See https://azure.microsoft.com/en-us/documentation/articles/active-directory-v2-protocols/
   * Valid values are 'common', 'organizations', 'consumers', or an Azure Active Directory Tenant
   * (as either a UUID or domain, such as contoso.onmicrosoft.com). Defaults to 'common'
   *
   * - login_attribute [Optional]
   *
   * See https://azure.microsoft.com/en-us/documentation/articles/active-directory-v2-tokens/#idtokens
   * Valid values are 'sub', 'email', 'oid', or 'preferred_username'. Note
   * that email may not always be populated in the user's profile at
   * Microsoft. Oid will not be populated for personal Microsoft accounts.
   * Defaults to 'sub'
   *
   * - federated_attributes [Optional]
   *
   * See FederatedAttributesConfig. Valid provider attributes are 'email',
   * 'name', 'preferred_username', 'oid', and 'sub'.
   *
   * For OpenID Connect, the additional recognized parameters are:
   *
   * - client_id [Required]
   *
   * The application's Client ID.
   *
   * - client_secret [Required]
   *
   * The application's Client Secret.
   *
   * - authorize_url [Required]
   *
   * The URL for getting starting the OAuth 2.0 web flow
   *
   * - token_url [Required]
   *
   * The URL for exchanging the OAuth 2.0 authorization code for an Access
   * Token and ID Token
   *
   * - scope [Optional]
   *
   * Space separated additional scopes to request for the token. Note that
   * you need not specify the 'openid' scope, or any scopes that can be
   * automatically inferred by the rules defined at
   * http://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims
   *
   * - end_session_endpoint [Optional]
   *
   * URL to send the end user to after logging out of Canvas. See
   * https://openid.net/specs/openid-connect-session-1_0.html#RPLogout
   *
   * - userinfo_endpoint [Optional]
   *
   * URL to request additional claims from. If the initial ID Token received
   * from the provider cannot be used to satisfy the login_attribute and
   * all federated_attributes, this endpoint will be queried for additional
   * information.
   *
   * - login_attribute [Optional]
   *
   * The attribute of the ID Token to look up the user's login in Canvas.
   * Defaults to 'sub'.
   *
   * - federated_attributes [Optional]
   *
   * See FederatedAttributesConfig. Any value is allowed for the provider
   * attribute names, but standard claims are listed at
   * http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
   *
   * For SAML, the additional recognized parameters are:
   *
   * - metadata [Optional]
   *
   * An XML document to parse as SAML metadata, and automatically populate idp_entity_id,
   * log_in_url, log_out_url, certificate_fingerprint, and identifier_format
   *
   * - metadata_uri [Optional]
   *
   * A URI to download the SAML metadata from, and automatically populate idp_entity_id,
   * log_in_url, log_out_url, certificate_fingerprint, and identifier_format. This URI
   * will also be saved, and the metadata periodically refreshed, automatically. If
   * the metadata contains multiple entities, also supply idp_entity_id to distinguish
   * which one you want (otherwise the only entity in the metadata will be inferred).
   * If you provide the URI 'urn:mace:incommon' or 'http://ukfederation.org.uk',
   * the InCommon or UK Access Management Federation metadata aggregate, respectively,
   * will be used instead, and additional validation checks will happen (including
   * validating that the metadata has been properly signed with the
   * appropriate key).
   *
   * - idp_entity_id
   *
   * The SAML IdP's entity ID
   *
   * - log_in_url
   *
   * The SAML service's SSO target URL
   *
   * - log_out_url [Optional]
   *
   * The SAML service's SLO target URL
   *
   * - certificate_fingerprint
   *
   * The SAML service's certificate fingerprint.
   *
   * - identifier_format
   *
   * The SAML service's identifier format. Must be one of:
   *
   * - urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress
   * - urn:oasis:names:tc:SAML:2.0:nameid-format:entity
   * - urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos
   * - urn:oasis:names:tc:SAML:2.0:nameid-format:persistent
   * - urn:oasis:names:tc:SAML:2.0:nameid-format:transient
   * - urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified
   * - urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName
   * - urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName
   *
   * - requested_authn_context [Optional]
   *
   * The SAML AuthnContext
   *
   * - sig_alg [Optional]
   *
   * If set, +AuthnRequest+, +LogoutRequest+, and +LogoutResponse+ messages
   * are signed with the corresponding algorithm. Supported algorithms are:
   *
   * - {http://www.w3.org/2000/09/xmldsig#rsa-sha1}
   * - {http://www.w3.org/2001/04/xmldsig-more#rsa-sha256}
   *
   * RSA-SHA1 and RSA-SHA256 are acceptable aliases.
   *
   * - federated_attributes [Optional]
   *
   * See FederatedAttributesConfig. Any value is allowed for the provider attribute names.
   *
   * For Twitter, the additional recognized parameters are:
   *
   * - consumer_key [Required]
   *
   * The Twitter Consumer Key. Not available if configured globally for Canvas.
   *
   * - consumer_secret [Required]
   *
   * The Twitter Consumer Secret. Not available if configured globally for Canvas.
   *
   * - login_attribute [Optional]
   *
   * The attribute to use to look up the user's login in Canvas. Either
   * 'user_id' (the default), or 'screen_name'
   *
   * - parent_registration [Optional] - DEPRECATED 2017-11-03
   *
   * Accepts a boolean value, true designates the authentication service
   * for use on parent registrations.  Only one service can be selected
   * at a time so if set to true all others will be set to false
   *
   * - federated_attributes [Optional]
   *
   * See FederatedAttributesConfig. Valid provider attributes are 'name',
   * 'screen_name', 'time_zone', and 'user_id'.
   * @param accountId ID
   * @returns AuthenticationProvider success
   * @throws ApiError
   */
  public addAuthenticationProvider(
    accountId: string,
  ): CancelablePromise<AuthenticationProvider> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/accounts/{account_id}/authentication_providers",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * show account auth settings
   * The way to get the current state of each account level setting
   * that's relevant to Single Sign On configuration
   *
   * You can list the current state of each setting with "update_sso_settings"
   * @param accountId ID
   * @returns SSOSettings success
   * @throws ApiError
   */
  public showAccountAuthSettings(
    accountId: string,
  ): CancelablePromise<SSOSettings> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/sso_settings",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * update account auth settings
   * For various cases of mixed SSO configurations, you may need to set some
   * configuration at the account level to handle the particulars of your
   * setup.
   *
   * This endpoint accepts a PUT request to set several possible account
   * settings. All setting are optional on each request, any that are not
   * provided at all are simply retained as is.  Any that provide the key but
   * a null-ish value (blank string, null, undefined) will be UN-set.
   *
   * You can list the current state of each setting with "show_sso_settings"
   * @param accountId ID
   * @returns SSOSettings success
   * @throws ApiError
   */
  public updateAccountAuthSettings(
    accountId: string,
  ): CancelablePromise<SSOSettings> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/accounts/{account_id}/sso_settings",
      path: {
        account_id: accountId,
      },
    });
  }
}
