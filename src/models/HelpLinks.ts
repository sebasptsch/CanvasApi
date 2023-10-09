/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HelpLink } from "./HelpLink";

export type HelpLinks = {
  /**
   * Help link button title
   */
  help_link_name?: string;
  /**
   * Help link button icon
   */
  help_link_icon?: string;
  /**
   * Help links defined by the account. Could include default help links.
   */
  custom_help_links?: Array<HelpLink>;
  /**
   * Default help links provided when account has not set help links of their own.
   */
  default_help_links?: Array<HelpLink>;
};
