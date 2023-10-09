/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";
import type { User } from "./User";

export type PageRevision = {
  /**
   * an identifier for this revision of the page
   */
  revision_id?: number;
  updated_at?: datetime;
  /**
   * whether this is the latest revision or not
   */
  latest?: boolean;
  edited_by?: User;
  /**
   * the following fields are not included in the index action and may be omitted from the show action via summary=1 the historic url of the page
   */
  url?: string;
  /**
   * the historic page title
   */
  title?: string;
  /**
   * the historic page contents
   */
  body?: string;
};
