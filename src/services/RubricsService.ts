/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Rubric } from '../models/Rubric';
import type { RubricAssessment } from '../models/RubricAssessment';
import type { RubricAssociation } from '../models/RubricAssociation';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RubricsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List rubrics
     * Returns the paginated list of active rubrics for the current context.
     * @param courseId ID
     * @returns any success
     * @throws ApiError
     */
    public listRubricsCourses(
        courseId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/rubrics',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Create a single rubric
     * Returns the rubric with the given id.
     *
     * Unfortuantely this endpoint does not return a standard Rubric object,
     * instead it returns a hash that looks like
     * { 'rubric': Rubric, 'rubric_association': RubricAssociation }
     *
     * This may eventually be deprecated in favor of a more standardized return
     * value, but that is not currently planned.
     * @param courseId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createSingleRubric(
        courseId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/rubrics',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Create a single rubric assessment
     * Returns the rubric assessment with the given id.
     * The returned object also provides the information of
     * :ratings, :assessor_name, :related_group_submissions_and_assessments, :artifact
     * @param courseId The id of the course
     * @param rubricAssociationId The id of the object with which this rubric assessment is associated
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createSingleRubricAssessment(
        courseId: number,
        rubricAssociationId: number,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/rubric_associations/{rubric_association_id}/rubric_assessments',
            path: {
                'course_id': courseId,
                'rubric_association_id': rubricAssociationId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Update a RubricAssociation
     * Returns the rubric with the given id.
     * @param courseId ID
     * @param id The id of the RubricAssociation to update
     * @param formData
     * @returns RubricAssociation success
     * @throws ApiError
     */
    public updateRubricassociation(
        courseId: string,
        id: number,
        formData?: any,
    ): CancelablePromise<RubricAssociation> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/rubric_associations/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete a RubricAssociation
     * Delete the RubricAssociation with the given ID
     * @param courseId ID
     * @param id ID
     * @returns RubricAssociation success
     * @throws ApiError
     */
    public deleteRubricassociation(
        courseId: string,
        id: string,
    ): CancelablePromise<RubricAssociation> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/rubric_associations/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

    /**
     * Get a single rubric
     * Returns the rubric with the given id.
     * @param accountId ID
     * @param id ID
     * @param include Related records to include in the response.
     * @param style Applicable only if assessments are being returned. If included, returns either all criteria data associated with the assessment, or just the comments. If not included, both data and comments are omitted.
     * @returns Rubric success
     * @throws ApiError
     */
    public getSingleRubricAccounts(
        accountId: string,
        id: string,
        include?: 'assessments' | 'graded_assessments' | 'peer_assessments' | 'associations' | 'assignment_associations' | 'course_associations' | 'account_associations',
        style?: 'full' | 'comments_only',
    ): CancelablePromise<Rubric> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/rubrics/{id}',
            path: {
                'account_id': accountId,
                'id': id,
            },
            query: {
                'include': include,
                'style': style,
            },
        });
    }

    /**
     * Get a single rubric
     * Returns the rubric with the given id.
     * @param courseId ID
     * @param id ID
     * @param include Related records to include in the response.
     * @param style Applicable only if assessments are being returned. If included, returns either all criteria data associated with the assessment, or just the comments. If not included, both data and comments are omitted.
     * @returns Rubric success
     * @throws ApiError
     */
    public getSingleRubricCourses(
        courseId: string,
        id: string,
        include?: 'assessments' | 'graded_assessments' | 'peer_assessments' | 'associations' | 'assignment_associations' | 'course_associations' | 'account_associations',
        style?: 'full' | 'comments_only',
    ): CancelablePromise<Rubric> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/rubrics/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
            query: {
                'include': include,
                'style': style,
            },
        });
    }

    /**
     * Update a single rubric
     * Returns the rubric with the given id.
     *
     * Unfortuantely this endpoint does not return a standard Rubric object,
     * instead it returns a hash that looks like
     * { 'rubric': Rubric, 'rubric_association': RubricAssociation }
     *
     * This may eventually be deprecated in favor of a more standardized return
     * value, but that is not currently planned.
     * @param courseId ID
     * @param id The id of the rubric
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateSingleRubric(
        courseId: string,
        id: number,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/rubrics/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete a single rubric
     * Deletes a Rubric and removes all RubricAssociations.
     * @param courseId ID
     * @param id ID
     * @returns Rubric success
     * @throws ApiError
     */
    public deleteSingleRubric(
        courseId: string,
        id: string,
    ): CancelablePromise<Rubric> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/rubrics/{id}',
            path: {
                'course_id': courseId,
                'id': id,
            },
        });
    }

    /**
     * Create a RubricAssociation
     * Returns the rubric with the given id.
     * @param courseId ID
     * @param formData
     * @returns RubricAssociation success
     * @throws ApiError
     */
    public createRubricassociation(
        courseId: string,
        formData?: any,
    ): CancelablePromise<RubricAssociation> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/rubric_associations',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Update a single rubric assessment
     * Returns the rubric assessment with the given id.
     * The returned object also provides the information of
     * :ratings, :assessor_name, :related_group_submissions_and_assessments, :artifact
     * @param id The id of the rubric assessment
     * @param courseId The id of the course
     * @param rubricAssociationId The id of the object with which this rubric assessment is associated
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateSingleRubricAssessment(
        id: number,
        courseId: number,
        rubricAssociationId: number,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/rubric_associations/{rubric_association_id}/rubric_assessments/{id}',
            path: {
                'id': id,
                'course_id': courseId,
                'rubric_association_id': rubricAssociationId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete a single rubric assessment
     * Deletes a rubric assessment
     * @param courseId ID
     * @param rubricAssociationId ID
     * @param id ID
     * @returns RubricAssessment success
     * @throws ApiError
     */
    public deleteSingleRubricAssessment(
        courseId: string,
        rubricAssociationId: string,
        id: string,
    ): CancelablePromise<RubricAssessment> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/rubric_associations/{rubric_association_id}/rubric_assessments/{id}',
            path: {
                'course_id': courseId,
                'rubric_association_id': rubricAssociationId,
                'id': id,
            },
        });
    }

    /**
     * List rubrics
     * Returns the paginated list of active rubrics for the current context.
     * @param accountId ID
     * @returns any success
     * @throws ApiError
     */
    public listRubricsAccounts(
        accountId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/accounts/{account_id}/rubrics',
            path: {
                'account_id': accountId,
            },
        });
    }

}
