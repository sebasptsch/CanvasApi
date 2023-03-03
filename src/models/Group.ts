/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type Group = {
    /**
     * The ID of the group.
     */
    id?: number;
    /**
     * The display name of the group.
     */
    name?: string;
    /**
     * A description of the group. This is plain text.
     */
    description?: string;
    /**
     * Whether or not the group is public.  Currently only community groups can be made public.  Also, once a group has been set to public, it cannot be changed back to private.
     */
    is_public?: boolean;
    /**
     * Whether or not the current user is following this group.
     */
    followed_by_user?: boolean;
    /**
     * How people are allowed to join the group.  For all groups except for community groups, the user must share the group's parent course or account.  For student organized or community groups, where a user can be a member of as many or few as they want, the applicable levels are 'parent_context_auto_join', 'parent_context_request', and 'invitation_only'.  For class groups, where students are divided up and should only be part of one group of the category, this value will always be 'invitation_only', and is not relevant. * If 'parent_context_auto_join', anyone can join and will be automatically accepted. * If 'parent_context_request', anyone  can request to join, which must be approved by a group moderator. * If 'invitation_only', only those how have received an invitation my join the group, by accepting that invitation.
     */
    join_level?: string;
    /**
     * The number of members currently in the group
     */
    members_count?: number;
    /**
     * The url of the group's avatar
     */
    avatar_url?: string;
    /**
     * The course or account that the group belongs to. The pattern here is that whatever the context_type is, there will be an _id field named after that type. So if instead context_type was 'account', the course_id field would be replaced by an account_id field.
     */
    context_type?: string;
    course_id?: number;
    /**
     * Certain types of groups have special role designations. Currently, these include: 'communities', 'student_organized', and 'imported'. Regular course/account groups have a role of null.
     */
    role?: string;
    /**
     * The ID of the group's category.
     */
    group_category_id?: number;
    /**
     * The SIS ID of the group. Only included if the user has permission to view SIS information.
     */
    sis_group_id?: string;
    /**
     * The id of the SIS import if created through SIS. Only included if the user has permission to manage SIS information.
     */
    sis_import_id?: number;
    /**
     * the storage quota for the group, in megabytes
     */
    storage_quota_mb?: number;
    /**
     * optional: the permissions the user has for the group. returned only for a single group and include[]=permissions
     */
    permissions?: any;
    /**
     * optional: A list of users that are members in the group. Returned only if include[]=users. WARNING: this collection's size is capped (if there are an extremely large number of users in the group (thousands) not all of them will be returned).  If you need to capture all the users in a group with certainty consider using the paginated /api/v1/groups/<group_id>/memberships endpoint.
     */
    users?: Array<User>;
};

