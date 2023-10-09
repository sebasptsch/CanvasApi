/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CoursePace } from "../models/CoursePace";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class CoursePaceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Show a Course pace
   * Returns a course pace for the course and pace id provided
   * @param id ID
   * @param courseId The id of the course
   * @param coursePaceId The id of the course_pace
   * @returns CoursePace success
   * @throws ApiError
   */
  public showCoursePace(
    id: string,
    courseId: number,
    coursePaceId: number,
  ): CancelablePromise<CoursePace> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/course_pacing/{id}",
      path: {
        id: id,
        course_id: courseId,
      },
      query: {
        course_pace_id: coursePaceId,
      },
    });
  }

  /**
   * Update a Course pace
   * Returns the updated course pace
   * @param id ID
   * @param courseId The id of the course
   * @param formData
   * @returns CoursePace success
   * @throws ApiError
   */
  public updateCoursePace(
    id: string,
    courseId: number,
    formData: any,
  ): CancelablePromise<CoursePace> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/course_pacing/{id}",
      path: {
        id: id,
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete a Course pace
   * Returns the updated course pace
   * @param id ID
   * @param courseId The id of the course
   * @param coursePaceId The id of the course_pace
   * @returns CoursePace success
   * @throws ApiError
   */
  public deleteCoursePace(
    id: string,
    courseId: number,
    coursePaceId: number,
  ): CancelablePromise<CoursePace> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/course_pacing/{id}",
      path: {
        id: id,
        course_id: courseId,
      },
      query: {
        course_pace_id: coursePaceId,
      },
    });
  }

  /**
   * Create a Course pace
   * @param courseId The id of the course
   * @param formData
   * @returns CoursePace success
   * @throws ApiError
   */
  public createCoursePace(
    courseId: number,
    formData?: any,
  ): CancelablePromise<CoursePace> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/course_pacing",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }
}
