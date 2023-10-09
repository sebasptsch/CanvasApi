/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Module } from "../models/Module";
import type { ModuleAssignmentOverride } from "../models/ModuleAssignmentOverride";
import type { ModuleItem } from "../models/ModuleItem";
import type { ModuleItemSequence } from "../models/ModuleItemSequence";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class ModulesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List modules
   * A paginated list of the modules in a course
   * @param courseId ID
   * @param include - "items": Return module items inline if possible.
   * This parameter suggests that Canvas return module items directly
   * in the Module object JSON, to avoid having to make separate API
   * requests for each module when enumerating modules and items. Canvas
   * is free to omit 'items' for any particular module if it deems them
   * too numerous to return inline. Callers must be prepared to use the
   * {api:ContextModuleItemsApiController#index List Module Items API}
   * if items are not returned.
   * - "content_details": Requires 'items'. Returns additional
   * details with module items specific to their associated content items.
   * Includes standard lock information for each item.
   * @param searchTerm The partial name of the modules (and module items, if 'items' is
   * specified with include[]) to match and return.
   * @param studentId Returns module completion information for the student with this id.
   * @returns Module success
   * @throws ApiError
   */
  public listModules(
    courseId: string,
    include?: "items" | "content_details",
    searchTerm?: string,
    studentId?: string,
  ): CancelablePromise<Array<Module>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/modules",
      path: {
        course_id: courseId,
      },
      query: {
        include: include,
        search_term: searchTerm,
        student_id: studentId,
      },
    });
  }

  /**
   * Create a module
   * Create and return a new module
   * @param courseId ID
   * @param formData
   * @returns Module success
   * @throws ApiError
   */
  public createModule(
    courseId: string,
    formData: any,
  ): CancelablePromise<Module> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/modules",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Select a mastery path
   * Select a mastery path when module item includes several possible paths.
   * Requires Mastery Paths feature to be enabled.  Returns a compound document
   * with the assignments included in the given path and any module items
   * related to those assignments
   * @param courseId ID
   * @param moduleId ID
   * @param id ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public selectMasteryPath(
    courseId: string,
    moduleId: string,
    id: string,
    formData?: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/modules/{module_id}/items/{id}/select_mastery_path",
      path: {
        course_id: courseId,
        module_id: moduleId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Mark module item as done/not done
   * Mark a module item as done/not done. Use HTTP method PUT to mark as done,
   * and DELETE to mark as not done.
   * @param courseId ID
   * @param moduleId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public markModuleItemAsDoneNotDone(
    courseId: string,
    moduleId: string,
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/modules/{module_id}/items/{id}/done",
      path: {
        course_id: courseId,
        module_id: moduleId,
        id: id,
      },
    });
  }

  /**
   * Mark module item read
   * Fulfills "must view" requirement for a module item. It is generally not necessary to do this explicitly,
   * but it is provided for applications that need to access external content directly (bypassing the html_url
   * redirect that normally allows Canvas to fulfill "must view" requirements).
   *
   * This endpoint cannot be used to complete requirements on locked or unpublished module items.
   * @param courseId ID
   * @param moduleId ID
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public markModuleItemRead(
    courseId: string,
    moduleId: string,
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/modules/{module_id}/items/{id}/mark_read",
      path: {
        course_id: courseId,
        module_id: moduleId,
        id: id,
      },
    });
  }

  /**
   * List a module's overrides
   * Returns a paginated list of AssignmentOverrides that apply to the ContextModule.
   *
   * Note: this API is still under development and will not function until the feature is enabled.
   * @param courseId ID
   * @param contextModuleId ID
   * @returns ModuleAssignmentOverride success
   * @throws ApiError
   */
  public listModuleSOverrides(
    courseId: string,
    contextModuleId: string,
  ): CancelablePromise<Array<ModuleAssignmentOverride>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/modules/{context_module_id}/assignment_overrides",
      path: {
        course_id: courseId,
        context_module_id: contextModuleId,
      },
    });
  }

  /**
   * Show module
   * Get information about a single module
   * @param courseId ID
   * @param id ID
   * @param include - "items": Return module items inline if possible.
   * This parameter suggests that Canvas return module items directly
   * in the Module object JSON, to avoid having to make separate API
   * requests for each module when enumerating modules and items. Canvas
   * is free to omit 'items' for any particular module if it deems them
   * too numerous to return inline. Callers must be prepared to use the
   * {api:ContextModuleItemsApiController#index List Module Items API}
   * if items are not returned.
   * - "content_details": Requires 'items'. Returns additional
   * details with module items specific to their associated content items.
   * Includes standard lock information for each item.
   * @param studentId Returns module completion information for the student with this id.
   * @returns Module success
   * @throws ApiError
   */
  public showModule(
    courseId: string,
    id: string,
    include?: "items" | "content_details",
    studentId?: string,
  ): CancelablePromise<Module> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/modules/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
      query: {
        include: include,
        student_id: studentId,
      },
    });
  }

  /**
   * Update a module
   * Update and return an existing module
   * @param courseId ID
   * @param id ID
   * @param formData
   * @returns Module success
   * @throws ApiError
   */
  public updateModule(
    courseId: string,
    id: string,
    formData?: any,
  ): CancelablePromise<Module> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/modules/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete module
   * Delete a module
   * @param courseId ID
   * @param id ID
   * @returns Module success
   * @throws ApiError
   */
  public deleteModule(courseId: string, id: string): CancelablePromise<Module> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/modules/{id}",
      path: {
        course_id: courseId,
        id: id,
      },
    });
  }

  /**
   * Show module item
   * Get information about a single module item
   * @param courseId ID
   * @param moduleId ID
   * @param id ID
   * @param include If included, will return additional details specific to the content
   * associated with this item. Refer to the {api:Modules:Module%20Item Module
   * Item specification} for more details.
   * Includes standard lock information for each item.
   * @param studentId Returns module completion information for the student with this id.
   * @returns ModuleItem success
   * @throws ApiError
   */
  public showModuleItem(
    courseId: string,
    moduleId: string,
    id: string,
    include?: "content_details",
    studentId?: string,
  ): CancelablePromise<ModuleItem> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/modules/{module_id}/items/{id}",
      path: {
        course_id: courseId,
        module_id: moduleId,
        id: id,
      },
      query: {
        include: include,
        student_id: studentId,
      },
    });
  }

  /**
   * Update a module item
   * Update and return an existing module item
   * @param courseId ID
   * @param moduleId ID
   * @param id ID
   * @param formData
   * @returns ModuleItem success
   * @throws ApiError
   */
  public updateModuleItem(
    courseId: string,
    moduleId: string,
    id: string,
    formData?: any,
  ): CancelablePromise<ModuleItem> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/modules/{module_id}/items/{id}",
      path: {
        course_id: courseId,
        module_id: moduleId,
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete module item
   * Delete a module item
   * @param courseId ID
   * @param moduleId ID
   * @param id ID
   * @returns ModuleItem success
   * @throws ApiError
   */
  public deleteModuleItem(
    courseId: string,
    moduleId: string,
    id: string,
  ): CancelablePromise<ModuleItem> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/modules/{module_id}/items/{id}",
      path: {
        course_id: courseId,
        module_id: moduleId,
        id: id,
      },
    });
  }

  /**
   * List module items
   * A paginated list of the items in a module
   * @param courseId ID
   * @param moduleId ID
   * @param include If included, will return additional details specific to the content
   * associated with each item. Refer to the {api:Modules:Module%20Item Module
   * Item specification} for more details.
   * Includes standard lock information for each item.
   * @param searchTerm The partial title of the items to match and return.
   * @param studentId Returns module completion information for the student with this id.
   * @returns ModuleItem success
   * @throws ApiError
   */
  public listModuleItems(
    courseId: string,
    moduleId: string,
    include?: "content_details",
    searchTerm?: string,
    studentId?: string,
  ): CancelablePromise<Array<ModuleItem>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/modules/{module_id}/items",
      path: {
        course_id: courseId,
        module_id: moduleId,
      },
      query: {
        include: include,
        search_term: searchTerm,
        student_id: studentId,
      },
    });
  }

  /**
   * Create a module item
   * Create and return a new module item
   * @param courseId ID
   * @param moduleId ID
   * @param formData
   * @returns ModuleItem success
   * @throws ApiError
   */
  public createModuleItem(
    courseId: string,
    moduleId: string,
    formData: any,
  ): CancelablePromise<ModuleItem> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/modules/{module_id}/items",
      path: {
        course_id: courseId,
        module_id: moduleId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get module item sequence
   * Given an asset in a course, find the ModuleItem it belongs to, the previous and next Module Items
   * in the course sequence, and also any applicable mastery path rules
   * @param courseId ID
   * @param assetType The type of asset to find module sequence information for. Use the ModuleItem if it is known
   * (e.g., the user navigated from a module item), since this will avoid ambiguity if the asset
   * appears more than once in the module sequence.
   * @param assetId The id of the asset (or the url in the case of a Page)
   * @returns ModuleItemSequence success
   * @throws ApiError
   */
  public getModuleItemSequence(
    courseId: string,
    assetType?:
      | "ModuleItem"
      | "File"
      | "Page"
      | "Discussion"
      | "Assignment"
      | "Quiz"
      | "ExternalTool",
    assetId?: number,
  ): CancelablePromise<ModuleItemSequence> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/module_item_sequence",
      path: {
        course_id: courseId,
      },
      query: {
        asset_type: assetType,
        asset_id: assetId,
      },
    });
  }

  /**
   * Re-lock module progressions
   * Resets module progressions to their default locked state and
   * recalculates them based on the current requirements.
   *
   * Adding progression requirements to an active course will not lock students
   * out of modules they have already unlocked unless this action is called.
   * @param courseId ID
   * @param id ID
   * @returns Module success
   * @throws ApiError
   */
  public reLockModuleProgressions(
    courseId: string,
    id: string,
  ): CancelablePromise<Module> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/courses/{course_id}/modules/{id}/relock",
      path: {
        course_id: courseId,
        id: id,
      },
    });
  }
}
