/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlannerNote } from "../models/PlannerNote";
import type { PlannerOverride } from "../models/PlannerOverride";
import type { ref } from "../models/ref";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class PlannerService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Show a planner note
   * Retrieve a planner note for the current user
   * @param id ID
   * @returns PlannerNote success
   * @throws ApiError
   */
  public showPlannerNote(id: string): CancelablePromise<PlannerNote> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/planner_notes/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * Update a planner note
   * Update a planner note for the current user
   * @param id ID
   * @param formData
   * @returns PlannerNote success
   * @throws ApiError
   */
  public updatePlannerNote(
    id: string,
    formData?: any,
  ): CancelablePromise<PlannerNote> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/planner_notes/{id}",
      path: {
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete a planner note
   * Delete a planner note for the current user
   * @param id ID
   * @returns PlannerNote success
   * @throws ApiError
   */
  public deletePlannerNote(id: string): CancelablePromise<PlannerNote> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/planner_notes/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * List planner overrides
   * Retrieve a planner override for the current user
   * @returns PlannerOverride success
   * @throws ApiError
   */
  public listPlannerOverrides(): CancelablePromise<Array<PlannerOverride>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/planner/overrides",
    });
  }

  /**
   * Create a planner override
   * Create a planner override for the current user
   * @param formData
   * @returns PlannerOverride success
   * @throws ApiError
   */
  public createPlannerOverride(
    formData: any,
  ): CancelablePromise<PlannerOverride> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/planner/overrides",
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List planner items
   * Retrieve the paginated list of objects to be shown on the planner for the
   * current user with the associated planner override to override an item's
   * visibility if set.
   *
   * Planner items for a student may also be retrieved by a linked observer. Use
   * the path that accepts a user_id and supply the student's id.
   * @param startDate Only return items starting from the given date.
   * The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
   * @param endDate Only return items up to the given date.
   * The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
   * @param contextCodes List of context codes of courses and/or groups whose items you want to see.
   * If not specified, defaults to all contexts associated to the current user.
   * Note that concluded courses will be ignored unless specified in the includes[]
   * parameter. The format of this field is the context type, followed by an underscore,
   * followed by the context id. For example: course_42, group_123
   * @param observedUserId Return planner items for the given observed user. Must be accompanied by context_codes[].
   * The user making the request must be observing the observed user in all the courses specified by
   * context_codes[].
   * @param filter Only return items that have new or unread activity
   * @returns any success
   * @throws ApiError
   */
  public listPlannerItemsPlanner(
    startDate?: ref,
    endDate?: ref,
    contextCodes?: Array<string>,
    observedUserId?: string,
    filter?: "new_activity",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/planner/items",
      query: {
        start_date: startDate,
        end_date: endDate,
        context_codes: contextCodes,
        observed_user_id: observedUserId,
        filter: filter,
      },
    });
  }

  /**
   * List planner items
   * Retrieve the paginated list of objects to be shown on the planner for the
   * current user with the associated planner override to override an item's
   * visibility if set.
   *
   * Planner items for a student may also be retrieved by a linked observer. Use
   * the path that accepts a user_id and supply the student's id.
   * @param userId ID
   * @param startDate Only return items starting from the given date.
   * The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
   * @param endDate Only return items up to the given date.
   * The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
   * @param contextCodes List of context codes of courses and/or groups whose items you want to see.
   * If not specified, defaults to all contexts associated to the current user.
   * Note that concluded courses will be ignored unless specified in the includes[]
   * parameter. The format of this field is the context type, followed by an underscore,
   * followed by the context id. For example: course_42, group_123
   * @param observedUserId Return planner items for the given observed user. Must be accompanied by context_codes[].
   * The user making the request must be observing the observed user in all the courses specified by
   * context_codes[].
   * @param filter Only return items that have new or unread activity
   * @returns any success
   * @throws ApiError
   */
  public listPlannerItemsUsers(
    userId: string,
    startDate?: ref,
    endDate?: ref,
    contextCodes?: Array<string>,
    observedUserId?: string,
    filter?: "new_activity",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/planner/items",
      path: {
        user_id: userId,
      },
      query: {
        start_date: startDate,
        end_date: endDate,
        context_codes: contextCodes,
        observed_user_id: observedUserId,
        filter: filter,
      },
    });
  }

  /**
   * List planner notes
   * Retrieve the paginated list of planner notes
   *
   * Retrieve planner note for a user
   * @param startDate Only return notes with todo dates since the start_date (inclusive).
   * No default. The value should be formatted as: yyyy-mm-dd or
   * ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
   * @param endDate Only return notes with todo dates before the end_date (inclusive).
   * No default. The value should be formatted as: yyyy-mm-dd or
   * ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
   * If end_date and start_date are both specified and equivalent,
   * then only notes with todo dates on that day are returned.
   * @param contextCodes List of context codes of courses whose notes you want to see.
   * If not specified, defaults to all contexts that the user belongs to.
   * The format of this field is the context type, followed by an
   * underscore, followed by the context id. For example: course_42
   * Including a code matching the user's own context code (e.g. user_1)
   * will include notes that are not associated with any particular course.
   * @returns PlannerNote success
   * @throws ApiError
   */
  public listPlannerNotes(
    startDate?: ref,
    endDate?: ref,
    contextCodes?: Array<string>,
  ): CancelablePromise<Array<PlannerNote>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/planner_notes",
      query: {
        start_date: startDate,
        end_date: endDate,
        context_codes: contextCodes,
      },
    });
  }

  /**
   * Create a planner note
   * Create a planner note for the current user
   * @param formData
   * @returns PlannerNote success
   * @throws ApiError
   */
  public createPlannerNote(formData?: any): CancelablePromise<PlannerNote> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/planner_notes",
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Show a planner override
   * Retrieve a planner override for the current user
   * @param id ID
   * @returns PlannerOverride success
   * @throws ApiError
   */
  public showPlannerOverride(id: string): CancelablePromise<PlannerOverride> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/planner/overrides/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * Update a planner override
   * Update a planner override's visibilty for the current user
   * @param id ID
   * @param formData
   * @returns PlannerOverride success
   * @throws ApiError
   */
  public updatePlannerOverride(
    id: string,
    formData?: any,
  ): CancelablePromise<PlannerOverride> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/planner/overrides/{id}",
      path: {
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete a planner override
   * Delete a planner override for the current user
   * @param id ID
   * @returns PlannerOverride success
   * @throws ApiError
   */
  public deletePlannerOverride(id: string): CancelablePromise<PlannerOverride> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/planner/overrides/{id}",
      path: {
        id: id,
      },
    });
  }
}
