/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EpubExport } from "./EpubExport";

/**
 * Combination of a Course & EpubExport.
 */
export type CourseEpubExport = {
  /**
   * the unique identifier for the course
   */
  id?: number;
  /**
   * the name for the course
   */
  name?: string;
  epub_export?: EpubExport;
};
