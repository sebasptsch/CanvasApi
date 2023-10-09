/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PeerReview = {
  /**
   * The assessors user id
   */
  assessor_id?: number;
  /**
   * The id for the asset associated with this Peer Review
   */
  asset_id?: number;
  /**
   * The type of the asset
   */
  asset_type?: string;
  /**
   * The id of the Peer Review
   */
  id?: number;
  /**
   * The user id for the owner of the asset
   */
  user_id?: number;
  /**
   * The state of the Peer Review, either 'assigned' or 'completed'
   */
  workflow_state?: string;
  /**
   * the User object for the owner of the asset if the user include parameter is provided (see user API) (optional)
   */
  user?: string;
  /**
   * The User object for the assessor if the user include parameter is provided (see user API) (optional)
   */
  assessor?: string;
  /**
   * The submission comments associated with this Peer Review if the submission_comment include parameter is provided (see submissions API) (optional)
   */
  submission_comments?: string;
};
