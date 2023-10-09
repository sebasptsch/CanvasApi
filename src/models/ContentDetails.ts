/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";
import type { LockInfo } from "./LockInfo";

export type ContentDetails = {
  points_possible?: number;
  due_at?: datetime;
  unlock_at?: datetime;
  lock_at?: datetime;
  locked_for_user?: boolean;
  lock_explanation?: string;
  lock_info?: LockInfo;
};
