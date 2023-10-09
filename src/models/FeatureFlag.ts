/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FeatureFlag = {
  /**
   * The type of object to which this flag applies (Account, Course, or User). (This field is not present if this FeatureFlag represents the global Canvas default)
   */
  context_type?: string;
  /**
   * The id of the object to which this flag applies (This field is not present if this FeatureFlag represents the global Canvas default)
   */
  context_id?: number;
  /**
   * The feature this flag controls
   */
  feature?: string;
  /**
   * The policy for the feature at this context.  can be 'off', 'allowed', 'allowed_on', or 'on'.
   */
  state?: string;
  /**
   * If set, this feature flag cannot be changed in the caller's context because the flag is set 'off' or 'on' in a higher context
   */
  locked?: boolean;
};
