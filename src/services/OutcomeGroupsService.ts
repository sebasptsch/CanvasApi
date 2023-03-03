/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OutcomeGroup } from '../models/OutcomeGroup';
import type { OutcomeLink } from '../models/OutcomeLink';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OutcomeGroupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Import an outcome group
     * Creates a new subgroup of the outcome group with the same title and
     * description as the source group, then creates links in that new subgroup to
     * the same outcomes that are linked in the source group. Recurses on the
     * subgroups of the source group, importing them each in turn into the new
     * subgroup.
     *
     * Allows you to copy organizational structure, but does not create copies of
     * the outcomes themselves, only new links.
     *
     * The source group must be either global, from the same context as this
     * outcome group, or from an associated account. The source group cannot be
     * the root outcome group of its context.
     * @param id ID
     * @param formData
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public importOutcomeGroupGlobal(
        id: string,
        formData: any,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/global/outcome_groups/{id}/import',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Create/link an outcome
     * Link an outcome into the outcome group. The outcome to link can either be
     * specified by a PUT to the link URL for a specific outcome (the outcome_id
     * in the PUT URLs) or by supplying the information for a new outcome (title,
     * description, ratings, mastery_points) in a POST to the collection.
     *
     * If linking an existing outcome, the outcome_id must identify an outcome
     * available to this context; i.e. an outcome owned by this group's context,
     * an outcome owned by an associated account, or a global outcome. With
     * outcome_id present, any other parameters (except move_from) are ignored.
     *
     * If defining a new outcome, the outcome is created in the outcome group's
     * context using the provided title, description, ratings, and mastery points;
     * the title is required but all other fields are optional. The new outcome
     * is then linked into the outcome group.
     *
     * If ratings are provided when creating a new outcome, an embedded rubric
     * criterion is included in the new outcome. This criterion's mastery_points
     * default to the maximum points in the highest rating if not specified in the
     * mastery_points parameter. Any ratings lacking a description are given a
     * default of "No description". Any ratings lacking a point value are given a
     * default of 0. If no ratings are provided, the mastery_points parameter is
     * ignored.
     * @param courseId ID
     * @param id ID
     * @param outcomeId The ID of the existing outcome to link.
     * @param formData
     * @returns OutcomeLink success
     * @throws ApiError
     */
    public createLinkOutcomeCoursesOutcomeId(
        courseId: string,
        id: string,
        outcomeId: number,
        formData?: any,
    ): CancelablePromise<OutcomeLink> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/outcome_groups/{id}/outcomes/{outcome_id}',
            path: {
                'course_id': courseId,
                'id': id,
                'outcome_id': outcomeId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Unlink an outcome
     * Unlinking an outcome only deletes the outcome itself if this was the last
     * link to the outcome in any group in any context. Aligned outcomes cannot be
     * deleted; as such, if this is the last link to an aligned outcome, the
     * unlinking will fail.
     * @param courseId ID
     * @param id ID
     * @param outcomeId ID
     * @returns OutcomeLink success
     * @throws ApiError
     */
    public unlinkOutcomeCourses(
        courseId: string,
        id: string,
        outcomeId: string,
    ): CancelablePromise<OutcomeLink> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/outcome_groups/{id}/outcomes/{outcome_id}',
            path: {
                'course_id': courseId,
                'id': id,
                'outcome_id': outcomeId,
            },
        });
    }

    /**
     * Redirect to root outcome group for context
     * Convenience redirect to find the root outcome group for a particular
     * context. Will redirect to the appropriate outcome group's URL.
     * @returns any success
     * @throws ApiError
     */
    public redirectToRootOutcomeGroupForContextGlobal(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/global/root_outcome_group',
        });
    }

    /**
     * List linked outcomes
     * A paginated list of the immediate OutcomeLink children of the outcome group.
     * @param accountId ID
     * @param id ID
     * @param outcomeStyle The detail level of the outcomes. Defaults to "abbrev".
     * Specify "full" for more information.
     * @returns OutcomeLink success
     * @throws ApiError
     */
    public listLinkedOutcomesAccounts(
        accountId: string,
        id: string,
        outcomeStyle?: string,
    ): CancelablePromise<Array<OutcomeLink>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/outcome_groups/{id}/outcomes',
            path: {
                'account_id': accountId,
                'id': id,
            },
            query: {
                'outcome_style': outcomeStyle,
            },
        });
    }

    /**
     * Create/link an outcome
     * Link an outcome into the outcome group. The outcome to link can either be
     * specified by a PUT to the link URL for a specific outcome (the outcome_id
     * in the PUT URLs) or by supplying the information for a new outcome (title,
     * description, ratings, mastery_points) in a POST to the collection.
     *
     * If linking an existing outcome, the outcome_id must identify an outcome
     * available to this context; i.e. an outcome owned by this group's context,
     * an outcome owned by an associated account, or a global outcome. With
     * outcome_id present, any other parameters (except move_from) are ignored.
     *
     * If defining a new outcome, the outcome is created in the outcome group's
     * context using the provided title, description, ratings, and mastery points;
     * the title is required but all other fields are optional. The new outcome
     * is then linked into the outcome group.
     *
     * If ratings are provided when creating a new outcome, an embedded rubric
     * criterion is included in the new outcome. This criterion's mastery_points
     * default to the maximum points in the highest rating if not specified in the
     * mastery_points parameter. Any ratings lacking a description are given a
     * default of "No description". Any ratings lacking a point value are given a
     * default of 0. If no ratings are provided, the mastery_points parameter is
     * ignored.
     * @param accountId ID
     * @param id ID
     * @param formData
     * @returns OutcomeLink success
     * @throws ApiError
     */
    public createLinkOutcomeAccounts(
        accountId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<OutcomeLink> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/accounts/{account_id}/outcome_groups/{id}/outcomes',
            path: {
                'account_id': accountId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List subgroups
     * A paginated list of the immediate OutcomeGroup children of the outcome group.
     * @param courseId ID
     * @param id ID
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public listSubgroupsCourses(
        courseId: string,
        id: string,
    ): CancelablePromise<Array<OutcomeGroup>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/outcome_groups/{id}/subgroups',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

    /**
     * Create a subgroup
     * Creates a new empty subgroup under the outcome group with the given title
     * and description.
     * @param courseId ID
     * @param id ID
     * @param formData
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public createSubgroupCourses(
        courseId: string,
        id: string,
        formData: any,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/outcome_groups/{id}/subgroups',
            path: {
                'course_id': courseId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Redirect to root outcome group for context
     * Convenience redirect to find the root outcome group for a particular
     * context. Will redirect to the appropriate outcome group's URL.
     * @param courseId ID
     * @returns any success
     * @throws ApiError
     */
    public redirectToRootOutcomeGroupForContextCourses(
        courseId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/root_outcome_group',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Get all outcome links for context
     * @param courseId ID
     * @param outcomeStyle The detail level of the outcomes. Defaults to "abbrev".
     * Specify "full" for more information.
     * @param outcomeGroupStyle The detail level of the outcome groups. Defaults to "abbrev".
     * Specify "full" for more information.
     * @returns OutcomeLink success
     * @throws ApiError
     */
    public getAllOutcomeLinksForContextCourses(
        courseId: string,
        outcomeStyle?: string,
        outcomeGroupStyle?: string,
    ): CancelablePromise<Array<OutcomeLink>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/outcome_group_links',
            path: {
                'course_id': courseId,
            },
            query: {
                'outcome_style': outcomeStyle,
                'outcome_group_style': outcomeGroupStyle,
            },
        });
    }

    /**
     * Show an outcome group
     * @param id ID
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public showOutcomeGroupGlobal(
        id: string,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/global/outcome_groups/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update an outcome group
     * Modify an existing outcome group. Fields not provided are left as is;
     * unrecognized fields are ignored.
     *
     * When changing the parent outcome group, the new parent group must belong to
     * the same context as this outcome group, and must not be a descendant of
     * this outcome group (i.e. no cycles allowed).
     * @param id ID
     * @param formData
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public updateOutcomeGroupGlobal(
        id: string,
        formData?: any,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/global/outcome_groups/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete an outcome group
     * Deleting an outcome group deletes descendant outcome groups and outcome
     * links. The linked outcomes themselves are only deleted if all links to the
     * outcome were deleted.
     *
     * Aligned outcomes cannot be deleted; as such, if all remaining links to an
     * aligned outcome are included in this group's descendants, the group
     * deletion will fail.
     * @param id ID
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public deleteOutcomeGroupGlobal(
        id: string,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/global/outcome_groups/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get all outcome links for context
     * @param accountId ID
     * @param outcomeStyle The detail level of the outcomes. Defaults to "abbrev".
     * Specify "full" for more information.
     * @param outcomeGroupStyle The detail level of the outcome groups. Defaults to "abbrev".
     * Specify "full" for more information.
     * @returns OutcomeLink success
     * @throws ApiError
     */
    public getAllOutcomeLinksForContextAccounts(
        accountId: string,
        outcomeStyle?: string,
        outcomeGroupStyle?: string,
    ): CancelablePromise<Array<OutcomeLink>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/outcome_group_links',
            path: {
                'account_id': accountId,
            },
            query: {
                'outcome_style': outcomeStyle,
                'outcome_group_style': outcomeGroupStyle,
            },
        });
    }

    /**
     * Create/link an outcome
     * Link an outcome into the outcome group. The outcome to link can either be
     * specified by a PUT to the link URL for a specific outcome (the outcome_id
     * in the PUT URLs) or by supplying the information for a new outcome (title,
     * description, ratings, mastery_points) in a POST to the collection.
     *
     * If linking an existing outcome, the outcome_id must identify an outcome
     * available to this context; i.e. an outcome owned by this group's context,
     * an outcome owned by an associated account, or a global outcome. With
     * outcome_id present, any other parameters (except move_from) are ignored.
     *
     * If defining a new outcome, the outcome is created in the outcome group's
     * context using the provided title, description, ratings, and mastery points;
     * the title is required but all other fields are optional. The new outcome
     * is then linked into the outcome group.
     *
     * If ratings are provided when creating a new outcome, an embedded rubric
     * criterion is included in the new outcome. This criterion's mastery_points
     * default to the maximum points in the highest rating if not specified in the
     * mastery_points parameter. Any ratings lacking a description are given a
     * default of "No description". Any ratings lacking a point value are given a
     * default of 0. If no ratings are provided, the mastery_points parameter is
     * ignored.
     * @param id ID
     * @param outcomeId The ID of the existing outcome to link.
     * @param formData
     * @returns OutcomeLink success
     * @throws ApiError
     */
    public createLinkOutcomeGlobalOutcomeId(
        id: string,
        outcomeId: number,
        formData?: any,
    ): CancelablePromise<OutcomeLink> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/global/outcome_groups/{id}/outcomes/{outcome_id}',
            path: {
                'id': id,
                'outcome_id': outcomeId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Unlink an outcome
     * Unlinking an outcome only deletes the outcome itself if this was the last
     * link to the outcome in any group in any context. Aligned outcomes cannot be
     * deleted; as such, if this is the last link to an aligned outcome, the
     * unlinking will fail.
     * @param id ID
     * @param outcomeId ID
     * @returns OutcomeLink success
     * @throws ApiError
     */
    public unlinkOutcomeGlobal(
        id: string,
        outcomeId: string,
    ): CancelablePromise<OutcomeLink> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/global/outcome_groups/{id}/outcomes/{outcome_id}',
            path: {
                'id': id,
                'outcome_id': outcomeId,
            },
        });
    }

    /**
     * Create/link an outcome
     * Link an outcome into the outcome group. The outcome to link can either be
     * specified by a PUT to the link URL for a specific outcome (the outcome_id
     * in the PUT URLs) or by supplying the information for a new outcome (title,
     * description, ratings, mastery_points) in a POST to the collection.
     *
     * If linking an existing outcome, the outcome_id must identify an outcome
     * available to this context; i.e. an outcome owned by this group's context,
     * an outcome owned by an associated account, or a global outcome. With
     * outcome_id present, any other parameters (except move_from) are ignored.
     *
     * If defining a new outcome, the outcome is created in the outcome group's
     * context using the provided title, description, ratings, and mastery points;
     * the title is required but all other fields are optional. The new outcome
     * is then linked into the outcome group.
     *
     * If ratings are provided when creating a new outcome, an embedded rubric
     * criterion is included in the new outcome. This criterion's mastery_points
     * default to the maximum points in the highest rating if not specified in the
     * mastery_points parameter. Any ratings lacking a description are given a
     * default of "No description". Any ratings lacking a point value are given a
     * default of 0. If no ratings are provided, the mastery_points parameter is
     * ignored.
     * @param accountId ID
     * @param id ID
     * @param outcomeId The ID of the existing outcome to link.
     * @param formData
     * @returns OutcomeLink success
     * @throws ApiError
     */
    public createLinkOutcomeAccountsOutcomeId(
        accountId: string,
        id: string,
        outcomeId: number,
        formData?: any,
    ): CancelablePromise<OutcomeLink> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/accounts/{account_id}/outcome_groups/{id}/outcomes/{outcome_id}',
            path: {
                'account_id': accountId,
                'id': id,
                'outcome_id': outcomeId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Unlink an outcome
     * Unlinking an outcome only deletes the outcome itself if this was the last
     * link to the outcome in any group in any context. Aligned outcomes cannot be
     * deleted; as such, if this is the last link to an aligned outcome, the
     * unlinking will fail.
     * @param accountId ID
     * @param id ID
     * @param outcomeId ID
     * @returns OutcomeLink success
     * @throws ApiError
     */
    public unlinkOutcomeAccounts(
        accountId: string,
        id: string,
        outcomeId: string,
    ): CancelablePromise<OutcomeLink> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/accounts/{account_id}/outcome_groups/{id}/outcomes/{outcome_id}',
            path: {
                'account_id': accountId,
                'id': id,
                'outcome_id': outcomeId,
            },
        });
    }

    /**
     * Import an outcome group
     * Creates a new subgroup of the outcome group with the same title and
     * description as the source group, then creates links in that new subgroup to
     * the same outcomes that are linked in the source group. Recurses on the
     * subgroups of the source group, importing them each in turn into the new
     * subgroup.
     *
     * Allows you to copy organizational structure, but does not create copies of
     * the outcomes themselves, only new links.
     *
     * The source group must be either global, from the same context as this
     * outcome group, or from an associated account. The source group cannot be
     * the root outcome group of its context.
     * @param accountId ID
     * @param id ID
     * @param formData
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public importOutcomeGroupAccounts(
        accountId: string,
        id: string,
        formData: any,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/accounts/{account_id}/outcome_groups/{id}/import',
            path: {
                'account_id': accountId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get all outcome groups for context
     * @param courseId ID
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public getAllOutcomeGroupsForContextCourses(
        courseId: string,
    ): CancelablePromise<Array<OutcomeGroup>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/outcome_groups',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Show an outcome group
     * @param accountId ID
     * @param id ID
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public showOutcomeGroupAccounts(
        accountId: string,
        id: string,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/outcome_groups/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

    /**
     * Update an outcome group
     * Modify an existing outcome group. Fields not provided are left as is;
     * unrecognized fields are ignored.
     *
     * When changing the parent outcome group, the new parent group must belong to
     * the same context as this outcome group, and must not be a descendant of
     * this outcome group (i.e. no cycles allowed).
     * @param accountId ID
     * @param id ID
     * @param formData
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public updateOutcomeGroupAccounts(
        accountId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/accounts/{account_id}/outcome_groups/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete an outcome group
     * Deleting an outcome group deletes descendant outcome groups and outcome
     * links. The linked outcomes themselves are only deleted if all links to the
     * outcome were deleted.
     *
     * Aligned outcomes cannot be deleted; as such, if all remaining links to an
     * aligned outcome are included in this group's descendants, the group
     * deletion will fail.
     * @param accountId ID
     * @param id ID
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public deleteOutcomeGroupAccounts(
        accountId: string,
        id: string,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/accounts/{account_id}/outcome_groups/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

    /**
     * List subgroups
     * A paginated list of the immediate OutcomeGroup children of the outcome group.
     * @param id ID
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public listSubgroupsGlobal(
        id: string,
    ): CancelablePromise<Array<OutcomeGroup>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/global/outcome_groups/{id}/subgroups',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create a subgroup
     * Creates a new empty subgroup under the outcome group with the given title
     * and description.
     * @param id ID
     * @param formData
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public createSubgroupGlobal(
        id: string,
        formData: any,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/global/outcome_groups/{id}/subgroups',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List subgroups
     * A paginated list of the immediate OutcomeGroup children of the outcome group.
     * @param accountId ID
     * @param id ID
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public listSubgroupsAccounts(
        accountId: string,
        id: string,
    ): CancelablePromise<Array<OutcomeGroup>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/outcome_groups/{id}/subgroups',
            path: {
                'account_id': accountId,
                'id': id,
            },
        });
    }

    /**
     * Create a subgroup
     * Creates a new empty subgroup under the outcome group with the given title
     * and description.
     * @param accountId ID
     * @param id ID
     * @param formData
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public createSubgroupAccounts(
        accountId: string,
        id: string,
        formData: any,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/accounts/{account_id}/outcome_groups/{id}/subgroups',
            path: {
                'account_id': accountId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List linked outcomes
     * A paginated list of the immediate OutcomeLink children of the outcome group.
     * @param courseId ID
     * @param id ID
     * @param outcomeStyle The detail level of the outcomes. Defaults to "abbrev".
     * Specify "full" for more information.
     * @returns OutcomeLink success
     * @throws ApiError
     */
    public listLinkedOutcomesCourses(
        courseId: string,
        id: string,
        outcomeStyle?: string,
    ): CancelablePromise<Array<OutcomeLink>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/outcome_groups/{id}/outcomes',
            path: {
                'course_id': courseId,
                'id': id,
            },
            query: {
                'outcome_style': outcomeStyle,
            },
        });
    }

    /**
     * Create/link an outcome
     * Link an outcome into the outcome group. The outcome to link can either be
     * specified by a PUT to the link URL for a specific outcome (the outcome_id
     * in the PUT URLs) or by supplying the information for a new outcome (title,
     * description, ratings, mastery_points) in a POST to the collection.
     *
     * If linking an existing outcome, the outcome_id must identify an outcome
     * available to this context; i.e. an outcome owned by this group's context,
     * an outcome owned by an associated account, or a global outcome. With
     * outcome_id present, any other parameters (except move_from) are ignored.
     *
     * If defining a new outcome, the outcome is created in the outcome group's
     * context using the provided title, description, ratings, and mastery points;
     * the title is required but all other fields are optional. The new outcome
     * is then linked into the outcome group.
     *
     * If ratings are provided when creating a new outcome, an embedded rubric
     * criterion is included in the new outcome. This criterion's mastery_points
     * default to the maximum points in the highest rating if not specified in the
     * mastery_points parameter. Any ratings lacking a description are given a
     * default of "No description". Any ratings lacking a point value are given a
     * default of 0. If no ratings are provided, the mastery_points parameter is
     * ignored.
     * @param courseId ID
     * @param id ID
     * @param formData
     * @returns OutcomeLink success
     * @throws ApiError
     */
    public createLinkOutcomeCourses(
        courseId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<OutcomeLink> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/outcome_groups/{id}/outcomes',
            path: {
                'course_id': courseId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get all outcome groups for context
     * @param accountId ID
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public getAllOutcomeGroupsForContextAccounts(
        accountId: string,
    ): CancelablePromise<Array<OutcomeGroup>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/outcome_groups',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Show an outcome group
     * @param courseId ID
     * @param id ID
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public showOutcomeGroupCourses(
        courseId: string,
        id: string,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/outcome_groups/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

    /**
     * Update an outcome group
     * Modify an existing outcome group. Fields not provided are left as is;
     * unrecognized fields are ignored.
     *
     * When changing the parent outcome group, the new parent group must belong to
     * the same context as this outcome group, and must not be a descendant of
     * this outcome group (i.e. no cycles allowed).
     * @param courseId ID
     * @param id ID
     * @param formData
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public updateOutcomeGroupCourses(
        courseId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/outcome_groups/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete an outcome group
     * Deleting an outcome group deletes descendant outcome groups and outcome
     * links. The linked outcomes themselves are only deleted if all links to the
     * outcome were deleted.
     *
     * Aligned outcomes cannot be deleted; as such, if all remaining links to an
     * aligned outcome are included in this group's descendants, the group
     * deletion will fail.
     * @param courseId ID
     * @param id ID
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public deleteOutcomeGroupCourses(
        courseId: string,
        id: string,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/outcome_groups/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

    /**
     * Import an outcome group
     * Creates a new subgroup of the outcome group with the same title and
     * description as the source group, then creates links in that new subgroup to
     * the same outcomes that are linked in the source group. Recurses on the
     * subgroups of the source group, importing them each in turn into the new
     * subgroup.
     *
     * Allows you to copy organizational structure, but does not create copies of
     * the outcomes themselves, only new links.
     *
     * The source group must be either global, from the same context as this
     * outcome group, or from an associated account. The source group cannot be
     * the root outcome group of its context.
     * @param courseId ID
     * @param id ID
     * @param formData
     * @returns OutcomeGroup success
     * @throws ApiError
     */
    public importOutcomeGroupCourses(
        courseId: string,
        id: string,
        formData: any,
    ): CancelablePromise<OutcomeGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/outcome_groups/{id}/import',
            path: {
                'course_id': courseId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List linked outcomes
     * A paginated list of the immediate OutcomeLink children of the outcome group.
     * @param id ID
     * @param outcomeStyle The detail level of the outcomes. Defaults to "abbrev".
     * Specify "full" for more information.
     * @returns OutcomeLink success
     * @throws ApiError
     */
    public listLinkedOutcomesGlobal(
        id: string,
        outcomeStyle?: string,
    ): CancelablePromise<Array<OutcomeLink>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/global/outcome_groups/{id}/outcomes',
            path: {
                'id': id,
            },
            query: {
                'outcome_style': outcomeStyle,
            },
        });
    }

    /**
     * Create/link an outcome
     * Link an outcome into the outcome group. The outcome to link can either be
     * specified by a PUT to the link URL for a specific outcome (the outcome_id
     * in the PUT URLs) or by supplying the information for a new outcome (title,
     * description, ratings, mastery_points) in a POST to the collection.
     *
     * If linking an existing outcome, the outcome_id must identify an outcome
     * available to this context; i.e. an outcome owned by this group's context,
     * an outcome owned by an associated account, or a global outcome. With
     * outcome_id present, any other parameters (except move_from) are ignored.
     *
     * If defining a new outcome, the outcome is created in the outcome group's
     * context using the provided title, description, ratings, and mastery points;
     * the title is required but all other fields are optional. The new outcome
     * is then linked into the outcome group.
     *
     * If ratings are provided when creating a new outcome, an embedded rubric
     * criterion is included in the new outcome. This criterion's mastery_points
     * default to the maximum points in the highest rating if not specified in the
     * mastery_points parameter. Any ratings lacking a description are given a
     * default of "No description". Any ratings lacking a point value are given a
     * default of 0. If no ratings are provided, the mastery_points parameter is
     * ignored.
     * @param id ID
     * @param formData
     * @returns OutcomeLink success
     * @throws ApiError
     */
    public createLinkOutcomeGlobal(
        id: string,
        formData?: any,
    ): CancelablePromise<OutcomeLink> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/global/outcome_groups/{id}/outcomes',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Redirect to root outcome group for context
     * Convenience redirect to find the root outcome group for a particular
     * context. Will redirect to the appropriate outcome group's URL.
     * @param accountId ID
     * @returns any success
     * @throws ApiError
     */
    public redirectToRootOutcomeGroupForContextAccounts(
        accountId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/root_outcome_group',
            path: {
                'account_id': accountId,
            },
        });
    }

}
