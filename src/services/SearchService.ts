/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SearchService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Find recipients
     * Find valid recipients (users, courses and groups) that the current user
     * can send messages to. The /api/v1/search/recipients path is the preferred
     * endpoint, /api/v1/conversations/find_recipients is deprecated.
     *
     * Pagination is supported.
     * @param search Search terms used for matching users/courses/groups (e.g. "bob smith"). If
     * multiple terms are given (separated via whitespace), only results matching
     * all terms will be returned.
     * @param context Limit the search to a particular course/group (e.g. "course_3" or "group_4").
     * @param exclude Array of ids to exclude from the search. These may be user ids or
     * course/group ids prefixed with "course_" or "group_" respectively,
     * e.g. exclude[]=1&exclude[]=2&exclude[]=course_3
     * @param type Limit the search just to users or contexts (groups/courses).
     * @param userId Search for a specific user id. This ignores the other above parameters,
     * and will never return more than one result.
     * @param fromConversationId When searching by user_id, only users that could be normally messaged by
     * this user will be returned. This parameter allows you to specify a
     * conversation that will be referenced for a shared context -- if both the
     * current user and the searched user are in the conversation, the user will
     * be returned. This is used to start new side conversations.
     * @param permissions Array of permission strings to be checked for each matched context (e.g.
     * "send_messages"). This argument determines which permissions may be
     * returned in the response; it won't prevent contexts from being returned if
     * they don't grant the permission(s).
     * @returns any success
     * @throws ApiError
     */
    public findRecipientsConversations(
        search?: string,
        context?: string,
        exclude?: Array<string>,
        type?: 'user' | 'context',
        userId?: number,
        fromConversationId?: number,
        permissions?: Array<string>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/conversations/find_recipients',
            query: {
                'search': search,
                'context': context,
                'exclude': exclude,
                'type': type,
                'user_id': userId,
                'from_conversation_id': fromConversationId,
                'permissions': permissions,
            },
        });
    }

    /**
     * List all courses
     * A paginated list of all courses visible in the public index
     * @param search Search terms used for matching users/courses/groups (e.g. "bob smith"). If
     * multiple terms are given (separated via whitespace), only results matching
     * all terms will be returned.
     * @param publicOnly Only return courses with public content. Defaults to false.
     * @param openEnrollmentOnly Only return courses that allow self enrollment. Defaults to false.
     * @returns any success
     * @throws ApiError
     */
    public listAllCourses(
        search?: string,
        publicOnly?: boolean,
        openEnrollmentOnly?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/search/all_courses',
            query: {
                'search': search,
                'public_only': publicOnly,
                'open_enrollment_only': openEnrollmentOnly,
            },
        });
    }

    /**
     * Find recipients
     * Find valid recipients (users, courses and groups) that the current user
     * can send messages to. The /api/v1/search/recipients path is the preferred
     * endpoint, /api/v1/conversations/find_recipients is deprecated.
     *
     * Pagination is supported.
     * @param search Search terms used for matching users/courses/groups (e.g. "bob smith"). If
     * multiple terms are given (separated via whitespace), only results matching
     * all terms will be returned.
     * @param context Limit the search to a particular course/group (e.g. "course_3" or "group_4").
     * @param exclude Array of ids to exclude from the search. These may be user ids or
     * course/group ids prefixed with "course_" or "group_" respectively,
     * e.g. exclude[]=1&exclude[]=2&exclude[]=course_3
     * @param type Limit the search just to users or contexts (groups/courses).
     * @param userId Search for a specific user id. This ignores the other above parameters,
     * and will never return more than one result.
     * @param fromConversationId When searching by user_id, only users that could be normally messaged by
     * this user will be returned. This parameter allows you to specify a
     * conversation that will be referenced for a shared context -- if both the
     * current user and the searched user are in the conversation, the user will
     * be returned. This is used to start new side conversations.
     * @param permissions Array of permission strings to be checked for each matched context (e.g.
     * "send_messages"). This argument determines which permissions may be
     * returned in the response; it won't prevent contexts from being returned if
     * they don't grant the permission(s).
     * @returns any success
     * @throws ApiError
     */
    public findRecipientsSearch(
        search?: string,
        context?: string,
        exclude?: Array<string>,
        type?: 'user' | 'context',
        userId?: number,
        fromConversationId?: number,
        permissions?: Array<string>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/search/recipients',
            query: {
                'search': search,
                'context': context,
                'exclude': exclude,
                'type': type,
                'user_id': userId,
                'from_conversation_id': fromConversationId,
                'permissions': permissions,
            },
        });
    }

}
