/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LineItem } from "../models/LineItem";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class LineItemsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Show a Line Item
   * Show existing Line Item
   * @param courseId ID
   * @param id ID
   * @param include Array of additional information to include.
   *
   * "launch_url":: includes the launch URL for this line item using the "https\://canvas.instructure.com/lti/launch_url" extension
   * @returns LineItem success
   * @throws ApiError
   */
  public showLineItem(
    courseId: string,
    id: string,
    include?: "launch_url",
  ): CancelablePromise<LineItem> {
    return this.httpRequest.request({
      method: "GET",
      url: "/lti/courses/{course_id}/line_items/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Update a Line Item
   * Update new Line Item
   * @param courseId ID
   * @param id ID
   * @param formData
   * @returns LineItem success
   * @throws ApiError
   */
  public updateLineItem(
    courseId: string,
    id: string,
    formData?: any,
  ): CancelablePromise<LineItem> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/lti/courses/{course_id}/line_items/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete a Line Item
   * Delete an existing Line Item
   * @param courseId ID
   * @param id ID
   * @returns LineItem success
   * @throws ApiError
   */
  public deleteLineItem(
    courseId: string,
    id: string,
  ): CancelablePromise<LineItem> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/lti/courses/{course_id}/line_items/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
    });
  }

  /**
   * List line Items
   * List all Line Items for a course
   * @param courseId ID
   * @param tag If specified only Line Items with this tag will be included.
   * @param resourceId If specified only Line Items with this resource_id will be included.
   * @param resourceLinkId If specified only Line Items attached to the specified resource_link_id will be included.
   * @param limit May be used to limit the number of Line Items returned in a page
   * @param include Array of additional information to include.
   *
   * "launch_url":: includes the launch URL for each line item using the "https\://canvas.instructure.com/lti/launch_url" extension
   * @returns LineItem success
   * @throws ApiError
   */
  public listLineItems(
    courseId: string,
    tag?: string,
    resourceId?: string,
    resourceLinkId?: string,
    limit?: string,
    include?: "launch_url",
  ): CancelablePromise<LineItem> {
    return this.httpRequest.request({
      method: "GET",
      url: "/lti/courses/{course_id}/line_items",
      path: {
        course_id: courseId,
      },
      query: {
        tag: tag,
        resource_id: resourceId,
        resource_link_id: resourceLinkId,
        limit: limit,
        include: include,
      },
    });
  }

  /**
   * Create a Line Item
   * Create a new Line Item
   * @param courseId ID
   * @param formData
   * @returns LineItem success
   * @throws ApiError
   */
  public createLineItem(
    courseId: string,
    formData: any,
  ): CancelablePromise<LineItem> {
    return this.httpRequest.request({
      method: "POST",
      url: "/lti/courses/{course_id}/line_items",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
