/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssignmentDate } from "./AssignmentDate";
import type { AssignmentOverride } from "./AssignmentOverride";
import type { datetime } from "./datetime";
import type { DiscussionTopic } from "./DiscussionTopic";
import type { ExternalToolTagAttributes } from "./ExternalToolTagAttributes";
import type { LockInfo } from "./LockInfo";
import type { NeedsGradingCount } from "./NeedsGradingCount";
import type { RubricCriteria } from "./RubricCriteria";
import type { ScoreStatistic } from "./ScoreStatistic";
import type { Submission } from "./Submission";
import type { TurnitinSettings } from "./TurnitinSettings";

export type Assignment = {
  /**
   * the ID of the assignment
   */
  id?: number;
  /**
   * the name of the assignment
   */
  name?: string;
  /**
   * the assignment description, in an HTML fragment
   */
  description?: string;
  created_at?: datetime;
  updated_at?: datetime;
  due_at?: datetime;
  lock_at?: datetime;
  unlock_at?: datetime;
  /**
   * whether this assignment has overrides
   */
  has_overrides?: boolean;
  /**
   * (Optional) all dates associated with the assignment, if applicable
   */
  all_dates?: Array<AssignmentDate>;
  /**
   * the ID of the course the assignment belongs to
   */
  course_id?: number;
  /**
   * the URL to the assignment's web page
   */
  html_url?: string;
  /**
   * the URL to download all submissions as a zip
   */
  submissions_download_url?: string;
  /**
   * the ID of the assignment's group
   */
  assignment_group_id?: number;
  /**
   * Boolean flag indicating whether the assignment requires a due date based on the account level setting
   */
  due_date_required?: boolean;
  /**
   * Allowed file extensions, which take effect if submission_types includes 'online_upload'.
   */
  allowed_extensions?: Array<string>;
  /**
   * An integer indicating the maximum length an assignment's name may be
   */
  max_name_length?: number;
  /**
   * Boolean flag indicating whether or not Turnitin has been enabled for the assignment. NOTE: This flag will not appear unless your account has the Turnitin plugin available
   */
  turnitin_enabled?: boolean;
  /**
   * Boolean flag indicating whether or not VeriCite has been enabled for the assignment. NOTE: This flag will not appear unless your account has the VeriCite plugin available
   */
  vericite_enabled?: boolean;
  turnitin_settings?: TurnitinSettings;
  /**
   * If this is a group assignment, boolean flag indicating whether or not students will be graded individually.
   */
  grade_group_students_individually?: boolean;
  external_tool_tag_attributes?: ExternalToolTagAttributes;
  /**
   * Boolean indicating if peer reviews are required for this assignment
   */
  peer_reviews?: boolean;
  /**
   * Boolean indicating peer reviews are assigned automatically. If false, the teacher is expected to manually assign peer reviews.
   */
  automatic_peer_reviews?: boolean;
  /**
   * Integer representing the amount of reviews each user is assigned. NOTE: This key is NOT present unless you have automatic_peer_reviews set to true.
   */
  peer_review_count?: number;
  peer_reviews_assign_at?: datetime;
  /**
   * Boolean representing whether or not members from within the same group on a group assignment can be assigned to peer review their own group's work
   */
  intra_group_peer_reviews?: boolean;
  /**
   * The ID of the assignment’s group set, if this is a group assignment. For group discussions, set group_category_id on the discussion topic, not the linked assignment.
   */
  group_category_id?: number;
  /**
   * if the requesting user has grading rights, the number of submissions that need grading.
   */
  needs_grading_count?: number;
  /**
   * if the requesting user has grading rights and the 'needs_grading_count_by_section' flag is specified, the number of submissions that need grading split out by section. NOTE: This key is NOT present unless you pass the 'needs_grading_count_by_section' argument as true.  ANOTHER NOTE: it's possible to be enrolled in multiple sections, and if a student is setup that way they will show an assignment that needs grading in multiple sections (effectively the count will be duplicated between sections)
   */
  needs_grading_count_by_section?: Array<NeedsGradingCount>;
  /**
   * the sorting order of the assignment in the group
   */
  position?: number;
  /**
   * (optional, present if Sync Grades to SIS feature is enabled)
   */
  post_to_sis?: boolean;
  /**
   * (optional, Third Party unique identifier for Assignment)
   */
  integration_id?: string;
  /**
   * (optional, Third Party integration data for assignment)
   */
  integration_data?: any;
  /**
   * the maximum points possible for the assignment
   */
  points_possible?: number;
  /**
   * the types of submissions allowed for this assignment list containing one or more of the following: 'discussion_topic', 'online_quiz', 'on_paper', 'none', 'external_tool', 'online_text_entry', 'online_url', 'online_upload', 'media_recording', 'student_annotation'
   */
  submission_types?: Array<string>;
  /**
   * If true, the assignment has been submitted to by at least one student
   */
  has_submitted_submissions?: boolean;
  /**
   * The type of grading the assignment receives; one of 'pass_fail', 'percent', 'letter_grade', 'gpa_scale', 'points'
   */
  grading_type?: string;
  /**
   * The id of the grading standard being applied to this assignment. Valid if grading_type is 'letter_grade' or 'gpa_scale'.
   */
  grading_standard_id?: number;
  /**
   * Whether the assignment is published
   */
  published?: boolean;
  /**
   * Whether the assignment's 'published' state can be changed to false. Will be false if there are student submissions for the assignment.
   */
  unpublishable?: boolean;
  /**
   * Whether the assignment is only visible to overrides.
   */
  only_visible_to_overrides?: boolean;
  /**
   * Whether or not this is locked for the user.
   */
  locked_for_user?: boolean;
  lock_info?: LockInfo;
  /**
   * (Optional) An explanation of why this is locked for the user. Present when locked_for_user is true.
   */
  lock_explanation?: string;
  /**
   * (Optional) id of the associated quiz (applies only when submission_types is ['online_quiz'])
   */
  quiz_id?: number;
  /**
   * (Optional) whether anonymous submissions are accepted (applies only to quiz assignments)
   */
  anonymous_submissions?: boolean;
  discussion_topic?: DiscussionTopic;
  /**
   * (Optional) Boolean indicating if assignment will be frozen when it is copied. NOTE: This field will only be present if the AssignmentFreezer plugin is available for your account.
   */
  freeze_on_copy?: boolean;
  /**
   * (Optional) Boolean indicating if assignment is frozen for the calling user. NOTE: This field will only be present if the AssignmentFreezer plugin is available for your account.
   */
  frozen?: boolean;
  /**
   * (Optional) Array of frozen attributes for the assignment. Only account administrators currently have permission to change an attribute in this list. Will be empty if no attributes are frozen for this assignment. Possible frozen attributes are: title, description, lock_at, points_possible, grading_type, submission_types, assignment_group_id, allowed_extensions, group_category_id, notify_of_update, peer_reviews NOTE: This field will only be present if the AssignmentFreezer plugin is available for your account.
   */
  frozen_attributes?: Array<string>;
  submission?: Submission;
  /**
   * (Optional) If true, the rubric is directly tied to grading the assignment. Otherwise, it is only advisory. Included if there is an associated rubric.
   */
  use_rubric_for_grading?: boolean;
  /**
   * (Optional) An object describing the basic attributes of the rubric, including the point total. Included if there is an associated rubric.
   */
  rubric_settings?: any;
  /**
   * (Optional) A list of scoring criteria and ratings for each rubric criterion. Included if there is an associated rubric.
   */
  rubric?: Array<RubricCriteria>;
  /**
   * (Optional) If 'assignment_visibility' is included in the 'include' parameter, includes an array of student IDs who can see this assignment.
   */
  assignment_visibility?: Array<number>;
  /**
   * (Optional) If 'overrides' is included in the 'include' parameter, includes an array of assignment override objects.
   */
  overrides?: Array<AssignmentOverride>;
  /**
   * (Optional) If true, the assignment will be omitted from the student's final grade
   */
  omit_from_final_grade?: boolean;
  /**
   * (Optional) If true, the assignment will not be shown in any gradebooks
   */
  hide_in_gradebook?: boolean;
  /**
   * Boolean indicating if the assignment is moderated.
   */
  moderated_grading?: boolean;
  /**
   * The maximum number of provisional graders who may issue grades for this assignment. Only relevant for moderated assignments. Must be a positive value, and must be set to 1 if the course has fewer than two active instructors. Otherwise, the maximum value is the number of active instructors in the course minus one, or 10 if the course has more than 11 active instructors.
   */
  grader_count?: number;
  /**
   * The user ID of the grader responsible for choosing final grades for this assignment. Only relevant for moderated assignments.
   */
  final_grader_id?: number;
  /**
   * Boolean indicating if provisional graders' comments are visible to other provisional graders. Only relevant for moderated assignments.
   */
  grader_comments_visible_to_graders?: boolean;
  /**
   * Boolean indicating if provisional graders' identities are hidden from other provisional graders. Only relevant for moderated assignments with grader_comments_visible_to_graders set to true.
   */
  graders_anonymous_to_graders?: boolean;
  /**
   * Boolean indicating if provisional grader identities are visible to the final grader. Only relevant for moderated assignments.
   */
  grader_names_visible_to_final_grader?: boolean;
  /**
   * Boolean indicating if the assignment is graded anonymously. If true, graders cannot see student identities.
   */
  anonymous_grading?: boolean;
  /**
   * The number of submission attempts a student can make for this assignment. -1 is considered unlimited.
   */
  allowed_attempts?: number;
  /**
   * Whether the assignment has manual posting enabled. Only relevant for courses using New Gradebook.
   */
  post_manually?: boolean;
  score_statistics?: ScoreStatistic;
  /**
   * (Optional) If retrieving a single assignment and 'can_submit' is included in the 'include' parameter, flags whether user has the right to submit the assignment (i.e. checks enrollment dates, submission types, locked status, attempts remaining, etc...). Including 'can submit' automatically includes 'submission' in the include parameter. Not available when observed_users are included.
   */
  can_submit?: boolean;
  /**
   * (Optional) The academic benchmark(s) associated with the assignment or the assignment's rubric. Only included if 'ab_guid' is included in the 'include' parameter.
   */
  ab_guid?: Array<string>;
  /**
   * The id of the attachment to be annotated by students. Relevant only if submission_types includes 'student_annotation'.
   */
  annotatable_attachment_id?: number;
  /**
   * (Optional) Boolean indicating whether student names are anonymized
   */
  anonymize_students?: boolean;
  /**
   * (Optional) Boolean indicating whether the Respondus LockDown Browser® is required for this assignment.
   */
  require_lockdown_browser?: boolean;
  /**
   * (Optional) Boolean indicating whether this assignment has important dates.
   */
  important_dates?: boolean;
  /**
   * (Optional, Deprecated) Boolean indicating whether notifications are muted for this assignment.
   */
  muted?: boolean;
  /**
   * Boolean indicating whether peer reviews are anonymous.
   */
  anonymous_peer_reviews?: boolean;
  /**
   * Boolean indicating whether instructor anotations are anonymous.
   */
  anonymous_instructor_annotations?: boolean;
  /**
   * Boolean indicating whether this assignment has graded submissions.
   */
  graded_submissions_exist?: boolean;
  /**
   * Boolean indicating whether this is a quiz lti assignment.
   */
  is_quiz_assignment?: boolean;
  /**
   * Boolean indicating whether this assignment is in a closed grading period.
   */
  in_closed_grading_period?: boolean;
  /**
   * Boolean indicating whether this assignment can be duplicated.
   */
  can_duplicate?: boolean;
  /**
   * If this assignment is a duplicate, it is the original assignment's course_id
   */
  original_course_id?: number;
  /**
   * If this assignment is a duplicate, it is the original assignment's id
   */
  original_assignment_id?: number;
  /**
   * If this assignment is a duplicate, it is the original assignment's lti_resource_link_id
   */
  original_lti_resource_link_id?: number;
  /**
   * If this assignment is a duplicate, it is the original assignment's name
   */
  original_assignment_name?: string;
  /**
   * If this assignment is a duplicate, it is the original assignment's quiz_id
   */
  original_quiz_id?: number;
  /**
   * String indicating what state this assignment is in.
   */
  workflow_state?: string;
};
