/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SharedBrandConfig } from "../models/SharedBrandConfig";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class SharedBrandConfigsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Share a BrandConfig (Theme)
   * Create a SharedBrandConfig, which will give the given brand_config a name
   * and make it available to other users of this account.
   * @param accountId ID
   * @param formData
   * @returns SharedBrandConfig success
   * @throws ApiError
   */
  public shareBrandconfigTheme(
    accountId: string,
    formData: any,
  ): CancelablePromise<SharedBrandConfig> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/accounts/{account_id}/shared_brand_configs",
      path: {
        account_id: accountId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Update a shared theme
   * Update the specified shared_brand_config with a new name or to point to a new brand_config.
   * Uses same parameters as create.
   * @param accountId ID
   * @param id ID
   * @returns SharedBrandConfig success
   * @throws ApiError
   */
  public updateSharedTheme(
    accountId: string,
    id: string,
  ): CancelablePromise<SharedBrandConfig> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/accounts/{account_id}/shared_brand_configs/{id}",
      path: {
        account_id: accountId,
        id: id,
      },
    });
  }

  /**
   * Un-share a BrandConfig (Theme)
   * Delete a SharedBrandConfig, which will unshare it so you nor anyone else in
   * your account will see it as an option to pick from.
   * @param id ID
   * @returns SharedBrandConfig success
   * @throws ApiError
   */
  public unShareBrandconfigTheme(
    id: string,
  ): CancelablePromise<SharedBrandConfig> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/shared_brand_configs/{id}",
      path: {
        id: id,
      },
    });
  }
}
