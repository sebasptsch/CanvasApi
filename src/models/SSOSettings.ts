/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Settings that are applicable across an account's authentication configuration, even if there are multiple individual providers
 */
export type SSOSettings = {
    /**
     * The label used for unique login identifiers.
     */
    login_handle_name?: string;
    /**
     * The url to redirect users to for password resets. Leave blank for default Canvas behavior
     */
    change_password_url?: string;
    /**
     * If a discovery url is set, canvas will forward all users to that URL when they need to be authenticated. That page will need to then help the user figure out where they need to go to log in. If no discovery url is configured, the first configuration will be used to attempt to authenticate the user.
     */
    auth_discovery_url?: string;
    /**
     * If an unknown user url is set, Canvas will forward to that url when a service authenticates a user, but that user does not exist in Canvas. The default behavior is to present an error.
     */
    unknown_user_url?: string;
};

