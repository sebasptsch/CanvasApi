/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConversationParticipant = {
  /**
   * The user ID for the participant.
   */
  id?: number;
  /**
   * A short name the user has selected, for use in conversations or other less formal places through the site.
   */
  name?: string;
  /**
   * The full name of the user.
   */
  full_name?: string;
  /**
   * If requested, this field will be included and contain a url to retrieve the user's avatar.
   */
  avatar_url?: string;
};
