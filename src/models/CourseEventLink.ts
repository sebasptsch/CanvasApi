/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CourseEventLink = {
  /**
   * ID of the course for the event.
   */
  course?: number;
  /**
   * ID of the user for the event (who made the change).
   */
  user?: number;
  /**
   * ID of the page view during the event if it exists.
   */
  page_view?: string;
  /**
   * ID of the course that this course was copied from. This is only included if the event_type is copied_from.
   */
  copied_from?: number;
  /**
   * ID of the course that this course was copied to. This is only included if the event_type is copied_to.
   */
  copied_to?: number;
  /**
   * ID of the SIS batch that triggered the event.
   */
  sis_batch?: number;
};
