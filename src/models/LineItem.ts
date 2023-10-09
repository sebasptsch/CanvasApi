/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LineItem = {
  /**
   * The fully qualified URL for showing, updating, and deleting the Line Item
   */
  id?: string;
  /**
   * The maximum score of the Line Item
   */
  scoreMaximum?: number;
  /**
   * The label of the Line Item.
   */
  label?: string;
  /**
   * Tag used to qualify a line Item beyond its ids
   */
  tag?: string;
  /**
   * A Tool Provider specified id for the Line Item. Multiple line items can share the same resourceId within a given context
   */
  resourceId?: string;
  /**
   * The resource link id the Line Item is attached to
   */
  resourceLinkId?: string;
  /**
   * The extension that defines the submission_type of the line_item. Only returns if set through the line_item create endpoint.
   */
  "https://canvas.instructure.com/lti/submission_type"?: string;
  /**
   * The launch url of the Line Item. Only returned if `include=launch_url` query parameter is passed, and only for Show and List actions.
   */
  "https://canvas.instructure.com/lti/launch_url"?: string;
};
