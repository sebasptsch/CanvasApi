/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Grade = {
  /**
   * The URL to the Canvas web UI page for the user's grades, if this is a student enrollment.
   */
  html_url?: string;
  /**
   * The user's current grade in the class. Only included if user has permissions to view this grade.
   */
  current_grade?: string;
  /**
   * The user's final grade for the class. Only included if user has permissions to view this grade.
   */
  final_grade?: string;
  /**
   * The user's current score in the class. Only included if user has permissions to view this score.
   */
  current_score?: string;
  /**
   * The user's final score for the class. Only included if user has permissions to view this score.
   */
  final_score?: string;
  /**
   * The total points the user has earned in the class. Only included if user has permissions to view this score and 'current_points' is passed in the request's 'include' parameter.
   */
  current_points?: number;
  /**
   * The user's current grade in the class including muted/unposted assignments. Only included if user has permissions to view this grade, typically teachers, TAs, and admins.
   */
  unposted_current_grade?: string;
  /**
   * The user's final grade for the class including muted/unposted assignments. Only included if user has permissions to view this grade, typically teachers, TAs, and admins..
   */
  unposted_final_grade?: string;
  /**
   * The user's current score in the class including muted/unposted assignments. Only included if user has permissions to view this score, typically teachers, TAs, and admins..
   */
  unposted_current_score?: string;
  /**
   * The user's final score for the class including muted/unposted assignments. Only included if user has permissions to view this score, typically teachers, TAs, and admins..
   */
  unposted_final_score?: string;
  /**
   * The total points the user has earned in the class, including muted/unposted assignments. Only included if user has permissions to view this score (typically teachers, TAs, and admins) and 'current_points' is passed in the request's 'include' parameter.
   */
  unposted_current_points?: number;
};
