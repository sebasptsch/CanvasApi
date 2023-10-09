/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PeerReview } from "../models/PeerReview";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class PeerReviewsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get all Peer Reviews
   * Get a list of all Peer Reviews for this assignment
   * @param courseId ID
   * @param assignmentId ID
   * @param submissionId ID
   * @param include Associations to include with the peer review.
   * @returns PeerReview success
   * @throws ApiError
   */
  public getAllPeerReviewsCoursesSubmissions(
    courseId: string,
    assignmentId: string,
    submissionId: string,
    include?: "submission_comments" | "user",
  ): CancelablePromise<Array<PeerReview>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        submission_id: submissionId,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Create Peer Review
   * Create a peer review for the assignment
   * @param courseId ID
   * @param assignmentId ID
   * @param submissionId ID
   * @param formData
   * @returns PeerReview success
   * @throws ApiError
   */
  public createPeerReviewCourses(
    courseId: string,
    assignmentId: string,
    submissionId: string,
    formData: any,
  ): CancelablePromise<PeerReview> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        submission_id: submissionId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete Peer Review
   * Delete a peer review for the assignment
   * @param courseId ID
   * @param assignmentId ID
   * @param submissionId ID
   * @param userId user_id to delete as reviewer on this assignment
   * @returns PeerReview success
   * @throws ApiError
   */
  public deletePeerReviewCourses(
    courseId: string,
    assignmentId: string,
    submissionId: string,
    userId: number,
  ): CancelablePromise<PeerReview> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
        submission_id: submissionId,
      },
      query: {
        user_id: userId,
      },
    });
  }

  /**
   * Get all Peer Reviews
   * Get a list of all Peer Reviews for this assignment
   * @param sectionId ID
   * @param assignmentId ID
   * @param include Associations to include with the peer review.
   * @returns PeerReview success
   * @throws ApiError
   */
  public getAllPeerReviewsSectionsPeerReviews(
    sectionId: string,
    assignmentId: string,
    include?: "submission_comments" | "user",
  ): CancelablePromise<Array<PeerReview>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/peer_reviews",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Get all Peer Reviews
   * Get a list of all Peer Reviews for this assignment
   * @param sectionId ID
   * @param assignmentId ID
   * @param submissionId ID
   * @param include Associations to include with the peer review.
   * @returns PeerReview success
   * @throws ApiError
   */
  public getAllPeerReviewsSectionsSubmissions(
    sectionId: string,
    assignmentId: string,
    submissionId: string,
    include?: "submission_comments" | "user",
  ): CancelablePromise<Array<PeerReview>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        submission_id: submissionId,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Create Peer Review
   * Create a peer review for the assignment
   * @param sectionId ID
   * @param assignmentId ID
   * @param submissionId ID
   * @param formData
   * @returns PeerReview success
   * @throws ApiError
   */
  public createPeerReviewSections(
    sectionId: string,
    assignmentId: string,
    submissionId: string,
    formData: any,
  ): CancelablePromise<PeerReview> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        submission_id: submissionId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete Peer Review
   * Delete a peer review for the assignment
   * @param sectionId ID
   * @param assignmentId ID
   * @param submissionId ID
   * @param userId user_id to delete as reviewer on this assignment
   * @returns PeerReview success
   * @throws ApiError
   */
  public deletePeerReviewSections(
    sectionId: string,
    assignmentId: string,
    submissionId: string,
    userId: number,
  ): CancelablePromise<PeerReview> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews",
      path: {
        section_id: sectionId,
        assignment_id: assignmentId,
        submission_id: submissionId,
      },
      query: {
        user_id: userId,
      },
    });
  }

  /**
   * Get all Peer Reviews
   * Get a list of all Peer Reviews for this assignment
   * @param courseId ID
   * @param assignmentId ID
   * @param include Associations to include with the peer review.
   * @returns PeerReview success
   * @throws ApiError
   */
  public getAllPeerReviewsCoursesPeerReviews(
    courseId: string,
    assignmentId: string,
    include?: "submission_comments" | "user",
  ): CancelablePromise<Array<PeerReview>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/courses/{course_id}/assignments/{assignment_id}/peer_reviews",
      path: {
        course_id: courseId,
        assignment_id: assignmentId,
      },
      query: {
        include: include,
      },
    });
  }
}
