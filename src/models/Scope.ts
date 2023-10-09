/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scope = {
  /**
   * The resource the scope is associated with
   */
  resource?: string;
  /**
   * The localized resource name
   */
  resource_name?: string;
  /**
   * The controller the scope is associated to
   */
  controller?: string;
  /**
   * The controller action the scope is associated to
   */
  action?: string;
  /**
   * The HTTP verb for the scope
   */
  verb?: string;
  /**
   * The identifier for the scope
   */
  scope?: string;
};
