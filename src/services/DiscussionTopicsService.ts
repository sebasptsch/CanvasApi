/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscussionTopic } from '../models/DiscussionTopic';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DiscussionTopicsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List topic entries
     * Retrieve the (paginated) top-level entries in a discussion topic.
     *
     * May require (depending on the topic) that the user has posted in the topic.
     * If it is required, and the user has not posted, will respond with a 403
     * Forbidden status and the body 'require_initial_post'.
     *
     * Will include the 10 most recent replies, if any, for each entry returned.
     *
     * If the topic is a root topic with children corresponding to groups of a
     * group assignment, entries from those subtopics for which the user belongs
     * to the corresponding group will be returned.
     *
     * Ordering of returned entries is newest-first by posting timestamp (reply
     * activity is ignored).
     * @param groupId ID
     * @param topicId ID
     * @returns any success
     * @throws ApiError
     */
    public listTopicEntriesGroups(
        groupId: string,
        topicId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/entries',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * Post an entry
     * Create a new entry in a discussion topic. Returns a json representation of
     * the created entry (see documentation for 'entries' method) on success.
     * @param groupId ID
     * @param topicId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public postEntryGroups(
        groupId: string,
        topicId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/entries',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Duplicate discussion topic
     * Duplicate a discussion topic according to context (Course/Group)
     * @param groupId ID
     * @param topicId ID
     * @returns DiscussionTopic success
     * @throws ApiError
     */
    public duplicateDiscussionTopicGroups(
        groupId: string,
        topicId: string,
    ): CancelablePromise<DiscussionTopic> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/duplicate',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * Get the full topic
     * Return a cached structure of the discussion topic, containing all entries,
     * their authors, and their message bodies.
     *
     * May require (depending on the topic) that the user has posted in the topic.
     * If it is required, and the user has not posted, will respond with a 403
     * Forbidden status and the body 'require_initial_post'.
     *
     * In some rare situations, this cached structure may not be available yet. In
     * that case, the server will respond with a 503 error, and the caller should
     * try again soon.
     *
     * The response is an object containing the following keys:
     * * "participants": A list of summary information on users who have posted to
     * the discussion. Each value is an object containing their id, display_name,
     * and avatar_url.
     * * "unread_entries": A list of entry ids that are unread by the current
     * user. this implies that any entry not in this list is read.
     * * "entry_ratings": A map of entry ids to ratings by the current user. Entries
     * not in this list have no rating. Only populated if rating is enabled.
     * * "forced_entries": A list of entry ids that have forced_read_state set to
     * true. This flag is meant to indicate the entry's read_state has been
     * manually set to 'unread' by the user, so the entry should not be
     * automatically marked as read.
     * * "view": A threaded view of all the entries in the discussion, containing
     * the id, user_id, and message.
     * * "new_entries": Because this view is eventually consistent, it's possible
     * that newly created or updated entries won't yet be reflected in the view.
     * If the application wants to also get a flat list of all entries not yet
     * reflected in the view, pass include_new_entries=1 to the request and this
     * array of entries will be returned. These entries are returned in a flat
     * array, in ascending created_at order.
     * @param groupId ID
     * @param topicId ID
     * @returns any success
     * @throws ApiError
     */
    public getFullTopicGroups(
        groupId: string,
        topicId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/view',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * List discussion topics
     * Returns the paginated list of discussion topics for this course or group.
     * @param groupId ID
     * @param include If "all_dates" is passed, all dates associated with graded discussions'
     * assignments will be included.
     * if "sections" is passed, includes the course sections that are associated
     * with the topic, if the topic is specific to certain sections of the course.
     * If "sections_user_count" is passed, then:
     * (a) If sections were asked for *and* the topic is specific to certain
     * course sections, includes the number of users in each
     * section. (as part of the section json asked for above)
     * (b) Else, includes at the root level the total number of users in the
     * topic's context (group or course) that the topic applies to.
     * If "overrides" is passed, the overrides for the assignment will be included
     * @param orderBy Determines the order of the discussion topic list. Defaults to "position".
     * @param scope Only return discussion topics in the given state(s). Defaults to including
     * all topics. Filtering is done after pagination, so pages
     * may be smaller than requested if topics are filtered.
     * Can pass multiple states as comma separated string.
     * @param onlyAnnouncements Return announcements instead of discussion topics. Defaults to false
     * @param filterBy The state of the discussion topic to return. Currently only supports unread state.
     * @param searchTerm The partial title of the discussion topics to match and return.
     * @param excludeContextModuleLockedTopics For students, exclude topics that are locked by module progression.
     * Defaults to false.
     * @returns DiscussionTopic success
     * @throws ApiError
     */
    public listDiscussionTopicsGroups(
        groupId: string,
        include?: 'all_dates' | 'sections' | 'sections_user_count' | 'overrides',
        orderBy?: 'position' | 'recent_activity' | 'title',
        scope?: 'locked' | 'unlocked' | 'pinned' | 'unpinned',
        onlyAnnouncements?: boolean,
        filterBy?: 'all' | 'unread',
        searchTerm?: string,
        excludeContextModuleLockedTopics?: boolean,
    ): CancelablePromise<Array<DiscussionTopic>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/groups/{group_id}/discussion_topics',
            path: {
                'group_id': groupId,
            },
            query: {
                'include': include,
                'order_by': orderBy,
                'scope': scope,
                'only_announcements': onlyAnnouncements,
                'filter_by': filterBy,
                'search_term': searchTerm,
                'exclude_context_module_locked_topics': excludeContextModuleLockedTopics,
            },
        });
    }

    /**
     * Create a new discussion topic
     * Create an new discussion topic for the course or group.
     * @param groupId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createNewDiscussionTopicGroups(
        groupId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/groups/{group_id}/discussion_topics',
            path: {
                'group_id': groupId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Update an entry
     * Update an existing discussion entry.
     *
     * The entry must have been created by the current user, or the current user
     * must have admin rights to the discussion. If the edit is not allowed, a 401 will be returned.
     * @param courseId ID
     * @param topicId ID
     * @param id ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateEntryCourses(
        courseId: string,
        topicId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{id}',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete an entry
     * Delete a discussion entry.
     *
     * The entry must have been created by the current user, or the current user
     * must have admin rights to the discussion. If the delete is not allowed, a 401 will be returned.
     *
     * The discussion will be marked deleted, and the user_id and message will be cleared out.
     * @param courseId ID
     * @param topicId ID
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public deleteEntryCourses(
        courseId: string,
        topicId: string,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{id}',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
                'id': id,
            },
        });
    }

    /**
     * Mark entry as read
     * Mark a discussion entry as read.
     *
     * No request fields are necessary.
     *
     * On success, the response will be 204 No Content with an empty body.
     * @param groupId ID
     * @param topicId ID
     * @param entryId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public markEntryAsReadGroups(
        groupId: string,
        topicId: string,
        entryId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/read',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
                'entry_id': entryId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Mark entry as unread
     * Mark a discussion entry as unread.
     *
     * No request fields are necessary.
     *
     * On success, the response will be 204 No Content with an empty body.
     * @param groupId ID
     * @param topicId ID
     * @param entryId ID
     * @param forcedReadState A boolean value to set the entry's forced_read_state. No change is made if
     * this argument is not specified.
     * @returns any success
     * @throws ApiError
     */
    public markEntryAsUnreadGroups(
        groupId: string,
        topicId: string,
        entryId: string,
        forcedReadState?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/read',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
                'entry_id': entryId,
            },
            query: {
                'forced_read_state': forcedReadState,
            },
        });
    }

    /**
     * Get the full topic
     * Return a cached structure of the discussion topic, containing all entries,
     * their authors, and their message bodies.
     *
     * May require (depending on the topic) that the user has posted in the topic.
     * If it is required, and the user has not posted, will respond with a 403
     * Forbidden status and the body 'require_initial_post'.
     *
     * In some rare situations, this cached structure may not be available yet. In
     * that case, the server will respond with a 503 error, and the caller should
     * try again soon.
     *
     * The response is an object containing the following keys:
     * * "participants": A list of summary information on users who have posted to
     * the discussion. Each value is an object containing their id, display_name,
     * and avatar_url.
     * * "unread_entries": A list of entry ids that are unread by the current
     * user. this implies that any entry not in this list is read.
     * * "entry_ratings": A map of entry ids to ratings by the current user. Entries
     * not in this list have no rating. Only populated if rating is enabled.
     * * "forced_entries": A list of entry ids that have forced_read_state set to
     * true. This flag is meant to indicate the entry's read_state has been
     * manually set to 'unread' by the user, so the entry should not be
     * automatically marked as read.
     * * "view": A threaded view of all the entries in the discussion, containing
     * the id, user_id, and message.
     * * "new_entries": Because this view is eventually consistent, it's possible
     * that newly created or updated entries won't yet be reflected in the view.
     * If the application wants to also get a flat list of all entries not yet
     * reflected in the view, pass include_new_entries=1 to the request and this
     * array of entries will be returned. These entries are returned in a flat
     * array, in ascending created_at order.
     * @param courseId ID
     * @param topicId ID
     * @returns any success
     * @throws ApiError
     */
    public getFullTopicCourses(
        courseId: string,
        topicId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/view',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * Mark topic as read
     * Mark the initial text of the discussion topic as read.
     *
     * No request fields are necessary.
     *
     * On success, the response will be 204 No Content with an empty body.
     * @param courseId ID
     * @param topicId ID
     * @returns any success
     * @throws ApiError
     */
    public markTopicAsReadCourses(
        courseId: string,
        topicId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/read',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * Mark topic as unread
     * Mark the initial text of the discussion topic as unread.
     *
     * No request fields are necessary.
     *
     * On success, the response will be 204 No Content with an empty body.
     * @param courseId ID
     * @param topicId ID
     * @returns any success
     * @throws ApiError
     */
    public markTopicAsUnreadCourses(
        courseId: string,
        topicId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/read',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * List entries
     * Retrieve a paginated list of discussion entries, given a list of ids.
     *
     * May require (depending on the topic) that the user has posted in the topic.
     * If it is required, and the user has not posted, will respond with a 403
     * Forbidden status and the body 'require_initial_post'.
     * @param courseId ID
     * @param topicId ID
     * @param ids A list of entry ids to retrieve. Entries will be returned in id order,
     * smallest id first.
     * @returns any success
     * @throws ApiError
     */
    public listEntriesCourses(
        courseId: string,
        topicId: string,
        ids?: Array<string>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/entry_list',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
            },
            query: {
                'ids': ids,
            },
        });
    }

    /**
     * Subscribe to a topic
     * Subscribe to a topic to receive notifications about new entries
     *
     * On success, the response will be 204 No Content with an empty body
     * @param groupId ID
     * @param topicId ID
     * @returns any success
     * @throws ApiError
     */
    public subscribeToTopicGroups(
        groupId: string,
        topicId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/subscribed',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * Unsubscribe from a topic
     * Unsubscribe from a topic to stop receiving notifications about new entries
     *
     * On success, the response will be 204 No Content with an empty body
     * @param groupId ID
     * @param topicId ID
     * @returns any success
     * @throws ApiError
     */
    public unsubscribeFromTopicGroups(
        groupId: string,
        topicId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/subscribed',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * Mark topic as read
     * Mark the initial text of the discussion topic as read.
     *
     * No request fields are necessary.
     *
     * On success, the response will be 204 No Content with an empty body.
     * @param groupId ID
     * @param topicId ID
     * @returns any success
     * @throws ApiError
     */
    public markTopicAsReadGroups(
        groupId: string,
        topicId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/read',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * Mark topic as unread
     * Mark the initial text of the discussion topic as unread.
     *
     * No request fields are necessary.
     *
     * On success, the response will be 204 No Content with an empty body.
     * @param groupId ID
     * @param topicId ID
     * @returns any success
     * @throws ApiError
     */
    public markTopicAsUnreadGroups(
        groupId: string,
        topicId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/read',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * Mark all entries as read
     * Mark the discussion topic and all its entries as read.
     *
     * No request fields are necessary.
     *
     * On success, the response will be 204 No Content with an empty body.
     * @param groupId ID
     * @param topicId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public markAllEntriesAsReadGroups(
        groupId: string,
        topicId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/read_all',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Mark all entries as unread
     * Mark the discussion topic and all its entries as unread.
     *
     * No request fields are necessary.
     *
     * On success, the response will be 204 No Content with an empty body.
     * @param groupId ID
     * @param topicId ID
     * @param forcedReadState A boolean value to set all of the entries' forced_read_state. No change is
     * made if this argument is not specified.
     * @returns any success
     * @throws ApiError
     */
    public markAllEntriesAsUnreadGroups(
        groupId: string,
        topicId: string,
        forcedReadState?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/read_all',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
            },
            query: {
                'forced_read_state': forcedReadState,
            },
        });
    }

    /**
     * List entries
     * Retrieve a paginated list of discussion entries, given a list of ids.
     *
     * May require (depending on the topic) that the user has posted in the topic.
     * If it is required, and the user has not posted, will respond with a 403
     * Forbidden status and the body 'require_initial_post'.
     * @param groupId ID
     * @param topicId ID
     * @param ids A list of entry ids to retrieve. Entries will be returned in id order,
     * smallest id first.
     * @returns any success
     * @throws ApiError
     */
    public listEntriesGroups(
        groupId: string,
        topicId: string,
        ids?: Array<string>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/entry_list',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
            },
            query: {
                'ids': ids,
            },
        });
    }

    /**
     * Reorder pinned topics
     * Puts the pinned discussion topics in the specified order.
     * All pinned topics should be included.
     * @param groupId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public reorderPinnedTopicsGroups(
        groupId: string,
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/groups/{group_id}/discussion_topics/reorder',
            path: {
                'group_id': groupId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Duplicate discussion topic
     * Duplicate a discussion topic according to context (Course/Group)
     * @param courseId ID
     * @param topicId ID
     * @returns DiscussionTopic success
     * @throws ApiError
     */
    public duplicateDiscussionTopicCourses(
        courseId: string,
        topicId: string,
    ): CancelablePromise<DiscussionTopic> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/duplicate',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * List entry replies
     * Retrieve the (paginated) replies to a top-level entry in a discussion
     * topic.
     *
     * May require (depending on the topic) that the user has posted in the topic.
     * If it is required, and the user has not posted, will respond with a 403
     * Forbidden status and the body 'require_initial_post'.
     *
     * Ordering of returned entries is newest-first by creation timestamp.
     * @param groupId ID
     * @param topicId ID
     * @param entryId ID
     * @returns any success
     * @throws ApiError
     */
    public listEntryRepliesGroups(
        groupId: string,
        topicId: string,
        entryId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
                'entry_id': entryId,
            },
        });
    }

    /**
     * Post a reply
     * Add a reply to an entry in a discussion topic. Returns a json
     * representation of the created reply (see documentation for 'replies'
     * method) on success.
     *
     * May require (depending on the topic) that the user has posted in the topic.
     * If it is required, and the user has not posted, will respond with a 403
     * Forbidden status and the body 'require_initial_post'.
     * @param groupId ID
     * @param topicId ID
     * @param entryId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public postReplyGroups(
        groupId: string,
        topicId: string,
        entryId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
                'entry_id': entryId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Mark all entries as read
     * Mark the discussion topic and all its entries as read.
     *
     * No request fields are necessary.
     *
     * On success, the response will be 204 No Content with an empty body.
     * @param courseId ID
     * @param topicId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public markAllEntriesAsReadCourses(
        courseId: string,
        topicId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/read_all',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Mark all entries as unread
     * Mark the discussion topic and all its entries as unread.
     *
     * No request fields are necessary.
     *
     * On success, the response will be 204 No Content with an empty body.
     * @param courseId ID
     * @param topicId ID
     * @param forcedReadState A boolean value to set all of the entries' forced_read_state. No change is
     * made if this argument is not specified.
     * @returns any success
     * @throws ApiError
     */
    public markAllEntriesAsUnreadCourses(
        courseId: string,
        topicId: string,
        forcedReadState?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/read_all',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
            },
            query: {
                'forced_read_state': forcedReadState,
            },
        });
    }

    /**
     * List topic entries
     * Retrieve the (paginated) top-level entries in a discussion topic.
     *
     * May require (depending on the topic) that the user has posted in the topic.
     * If it is required, and the user has not posted, will respond with a 403
     * Forbidden status and the body 'require_initial_post'.
     *
     * Will include the 10 most recent replies, if any, for each entry returned.
     *
     * If the topic is a root topic with children corresponding to groups of a
     * group assignment, entries from those subtopics for which the user belongs
     * to the corresponding group will be returned.
     *
     * Ordering of returned entries is newest-first by posting timestamp (reply
     * activity is ignored).
     * @param courseId ID
     * @param topicId ID
     * @returns any success
     * @throws ApiError
     */
    public listTopicEntriesCourses(
        courseId: string,
        topicId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/entries',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * Post an entry
     * Create a new entry in a discussion topic. Returns a json representation of
     * the created entry (see documentation for 'entries' method) on success.
     * @param courseId ID
     * @param topicId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public postEntryCourses(
        courseId: string,
        topicId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/entries',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List discussion topics
     * Returns the paginated list of discussion topics for this course or group.
     * @param courseId ID
     * @param include If "all_dates" is passed, all dates associated with graded discussions'
     * assignments will be included.
     * if "sections" is passed, includes the course sections that are associated
     * with the topic, if the topic is specific to certain sections of the course.
     * If "sections_user_count" is passed, then:
     * (a) If sections were asked for *and* the topic is specific to certain
     * course sections, includes the number of users in each
     * section. (as part of the section json asked for above)
     * (b) Else, includes at the root level the total number of users in the
     * topic's context (group or course) that the topic applies to.
     * If "overrides" is passed, the overrides for the assignment will be included
     * @param orderBy Determines the order of the discussion topic list. Defaults to "position".
     * @param scope Only return discussion topics in the given state(s). Defaults to including
     * all topics. Filtering is done after pagination, so pages
     * may be smaller than requested if topics are filtered.
     * Can pass multiple states as comma separated string.
     * @param onlyAnnouncements Return announcements instead of discussion topics. Defaults to false
     * @param filterBy The state of the discussion topic to return. Currently only supports unread state.
     * @param searchTerm The partial title of the discussion topics to match and return.
     * @param excludeContextModuleLockedTopics For students, exclude topics that are locked by module progression.
     * Defaults to false.
     * @returns DiscussionTopic success
     * @throws ApiError
     */
    public listDiscussionTopicsCourses(
        courseId: string,
        include?: 'all_dates' | 'sections' | 'sections_user_count' | 'overrides',
        orderBy?: 'position' | 'recent_activity' | 'title',
        scope?: 'locked' | 'unlocked' | 'pinned' | 'unpinned',
        onlyAnnouncements?: boolean,
        filterBy?: 'all' | 'unread',
        searchTerm?: string,
        excludeContextModuleLockedTopics?: boolean,
    ): CancelablePromise<Array<DiscussionTopic>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/discussion_topics',
            path: {
                'course_id': courseId,
            },
            query: {
                'include': include,
                'order_by': orderBy,
                'scope': scope,
                'only_announcements': onlyAnnouncements,
                'filter_by': filterBy,
                'search_term': searchTerm,
                'exclude_context_module_locked_topics': excludeContextModuleLockedTopics,
            },
        });
    }

    /**
     * Create a new discussion topic
     * Create an new discussion topic for the course or group.
     * @param courseId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createNewDiscussionTopicCourses(
        courseId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/discussion_topics',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Update an entry
     * Update an existing discussion entry.
     *
     * The entry must have been created by the current user, or the current user
     * must have admin rights to the discussion. If the edit is not allowed, a 401 will be returned.
     * @param groupId ID
     * @param topicId ID
     * @param id ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateEntryGroups(
        groupId: string,
        topicId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{id}',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete an entry
     * Delete a discussion entry.
     *
     * The entry must have been created by the current user, or the current user
     * must have admin rights to the discussion. If the delete is not allowed, a 401 will be returned.
     *
     * The discussion will be marked deleted, and the user_id and message will be cleared out.
     * @param groupId ID
     * @param topicId ID
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public deleteEntryGroups(
        groupId: string,
        topicId: string,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{id}',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
                'id': id,
            },
        });
    }

    /**
     * Subscribe to a topic
     * Subscribe to a topic to receive notifications about new entries
     *
     * On success, the response will be 204 No Content with an empty body
     * @param courseId ID
     * @param topicId ID
     * @returns any success
     * @throws ApiError
     */
    public subscribeToTopicCourses(
        courseId: string,
        topicId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/subscribed',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * Unsubscribe from a topic
     * Unsubscribe from a topic to stop receiving notifications about new entries
     *
     * On success, the response will be 204 No Content with an empty body
     * @param courseId ID
     * @param topicId ID
     * @returns any success
     * @throws ApiError
     */
    public unsubscribeFromTopicCourses(
        courseId: string,
        topicId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/subscribed',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * Reorder pinned topics
     * Puts the pinned discussion topics in the specified order.
     * All pinned topics should be included.
     * @param courseId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public reorderPinnedTopicsCourses(
        courseId: string,
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/discussion_topics/reorder',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get a single topic
     * Returns data on an individual discussion topic. See the List action for the response formatting.
     * @param groupId ID
     * @param topicId ID
     * @param include If "all_dates" is passed, all dates associated with graded discussions'
     * assignments will be included.
     * if "sections" is passed, includes the course sections that are associated
     * with the topic, if the topic is specific to certain sections of the course.
     * If "sections_user_count" is passed, then:
     * (a) If sections were asked for *and* the topic is specific to certain
     * course sections, includes the number of users in each
     * section. (as part of the section json asked for above)
     * (b) Else, includes at the root level the total number of users in the
     * topic's context (group or course) that the topic applies to.
     * If "overrides" is passed, the overrides for the assignment will be included
     * @returns any success
     * @throws ApiError
     */
    public getSingleTopicGroups(
        groupId: string,
        topicId: string,
        include?: 'all_dates' | 'sections' | 'sections_user_count' | 'overrides',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
            },
            query: {
                'include': include,
            },
        });
    }

    /**
     * Update a topic
     * Update an existing discussion topic for the course or group.
     * @param groupId ID
     * @param topicId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateTopicGroups(
        groupId: string,
        topicId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete a topic
     * Deletes the discussion topic. This will also delete the assignment, if it's
     * an assignment discussion.
     * @param groupId ID
     * @param topicId ID
     * @returns any success
     * @throws ApiError
     */
    public deleteTopicGroups(
        groupId: string,
        topicId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * Mark entry as read
     * Mark a discussion entry as read.
     *
     * No request fields are necessary.
     *
     * On success, the response will be 204 No Content with an empty body.
     * @param courseId ID
     * @param topicId ID
     * @param entryId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public markEntryAsReadCourses(
        courseId: string,
        topicId: string,
        entryId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/read',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
                'entry_id': entryId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Mark entry as unread
     * Mark a discussion entry as unread.
     *
     * No request fields are necessary.
     *
     * On success, the response will be 204 No Content with an empty body.
     * @param courseId ID
     * @param topicId ID
     * @param entryId ID
     * @param forcedReadState A boolean value to set the entry's forced_read_state. No change is made if
     * this argument is not specified.
     * @returns any success
     * @throws ApiError
     */
    public markEntryAsUnreadCourses(
        courseId: string,
        topicId: string,
        entryId: string,
        forcedReadState?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/read',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
                'entry_id': entryId,
            },
            query: {
                'forced_read_state': forcedReadState,
            },
        });
    }

    /**
     * Get a single topic
     * Returns data on an individual discussion topic. See the List action for the response formatting.
     * @param courseId ID
     * @param topicId ID
     * @param include If "all_dates" is passed, all dates associated with graded discussions'
     * assignments will be included.
     * if "sections" is passed, includes the course sections that are associated
     * with the topic, if the topic is specific to certain sections of the course.
     * If "sections_user_count" is passed, then:
     * (a) If sections were asked for *and* the topic is specific to certain
     * course sections, includes the number of users in each
     * section. (as part of the section json asked for above)
     * (b) Else, includes at the root level the total number of users in the
     * topic's context (group or course) that the topic applies to.
     * If "overrides" is passed, the overrides for the assignment will be included
     * @returns any success
     * @throws ApiError
     */
    public getSingleTopicCourses(
        courseId: string,
        topicId: string,
        include?: 'all_dates' | 'sections' | 'sections_user_count' | 'overrides',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
            },
            query: {
                'include': include,
            },
        });
    }

    /**
     * Update a topic
     * Update an existing discussion topic for the course or group.
     * @param courseId ID
     * @param topicId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateTopicCourses(
        courseId: string,
        topicId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete a topic
     * Deletes the discussion topic. This will also delete the assignment, if it's
     * an assignment discussion.
     * @param courseId ID
     * @param topicId ID
     * @returns any success
     * @throws ApiError
     */
    public deleteTopicCourses(
        courseId: string,
        topicId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
            },
        });
    }

    /**
     * Rate entry
     * Rate a discussion entry.
     *
     * On success, the response will be 204 No Content with an empty body.
     * @param courseId ID
     * @param topicId ID
     * @param entryId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public rateEntryCourses(
        courseId: string,
        topicId: string,
        entryId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/rating',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
                'entry_id': entryId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Rate entry
     * Rate a discussion entry.
     *
     * On success, the response will be 204 No Content with an empty body.
     * @param groupId ID
     * @param topicId ID
     * @param entryId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public rateEntryGroups(
        groupId: string,
        topicId: string,
        entryId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/rating',
            path: {
                'group_id': groupId,
                'topic_id': topicId,
                'entry_id': entryId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List entry replies
     * Retrieve the (paginated) replies to a top-level entry in a discussion
     * topic.
     *
     * May require (depending on the topic) that the user has posted in the topic.
     * If it is required, and the user has not posted, will respond with a 403
     * Forbidden status and the body 'require_initial_post'.
     *
     * Ordering of returned entries is newest-first by creation timestamp.
     * @param courseId ID
     * @param topicId ID
     * @param entryId ID
     * @returns any success
     * @throws ApiError
     */
    public listEntryRepliesCourses(
        courseId: string,
        topicId: string,
        entryId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
                'entry_id': entryId,
            },
        });
    }

    /**
     * Post a reply
     * Add a reply to an entry in a discussion topic. Returns a json
     * representation of the created reply (see documentation for 'replies'
     * method) on success.
     *
     * May require (depending on the topic) that the user has posted in the topic.
     * If it is required, and the user has not posted, will respond with a 403
     * Forbidden status and the body 'require_initial_post'.
     * @param courseId ID
     * @param topicId ID
     * @param entryId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public postReplyCourses(
        courseId: string,
        topicId: string,
        entryId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies',
            path: {
                'course_id': courseId,
                'topic_id': topicId,
                'entry_id': entryId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
