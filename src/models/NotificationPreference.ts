/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NotificationPreference = {
  href?: string;
  /**
   * The notification this preference belongs to
   */
  notification?: string;
  /**
   * The category of that notification
   */
  category?: string;
  /**
   * How often to send notifications to this communication channel for the given notification. Possible values are 'immediately', 'daily', 'weekly', and 'never'
   */
  frequency?: string;
};
