/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ColumnDatum } from "../models/ColumnDatum";
import type { CustomColumn } from "../models/CustomColumn";
import type { Progress } from "../models/Progress";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class CustomGradebookColumnsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Update column data
   * Set the content of a custom column
   * @param courseId ID
   * @param id ID
   * @param userId ID
   * @param formData
   * @returns ColumnDatum success
   * @throws ApiError
   */
  public updateColumnData(
    courseId: string,
    id: string,
    userId: string,
    formData: any,
  ): CancelablePromise<ColumnDatum> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/custom_gradebook_columns/{id}/data/{user_id}",
      path: {
        course_id: courseId,
        id: id,
        user_id: userId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Bulk update column data
   * Set the content of custom columns
   *
   * {
   * "column_data": [
   * {
   * "column_id": example_column_id,
   * "user_id": example_student_id,
   * "content": example_content
   * },
   * {
   * "column_id": example_column_id,
   * "user_id": example_student_id,
   * "content: example_content
   * }
   * ]
   * }
   * @param courseId ID
   * @param formData
   * @returns Progress success
   * @throws ApiError
   */
  public bulkUpdateColumnData(
    courseId: string,
    formData: any,
  ): CancelablePromise<Progress> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/custom_gradebook_column_data",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List custom gradebook columns
   * A paginated list of all custom gradebook columns for a course
   * @param courseId ID
   * @param includeHidden Include hidden parameters (defaults to false)
   * @returns CustomColumn success
   * @throws ApiError
   */
  public listCustomGradebookColumns(
    courseId: string,
    includeHidden?: boolean,
  ): CancelablePromise<Array<CustomColumn>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/custom_gradebook_columns",
      path: {
        course_id: courseId,
      },
      query: {
        include_hidden: includeHidden,
      },
    });
  }

  /**
   * Create a custom gradebook column
   * Create a custom gradebook column
   * @param courseId ID
   * @param formData
   * @returns CustomColumn success
   * @throws ApiError
   */
  public createCustomGradebookColumn(
    courseId: string,
    formData: any,
  ): CancelablePromise<CustomColumn> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/custom_gradebook_columns",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Reorder custom columns
   * Puts the given columns in the specified order
   *
   * <b>200 OK</b> is returned if successful
   * @param courseId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public reorderCustomColumns(
    courseId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/custom_gradebook_columns/reorder",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List entries for a column
   * This does not list entries for students without associated data.
   * @param courseId ID
   * @param id ID
   * @param includeHidden If true, hidden columns will be included in the
   * result. If false or absent, only visible columns
   * will be returned.
   * @returns ColumnDatum success
   * @throws ApiError
   */
  public listEntriesForColumn(
    courseId: string,
    id: string,
    includeHidden?: boolean,
  ): CancelablePromise<Array<ColumnDatum>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/custom_gradebook_columns/{id}/data",
      path: {
        course_id: courseId,
        id: id,
      },
      query: {
        include_hidden: includeHidden,
      },
    });
  }

  /**
   * Update a custom gradebook column
   * Accepts the same parameters as custom gradebook column creation
   * @param courseId ID
   * @param id ID
   * @returns CustomColumn success
   * @throws ApiError
   */
  public updateCustomGradebookColumn(
    courseId: string,
    id: string,
  ): CancelablePromise<CustomColumn> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/custom_gradebook_columns/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
    });
  }

  /**
   * Delete a custom gradebook column
   * Permanently deletes a custom column and its associated data
   * @param courseId ID
   * @param id ID
   * @returns CustomColumn success
   * @throws ApiError
   */
  public deleteCustomGradebookColumn(
    courseId: string,
    id: string,
  ): CancelablePromise<CustomColumn> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/custom_gradebook_columns/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
    });
  }
}
