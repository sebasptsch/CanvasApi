/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Favorite = {
  /**
   * The ID of the object the Favorite refers to
   */
  context_id?: number;
  /**
   * The type of the object the Favorite refers to (currently, only 'Course' is supported)
   */
  context_type?: string;
};
