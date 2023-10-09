/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from "./User";

export type Admin = {
  /**
   * The unique identifier for the account role/user assignment.
   */
  id: number;
  /**
   * The account role assigned. This can be 'AccountAdmin' or a user-defined role created by the Roles API.
   */
  role?: string;
  user?: User;
  /**
   * The status of the account role/user assignment.
   */
  workflow_state?: string;
};
