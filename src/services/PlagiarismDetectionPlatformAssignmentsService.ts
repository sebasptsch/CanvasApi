/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LtiAssignment } from "../models/LtiAssignment";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class PlagiarismDetectionPlatformAssignmentsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get a single assignment (lti)
   * Get a single Canvas assignment by Canvas id or LTI id. Tool providers may only access
   * assignments that are associated with their tool.
   * @param assignmentId ID
   * @param userId The id of the user. Can be a Canvas or LTI id for the user.
   * @returns LtiAssignment success
   * @throws ApiError
   */
  public getSingleAssignmentLti(
    assignmentId: string,
    userId?: string,
  ): CancelablePromise<LtiAssignment> {
    return this.httpRequest.request({
      method: "GET",
      url: "/lti/assignments/{assignment_id}",
      path: {
        assignment_id: assignmentId,
      },
      query: {
        user_id: userId,
      },
    });
  }
}
