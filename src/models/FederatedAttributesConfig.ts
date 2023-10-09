/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A mapping of Canvas attribute names to attribute names that a provider may send, in order to update the value of these attributes when a user logs in. The values can be a FederatedAttributeConfig, or a raw string corresponding to the "attribute" property of a FederatedAttributeConfig. In responses, full FederatedAttributeConfig objects are returned if JIT provisioning is enabled, otherwise just the attribute names are returned.
 */
export type FederatedAttributesConfig = {
  /**
   * A comma separated list of role names to grant to the user. Note that these only apply at the root account level, and not sub-accounts. If the attribute is not marked for provisioning only, the user will also be removed from any other roles they currently hold that are not still specified by the IdP.
   */
  admin_roles?: string;
  /**
   * The full display name of the user
   */
  display_name?: string;
  /**
   * The user's e-mail address
   */
  email?: string;
  /**
   * The first, or given, name of the user
   */
  given_name?: string;
  /**
   * The secondary unique identifier for SIS purposes
   */
  integration_id?: string;
  /**
   * The user's preferred locale/language
   */
  locale?: string;
  /**
   * The full name of the user
   */
  name?: string;
  /**
   * The unique SIS identifier
   */
  sis_user_id?: string;
  /**
   * The full name of the user for sorting purposes
   */
  sortable_name?: string;
  /**
   * The surname, or last name, of the user
   */
  surname?: string;
  /**
   * The user's preferred time zone
   */
  timezone?: string;
};
