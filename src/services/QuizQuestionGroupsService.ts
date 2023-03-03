/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuizGroup } from '../models/QuizGroup';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class QuizQuestionGroupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a question group
     * Create a new question group for this quiz
     *
     * <b>201 Created</b> response code is returned if the creation was successful.
     * @param courseId ID
     * @param quizId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createQuestionGroup(
        courseId: string,
        quizId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/groups',
            path: {
                'course_id': courseId,
                'quiz_id': quizId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get a single quiz group
     * Returns details of the quiz group with the given id.
     * @param courseId ID
     * @param quizId ID
     * @param id ID
     * @returns QuizGroup success
     * @throws ApiError
     */
    public getSingleQuizGroup(
        courseId: string,
        quizId: string,
        id: string,
    ): CancelablePromise<QuizGroup> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}',
            path: {
                'course_id': courseId,
                'quiz_id': quizId,
                'id': id,
            },
        });
    }

    /**
     * Update a question group
     * Update a question group
     * @param courseId ID
     * @param quizId ID
     * @param id ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateQuestionGroup(
        courseId: string,
        quizId: string,
        id: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}',
            path: {
                'course_id': courseId,
                'quiz_id': quizId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete a question group
     * Delete a question group
     *
     * <b>204 No Content<b> response code is returned if the deletion was successful.
     * @param courseId ID
     * @param quizId ID
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public deleteQuestionGroup(
        courseId: string,
        quizId: string,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}',
            path: {
                'course_id': courseId,
                'quiz_id': quizId,
                'id': id,
            },
        });
    }

    /**
     * Reorder question groups
     * Change the order of the quiz questions within the group
     *
     * <b>204 No Content<b> response code is returned if the reorder was successful.
     * @param courseId ID
     * @param quizId ID
     * @param id ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public reorderQuestionGroups(
        courseId: string,
        quizId: string,
        id: string,
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}/reorder',
            path: {
                'course_id': courseId,
                'quiz_id': quizId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
