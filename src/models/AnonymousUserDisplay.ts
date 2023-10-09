/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This mini-object is returned in place of UserDisplay when returning student data for anonymous assignments, and includes an anonymous ID to identify a user within the scope of a single assignment.
 */
export type AnonymousUserDisplay = {
  /**
   * A unique short ID identifying this user within the scope of a particular assignment.
   */
  anonymous_id?: string;
  /**
   * A URL to retrieve a generic avatar.
   */
  avatar_image_url?: string;
  /**
   * The anonymized display name for the student.
   */
  display_name?: string;
};
