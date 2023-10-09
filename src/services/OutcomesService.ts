/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Outcome } from "../models/Outcome";
import type { OutcomeAlignment } from "../models/OutcomeAlignment";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class OutcomesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Show an outcome
   * Returns the details of the outcome with the given id.
   * @param id ID
   * @param addDefaults If defaults are requested, then color and mastery level defaults will be
   * added to outcome ratings in the result. This will only take effect if
   * the Account Level Mastery Scales FF is DISABLED
   * @returns Outcome success
   * @throws ApiError
   */
  public showOutcome(
    id: string,
    addDefaults?: boolean,
  ): CancelablePromise<Outcome> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/outcomes/{id}",
      path: {
        id: id,
      },
      query: {
        add_defaults: addDefaults,
      },
    });
  }

  /**
   * Update an outcome
   * Modify an existing outcome. Fields not provided are left as is;
   * unrecognized fields are ignored.
   *
   * If any new ratings are provided, the combination of all new ratings
   * provided completely replace any existing embedded rubric criterion; it is
   * not possible to tweak the ratings of the embedded rubric criterion.
   *
   * A new embedded rubric criterion's mastery_points default to the maximum
   * points in the highest rating if not specified in the mastery_points
   * parameter. Any new ratings lacking a description are given a default of "No
   * description". Any new ratings lacking a point value are given a default of
   * 0.
   * @param id ID
   * @param formData
   * @returns Outcome success
   * @throws ApiError
   */
  public updateOutcome(id: string, formData?: any): CancelablePromise<Outcome> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/outcomes/{id}",
      path: {
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get aligned assignments for an outcome in a course for a particular student
   * @param courseId The id of the course
   * @param studentId The id of the student
   * @returns OutcomeAlignment success
   * @throws ApiError
   */
  public getAlignedAssignmentsForOutcomeInCourseForParticularStudent(
    courseId: number,
    studentId?: number,
  ): CancelablePromise<Array<OutcomeAlignment>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/outcome_alignments",
      path: {
        course_id: courseId,
      },
      query: {
        student_id: studentId,
      },
    });
  }
}
