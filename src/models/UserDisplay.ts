/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This mini-object is used for secondary user responses, when we just want to provide enough information to display a user.
 */
export type UserDisplay = {
  /**
   * The ID of the user.
   */
  id?: number;
  /**
   * A short name the user has selected, for use in conversations or other less formal places through the site.
   */
  short_name?: string;
  /**
   * If avatars are enabled, this field will be included and contain a url to retrieve the user's avatar.
   */
  avatar_image_url?: string;
  /**
   * URL to access user, either nested to a context or directly.
   */
  html_url?: string;
};
