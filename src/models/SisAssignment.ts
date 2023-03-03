/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssignmentGroupAttributes } from './AssignmentGroupAttributes';
import type { datetime } from './datetime';
import type { SectionAttributes } from './SectionAttributes';
import type { UserAssignmentOverrideAttributes } from './UserAssignmentOverrideAttributes';

/**
 * Assignments that have post_to_sis enabled with other objects for convenience
 */
export type SisAssignment = {
    /**
     * The unique identifier for the assignment.
     */
    id?: number;
    /**
     * The unique identifier for the course.
     */
    course_id?: number;
    /**
     * the name of the assignment
     */
    name?: string;
    created_at?: datetime;
    due_at?: datetime;
    unlock_at?: datetime;
    lock_at?: datetime;
    /**
     * The maximum points possible for the assignment
     */
    points_possible?: number;
    /**
     * the types of submissions allowed for this assignment list containing one or more of the following: 'discussion_topic', 'online_quiz', 'on_paper', 'none', 'external_tool', 'online_text_entry', 'online_url', 'online_upload', 'media_recording', 'student_annotation'
     */
    submission_types?: Array<string>;
    /**
     * Third Party integration id for assignment
     */
    integration_id?: string;
    /**
     * (optional, Third Party integration data for assignment)
     */
    integration_data?: string;
    /**
     * If false, the assignment will be omitted from the student's final grade
     */
    include_in_final_grade?: boolean;
    /**
     * Includes attributes of a assignment_group for convenience. For more details see Assignments API.
     */
    assignment_group?: Array<AssignmentGroupAttributes>;
    /**
     * Includes attributes of a section for convenience. For more details see Sections API.
     */
    sections?: Array<SectionAttributes>;
    /**
     * Includes attributes of a user assignment overrides. For more details see Assignments API.
     */
    user_overrides?: Array<UserAssignmentOverrideAttributes>;
};

