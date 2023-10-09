/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

export type ePortfolioPage = {
  /**
   * The database ID of the ePortfolio
   */
  id?: number;
  /**
   * The ePortfolio ID to which the entry belongs
   */
  eportfolio_id?: number;
  /**
   * The positional order of the entry in the list
   */
  position?: number;
  /**
   * The name of the ePortfolio
   */
  name?: string;
  /**
   * The user entered content of the entry
   */
  content?: string;
  created_at?: datetime;
  updated_at?: datetime;
};
