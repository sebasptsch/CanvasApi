/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

export type DeveloperKey = {
  /**
   * The ID should match the Developer Key ID in canvas
   */
  id?: number;
  /**
   * true the tool is a lti key, null is not a lti key
   */
  is_lti_key?: boolean;
  /**
   * Controls if the tool is visable
   */
  visible?: boolean;
  /**
   * The name of the account associated with the tool
   */
  account_name?: string;
  /**
   * The public key in jwk format
   */
  public_jwk?: string;
  /**
   * The code of the vendor managing the tool
   */
  vendor_code?: string;
  last_used_at?: datetime;
  /**
   * The number of active access tokens associated with the tool
   */
  access_token_count?: number;
  /**
   * redirect uris description
   */
  redirect_uris?: string;
  /**
   * redirect uri description
   */
  redirect_uri?: string;
  /**
   * Api key for api access for the tool
   */
  api_key?: string;
  /**
   * Notes for use specifications for the tool
   */
  notes?: string;
  /**
   * Display name of the tool
   */
  name?: string;
  /**
   * ID of the user associated with the tool
   */
  user_id?: string;
  created_at?: datetime;
  /**
   * The user name of the tool creator
   */
  user_name?: string;
  /**
   * Email associated with the tool owner
   */
  email?: string;
  /**
   * True if the tool has required permissions, null if there are no needed permissions
   */
  require_scopes?: boolean;
  /**
   * Icon to be displayed with the name of the tool
   */
  icon_url?: string;
  /**
   * Specified permissions for the tool
   */
  scopes?: string;
  /**
   * The current state of the tool
   */
  workflow_state?: string;
};
