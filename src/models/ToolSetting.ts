/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ToolSetting = {
    /**
     * the resource type code of the resource handler to use to display originality reports
     */
    resource_type_code?: string;
    /**
     * a URL that may be used to override the launch URL inferred by the specified resource_type_code. If used a 'resource_type_code' must also be specified.
     */
    resource_url?: string;
};

