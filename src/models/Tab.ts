/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Tab = {
  html_url?: string;
  id?: string;
  label?: string;
  type?: string;
  /**
   * only included if true
   */
  hidden?: boolean;
  /**
   * possible values are: public, members, admins, and none
   */
  visibility?: string;
  /**
   * 1 based
   */
  position?: number;
};
