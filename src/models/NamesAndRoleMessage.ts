/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Additional attributes which would appear in the LTI launch message were this member to click the specified resource link (`rlid` query parameter)
 */
export type NamesAndRoleMessage = {
  /**
   * The type of LTI message being described. Always set to 'LtiResourceLinkRequest'
   */
  MessageType?: NamesAndRoleMessage.MessageType;
  /**
   * The member's preferred locale
   */
  locale?: string;
  /**
   * The member's API ID
   */
  "https://www.instructure.com/canvas_user_id"?: number;
  /**
   * The member's primary login username
   */
  "https://www.instructure.com/canvas_user_login_id"?: string;
  /**
   * Expanded LTI custom parameters that pertain to the member (as opposed to the Context)
   */
  "https://purl.imsglobal.org/spec/lti/claim/custom"?: any;
};

export namespace NamesAndRoleMessage {
  /**
   * The type of LTI message being described. Always set to 'LtiResourceLinkRequest'
   */
  export enum MessageType {
    LTI_RESOURCE_LINK_REQUEST = "LtiResourceLinkRequest",
  }
}
