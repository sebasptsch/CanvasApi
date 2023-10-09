/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

export type LockInfo = {
  /**
   * Asset string for the object causing the lock
   */
  asset_string?: string;
  unlock_at?: datetime;
  lock_at?: datetime;
  /**
   * (Optional) Context module causing the lock.
   */
  context_module?: string;
  manually_locked?: boolean;
};
