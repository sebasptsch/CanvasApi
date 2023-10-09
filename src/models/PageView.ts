/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { datetime } from "./datetime";
import type { PageViewLinks } from "./PageViewLinks";

/**
 * The record of a user page view access in Canvas
 */
export type PageView = {
  /**
   * A UUID representing the page view.  This is also the unique request id
   */
  id: string;
  /**
   * If the request is from an API request, the app that generated the access token
   */
  app_name?: string;
  /**
   * The URL requested
   */
  url?: string;
  /**
   * The type of context for the request
   */
  context_type?: string;
  /**
   * The type of asset in the context for the request, if any
   */
  asset_type?: string;
  /**
   * The rails controller that handled the request
   */
  controller?: string;
  /**
   * The rails action that handled the request
   */
  action?: string;
  /**
   * This field is deprecated, and will always be false
   */
  contributed?: boolean;
  /**
   * An approximation of how long the user spent on the page, in seconds
   */
  interaction_seconds?: number;
  created_at?: datetime;
  /**
   * A flag indicating whether the request was user-initiated, or automatic (such as an AJAX call)
   */
  user_request?: boolean;
  /**
   * How long the response took to render, in seconds
   */
  render_time?: number;
  /**
   * The user-agent of the browser or program that made the request
   */
  user_agent?: string;
  /**
   * True if the request counted as participating, such as submitting homework
   */
  participated?: boolean;
  /**
   * The HTTP method such as GET or POST
   */
  http_method?: string;
  /**
   * The origin IP address of the request
   */
  remote_ip?: string;
  links?: PageViewLinks;
};
