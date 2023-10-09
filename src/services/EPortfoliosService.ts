/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ePortfolio } from "../models/ePortfolio";
import type { ePortfolioPage } from "../models/ePortfolioPage";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class EPortfoliosService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get an ePortfolio
   * Get details for a single ePortfolio.
   * @param id ID
   * @returns ePortfolio success
   * @throws ApiError
   */
  public getEportfolio(id: string): CancelablePromise<ePortfolio> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/eportfolios/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * Delete an ePortfolio
   * Mark an ePortfolio as deleted.
   * @param id ID
   * @returns ePortfolio success
   * @throws ApiError
   */
  public deleteEportfolio(id: string): CancelablePromise<ePortfolio> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/eportfolios/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * Get all ePortfolios for a User
   * Get a list of all ePortfolios for the specified user.
   * @param userId ID
   * @param include deleted:: Include deleted ePortfolios. Only available to admins who can
   * moderate_user_content.
   * @returns ePortfolio success
   * @throws ApiError
   */
  public getAllEportfoliosForUser(
    userId: string,
    include?: "deleted",
  ): CancelablePromise<Array<ePortfolio>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/eportfolios",
      path: {
        user_id: userId,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Moderate all ePortfolios for a User
   * Update the spam_status for all active eportfolios of a user. Only available to
   * admins who can moderate_user_content.
   * @param userId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public moderateAllEportfoliosForUser(
    userId: string,
    formData?: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/{user_id}/eportfolios",
      path: {
        user_id: userId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get ePortfolio Pages
   * Get details for the pages of an ePortfolio
   * @param eportfolioId ID
   * @returns ePortfolioPage success
   * @throws ApiError
   */
  public getEportfolioPages(
    eportfolioId: string,
  ): CancelablePromise<Array<ePortfolioPage>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/eportfolios/{eportfolio_id}/pages",
      path: {
        eportfolio_id: eportfolioId,
      },
    });
  }

  /**
   * Moderate an ePortfolio
   * Update the spam_status of an eportfolio. Only available to admins who can
   * moderate_user_content.
   * @param eportfolioId ID
   * @param formData
   * @returns ePortfolio success
   * @throws ApiError
   */
  public moderateEportfolio(
    eportfolioId: string,
    formData?: any,
  ): CancelablePromise<ePortfolio> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/eportfolios/{eportfolio_id}/moderate",
      path: {
        eportfolio_id: eportfolioId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Restore a deleted ePortfolio
   * Restore an ePortfolio back to active that was previously deleted. Only
   * available to admins who can moderate_user_content.
   * @param eportfolioId ID
   * @returns ePortfolio success
   * @throws ApiError
   */
  public restoreDeletedEportfolio(
    eportfolioId: string,
  ): CancelablePromise<ePortfolio> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/eportfolios/{eportfolio_id}/restore",
      path: {
        eportfolio_id: eportfolioId,
      },
    });
  }
}
