/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";

export type CommMessage = {
  /**
   * The ID of the CommMessage.
   */
  id?: number;
  created_at?: datetime;
  sent_at?: datetime;
  /**
   * The workflow state of the message. One of 'created', 'staged', 'sending', 'sent', 'bounced', 'dashboard', 'cancelled', or 'closed'
   */
  workflow_state?: string;
  /**
   * The address that was put in the 'from' field of the message
   */
  from?: string;
  /**
   * The display name for the from address
   */
  from_name?: string;
  /**
   * The address the message was sent to:
   */
  to?: string;
  /**
   * The reply_to header of the message
   */
  reply_to?: string;
  /**
   * The message subject
   */
  subject?: string;
  /**
   * The plain text body of the message
   */
  body?: string;
  /**
   * The HTML body of the message.
   */
  html_body?: string;
};
