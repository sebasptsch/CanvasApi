/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RolePermissions = {
  /**
   * Whether the role has the permission
   */
  enabled?: boolean;
  /**
   * Whether the permission is locked by this role
   */
  locked?: boolean;
  /**
   * Whether the permission applies to the account this role is in. Only present if enabled is true
   */
  applies_to_self?: boolean;
  /**
   * Whether the permission cascades down to sub accounts of the account this role is in. Only present if enabled is true
   */
  applies_to_descendants?: boolean;
  /**
   * Whether the permission can be modified in this role (i.e. whether the permission is locked by an upstream role).
   */
  readonly?: boolean;
  /**
   * Whether the value of enabled is specified explicitly by this role, or inherited from an upstream role.
   */
  explicit?: boolean;
  /**
   * The value that would have been inherited from upstream if the role had not explicitly set a value. Only present if explicit is true.
   */
  prior_default?: boolean;
};
