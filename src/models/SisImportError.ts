/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SisImportError = {
    /**
     * The unique identifier for the SIS import.
     */
    sis_import_id?: number;
    /**
     * The file where the error message occurred.
     */
    file?: string;
    /**
     * The error message that from the record.
     */
    message?: string;
    /**
     * The contents of the line that had the error.
     */
    row_info?: string;
    /**
     * The line number where the error occurred. Some Importers do not yet support this. This is a 1 based index starting with the header row.
     */
    row?: number;
};

