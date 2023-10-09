/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page } from "../models/Page";
import type { PageRevision } from "../models/PageRevision";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class PagesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List pages
   * A paginated list of the wiki pages associated with a course or group
   * @param groupId ID
   * @param sort Sort results by this field.
   * @param order The sorting order. Defaults to 'asc'.
   * @param searchTerm The partial title of the pages to match and return.
   * @param published If true, include only published paqes. If false, exclude published
   * pages. If not present, do not filter on published status.
   * @param include - "enrollments": Optionally include the page body with each Page.
   * @returns Page success
   * @throws ApiError
   */
  public listPagesGroups(
    groupId: string,
    sort?: "title" | "created_at" | "updated_at",
    order?: "asc" | "desc",
    searchTerm?: string,
    published?: boolean,
    include?: "body",
  ): CancelablePromise<Array<Page>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/pages",
      path: {
        group_id: groupId,
      },
      query: {
        sort: sort,
        order: order,
        search_term: searchTerm,
        published: published,
        include: include,
      },
    });
  }

  /**
   * Create page
   * Create a new wiki page
   * @param groupId ID
   * @param formData
   * @returns Page success
   * @throws ApiError
   */
  public createPageGroups(
    groupId: string,
    formData: any,
  ): CancelablePromise<Page> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/groups/{group_id}/pages",
      path: {
        group_id: groupId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Show revision
   * Retrieve the metadata and optionally content of a revision of the page.
   * Note that retrieving historic versions of pages requires edit rights.
   * @param courseId ID
   * @param urlOrId ID
   * @param revisionId ID
   * @param summary If set, exclude page content from results
   * @returns PageRevision success
   * @throws ApiError
   */
  public showRevisionCoursesRevisionId(
    courseId: string,
    urlOrId: string,
    revisionId: string,
    summary?: boolean,
  ): CancelablePromise<PageRevision> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/pages/{url_or_id}/revisions/{revision_id}",
      path: {
        course_id: courseId,
        url_or_id: urlOrId,
        revision_id: revisionId,
      },
      query: {
        summary: summary,
      },
    });
  }

  /**
   * Revert to revision
   * Revert a page to a prior revision.
   * @param courseId ID
   * @param urlOrId ID
   * @param revisionId The revision to revert to (use the
   * {api:WikiPagesApiController#revisions List Revisions API} to see
   * available revisions)
   * @returns PageRevision success
   * @throws ApiError
   */
  public revertToRevisionCourses(
    courseId: string,
    urlOrId: string,
    revisionId: number,
  ): CancelablePromise<PageRevision> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/pages/{url_or_id}/revisions/{revision_id}",
      path: {
        course_id: courseId,
        url_or_id: urlOrId,
        revision_id: revisionId,
      },
    });
  }

  /**
   * Show revision
   * Retrieve the metadata and optionally content of a revision of the page.
   * Note that retrieving historic versions of pages requires edit rights.
   * @param groupId ID
   * @param urlOrId ID
   * @param revisionId ID
   * @param summary If set, exclude page content from results
   * @returns PageRevision success
   * @throws ApiError
   */
  public showRevisionGroupsRevisionId(
    groupId: string,
    urlOrId: string,
    revisionId: string,
    summary?: boolean,
  ): CancelablePromise<PageRevision> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/pages/{url_or_id}/revisions/{revision_id}",
      path: {
        group_id: groupId,
        url_or_id: urlOrId,
        revision_id: revisionId,
      },
      query: {
        summary: summary,
      },
    });
  }

  /**
   * Revert to revision
   * Revert a page to a prior revision.
   * @param groupId ID
   * @param urlOrId ID
   * @param revisionId The revision to revert to (use the
   * {api:WikiPagesApiController#revisions List Revisions API} to see
   * available revisions)
   * @returns PageRevision success
   * @throws ApiError
   */
  public revertToRevisionGroups(
    groupId: string,
    urlOrId: string,
    revisionId: number,
  ): CancelablePromise<PageRevision> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/groups/{group_id}/pages/{url_or_id}/revisions/{revision_id}",
      path: {
        group_id: groupId,
        url_or_id: urlOrId,
        revision_id: revisionId,
      },
    });
  }

  /**
   * List revisions
   * A paginated list of the revisions of a page. Callers must have update rights on the page in order to see page history.
   * @param courseId ID
   * @param urlOrId ID
   * @returns PageRevision success
   * @throws ApiError
   */
  public listRevisionsCourses(
    courseId: string,
    urlOrId: string,
  ): CancelablePromise<Array<PageRevision>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/pages/{url_or_id}/revisions",
      path: {
        course_id: courseId,
        url_or_id: urlOrId,
      },
    });
  }

  /**
   * Duplicate page
   * Duplicate a wiki page
   * @param courseId ID
   * @param urlOrId ID
   * @returns Page success
   * @throws ApiError
   */
  public duplicatePage(
    courseId: string,
    urlOrId: string,
  ): CancelablePromise<Page> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/pages/{url_or_id}/duplicate",
      path: {
        course_id: courseId,
        url_or_id: urlOrId,
      },
    });
  }

  /**
   * Show revision
   * Retrieve the metadata and optionally content of a revision of the page.
   * Note that retrieving historic versions of pages requires edit rights.
   * @param courseId ID
   * @param urlOrId ID
   * @param summary If set, exclude page content from results
   * @returns PageRevision success
   * @throws ApiError
   */
  public showRevisionCoursesLatest(
    courseId: string,
    urlOrId: string,
    summary?: boolean,
  ): CancelablePromise<PageRevision> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/pages/{url_or_id}/revisions/latest",
      path: {
        course_id: courseId,
        url_or_id: urlOrId,
      },
      query: {
        summary: summary,
      },
    });
  }

  /**
   * Show front page
   * Retrieve the content of the front page
   * @param courseId ID
   * @returns Page success
   * @throws ApiError
   */
  public showFrontPageCourses(courseId: string): CancelablePromise<Page> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/front_page",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * Update/create front page
   * Update the title or contents of the front page
   * @param courseId ID
   * @param formData
   * @returns Page success
   * @throws ApiError
   */
  public updateCreateFrontPageCourses(
    courseId: string,
    formData?: any,
  ): CancelablePromise<Page> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/front_page",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Show revision
   * Retrieve the metadata and optionally content of a revision of the page.
   * Note that retrieving historic versions of pages requires edit rights.
   * @param groupId ID
   * @param urlOrId ID
   * @param summary If set, exclude page content from results
   * @returns PageRevision success
   * @throws ApiError
   */
  public showRevisionGroupsLatest(
    groupId: string,
    urlOrId: string,
    summary?: boolean,
  ): CancelablePromise<PageRevision> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/pages/{url_or_id}/revisions/latest",
      path: {
        group_id: groupId,
        url_or_id: urlOrId,
      },
      query: {
        summary: summary,
      },
    });
  }

  /**
   * Show page
   * Retrieve the content of a wiki page
   * @param courseId ID
   * @param urlOrId ID
   * @returns Page success
   * @throws ApiError
   */
  public showPageCourses(
    courseId: string,
    urlOrId: string,
  ): CancelablePromise<Page> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/pages/{url_or_id}",
      path: {
        course_id: courseId,
        url_or_id: urlOrId,
      },
    });
  }

  /**
   * Update/create page
   * Update the title or contents of a wiki page
   *
   * NOTE: You cannot specify the ID when creating a page. If you pass a numeric value
   * as the page identifier and that does not represent a page ID that already
   * exists, it will be interpreted as a URL.
   * @param courseId ID
   * @param urlOrId ID
   * @param formData
   * @returns Page success
   * @throws ApiError
   */
  public updateCreatePageCourses(
    courseId: string,
    urlOrId: string,
    formData?: any,
  ): CancelablePromise<Page> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/pages/{url_or_id}",
      path: {
        course_id: courseId,
        url_or_id: urlOrId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete page
   * Delete a wiki page
   * @param courseId ID
   * @param urlOrId ID
   * @returns Page success
   * @throws ApiError
   */
  public deletePageCourses(
    courseId: string,
    urlOrId: string,
  ): CancelablePromise<Page> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/pages/{url_or_id}",
      path: {
        course_id: courseId,
        url_or_id: urlOrId,
      },
    });
  }

  /**
   * Show front page
   * Retrieve the content of the front page
   * @param groupId ID
   * @returns Page success
   * @throws ApiError
   */
  public showFrontPageGroups(groupId: string): CancelablePromise<Page> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/front_page",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * Update/create front page
   * Update the title or contents of the front page
   * @param groupId ID
   * @param formData
   * @returns Page success
   * @throws ApiError
   */
  public updateCreateFrontPageGroups(
    groupId: string,
    formData?: any,
  ): CancelablePromise<Page> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/groups/{group_id}/front_page",
      path: {
        group_id: groupId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List pages
   * A paginated list of the wiki pages associated with a course or group
   * @param courseId ID
   * @param sort Sort results by this field.
   * @param order The sorting order. Defaults to 'asc'.
   * @param searchTerm The partial title of the pages to match and return.
   * @param published If true, include only published paqes. If false, exclude published
   * pages. If not present, do not filter on published status.
   * @param include - "enrollments": Optionally include the page body with each Page.
   * @returns Page success
   * @throws ApiError
   */
  public listPagesCourses(
    courseId: string,
    sort?: "title" | "created_at" | "updated_at",
    order?: "asc" | "desc",
    searchTerm?: string,
    published?: boolean,
    include?: "body",
  ): CancelablePromise<Array<Page>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/pages",
      path: {
        course_id: courseId,
      },
      query: {
        sort: sort,
        order: order,
        search_term: searchTerm,
        published: published,
        include: include,
      },
    });
  }

  /**
   * Create page
   * Create a new wiki page
   * @param courseId ID
   * @param formData
   * @returns Page success
   * @throws ApiError
   */
  public createPageCourses(
    courseId: string,
    formData: any,
  ): CancelablePromise<Page> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/pages",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List revisions
   * A paginated list of the revisions of a page. Callers must have update rights on the page in order to see page history.
   * @param groupId ID
   * @param urlOrId ID
   * @returns PageRevision success
   * @throws ApiError
   */
  public listRevisionsGroups(
    groupId: string,
    urlOrId: string,
  ): CancelablePromise<Array<PageRevision>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/pages/{url_or_id}/revisions",
      path: {
        group_id: groupId,
        url_or_id: urlOrId,
      },
    });
  }

  /**
   * Show page
   * Retrieve the content of a wiki page
   * @param groupId ID
   * @param urlOrId ID
   * @returns Page success
   * @throws ApiError
   */
  public showPageGroups(
    groupId: string,
    urlOrId: string,
  ): CancelablePromise<Page> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/pages/{url_or_id}",
      path: {
        group_id: groupId,
        url_or_id: urlOrId,
      },
    });
  }

  /**
   * Update/create page
   * Update the title or contents of a wiki page
   *
   * NOTE: You cannot specify the ID when creating a page. If you pass a numeric value
   * as the page identifier and that does not represent a page ID that already
   * exists, it will be interpreted as a URL.
   * @param groupId ID
   * @param urlOrId ID
   * @param formData
   * @returns Page success
   * @throws ApiError
   */
  public updateCreatePageGroups(
    groupId: string,
    urlOrId: string,
    formData?: any,
  ): CancelablePromise<Page> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/groups/{group_id}/pages/{url_or_id}",
      path: {
        group_id: groupId,
        url_or_id: urlOrId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete page
   * Delete a wiki page
   * @param groupId ID
   * @param urlOrId ID
   * @returns Page success
   * @throws ApiError
   */
  public deletePageGroups(
    groupId: string,
    urlOrId: string,
  ): CancelablePromise<Page> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/groups/{group_id}/pages/{url_or_id}",
      path: {
        group_id: groupId,
        url_or_id: urlOrId,
      },
    });
  }
}
