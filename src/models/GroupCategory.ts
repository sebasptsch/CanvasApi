/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Progress } from './Progress';

export type GroupCategory = {
    /**
     * The ID of the group category.
     */
    id?: number;
    /**
     * The display name of the group category.
     */
    name?: string;
    /**
     * Certain types of group categories have special role designations. Currently, these include: 'communities', 'student_organized', and 'imported'. Regular course/account group categories have a role of null.
     */
    role?: string;
    /**
     * If the group category allows users to join a group themselves, thought they may only be a member of one group per group category at a time. Values include 'restricted', 'enabled', and null 'enabled' allows students to assign themselves to a group 'restricted' restricts them to only joining a group in their section null disallows students from joining groups
     */
    self_signup?: string;
    /**
     * Gives instructors the ability to automatically have group leaders assigned.  Values include 'random', 'first', and null; 'random' picks a student from the group at random as the leader, 'first' sets the first student to be assigned to the group as the leader
     */
    auto_leader?: string;
    /**
     * The course or account that the category group belongs to. The pattern here is that whatever the context_type is, there will be an _id field named after that type. So if instead context_type was 'Course', the course_id field would be replaced by an course_id field.
     */
    context_type?: string;
    account_id?: number;
    /**
     * If self-signup is enabled, group_limit can be set to cap the number of users in each group. If null, there is no limit.
     */
    group_limit?: number;
    /**
     * The SIS identifier for the group category. This field is only included if the user has permission to manage or view SIS information.
     */
    sis_group_category_id?: string;
    /**
     * The unique identifier for the SIS import. This field is only included if the user has permission to manage SIS information.
     */
    sis_import_id?: number;
    progress?: Progress;
};

