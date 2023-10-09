/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Feature } from "../models/Feature";
import type { FeatureFlag } from "../models/FeatureFlag";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class FeatureFlagsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List features
   * A paginated list of all features that apply to a given Account, Course, or User.
   * @param userId ID
   * @returns Feature success
   * @throws ApiError
   */
  public listFeaturesUsers(userId: string): CancelablePromise<Array<Feature>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/features",
      path: {
        user_id: userId,
      },
    });
  }

  /**
   * Get feature flag
   * Get the feature flag that applies to a given Account, Course, or User.
   * The flag may be defined on the object, or it may be inherited from a parent
   * account. You can look at the context_id and context_type of the returned object
   * to determine which is the case. If these fields are missing, then the object
   * is the global Canvas default.
   * @param courseId ID
   * @param feature ID
   * @returns FeatureFlag success
   * @throws ApiError
   */
  public getFeatureFlagCourses(
    courseId: string,
    feature: string,
  ): CancelablePromise<FeatureFlag> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/features/flags/{feature}",
      path: {
        course_id: courseId,
        feature: feature,
      },
    });
  }

  /**
   * Set feature flag
   * Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets
   * a feature flag for the same feature in any state other than "allowed".
   * @param courseId ID
   * @param feature ID
   * @param formData
   * @returns FeatureFlag success
   * @throws ApiError
   */
  public setFeatureFlagCourses(
    courseId: string,
    feature: string,
    formData?: any,
  ): CancelablePromise<FeatureFlag> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/features/flags/{feature}",
      path: {
        course_id: courseId,
        feature: feature,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Remove feature flag
   * Remove feature flag for a given Account, Course, or User.  (Note that the flag must
   * be defined on the Account, Course, or User directly.)  The object will then inherit
   * the feature flags from a higher account, if any exist.  If this flag was 'on' or 'off',
   * then lower-level account flags that were masked by this one will apply again.
   * @param courseId ID
   * @param feature ID
   * @returns FeatureFlag success
   * @throws ApiError
   */
  public removeFeatureFlagCourses(
    courseId: string,
    feature: string,
  ): CancelablePromise<FeatureFlag> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/features/flags/{feature}",
      path: {
        course_id: courseId,
        feature: feature,
      },
    });
  }

  /**
   * List enabled features
   * A paginated list of all features that are enabled on a given Account, Course, or User.
   * Only the feature names are returned.
   * @param courseId ID
   * @returns any success
   * @throws ApiError
   */
  public listEnabledFeaturesCourses(courseId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/features/enabled",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * List enabled features
   * A paginated list of all features that are enabled on a given Account, Course, or User.
   * Only the feature names are returned.
   * @param accountId ID
   * @returns any success
   * @throws ApiError
   */
  public listEnabledFeaturesAccounts(
    accountId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/features/enabled",
      path: {
        account_id: accountId,
      },
    });
  }

  /**
   * List features
   * A paginated list of all features that apply to a given Account, Course, or User.
   * @param courseId ID
   * @returns Feature success
   * @throws ApiError
   */
  public listFeaturesCourses(
    courseId: string,
  ): CancelablePromise<Array<Feature>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/features",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * List environment features
   * Return a hash of global feature options that pertain to the
   * Canvas user interface. This is the same information supplied to the
   * web interface as +ENV.FEATURES+.
   * @returns any success
   * @throws ApiError
   */
  public listEnvironmentFeatures(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/features/environment",
    });
  }

  /**
   * Get feature flag
   * Get the feature flag that applies to a given Account, Course, or User.
   * The flag may be defined on the object, or it may be inherited from a parent
   * account. You can look at the context_id and context_type of the returned object
   * to determine which is the case. If these fields are missing, then the object
   * is the global Canvas default.
   * @param accountId ID
   * @param feature ID
   * @returns FeatureFlag success
   * @throws ApiError
   */
  public getFeatureFlagAccounts(
    accountId: string,
    feature: string,
  ): CancelablePromise<FeatureFlag> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/features/flags/{feature}",
      path: {
        account_id: accountId,
        feature: feature,
      },
    });
  }

  /**
   * Set feature flag
   * Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets
   * a feature flag for the same feature in any state other than "allowed".
   * @param accountId ID
   * @param feature ID
   * @param formData
   * @returns FeatureFlag success
   * @throws ApiError
   */
  public setFeatureFlagAccounts(
    accountId: string,
    feature: string,
    formData?: any,
  ): CancelablePromise<FeatureFlag> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/accounts/{account_id}/features/flags/{feature}",
      path: {
        account_id: accountId,
        feature: feature,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Remove feature flag
   * Remove feature flag for a given Account, Course, or User.  (Note that the flag must
   * be defined on the Account, Course, or User directly.)  The object will then inherit
   * the feature flags from a higher account, if any exist.  If this flag was 'on' or 'off',
   * then lower-level account flags that were masked by this one will apply again.
   * @param accountId ID
   * @param feature ID
   * @returns FeatureFlag success
   * @throws ApiError
   */
  public removeFeatureFlagAccounts(
    accountId: string,
    feature: string,
  ): CancelablePromise<FeatureFlag> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/accounts/{account_id}/features/flags/{feature}",
      path: {
        account_id: accountId,
        feature: feature,
      },
    });
  }

  /**
   * Get feature flag
   * Get the feature flag that applies to a given Account, Course, or User.
   * The flag may be defined on the object, or it may be inherited from a parent
   * account. You can look at the context_id and context_type of the returned object
   * to determine which is the case. If these fields are missing, then the object
   * is the global Canvas default.
   * @param userId ID
   * @param feature ID
   * @returns FeatureFlag success
   * @throws ApiError
   */
  public getFeatureFlagUsers(
    userId: string,
    feature: string,
  ): CancelablePromise<FeatureFlag> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/features/flags/{feature}",
      path: {
        user_id: userId,
        feature: feature,
      },
    });
  }

  /**
   * Set feature flag
   * Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets
   * a feature flag for the same feature in any state other than "allowed".
   * @param userId ID
   * @param feature ID
   * @param formData
   * @returns FeatureFlag success
   * @throws ApiError
   */
  public setFeatureFlagUsers(
    userId: string,
    feature: string,
    formData?: any,
  ): CancelablePromise<FeatureFlag> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/{user_id}/features/flags/{feature}",
      path: {
        user_id: userId,
        feature: feature,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Remove feature flag
   * Remove feature flag for a given Account, Course, or User.  (Note that the flag must
   * be defined on the Account, Course, or User directly.)  The object will then inherit
   * the feature flags from a higher account, if any exist.  If this flag was 'on' or 'off',
   * then lower-level account flags that were masked by this one will apply again.
   * @param userId ID
   * @param feature ID
   * @returns FeatureFlag success
   * @throws ApiError
   */
  public removeFeatureFlagUsers(
    userId: string,
    feature: string,
  ): CancelablePromise<FeatureFlag> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/users/{user_id}/features/flags/{feature}",
      path: {
        user_id: userId,
        feature: feature,
      },
    });
  }

  /**
   * List enabled features
   * A paginated list of all features that are enabled on a given Account, Course, or User.
   * Only the feature names are returned.
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public listEnabledFeaturesUsers(userId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/features/enabled",
      path: {
        user_id: userId,
      },
    });
  }

  /**
   * List features
   * A paginated list of all features that apply to a given Account, Course, or User.
   * @param accountId ID
   * @returns Feature success
   * @throws ApiError
   */
  public listFeaturesAccounts(
    accountId: string,
  ): CancelablePromise<Array<Feature>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/features",
      path: {
        account_id: accountId,
      },
    });
  }
}
