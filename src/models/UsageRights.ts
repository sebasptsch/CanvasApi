/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Describes the copyright and license information for a File
 */
export type UsageRights = {
  /**
   * Copyright line for the file
   */
  legal_copyright?: string;
  /**
   * Justification for using the file in a Canvas course. Valid values are 'own_copyright', 'public_domain', 'used_by_permission', 'fair_use', 'creative_commons'
   */
  use_justification?: string;
  /**
   * License identifier for the file.
   */
  license?: string;
  /**
   * Readable license name
   */
  license_name?: string;
  /**
   * Explanation of the action performed
   */
  message?: string;
  /**
   * List of ids of files that were updated
   */
  file_ids?: Array<number>;
};
