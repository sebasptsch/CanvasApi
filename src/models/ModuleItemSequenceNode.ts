/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ModuleItem } from "./ModuleItem";

export type ModuleItemSequenceNode = {
  prev?: ModuleItem;
  current?: ModuleItem;
  next?: ModuleItem;
  /**
   * The conditional release rule for the module item, if applicable
   */
  mastery_path?: any;
};
