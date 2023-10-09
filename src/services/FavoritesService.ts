/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Course } from "../models/Course";
import type { Favorite } from "../models/Favorite";
import type { Group } from "../models/Group";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class FavoritesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List favorite courses
   * Retrieve the paginated list of favorite courses for the current user. If the user has not chosen
   * any favorites, then a selection of currently enrolled courses will be returned.
   *
   * See the {api:CoursesController#index List courses API} for details on accepted include[] parameters.
   * @param excludeBlueprintCourses When set, only return courses that are not configured as blueprint courses.
   * @returns Course success
   * @throws ApiError
   */
  public listFavoriteCourses(
    excludeBlueprintCourses?: boolean,
  ): CancelablePromise<Array<Course>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/self/favorites/courses",
      query: {
        exclude_blueprint_courses: excludeBlueprintCourses,
      },
    });
  }

  /**
   * Reset course favorites
   * Reset the current user's course favorites to the default
   * automatically generated list of enrolled courses
   * @returns any success
   * @throws ApiError
   */
  public resetCourseFavorites(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/users/self/favorites/courses",
    });
  }

  /**
   * List favorite groups
   * Retrieve the paginated list of favorite groups for the current user. If the user has not chosen
   * any favorites, then a selection of groups that the user is a member of will be returned.
   * @returns Group success
   * @throws ApiError
   */
  public listFavoriteGroups(): CancelablePromise<Array<Group>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/self/favorites/groups",
    });
  }

  /**
   * Reset group favorites
   * Reset the current user's group favorites to the default
   * automatically generated list of enrolled group
   * @returns any success
   * @throws ApiError
   */
  public resetGroupFavorites(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/users/self/favorites/groups",
    });
  }

  /**
   * Add group to favorites
   * Add a group to the current user's favorites.  If the group is already
   * in the user's favorites, nothing happens.
   * @param id The ID or SIS ID of the group to add.  The current user must be
   * a member of the group.
   * @returns Favorite success
   * @throws ApiError
   */
  public addGroupToFavorites(id: string): CancelablePromise<Favorite> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/users/self/favorites/groups/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * Remove group from favorites
   * Remove a group from the current user's favorites.
   * @param id the ID or SIS ID of the group to remove
   * @returns Favorite success
   * @throws ApiError
   */
  public removeGroupFromFavorites(id: string): CancelablePromise<Favorite> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/users/self/favorites/groups/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * Add course to favorites
   * Add a course to the current user's favorites.  If the course is already
   * in the user's favorites, nothing happens. Canvas for Elementary subject
   * and homeroom courses can be added to favorites, but this has no effect in
   * the UI.
   * @param id The ID or SIS ID of the course to add.  The current user must be
   * registered in the course.
   * @returns Favorite success
   * @throws ApiError
   */
  public addCourseToFavorites(id: string): CancelablePromise<Favorite> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/users/self/favorites/courses/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * Remove course from favorites
   * Remove a course from the current user's favorites.
   * @param id the ID or SIS ID of the course to remove
   * @returns Favorite success
   * @throws ApiError
   */
  public removeCourseFromFavorites(id: string): CancelablePromise<Favorite> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/users/self/favorites/courses/{id}",
      path: {
        id: id,
      },
    });
  }
}
