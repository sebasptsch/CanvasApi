/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Possible avatar for a user.
 */
export type Avatar = {
  /**
   * ['gravatar'|'attachment'|'no_pic'] The type of avatar record, for categorization purposes.
   */
  type: string;
  /**
   * The url of the avatar
   */
  url: string;
  /**
   * A unique representation of the avatar record which can be used to set the avatar with the user update endpoint. Note: this is an internal representation and is subject to change without notice. It should be consumed with this api endpoint and used in the user update endpoint, and should not be constructed by the client.
   */
  token: string;
  /**
   * A textual description of the avatar record.
   */
  display_name: string;
  /**
   * ['attachment' type only] the internal id of the attachment
   */
  id?: number;
  /**
   * ['attachment' type only] the content-type of the attachment.
   */
  "content-type"?: string;
  /**
   * ['attachment' type only] the filename of the attachment
   */
  filename?: string;
  /**
   * ['attachment' type only] the size of the attachment
   */
  size?: number;
};
