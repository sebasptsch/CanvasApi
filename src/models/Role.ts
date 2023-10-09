/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Role = {
  /**
   * The label of the role.
   */
  label?: string;
  /**
   * The label of the role. (Deprecated alias for 'label')
   */
  role?: string;
  /**
   * The role type that is being used as a base for this role. For account-level roles, this is 'AccountMembership'. For course-level roles, it is an enrollment type.
   */
  base_role_type?: string;
  /**
   * JSON representation of the account the role is in.
   */
  account?: any;
  /**
   * The state of the role: 'active', 'inactive', or 'built_in'
   */
  workflow_state?: string;
  /**
   * A dictionary of permissions keyed by name (see permissions input parameter in the 'Create a role' API).
   */
  permissions?: any;
};
