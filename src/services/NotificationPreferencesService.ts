/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationPreference } from "../models/NotificationPreference";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class NotificationPreferencesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Update multiple preferences
   * Change the preferences for multiple notifications for a single communication channel at once
   * @param type ID
   * @param address ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public updateMultiplePreferencesType(
    type: string,
    address: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/self/communication_channels/{type}/{address}/notification_preferences",
      path: {
        type: type,
        address: address,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a preference
   * Fetch the preference for the given notification for the given communication channel
   * @param userId ID
   * @param type ID
   * @param address ID
   * @param notification ID
   * @returns NotificationPreference success
   * @throws ApiError
   */
  public getPreferenceType(
    userId: string,
    type: string,
    address: string,
    notification: string,
  ): CancelablePromise<NotificationPreference> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/communication_channels/{type}/{address}/notification_preferences/{notification}",
      path: {
        user_id: userId,
        type: type,
        address: address,
        notification: notification,
      },
    });
  }

  /**
   * Update preferences by category
   * Change the preferences for multiple notifications based on the category for a single communication channel
   * @param communicationChannelId ID
   * @param category The name of the category. Must be parameterized (e.g. The category "Course Content" should be "course_content")
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public updatePreferencesByCategory(
    communicationChannelId: string,
    category: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/self/communication_channels/{communication_channel_id}/notification_preference_categories/{category}",
      path: {
        communication_channel_id: communicationChannelId,
        category: category,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get a preference
   * Fetch the preference for the given notification for the given communication channel
   * @param userId ID
   * @param communicationChannelId ID
   * @param notification ID
   * @returns NotificationPreference success
   * @throws ApiError
   */
  public getPreferenceCommunicationChannelId(
    userId: string,
    communicationChannelId: string,
    notification: string,
  ): CancelablePromise<NotificationPreference> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/communication_channels/{communication_channel_id}/notification_preferences/{notification}",
      path: {
        user_id: userId,
        communication_channel_id: communicationChannelId,
        notification: notification,
      },
    });
  }

  /**
   * List preferences
   * Fetch all preferences for the given communication channel
   * @param userId ID
   * @param communicationChannelId ID
   * @returns NotificationPreference success
   * @throws ApiError
   */
  public listPreferencesCommunicationChannelId(
    userId: string,
    communicationChannelId: string,
  ): CancelablePromise<Array<NotificationPreference>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/communication_channels/{communication_channel_id}/notification_preferences",
      path: {
        user_id: userId,
        communication_channel_id: communicationChannelId,
      },
    });
  }

  /**
   * List preferences
   * Fetch all preferences for the given communication channel
   * @param userId ID
   * @param type ID
   * @param address ID
   * @returns NotificationPreference success
   * @throws ApiError
   */
  public listPreferencesType(
    userId: string,
    type: string,
    address: string,
  ): CancelablePromise<Array<NotificationPreference>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/communication_channels/{type}/{address}/notification_preferences",
      path: {
        user_id: userId,
        type: type,
        address: address,
      },
    });
  }

  /**
   * Update multiple preferences
   * Change the preferences for multiple notifications for a single communication channel at once
   * @param communicationChannelId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public updateMultiplePreferencesCommunicationChannelId(
    communicationChannelId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/self/communication_channels/{communication_channel_id}/notification_preferences",
      path: {
        communication_channel_id: communicationChannelId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Update a preference
   * Change the preference for a single notification for a single communication channel
   * @param communicationChannelId ID
   * @param notification ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public updatePreferenceCommunicationChannelId(
    communicationChannelId: string,
    notification: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/self/communication_channels/{communication_channel_id}/notification_preferences/{notification}",
      path: {
        communication_channel_id: communicationChannelId,
        notification: notification,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List of preference categories
   * Fetch all notification preference categories for the given communication channel
   * @param userId ID
   * @param communicationChannelId ID
   * @returns any success
   * @throws ApiError
   */
  public listOfPreferenceCategories(
    userId: string,
    communicationChannelId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/communication_channels/{communication_channel_id}/notification_preference_categories",
      path: {
        user_id: userId,
        communication_channel_id: communicationChannelId,
      },
    });
  }

  /**
   * Update a preference
   * Change the preference for a single notification for a single communication channel
   * @param type ID
   * @param address ID
   * @param notification ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public updatePreferenceType(
    type: string,
    address: string,
    notification: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/self/communication_channels/{type}/{address}/notification_preferences/{notification}",
      path: {
        type: type,
        address: address,
        notification: notification,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
