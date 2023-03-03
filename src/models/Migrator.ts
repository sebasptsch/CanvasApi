/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Migrator = {
    /**
     * The value to pass to the create endpoint
     */
    type?: string;
    /**
     * Whether this endpoint requires a file upload
     */
    requires_file_upload?: boolean;
    /**
     * Description of the package type expected
     */
    name?: string;
    /**
     * A list of fields this system requires
     */
    required_settings?: Array<string>;
};

