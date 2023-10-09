/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Conversation } from "../models/Conversation";
import type { Progress } from "../models/Progress";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class ConversationsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Delete a message
   * Delete messages from this conversation. Note that this only affects this
   * user's view of the conversation. If all messages are deleted, the
   * conversation will be as well (equivalent to DELETE)
   * @param id ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public deleteMessage(id: string, formData: any): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/conversations/{id}/remove_messages",
      path: {
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Mark all as read
   * Mark all conversations as read.
   * @returns any success
   * @throws ApiError
   */
  public markAllAsRead(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/conversations/mark_all_as_read",
    });
  }

  /**
   * Add recipients
   * Add recipients to an existing group conversation. Response is similar to
   * the GET/show action, except that only includes the
   * latest message (e.g. "joe was added to the conversation by bob")
   * @param id ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public addRecipients(id: string, formData: any): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/conversations/{id}/add_recipients",
      path: {
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Add a message
   * Add a message to an existing conversation. Response is similar to the
   * GET/show action, except that only includes the
   * latest message (i.e. what we just sent)
   *
   * An array of user ids. Defaults to all of the current conversation
   * recipients. To explicitly send a message to no other recipients,
   * this array should consist of the logged-in user id.
   *
   * An array of message ids from this conversation to send to recipients
   * of the new message. Recipients who already had a copy of included
   * messages will not be affected.
   * @param id ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public addMessage(id: string, formData: any): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/conversations/{id}/add_message",
      path: {
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * List conversations
   * Returns the paginated list of conversations for the current user, most
   * recent ones first.
   * @param scope When set, only return conversations of the specified type. For example,
   * set to "unread" to return only conversations that haven't been read.
   * The default behavior is to return all non-archived conversations (i.e.
   * read and unread).
   * @param filter When set, only return conversations for the specified courses, groups
   * or users. The id should be prefixed with its type, e.g. "user_123" or
   * "course_456". Can be an array (by setting "filter[]") or single value
   * (by setting "filter")
   * @param filterMode When filter[] contains multiple filters, combine them with this mode,
   * filtering conversations that at have at least all of the contexts ("and")
   * or at least one of the contexts ("or")
   * @param interleaveSubmissions (Obsolete) Submissions are no
   * longer linked to conversations. This parameter is ignored.
   * @param includeAllConversationIds Default is false. If true,
   * the top-level element of the response will be an object rather than
   * an array, and will have the keys "conversations" which will contain the
   * paged conversation data, and "conversation_ids" which will contain the
   * ids of all conversations under this scope/filter in the same order.
   * @param include "participant_avatars":: Optionally include an "avatar_url" key for each user participanting in the conversation
   * @returns Conversation success
   * @throws ApiError
   */
  public listConversations(
    scope?: "unread" | "starred" | "archived",
    filter?: Array<string>,
    filterMode?: "and" | "or" | "default or",
    interleaveSubmissions?: boolean,
    includeAllConversationIds?: boolean,
    include?: "participant_avatars",
  ): CancelablePromise<Array<Conversation>> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/conversations",
      query: {
        scope: scope,
        filter: filter,
        filter_mode: filterMode,
        interleave_submissions: interleaveSubmissions,
        include_all_conversation_ids: includeAllConversationIds,
        include: include,
      },
    });
  }

  /**
   * Batch update conversations
   * Perform a change on a set of conversations. Operates asynchronously; use the {api:ProgressController#show progress endpoint}
   * to query the status of an operation.
   * @param formData
   * @returns Progress success
   * @throws ApiError
   */
  public batchUpdateConversations(formData: any): CancelablePromise<Progress> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/conversations",
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Create a conversation
   * Create a new conversation with one or more recipients. If there is already
   * an existing private conversation with the given recipients, it will be
   * reused.
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public createConversation(formData: any): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/conversations",
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Get running batches
   * Returns any currently running conversation batches for the current user.
   * Conversation batches are created when a bulk private message is sent
   * asynchronously (see the mode argument to the {api:ConversationsController#create create API action}).
   * @returns any success
   * @throws ApiError
   */
  public getRunningBatches(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/conversations/batches",
    });
  }

  /**
   * Get a single conversation
   * Returns information for a single conversation for the current user. Response includes all
   * fields that are present in the list/index action as well as messages
   * and extended participant information.
   * @param id ID
   * @param interleaveSubmissions (Obsolete) Submissions are no
   * longer linked to conversations. This parameter is ignored.
   * @param scope Used when generating "visible" in the API response. See the explanation
   * under the {api:ConversationsController#index index API action}
   * @param filter Used when generating "visible" in the API response. See the explanation
   * under the {api:ConversationsController#index index API action}
   * @param filterMode Used when generating "visible" in the API response. See the explanation
   * under the {api:ConversationsController#index index API action}
   * @param autoMarkAsRead Default true. If true, unread
   * conversations will be automatically marked as read. This will default
   * to false in a future API release, so clients should explicitly send
   * true if that is the desired behavior.
   * @returns any success
   * @throws ApiError
   */
  public getSingleConversation(
    id: string,
    interleaveSubmissions?: boolean,
    scope?: "unread" | "starred" | "archived",
    filter?: Array<string>,
    filterMode?: "and" | "or" | "default or",
    autoMarkAsRead?: boolean,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/conversations/{id}",
      path: {
        id: id,
      },
      query: {
        interleave_submissions: interleaveSubmissions,
        scope: scope,
        filter: filter,
        filter_mode: filterMode,
        auto_mark_as_read: autoMarkAsRead,
      },
    });
  }

  /**
   * Edit a conversation
   * Updates attributes for a single conversation.
   * @param id ID
   * @param formData
   * @returns any success
   * @throws ApiError
   */
  public editConversation(id: string, formData?: any): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/v1/conversations/{id}",
      path: {
        id: id,
      },
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * Delete a conversation
   * Delete this conversation and its messages. Note that this only deletes
   * this user's view of the conversation.
   *
   * Response includes same fields as UPDATE action
   * @param id ID
   * @returns any success
   * @throws ApiError
   */
  public deleteConversation(id: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/v1/conversations/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * Unread count
   * Get the number of unread conversations for the current user
   * @returns any success
   * @throws ApiError
   */
  public unreadCount(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/conversations/unread_count",
    });
  }
}
