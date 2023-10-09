/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Assignment } from "../models/Assignment";
import type { Avatar } from "../models/Avatar";
import type { CourseNickname } from "../models/CourseNickname";
import type { PageView } from "../models/PageView";
import type { Profile } from "../models/Profile";
import type { ref } from "../models/ref";
import type { Submission } from "../models/Submission";
import type { User } from "../models/User";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class UsersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Upload a file
   * Upload a file to the user's personal files section.
   *
   * This API endpoint is the first step in uploading a file to a user's files.
   * See the {file:file_uploads.html File Upload Documentation} for details on
   * the file upload workflow.
   *
   * Note that typically users will only be able to upload files to their
   * own files section. Passing a user_id of +self+ is an easy shortcut
   * to specify the current user.
   * @param userId ID
   * @returns any success
   * @throws ApiError
   */
  public uploadFile(userId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/users/{user_id}/files",
      path: {
        user_id: userId,
      },
    });
  }

  /**
   * Show user details
   * Shows details for user.
   *
   * Also includes an attribute "permissions", a non-comprehensive list of permissions for the user.
   * Example:
   * !!!javascript
   * "permissions": {
   * "can_update_name": true, // Whether the user can update their name.
   * "can_update_avatar": false, // Whether the user can update their avatar.
   * "limit_parent_app_web_access": false // Whether the user can interact with Canvas web from the Canvas Parent app.
   * }
   * @param id ID
   * @param include Array of additional information to include on the user record.
   * "locale", "avatar_url", "permissions", "email", and "effective_locale"
   * will always be returned
   * @returns User success
   * @throws ApiError
   */
  public showUserDetails(
    id: string,
    include?: "uuid" | "last_login",
  ): CancelablePromise<User> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{id}",
      path: {
        id: id,
      },
      query: {
        include: include,
      },
    });
  }

  /**
   * Edit a user
   * Modify an existing user. To modify a user's login, see the documentation for logins.
   * @param id ID
   * @param formData
   * @returns User success
   * @throws ApiError
   */
  public editUser(id: string, formData?: any): CancelablePromise<User> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/{id}",
      path: {
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List counts for todo items
   * Counts of different todo items such as the number of assignments needing grading as well as the number of assignments needing submitting.
   *
   * There is a limit to the number of todo items this endpoint will count.
   * It will only look at the first 100 todo items for the user. If the user has more than 100 todo items this count may not be reliable.
   * The largest reliable number for both counts is 100.
   * @param include "ungraded_quizzes":: Optionally include ungraded quizzes (such as practice quizzes and surveys) in the list.
   * These will be returned under a +quiz+ key instead of an +assignment+ key in response elements.
   * @returns any success
   * @throws ApiError
   */
  public listCountsForTodoItems(
    include?: "ungraded_quizzes",
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/self/todo_item_count",
      query: {
        include: include,
      },
    });
  }

  /**
   * List the activity stream
   * Returns the current user's global activity stream, paginated.
   *
   * There are many types of objects that can be returned in the activity
   * stream. All object types have the same basic set of shared attributes:
   * !!!javascript
   * {
   * 'created_at': '2011-07-13T09:12:00Z',
   * 'updated_at': '2011-07-25T08:52:41Z',
   * 'id': 1234,
   * 'title': 'Stream Item Subject',
   * 'message': 'This is the body text of the activity stream item. It is plain-text, and can be multiple paragraphs.',
   * 'type': 'DiscussionTopic|Conversation|Message|Submission|Conference|Collaboration|AssessmentRequest...',
   * 'read_state': false,
   * 'context_type': 'course', // course|group
   * 'course_id': 1,
   * 'group_id': null,
   * 'html_url': "http://..." // URL to the Canvas web UI for this stream item
   * }
   *
   * In addition, each item type has its own set of attributes available.
   *
   * DiscussionTopic:
   *
   * !!!javascript
   * {
   * 'type': 'DiscussionTopic',
   * 'discussion_topic_id': 1234,
   * 'total_root_discussion_entries': 5,
   * 'require_initial_post': true,
   * 'user_has_posted': true,
   * 'root_discussion_entries': {
   * ...
   * }
   * }
   *
   * For DiscussionTopic, the message is truncated at 4kb.
   *
   * Announcement:
   *
   * !!!javascript
   * {
   * 'type': 'Announcement',
   * 'announcement_id': 1234,
   * 'total_root_discussion_entries': 5,
   * 'require_initial_post': true,
   * 'user_has_posted': null,
   * 'root_discussion_entries': {
   * ...
   * }
   * }
   *
   * For Announcement, the message is truncated at 4kb.
   *
   * Conversation:
   *
   * !!!javascript
   * {
   * 'type': 'Conversation',
   * 'conversation_id': 1234,
   * 'private': false,
   * 'participant_count': 3,
   * }
   *
   * Message:
   *
   * !!!javascript
   * {
   * 'type': 'Message',
   * 'message_id': 1234,
   * 'notification_category': 'Assignment Graded'
   * }
   *
   * Submission:
   *
   * Returns an {api:Submissions:Submission Submission} with its Course and Assignment data.
   *
   * Conference:
   *
   * !!!javascript
   * {
   * 'type': 'Conference',
   * 'web_conference_id': 1234
   * }
   *
   * Collaboration:
   *
   * !!!javascript
   * {
   * 'type': 'Collaboration',
   * 'collaboration_id': 1234
   * }
   *
   * AssessmentRequest:
   *
   * !!!javascript
   * {
   * 'type': 'AssessmentRequest',
   * 'assessment_request_id': 1234
   * }
   * @param onlyActiveCourses If true, will only return objects for courses the user is actively participating in
   * @returns any success
   * @throws ApiError
   */
  public listActivityStreamSelf(
    onlyActiveCourses?: boolean,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/self/activity_stream",
      query: {
        only_active_courses: onlyActiveCourses,
      },
    });
  }

  /**
   * Hide all stream items
   * Hide all stream items for the user
   * @returns any success
   * @throws ApiError
   */
  public hideAllStreamItems(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/users/self/activity_stream",
    });
  }

  /**
   * Activity stream summary
   * Returns a summary of the current user's global activity stream.
   * @param onlyActiveCourses If true, will only return objects for courses the user is actively participating in
   * @returns any success
   * @throws ApiError
   */
  public activityStreamSummary(
    onlyActiveCourses?: boolean,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/self/activity_stream/summary",
      query: {
        only_active_courses: onlyActiveCourses,
      },
    });
  }

  /**
   * Get user profile
   * Returns user profile data, including user id, name, and profile pic.
   *
   * When requesting the profile for the user accessing the API, the user's
   * calendar feed URL and LTI user id will be returned as well.
   * @param userId ID
   * @returns Profile success
   * @throws ApiError
   */
  public getUserProfile(userId: string): CancelablePromise<Profile> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/profile",
      path: {
        user_id: userId,
      },
    });
  }

  /**
   * Merge user into another user
   * Merge a user into another user.
   * To merge users, the caller must have permissions to manage both users. This
   * should be considered irreversible. This will delete the user and move all
   * the data into the destination user.
   *
   * User merge details and caveats:
   * The from_user is the user that was deleted in the user_merge process.
   * The destination_user is the user that remains, that is being split.
   *
   * Avatars:
   * When both users have avatars, only the destination_users avatar will remain.
   * When one user has an avatar, will it will end up on the destination_user.
   *
   * Terms of Use:
   * If either user has accepted terms of use, it will be be left as accepted.
   *
   * Communication Channels:
   * All unique communication channels moved to the destination_user.
   * All notification preferences are moved to the destination_user.
   *
   * Enrollments:
   * All unique enrollments are moved to the destination_user.
   * When there is an enrollment that would end up making it so that a user would
   * be observing themselves, the enrollment is not moved over.
   * Everything that is tied to the from_user at the course level relating to the
   * enrollment is also moved to the destination_user.
   *
   * Submissions:
   * All submissions are moved to the destination_user. If there are enrollments
   * for both users in the same course, we prefer submissions that have grades
   * then submissions that have work in them, and if there are no grades or no
   * work, they are not moved.
   *
   * Other notes:
   * Access Tokens are moved on merge.
   * Conversations are moved on merge.
   * Favorites are moved on merge.
   * Courses will commonly use LTI tools. LTI tools reference the user with IDs
   * that are stored on a user object. Merging users deletes one user and moves
   * all records from the deleted user to the destination_user. These IDs are
   * kept for all enrollments, group_membership, and account_users for the
   * from_user at the time of the merge. When the destination_user launches an
   * LTI tool from a course that used to be the from_user's, it doesn't appear as
   * a new user to the tool provider. Instead it will send the stored ids. The
   * destination_user's LTI IDs remain as they were for the courses that they
   * originally had. Future enrollments for the destination_user will use the IDs
   * that are on the destination_user object. LTI IDs that are kept and tracked
   * per context include lti_context_id, lti_id and uuid. APIs that return the
   * LTI ids will return the one for the context that it is called for, except
   * for the user uuid. The user UUID will display the destination_users uuid,
   * and when getting the uuid from an api that is in a context that was
   * recorded from a merge event, an additional attribute is added as past_uuid.
   *
   * When finding users by SIS ids in different accounts the
   * destination_account_id is required.
   *
   * The account can also be identified by passing the domain in destination_account_id.
   * @param id ID
   * @param destinationAccountId ID
   * @param destinationUserId ID
   * @returns User success
   * @throws ApiError
   */
  public mergeUserIntoAnotherUserAccounts(
    id: string,
    destinationAccountId: string,
    destinationUserId: string,
  ): CancelablePromise<User> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/{id}/merge_into/accounts/{destination_account_id}/users/{destination_user_id}",
      path: {
        id: id,
        destination_account_id: destinationAccountId,
        destination_user_id: destinationUserId,
      },
    });
  }

  /**
   * List Missing Submissions
   * A paginated list of past-due assignments for which the student does not have a submission.
   * The user sending the request must either be the student, an admin or a parent observer using the parent app
   * @param userId the student's ID
   * @param observedUserId Return missing submissions for the given observed user. Must be accompanied by course_ids[].
   * The user making the request must be observing the observed user in all the courses specified by
   * course_ids[].
   * @param include "planner_overrides":: Optionally include the assignment's associated planner override, if it exists, for the current user.
   * These will be returned under a +planner_override+ key
   * "course":: Optionally include the assignments' courses
   * @param filter "submittable":: Only return assignments that the current user can submit (i.e. filter out locked assignments)
   * "current_grading_period":: Only return missing assignments that are in the current grading period
   * @param courseIds Optionally restricts the list of past-due assignments to only those associated with the specified
   * course IDs. Required if observed_user_id is passed.
   * @returns Assignment success
   * @throws ApiError
   */
  public listMissingSubmissions(
    userId: string,
    observedUserId?: string,
    include?: "planner_overrides" | "course",
    filter?: "submittable" | "current_grading_period",
    courseIds?: Array<string>,
  ): CancelablePromise<Array<Assignment>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/missing_submissions",
      path: {
        user_id: userId,
      },
      query: {
        observed_user_id: observedUserId,
        include: include,
        filter: filter,
        course_ids: courseIds,
      },
    });
  }

  /**
   * Get custom colors
   * Returns all custom colors that have been saved for a user.
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public getCustomColors(id: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{id}/colors",
      path: {
        id: id,
      },
    });
  }

  /**
   * Get custom color
   * Returns the custom colors that have been saved for a user for a given context.
   *
   * The asset_string parameter should be in the format 'context_id', for example
   * 'course_42'.
   * @param id ID
   * @param assetString ID
   * @returns any success
   * @throws ApiError
   */
  public getCustomColor(
    id: string,
    assetString: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{id}/colors/{asset_string}",
      path: {
        id: id,
        asset_string: assetString,
      },
    });
  }

  /**
   * Update custom color
   * Updates a custom color for a user for a given context.  This allows
   * colors for the calendar and elsewhere to be customized on a user basis.
   *
   * The asset string parameter should be in the format 'context_id', for example
   * 'course_42'
   * @param id ID
   * @param assetString ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public updateCustomColor(
    id: string,
    assetString: string,
    formData?: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/{id}/colors/{asset_string}",
      path: {
        id: id,
        asset_string: assetString,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Load custom data
   * Load custom user data.
   *
   * Arbitrary JSON data can be stored for a User.  This API call
   * retrieves that data for a (optional) given scope.
   * See {api:UsersController#set_custom_data Store Custom Data} for details and
   * examples.
   *
   * On success, this endpoint returns an object containing the data that was requested.
   *
   * Responds with status code 400 if the namespace parameter, +ns+, is missing or invalid,
   * or if the specified scope does not contain any data.
   * @param userId ID
   * @param ns The namespace from which to retrieve the data.  This should be something other
   * Canvas API apps aren't likely to use, such as a reverse DNS for your organization.
   * @returns any success
   * @throws ApiError
   */
  public loadCustomData(userId: string, ns: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/custom_data",
      path: {
        user_id: userId,
      },
      query: {
        ns: ns,
      },
    });
  }

  /**
   * Store custom data
   * Store arbitrary user data as JSON.
   *
   * Arbitrary JSON data can be stored for a User.
   * A typical scenario would be an external site/service that registers users in Canvas
   * and wants to capture additional info about them.  The part of the URL that follows
   * +/custom_data/+ defines the scope of the request, and it reflects the structure of
   * the JSON data to be stored or retrieved.
   *
   * The value +self+ may be used for +user_id+ to store data associated with the calling user.
   * In order to access another user's custom data, you must be an account administrator with
   * permission to manage users.
   *
   * A namespace parameter, +ns+, is used to prevent custom_data collisions between
   * different apps.  This parameter is required for all custom_data requests.
   *
   * A request with Content-Type multipart/form-data or Content-Type
   * application/x-www-form-urlencoded can only be used to store strings.
   *
   * Example PUT with multipart/form-data data:
   * curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/telephone' \
   * -X PUT \
   * -F 'ns=com.my-organization.canvas-app' \
   * -F 'data=555-1234' \
   * -H 'Authorization: Bearer <token>'
   *
   * Response:
   * !!!javascript
   * {
   * "data": "555-1234"
   * }
   *
   * Subscopes (or, generated scopes) can also be specified by passing values to
   * +data+[+subscope+].
   *
   * Example PUT specifying subscopes:
   * curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/body/measurements' \
   * -X PUT \
   * -F 'ns=com.my-organization.canvas-app' \
   * -F 'data[waist]=32in' \
   * -F 'data[inseam]=34in' \
   * -F 'data[chest]=40in' \
   * -H 'Authorization: Bearer <token>'
   *
   * Response:
   * !!!javascript
   * {
   * "data": {
   * "chest": "40in",
   * "waist": "32in",
   * "inseam": "34in"
   * }
   * }
   *
   * Following such a request, subsets of the stored data to be retrieved directly from a subscope.
   *
   * Example {api:UsersController#get_custom_data GET} from a generated scope
   * curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/body/measurements/chest' \
   * -X GET \
   * -F 'ns=com.my-organization.canvas-app' \
   * -H 'Authorization: Bearer <token>'
   *
   * Response:
   * !!!javascript
   * {
   * "data": "40in"
   * }
   *
   * If you want to store more than just strings (i.e. numbers, arrays, hashes, true, false,
   * and/or null), you must make a request with Content-Type application/json as in the following
   * example.
   *
   * Example PUT with JSON data:
   * curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \
   * -H 'Content-Type: application/json' \
   * -X PUT \
   * -d '{
   * "ns": "com.my-organization.canvas-app",
   * "data": {
   * "a-number": 6.02e23,
   * "a-bool": true,
   * "a-string": "true",
   * "a-hash": {"a": {"b": "ohai"}},
   * "an-array": [1, "two", null, false]
   * }
   * }' \
   * -H 'Authorization: Bearer <token>'
   *
   * Response:
   * !!!javascript
   * {
   * "data": {
   * "a-number": 6.02e+23,
   * "a-bool": true,
   * "a-string": "true",
   * "a-hash": {
   * "a": {
   * "b": "ohai"
   * }
   * },
   * "an-array": [1, "two", null, false]
   * }
   * }
   *
   * If the data is an Object (as it is in the above example), then subsets of the data can
   * be accessed by including the object's (possibly nested) keys in the scope of a GET request.
   *
   * Example {api:UsersController#get_custom_data GET} with a generated scope:
   * curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/a-hash/a/b' \
   * -X GET \
   * -F 'ns=com.my-organization.canvas-app' \
   * -H 'Authorization: Bearer <token>'
   *
   * Response:
   * !!!javascript
   * {
   * "data": "ohai"
   * }
   *
   *
   * On success, this endpoint returns an object containing the data that was stored.
   *
   * Responds with status code 200 if the scope already contained data, and it was overwritten
   * by the data specified in the request.
   *
   * Responds with status code 201 if the scope was previously empty, and the data specified
   * in the request was successfully stored there.
   *
   * Responds with status code 400 if the namespace parameter, +ns+, is missing or invalid, or if
   * the +data+ parameter is missing.
   *
   * Responds with status code 409 if the requested scope caused a conflict and data was not stored.
   * This happens when storing data at the requested scope would cause data at an outer scope
   * to be lost.  e.g., if +/custom_data+ was +{"fashion_app": {"hair": "blonde"}}+, but
   * you tried to +`PUT /custom_data/fashion_app/hair/style -F data=buzz`+, then for the request
   * to succeed,the value of +/custom_data/fashion_app/hair+ would have to become a hash, and its
   * old string value would be lost.  In this situation, an error object is returned with the
   * following format:
   *
   * !!!javascript
   * {
   * "message": "write conflict for custom_data hash",
   * "conflict_scope": "fashion_app/hair",
   * "type_at_conflict": "String",
   * "value_at_conflict": "blonde"
   * }
   * @param userId ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public storeCustomData(
    userId: string,
    formData: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/{user_id}/custom_data",
      path: {
        user_id: userId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete custom data
   * Delete custom user data.
   *
   * Arbitrary JSON data can be stored for a User.  This API call
   * deletes that data for a given scope.  Without a scope, all custom_data is deleted.
   * See {api:UsersController#set_custom_data Store Custom Data} for details and
   * examples of storage and retrieval.
   *
   * As an example, we'll store some data, then delete a subset of it.
   *
   * Example {api:UsersController#set_custom_data PUT} with valid JSON data:
   * curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \
   * -X PUT \
   * -F 'ns=com.my-organization.canvas-app' \
   * -F 'data[fruit][apple]=so tasty' \
   * -F 'data[fruit][kiwi]=a bit sour' \
   * -F 'data[veggies][root][onion]=tear-jerking' \
   * -H 'Authorization: Bearer <token>'
   *
   * Response:
   * !!!javascript
   * {
   * "data": {
   * "fruit": {
   * "apple": "so tasty",
   * "kiwi": "a bit sour"
   * },
   * "veggies": {
   * "root": {
   * "onion": "tear-jerking"
   * }
   * }
   * }
   * }
   *
   * Example DELETE:
   * curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/fruit/kiwi' \
   * -X DELETE \
   * -F 'ns=com.my-organization.canvas-app' \
   * -H 'Authorization: Bearer <token>'
   *
   * Response:
   * !!!javascript
   * {
   * "data": "a bit sour"
   * }
   *
   * Example {api:UsersController#get_custom_data GET} following the above DELETE:
   * curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \
   * -X GET \
   * -F 'ns=com.my-organization.canvas-app' \
   * -H 'Authorization: Bearer <token>'
   *
   * Response:
   * !!!javascript
   * {
   * "data": {
   * "fruit": {
   * "apple": "so tasty"
   * },
   * "veggies": {
   * "root": {
   * "onion": "tear-jerking"
   * }
   * }
   * }
   * }
   *
   * Note that hashes left empty after a DELETE will get removed from the custom_data store.
   * For example, following the previous commands, if we delete /custom_data/veggies/root/onion,
   * then the entire /custom_data/veggies scope will be removed.
   *
   * Example DELETE that empties a parent scope:
   * curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/veggies/root/onion' \
   * -X DELETE \
   * -F 'ns=com.my-organization.canvas-app' \
   * -H 'Authorization: Bearer <token>'
   *
   * Response:
   * !!!javascript
   * {
   * "data": "tear-jerking"
   * }
   *
   * Example {api:UsersController#get_custom_data GET} following the above DELETE:
   * curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \
   * -X GET \
   * -F 'ns=com.my-organization.canvas-app' \
   * -H 'Authorization: Bearer <token>'
   *
   * Response:
   * !!!javascript
   * {
   * "data": {
   * "fruit": {
   * "apple": "so tasty"
   * }
   * }
   * }
   *
   * On success, this endpoint returns an object containing the data that was deleted.
   *
   * Responds with status code 400 if the namespace parameter, +ns+, is missing or invalid,
   * or if the specified scope does not contain any data.
   * @param userId ID
   * @param ns The namespace from which to delete the data.  This should be something other
   * Canvas API apps aren't likely to use, such as a reverse DNS for your organization.
   * @returns any success
   * @throws ApiError
   */
  public deleteCustomData(userId: string, ns: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/users/{user_id}/custom_data",
      path: {
        user_id: userId,
      },
      query: {
        ns: ns,
      },
    });
  }

  /**
   * Get a Pandata Events jwt token and its expiration date
   * Returns a jwt auth and props token that can be used to send events to
   * Pandata.
   *
   * NOTE: This is currently only available to the mobile developer keys.
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public getPandataEventsJwtTokenAndItsExpirationDate(
    formData?: any,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/users/self/pandata_events_token",
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * [DEPRECATED] Self register a user
   * Self register and return a new user and pseudonym for an account.
   *
   * If self-registration is enabled on the account, you can use this
   * endpoint to self register new users.
   * @param accountId ID
   * @param formData
   * @returns User success
   * @throws ApiError
   */
  public deprecatedSelfRegisterUser(
    accountId: string,
    formData: any,
  ): CancelablePromise<User> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/accounts/{account_id}/self_registration",
      path: {
        account_id: accountId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List avatar options
   * A paginated list of the possible user avatar options that can be set with the user update endpoint. The response will be an array of avatar records. If the 'type' field is 'attachment', the record will include all the normal attachment json fields; otherwise it will include only the 'url' and 'display_name' fields. Additionally, all records will include a 'type' field and a 'token' field. The following explains each field in more detail
   * type:: ["gravatar"|"attachment"|"no_pic"] The type of avatar record, for categorization purposes.
   * url:: The url of the avatar
   * token:: A unique representation of the avatar record which can be used to set the avatar with the user update endpoint. Note: this is an internal representation and is subject to change without notice. It should be consumed with this api endpoint and used in the user update endpoint, and should not be constructed by the client.
   * display_name:: A textual description of the avatar record
   * id:: ['attachment' type only] the internal id of the attachment
   * content-type:: ['attachment' type only] the content-type of the attachment
   * filename:: ['attachment' type only] the filename of the attachment
   * size:: ['attachment' type only] the size of the attachment
   * @param userId ID
   * @returns Avatar success
   * @throws ApiError
   */
  public listAvatarOptions(userId: string): CancelablePromise<Array<Avatar>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/avatars",
      path: {
        user_id: userId,
      },
    });
  }

  /**
   * Hide a stream item
   * Hide the given stream item.
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public hideStreamItem(id: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/users/self/activity_stream/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * Terminate all user sessions
   * Terminates all sessions for a user. This includes all browser-based
   * sessions and all access tokens, including manually generated ones.
   * The user can immediately re-authenticate to access Canvas again if
   * they have the current credentials. All integrations will need to
   * be re-authorized.
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public terminateAllUserSessions(id: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/users/{id}/sessions",
      path: {
        id: id,
      },
    });
  }

  /**
   * Get course nickname
   * Returns the nickname for a specific course.
   * @param courseId ID
   * @returns CourseNickname success
   * @throws ApiError
   */
  public getCourseNickname(
    courseId: string,
  ): CancelablePromise<CourseNickname> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/self/course_nicknames/{course_id}",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * Set course nickname
   * Set a nickname for the given course. This will replace the course's name
   * in output of API calls you make subsequently, as well as in selected
   * places in the Canvas web user interface.
   * @param courseId ID
   * @param formData
   * @returns CourseNickname success
   * @throws ApiError
   */
  public setCourseNickname(
    courseId: string,
    formData: any,
  ): CancelablePromise<CourseNickname> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/self/course_nicknames/{course_id}",
      path: {
        course_id: courseId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Remove course nickname
   * Remove the nickname for the given course.
   * Subsequent course API calls will return the actual name for the course.
   * @param courseId ID
   * @returns CourseNickname success
   * @throws ApiError
   */
  public removeCourseNickname(
    courseId: string,
  ): CancelablePromise<CourseNickname> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/users/self/course_nicknames/{course_id}",
      path: {
        course_id: courseId,
      },
    });
  }

  /**
   * List the activity stream
   * Returns the current user's global activity stream, paginated.
   *
   * There are many types of objects that can be returned in the activity
   * stream. All object types have the same basic set of shared attributes:
   * !!!javascript
   * {
   * 'created_at': '2011-07-13T09:12:00Z',
   * 'updated_at': '2011-07-25T08:52:41Z',
   * 'id': 1234,
   * 'title': 'Stream Item Subject',
   * 'message': 'This is the body text of the activity stream item. It is plain-text, and can be multiple paragraphs.',
   * 'type': 'DiscussionTopic|Conversation|Message|Submission|Conference|Collaboration|AssessmentRequest...',
   * 'read_state': false,
   * 'context_type': 'course', // course|group
   * 'course_id': 1,
   * 'group_id': null,
   * 'html_url': "http://..." // URL to the Canvas web UI for this stream item
   * }
   *
   * In addition, each item type has its own set of attributes available.
   *
   * DiscussionTopic:
   *
   * !!!javascript
   * {
   * 'type': 'DiscussionTopic',
   * 'discussion_topic_id': 1234,
   * 'total_root_discussion_entries': 5,
   * 'require_initial_post': true,
   * 'user_has_posted': true,
   * 'root_discussion_entries': {
   * ...
   * }
   * }
   *
   * For DiscussionTopic, the message is truncated at 4kb.
   *
   * Announcement:
   *
   * !!!javascript
   * {
   * 'type': 'Announcement',
   * 'announcement_id': 1234,
   * 'total_root_discussion_entries': 5,
   * 'require_initial_post': true,
   * 'user_has_posted': null,
   * 'root_discussion_entries': {
   * ...
   * }
   * }
   *
   * For Announcement, the message is truncated at 4kb.
   *
   * Conversation:
   *
   * !!!javascript
   * {
   * 'type': 'Conversation',
   * 'conversation_id': 1234,
   * 'private': false,
   * 'participant_count': 3,
   * }
   *
   * Message:
   *
   * !!!javascript
   * {
   * 'type': 'Message',
   * 'message_id': 1234,
   * 'notification_category': 'Assignment Graded'
   * }
   *
   * Submission:
   *
   * Returns an {api:Submissions:Submission Submission} with its Course and Assignment data.
   *
   * Conference:
   *
   * !!!javascript
   * {
   * 'type': 'Conference',
   * 'web_conference_id': 1234
   * }
   *
   * Collaboration:
   *
   * !!!javascript
   * {
   * 'type': 'Collaboration',
   * 'collaboration_id': 1234
   * }
   *
   * AssessmentRequest:
   *
   * !!!javascript
   * {
   * 'type': 'AssessmentRequest',
   * 'assessment_request_id': 1234
   * }
   * @param onlyActiveCourses If true, will only return objects for courses the user is actively participating in
   * @returns any success
   * @throws ApiError
   */
  public listActivityStreamActivityStream(
    onlyActiveCourses?: boolean,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/activity_stream",
      query: {
        only_active_courses: onlyActiveCourses,
      },
    });
  }

  /**
   * Update user settings.
   * Update an existing user's settings.
   * @param id ID
   * @param manualMarkAsRead If true, require user to manually mark discussion posts as read (don't
   * auto-mark as read).
   * @param releaseNotesBadgeDisabled If true, hide the badge for new release notes.
   * @param collapseGlobalNav If true, the user's page loads with the global navigation collapsed
   * @param collapseCourseNav If true, the user's course pages will load with the course navigation
   * collapsed.
   * @param hideDashcardColorOverlays If true, images on course cards will be presented without being tinted
   * to match the course color.
   * @param commentLibrarySuggestionsEnabled If true, suggestions within the comment library will be shown.
   * @param elementaryDashboardDisabled If true, will display the user's preferred class Canvas dashboard
   * view instead of the canvas for elementary view.
   * @returns any success
   * @throws ApiError
   */
  public updateUserSettings(
    id: string,
    manualMarkAsRead?: boolean,
    releaseNotesBadgeDisabled?: boolean,
    collapseGlobalNav?: boolean,
    collapseCourseNav?: boolean,
    hideDashcardColorOverlays?: boolean,
    commentLibrarySuggestionsEnabled?: boolean,
    elementaryDashboardDisabled?: boolean,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{id}/settings",
      path: {
        id: id,
      },
      query: {
        manual_mark_as_read: manualMarkAsRead,
        release_notes_badge_disabled: releaseNotesBadgeDisabled,
        collapse_global_nav: collapseGlobalNav,
        collapse_course_nav: collapseCourseNav,
        hide_dashcard_color_overlays: hideDashcardColorOverlays,
        comment_library_suggestions_enabled: commentLibrarySuggestionsEnabled,
        elementary_dashboard_disabled: elementaryDashboardDisabled,
      },
    });
  }

  /**
   * Split merged users into separate users
   * Merged users cannot be fully restored to their previous state, but this will
   * attempt to split as much as possible to the previous state.
   * To split a merged user, the caller must have permissions to manage all of
   * the users logins. If there are multiple users that have been merged into one
   * user it will split each merge into a separate user.
   * A split can only happen within 180 days of a user merge. A user merge deletes
   * the previous user and may be permanently deleted. In this scenario we create
   * a new user object and proceed to move as much as possible to the new user.
   * The user object will not have preserved the name or settings from the
   * previous user. Some items may have been deleted during a user_merge that
   * cannot be restored, and/or the data has become stale because of other
   * changes to the objects since the time of the user_merge.
   *
   * Split users details and caveats:
   *
   * The from_user is the user that was deleted in the user_merge process.
   * The destination_user is the user that remains, that is being split.
   *
   * Avatars:
   * When both users had avatars, both will be remain.
   * When from_user had an avatar and destination_user did not have an avatar,
   * the destination_user's avatar will be deleted if it still matches what was
   * there are the time of the merge.
   * If the destination_user's avatar was changed at anytime after the merge, it
   * will remain on the destination user.
   * If the from_user had an avatar it will be there after split.
   *
   * Terms of Use:
   * If from_user had not accepted terms of use, they will be prompted again
   * to accept terms of use after the split.
   * If the destination_user had not accepted terms of use, hey will be prompted
   * again to accept terms of use after the split.
   * If neither user had accepted the terms of use, but since the time of the
   * merge had accepted, both will be prompted to accept terms of use.
   * If both had accepted terms of use, this will remain.
   *
   * Communication Channels:
   * All communication channels are restored to what they were prior to the
   * merge. If a communication channel was added after the merge, it will remain
   * on the destination_user.
   * Notification preferences remain with the communication channels.
   *
   * Enrollments:
   * All enrollments from the time of the merge will be moved back to where they
   * were. Enrollments created since the time of the merge that were created by
   * sis_import will go to the user that owns that sis_id used for the import.
   * Other new enrollments will remain on the destination_user.
   * Everything that is tied to the destination_user at the course level relating
   * to an enrollment is moved to the from_user. When both users are in the same
   * course prior to merge this can cause some unexpected items to move.
   *
   * Submissions:
   * Unlike other items tied to a course, submissions are explicitly recorded to
   * avoid problems with grades.
   * All submissions were moved are restored to the spot prior to merge.
   * All submission that were created in a course that was moved in enrollments
   * are moved over to the from_user.
   *
   * Other notes:
   * Access Tokens are moved back on split.
   * Conversations are moved back on split.
   * Favorites that existing at the time of merge are moved back on split.
   * LTI ids are restored to how they were prior to merge.
   * @param id ID
   * @returns User success
   * @throws ApiError
   */
  public splitMergedUsersIntoSeparateUsers(
    id: string,
  ): CancelablePromise<Array<User>> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/users/{id}/split",
      path: {
        id: id,
      },
    });
  }

  /**
   * List the TODO items
   * A paginated list of the current user's list of todo items.
   *
   * There is a limit to the number of items returned.
   *
   * The `ignore` and `ignore_permanently` URLs can be used to update the user's
   * preferences on what items will be displayed.
   * Performing a DELETE request against the `ignore` URL will hide that item
   * from future todo item requests, until the item changes.
   * Performing a DELETE request against the `ignore_permanently` URL will hide
   * that item forever.
   * @param include "ungraded_quizzes":: Optionally include ungraded quizzes (such as practice quizzes and surveys) in the list.
   * These will be returned under a +quiz+ key instead of an +assignment+ key in response elements.
   * @returns any success
   * @throws ApiError
   */
  public listTodoItems(include?: "ungraded_quizzes"): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/self/todo",
      query: {
        include: include,
      },
    });
  }

  /**
   * Get a users most recently graded submissions
   * @param id ID
   * @param include Associations to include with the group
   * @param onlyCurrentEnrollments Returns submissions for only currently active enrollments
   * @param onlyPublishedAssignments Returns submissions for only published assignments
   * @returns Submission success
   * @throws ApiError
   */
  public getUsersMostRecentlyGradedSubmissions(
    id: string,
    include?: "assignment",
    onlyCurrentEnrollments?: boolean,
    onlyPublishedAssignments?: boolean,
  ): CancelablePromise<Array<Submission>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{id}/graded_submissions",
      path: {
        id: id,
      },
      query: {
        include: include,
        only_current_enrollments: onlyCurrentEnrollments,
        only_published_assignments: onlyPublishedAssignments,
      },
    });
  }

  /**
   * Merge user into another user
   * Merge a user into another user.
   * To merge users, the caller must have permissions to manage both users. This
   * should be considered irreversible. This will delete the user and move all
   * the data into the destination user.
   *
   * User merge details and caveats:
   * The from_user is the user that was deleted in the user_merge process.
   * The destination_user is the user that remains, that is being split.
   *
   * Avatars:
   * When both users have avatars, only the destination_users avatar will remain.
   * When one user has an avatar, will it will end up on the destination_user.
   *
   * Terms of Use:
   * If either user has accepted terms of use, it will be be left as accepted.
   *
   * Communication Channels:
   * All unique communication channels moved to the destination_user.
   * All notification preferences are moved to the destination_user.
   *
   * Enrollments:
   * All unique enrollments are moved to the destination_user.
   * When there is an enrollment that would end up making it so that a user would
   * be observing themselves, the enrollment is not moved over.
   * Everything that is tied to the from_user at the course level relating to the
   * enrollment is also moved to the destination_user.
   *
   * Submissions:
   * All submissions are moved to the destination_user. If there are enrollments
   * for both users in the same course, we prefer submissions that have grades
   * then submissions that have work in them, and if there are no grades or no
   * work, they are not moved.
   *
   * Other notes:
   * Access Tokens are moved on merge.
   * Conversations are moved on merge.
   * Favorites are moved on merge.
   * Courses will commonly use LTI tools. LTI tools reference the user with IDs
   * that are stored on a user object. Merging users deletes one user and moves
   * all records from the deleted user to the destination_user. These IDs are
   * kept for all enrollments, group_membership, and account_users for the
   * from_user at the time of the merge. When the destination_user launches an
   * LTI tool from a course that used to be the from_user's, it doesn't appear as
   * a new user to the tool provider. Instead it will send the stored ids. The
   * destination_user's LTI IDs remain as they were for the courses that they
   * originally had. Future enrollments for the destination_user will use the IDs
   * that are on the destination_user object. LTI IDs that are kept and tracked
   * per context include lti_context_id, lti_id and uuid. APIs that return the
   * LTI ids will return the one for the context that it is called for, except
   * for the user uuid. The user UUID will display the destination_users uuid,
   * and when getting the uuid from an api that is in a context that was
   * recorded from a merge event, an additional attribute is added as past_uuid.
   *
   * When finding users by SIS ids in different accounts the
   * destination_account_id is required.
   *
   * The account can also be identified by passing the domain in destination_account_id.
   * @param id ID
   * @param destinationUserId ID
   * @returns User success
   * @throws ApiError
   */
  public mergeUserIntoAnotherUserDestinationUserId(
    id: string,
    destinationUserId: string,
  ): CancelablePromise<User> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/{id}/merge_into/{destination_user_id}",
      path: {
        id: id,
        destination_user_id: destinationUserId,
      },
    });
  }

  /**
   * List course nicknames
   * Returns all course nicknames you have set.
   * @returns CourseNickname success
   * @throws ApiError
   */
  public listCourseNicknames(): CancelablePromise<Array<CourseNickname>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/self/course_nicknames",
    });
  }

  /**
   * Clear course nicknames
   * Remove all stored course nicknames.
   * @returns any success
   * @throws ApiError
   */
  public clearCourseNicknames(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/users/self/course_nicknames",
    });
  }

  /**
   * List upcoming assignments, calendar events
   * A paginated list of the current user's upcoming events.
   * @returns any success
   * @throws ApiError
   */
  public listUpcomingAssignmentsCalendarEvents(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/self/upcoming_events",
    });
  }

  /**
   * List user page views
   * Return a paginated list of the user's page view history in json format,
   * similar to the available CSV download. Page views are returned in
   * descending order, newest to oldest.
   * @param userId ID
   * @param startTime The beginning of the time range from which you want page views.
   * @param endTime The end of the time range from which you want page views.
   * @returns PageView success
   * @throws ApiError
   */
  public listUserPageViews(
    userId: string,
    startTime?: ref,
    endTime?: ref,
  ): CancelablePromise<Array<PageView>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{user_id}/page_views",
      path: {
        user_id: userId,
      },
      query: {
        start_time: startTime,
        end_time: endTime,
      },
    });
  }

  /**
   * List users in account
   * A paginated list of of users associated with this account.
   *
   * @example_request
   * curl https://<canvas>/api/v1/accounts/self/users?search_term=<search value> \
   * -X GET \
   * -H 'Authorization: Bearer <token>'
   * @param accountId ID
   * @param searchTerm The partial name or full ID of the users to match and return in the
   * results list. Must be at least 3 characters.
   *
   * Note that the API will prefer matching on canonical user ID if the ID has
   * a numeric form. It will only search against other fields if non-numeric
   * in form, or if the numeric value doesn't yield any matches. Queries by
   * administrative users will search on SIS ID, Integration ID, login ID,
   * name, or email address
   * @param enrollmentType When set, only return users enrolled with the specified course-level base role.
   * This can be a base role type of 'student', 'teacher',
   * 'ta', 'observer', or 'designer'.
   * @param sort The column to sort results by.
   * @param order The order to sort the given column by.
   * @returns User success
   * @throws ApiError
   */
  public listUsersInAccount(
    accountId: string,
    searchTerm?: string,
    enrollmentType?: string,
    sort?: "username" | "email" | "sis_id" | "integration_id" | "last_login",
    order?: "asc" | "desc",
  ): CancelablePromise<Array<User>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/accounts/{account_id}/users",
      path: {
        account_id: accountId,
      },
      query: {
        search_term: searchTerm,
        enrollment_type: enrollmentType,
        sort: sort,
        order: order,
      },
    });
  }

  /**
   * Create a user
   * Create and return a new user and pseudonym for an account.
   *
   * [DEPRECATED (for self-registration only)] If you don't have the "Modify
   * login details for users" permission, but self-registration is enabled
   * on the account, you can still use this endpoint to register new users.
   * Certain fields will be required, and others will be ignored (see below).
   * @param accountId ID
   * @param formData
   * @returns User success
   * @throws ApiError
   */
  public createUser(accountId: string, formData: any): CancelablePromise<User> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/accounts/{account_id}/users",
      path: {
        account_id: accountId,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get dashboard positions
   * Returns all dashboard positions that have been saved for a user.
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public getDashboardPositions(id: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/users/{id}/dashboard_positions",
      path: {
        id: id,
      },
    });
  }

  /**
   * Update dashboard positions
   * Updates the dashboard positions for a user for a given context.  This allows
   * positions for the dashboard cards and elsewhere to be customized on a per
   * user basis.
   *
   * The asset string parameter should be in the format 'context_id', for example
   * 'course_42'
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public updateDashboardPositions(id: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/users/{id}/dashboard_positions",
      path: {
        id: id,
      },
    });
  }
}
