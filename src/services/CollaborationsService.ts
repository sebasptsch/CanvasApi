/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collaboration } from "../models/Collaboration";
import type { Collaborator } from "../models/Collaborator";
import type { User } from "../models/User";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class CollaborationsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List collaborations
   * A paginated list of collaborations the current user has access to in the
   * context of the course provided in the url. NOTE: this only returns
   * ExternalToolCollaboration type collaborations.
   *
   * curl https://<canvas>/api/v1/courses/1/collaborations/
   * @param groupId ID
   * @returns Collaboration success
   * @throws ApiError
   */
  public listCollaborationsGroups(
    groupId: string,
  ): CancelablePromise<Array<Collaboration>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/collaborations",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * List potential members
   * A paginated list of the users who can potentially be added to a
   * collaboration in the given context.
   *
   * For courses, this consists of all enrolled users.  For groups, it is comprised of the
   * group members plus the admins of the course containing the group.
   * @param courseId ID
   * @returns User success
   * @throws ApiError
   */
  public listPotentialMembersCourses(
    courseId: string,
  ): CancelablePromise<Array<User>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/potential_collaborators",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * List collaborations
   * A paginated list of collaborations the current user has access to in the
   * context of the course provided in the url. NOTE: this only returns
   * ExternalToolCollaboration type collaborations.
   *
   * curl https://<canvas>/api/v1/courses/1/collaborations/
   * @param courseId ID
   * @returns Collaboration success
   * @throws ApiError
   */
  public listCollaborationsCourses(
    courseId: string,
  ): CancelablePromise<Array<Collaboration>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/collaborations",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * List potential members
   * A paginated list of the users who can potentially be added to a
   * collaboration in the given context.
   *
   * For courses, this consists of all enrolled users.  For groups, it is comprised of the
   * group members plus the admins of the course containing the group.
   * @param groupId ID
   * @returns User success
   * @throws ApiError
   */
  public listPotentialMembersGroups(
    groupId: string,
  ): CancelablePromise<Array<User>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/groups/{group_id}/potential_collaborators",
      path: {
        group_id: groupId,
      },
    });
  }

  /**
   * List members of a collaboration.
   * A paginated list of the collaborators of a given collaboration
   * @param id ID
   * @param include - "collaborator_lti_id": Optional information to include with each member.
   * Represents an identifier to be used for the member in an LTI context.
   * - "avatar_image_url": Optional information to include with each member.
   * The url for the avatar of a collaborator with type 'user'.
   * @returns Collaborator success
   * @throws ApiError
   */
  public listMembersOfCollaboration(
    id: string,
    include?: "collaborator_lti_id" | "avatar_image_url",
  ): CancelablePromise<Array<Collaborator>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/collaborations/{id}/members",
      path: {
        id: id,
      },
      query: {
        include: include,
      },
    });
  }
}
