/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SisImportCounts } from './SisImportCounts';

export type SisImportData = {
    /**
     * The type of SIS import
     */
    import_type?: string;
    /**
     * Which files were included in the SIS import
     */
    supplied_batches?: Array<string>;
    counts?: SisImportCounts;
};

