/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Section } from "../models/Section";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class SectionsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Cross-list a Section
   * Move the Section to another course.  The new course may be in a different account (department),
   * but must belong to the same root account (institution).
   * @param id ID
   * @param newCourseId ID
   * @param formData
   * @returns Section success
   * @throws ApiError
   */
  public crossListSection(
    id: string,
    newCourseId: string,
    formData?: any,
  ): CancelablePromise<Section> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/sections/{id}/crosslist/{new_course_id}",
      path: {
        id: id,
        new_course_id: newCourseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * De-cross-list a Section
   * Undo cross-listing of a Section, returning it to its original course.
   * @param id ID
   * @param overrideSisStickiness Default is true. If false, any fields containing “sticky” changes will not be updated.
   * See SIS CSV Format documentation for information on which fields can have SIS stickiness
   * @returns Section success
   * @throws ApiError
   */
  public deCrossListSection(
    id: string,
    overrideSisStickiness?: boolean,
  ): CancelablePromise<Section> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/sections/{id}/crosslist",
      path: {
        id: id,
      },
      query: {
        override_sis_stickiness: overrideSisStickiness,
      },
    });
  }

  /**
   * List course sections
   * A paginated list of the list of sections for this course.
   * @param courseId ID
   * @param include - "students": Associations to include with the group. Note: this is only
   * available if you have permission to view users or grades in the course
   * - "avatar_url": Include the avatar URLs for students returned.
   * - "enrollments": If 'students' is also included, return the section
   * enrollment for each student
   * - "total_students": Returns the total amount of active and invited students
   * for the course section
   * - "passback_status": Include the grade passback status.
   * - "permissions": Include whether section grants :manage_calendar permission
   * to the caller
   * @param searchTerm When included, searches course sections for the term. Returns only matching
   * results. Term must be at least 2 characters.
   * @returns Section success
   * @throws ApiError
   */
  public listCourseSections(
    courseId: string,
    include?:
      | "students"
      | "avatar_url"
      | "enrollments"
      | "total_students"
      | "passback_status"
      | "permissions",
    searchTerm?: string,
  ): CancelablePromise<Array<Section>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/sections",
      path: {
        course_id: courseId,
      },
      query: {
        include: include,
        search_term: searchTerm,
      },
    });
  }

  /**
   * Create course section
   * Creates a new section for this course.
   * @param courseId ID
   * @param formData
   * @returns Section success
   * @throws ApiError
   */
  public createCourseSection(
    courseId: string,
    formData?: any,
  ): CancelablePromise<Section> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/sections",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get section information
   * Gets details about a specific section
   * @param id ID
   * @param include - "students": Associations to include with the group. Note: this is only
   * available if you have permission to view users or grades in the course
   * - "avatar_url": Include the avatar URLs for students returned.
   * - "enrollments": If 'students' is also included, return the section
   * enrollment for each student
   * - "total_students": Returns the total amount of active and invited students
   * for the course section
   * - "passback_status": Include the grade passback status.
   * - "permissions": Include whether section grants :manage_calendar permission
   * to the caller
   * @returns Section success
   * @throws ApiError
   */
  public getSectionInformationSections(
    id: string,
    include?:
      | "students"
      | "avatar_url"
      | "enrollments"
      | "total_students"
      | "passback_status"
      | "permissions",
  ): CancelablePromise<Section> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sections/{id}",
      path: {
        id: id,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Edit a section
   * Modify an existing section.
   * @param id ID
   * @param formData
   * @returns Section success
   * @throws ApiError
   */
  public editSection(id: string, formData?: any): CancelablePromise<Section> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/sections/{id}",
      path: {
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete a section
   * Delete an existing section.  Returns the former Section.
   * @param id ID
   * @returns Section success
   * @throws ApiError
   */
  public deleteSection(id: string): CancelablePromise<Section> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/sections/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * Get section information
   * Gets details about a specific section
   * @param courseId ID
   * @param id ID
   * @param include - "students": Associations to include with the group. Note: this is only
   * available if you have permission to view users or grades in the course
   * - "avatar_url": Include the avatar URLs for students returned.
   * - "enrollments": If 'students' is also included, return the section
   * enrollment for each student
   * - "total_students": Returns the total amount of active and invited students
   * for the course section
   * - "passback_status": Include the grade passback status.
   * - "permissions": Include whether section grants :manage_calendar permission
   * to the caller
   * @returns Section success
   * @throws ApiError
   */
  public getSectionInformationCourses(
    courseId: string,
    id: string,
    include?:
      | "students"
      | "avatar_url"
      | "enrollments"
      | "total_students"
      | "passback_status"
      | "permissions",
  ): CancelablePromise<Section> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/sections/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
      query: {
        include: include,
      },
    });
  }
}
