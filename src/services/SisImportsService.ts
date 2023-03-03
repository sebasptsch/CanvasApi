/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Progress } from '../models/Progress';
import type { ref } from '../models/ref';
import type { SisImport } from '../models/SisImport';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SisImportsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Restore workflow_states of SIS imported items
     * This will restore the the workflow_state for all the items that changed
     * their workflow_state during the import being restored.
     * This will restore states for items imported with the following importers:
     * accounts.csv terms.csv courses.csv sections.csv group_categories.csv
     * groups.csv users.csv admins.csv
     * This also restores states for other items that changed during the import.
     * An example would be if an enrollment was deleted from a sis import and the
     * group_membership was also deleted as a result of the enrollment deletion,
     * both items would be restored when the sis batch is restored.
     * @param accountId ID
     * @param id ID
     * @param formData
     * @returns Progress success
     * @throws ApiError
     */
    public restoreWorkflowStatesOfSisImportedItems(
        accountId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<Progress> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/accounts/{account_id}/sis_imports/{id}/restore_states',
            path: {
                'account_id': accountId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Abort all pending SIS imports
     * Abort already created but not processed or processing SIS imports.
     * @param accountId ID
     * @returns boolean success
     * @throws ApiError
     */
    public abortAllPendingSisImports(
        accountId: string,
    ): CancelablePromise<boolean> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/accounts/{account_id}/sis_imports/abort_all_pending',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Get SIS import list
     * Returns the list of SIS imports for an account
     *
     * Example:
     * curl https://<canvas>/api/v1/accounts/<account_id>/sis_imports \
     * -H 'Authorization: Bearer <token>'
     * @param accountId ID
     * @param createdSince If set, only shows imports created after the specified date (use ISO8601 format)
     * @param createdBefore If set, only shows imports created before the specified date (use ISO8601 format)
     * @param workflowState If set, only returns imports that are in the given state.
     * @returns SisImport success
     * @throws ApiError
     */
    public getSisImportList(
        accountId: string,
        createdSince?: ref,
        createdBefore?: ref,
        workflowState?: 'initializing' | 'created' | 'importing' | 'cleanup_batch' | 'imported' | 'imported_with_messages' | 'aborted' | 'failed' | 'failed_with_messages' | 'restoring' | 'partially_restored' | 'restored',
    ): CancelablePromise<Array<SisImport>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/sis_imports',
            path: {
                'account_id': accountId,
            },
            query: {
                'created_since': createdSince,
                'created_before': createdBefore,
                'workflow_state': workflowState,
            },
        });
    }

    /**
     * Import SIS data
     * Import SIS data into Canvas. Must be on a root account with SIS imports
     * enabled.
     *
     * For more information on the format that's expected here, please see the
     * "SIS CSV" section in the API docs.
     * @param accountId ID
     * @param formData
     * @returns SisImport success
     * @throws ApiError
     */
    public importSisData(
        accountId: string,
        formData?: any,
    ): CancelablePromise<SisImport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/accounts/{account_id}/sis_imports',
            path: {
                'account_id': accountId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get the current importing SIS import
     * Returns the SIS imports that are currently processing for an account. If no
     * imports are running, will return an empty array.
     *
     * Example:
     * curl https://<canvas>/api/v1/accounts/<account_id>/sis_imports/importing \
     * -H 'Authorization: Bearer <token>'
     * @param accountId ID
     * @returns SisImport success
     * @throws ApiError
     */
    public getCurrentImportingSisImport(
        accountId: string,
    ): CancelablePromise<SisImport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/sis_imports/importing',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Get SIS import status
     * Get the status of an already created SIS import.
     *
     * Examples:
     * curl https://<canvas>/api/v1/accounts/<account_id>/sis_imports/<sis_import_id> \
     * -H 'Authorization: Bearer <token>'
     * @param accountId ID
     * @param id ID
     * @returns SisImport success
     * @throws ApiError
     */
    public getSisImportStatus(
        accountId: string,
        id: string,
    ): CancelablePromise<SisImport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/sis_imports/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

    /**
     * Abort SIS import
     * Abort a SIS import that has not completed.
     *
     * Aborting a sis batch that is running can take some time for every process to
     * see the abort event. Subsequent sis batches begin to process 10 minutes
     * after the abort to allow each process to clean up properly.
     * @param accountId ID
     * @param id ID
     * @returns SisImport success
     * @throws ApiError
     */
    public abortSisImport(
        accountId: string,
        id: string,
    ): CancelablePromise<SisImport> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/accounts/{account_id}/sis_imports/{id}/abort',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

}
