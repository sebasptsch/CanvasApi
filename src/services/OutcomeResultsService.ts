/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OutcomeResultsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get outcome results
     * Gets the outcome results for users and outcomes in the specified context.
     *
     * used in sLMGB
     * @param courseId ID
     * @param userIds If specified, only the users whose ids are given will be included in the
     * results. SIS ids can be used, prefixed by "sis_user_id:".
     * It is an error to specify an id for a user who is not a student in
     * the context.
     * @param outcomeIds If specified, only the outcomes whose ids are given will be included in the
     * results. it is an error to specify an id for an outcome which is not linked
     * to the context.
     * @param include [String, "alignments"|"outcomes"|"outcomes.alignments"|"outcome_groups"|"outcome_links"|"outcome_paths"|"users"]
     * Specify additional collections to be side loaded with the result.
     * "alignments" includes only the alignments referenced by the returned
     * results.
     * "outcomes.alignments" includes all alignments referenced by outcomes in the
     * context.
     * @param includeHidden If true, results that are hidden from the learning mastery gradebook and student rollup
     * scores will be included
     * @returns any success
     * @throws ApiError
     */
    public getOutcomeResults(
        courseId: string,
        userIds?: Array<number>,
        outcomeIds?: Array<number>,
        include?: Array<string>,
        includeHidden?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/outcome_results',
            path: {
                'course_id': courseId,
            },
            query: {
                'user_ids': userIds,
                'outcome_ids': outcomeIds,
                'include': include,
                'include_hidden': includeHidden,
            },
        });
    }

    /**
     * Get outcome result rollups
     * Gets the outcome rollups for the users and outcomes in the specified
     * context.
     * @param courseId ID
     * @param aggregate If specified, instead of returning one rollup for each user, all the user
     * rollups will be combined into one rollup for the course that will contain
     * the average (or median, see below) rollup score for each outcome.
     * @param aggregateStat If aggregate rollups requested, then this value determines what
     * statistic is used for the aggregate. Defaults to "mean" if this value
     * is not specified.
     * @param userIds If specified, only the users whose ids are given will be included in the
     * results or used in an aggregate result. it is an error to specify an id
     * for a user who is not a student in the context
     * @param outcomeIds If specified, only the outcomes whose ids are given will be included in the
     * results. it is an error to specify an id for an outcome which is not linked
     * to the context.
     * @param include [String, "courses"|"outcomes"|"outcomes.alignments"|"outcome_groups"|"outcome_links"|"outcome_paths"|"users"]
     * Specify additional collections to be side loaded with the result.
     * @param exclude Specify additional values to exclude. "missing_user_rollups" excludes
     * rollups for users without results.
     * @param sortBy If specified, sorts outcome result rollups. "student" sorting will sort
     * by a user's sortable name. "outcome" sorting will sort by the given outcome's
     * rollup score. The latter requires specifying the "sort_outcome_id" parameter.
     * By default, the sort order is ascending.
     * @param sortOutcomeId If outcome sorting requested, then this determines which outcome to use
     * for rollup score sorting.
     * @param sortOrder If sorting requested, then this allows changing the default sort order of
     * ascending to descending.
     * @param addDefaults If defaults are requested, then color and mastery level defaults will be
     * added to outcome ratings in the rollup. This will only take effect if
     * the Account Level Mastery Scales FF is DISABLED
     * @param contributingScores If contributing scores are requested, then each individual outcome score will
     * also include all graded artifacts that contributed to the outcome score
     * @returns any success
     * @throws ApiError
     */
    public getOutcomeResultRollups(
        courseId: string,
        aggregate?: 'course',
        aggregateStat?: 'mean' | 'median',
        userIds?: Array<number>,
        outcomeIds?: Array<number>,
        include?: Array<string>,
        exclude?: 'missing_user_rollups',
        sortBy?: 'student' | 'outcome',
        sortOutcomeId?: number,
        sortOrder?: 'asc' | 'desc',
        addDefaults?: boolean,
        contributingScores?: boolean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/outcome_rollups',
            path: {
                'course_id': courseId,
            },
            query: {
                'aggregate': aggregate,
                'aggregate_stat': aggregateStat,
                'user_ids': userIds,
                'outcome_ids': outcomeIds,
                'include': include,
                'exclude': exclude,
                'sort_by': sortBy,
                'sort_outcome_id': sortOutcomeId,
                'sort_order': sortOrder,
                'add_defaults': addDefaults,
                'contributing_scores': contributingScores,
            },
        });
    }

}
