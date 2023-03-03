/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewQuiz } from '../models/NewQuiz';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NewQuizzesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List new quizzes
     * Get a list of new quizzes.
     * @param courseId ID
     * @returns NewQuiz success
     * @throws ApiError
     */
    public listNewQuizzes(
        courseId: string,
    ): CancelablePromise<Array<NewQuiz>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quiz/v1/courses/{course_id}/quizzes',
            path: {
                'course_id': courseId,
            },
        });
    }

    /**
     * Create a new quiz
     * Create a new quiz for the course.
     * @param courseId no description
     * @param formData
     * @returns NewQuiz success
     * @throws ApiError
     */
    public createNewQuiz(
        courseId: number,
        formData: any,
    ): CancelablePromise<NewQuiz> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/quiz/v1/courses/{course_id}/quizzes',
            path: {
                'course_id': courseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List quiz items
     * Get a list of items in a new quiz.
     * @param courseId ID
     * @param assignmentId ID
     * @returns any success
     * @throws ApiError
     */
    public listQuizItems(
        courseId: string,
        assignmentId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
            },
        });
    }

    /**
     * Create a quiz item
     * Create a quiz item in a new quiz.
     * @param courseId ID
     * @param assignmentId ID
     * @returns any success
     * @throws ApiError
     */
    public createQuizItem(
        courseId: string,
        assignmentId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
            },
        });
    }

    /**
     * Get a new quiz
     * Get details about a single new quiz.
     * @param courseId no description
     * @param assignmentId The id of the assignment associated with the quiz.
     * @returns NewQuiz success
     * @throws ApiError
     */
    public getNewQuiz(
        courseId: number,
        assignmentId: number,
    ): CancelablePromise<NewQuiz> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quiz/v1/courses/{course_id}/quizzes/{assignment_id}',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
            },
        });
    }

    /**
     * Delete a new quiz
     * Delete a single new quiz.
     * @param courseId no description
     * @param assignmentId The id of the assignment associated with the quiz.
     * @returns NewQuiz success
     * @throws ApiError
     */
    public deleteNewQuiz(
        courseId: number,
        assignmentId: number,
    ): CancelablePromise<NewQuiz> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/quiz/v1/courses/{course_id}/quizzes/{assignment_id}',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
            },
        });
    }

    /**
     * Update a single quiz
     * Update a single quiz for the course.
     * @param courseId no description
     * @param assignmentId The id of the assignment associated with the quiz.
     * @param formData
     * @returns NewQuiz success
     * @throws ApiError
     */
    public updateSingleQuiz(
        courseId: number,
        assignmentId: number,
        formData: any,
    ): CancelablePromise<NewQuiz> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/quiz/v1/courses/{course_id}/quizzes/{assignment_id}',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get a quiz item
     * Get details about a single item in a new quiz.
     * @param courseId ID
     * @param assignmentId ID
     * @param itemId ID
     * @returns any success
     * @throws ApiError
     */
    public getQuizItem(
        courseId: string,
        assignmentId: string,
        itemId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id}',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
                'item_id': itemId,
            },
        });
    }

    /**
     * Delete a quiz item
     * Delete a single quiz item in a new quiz.
     * @param courseId ID
     * @param assignmentId ID
     * @param itemId ID
     * @returns any success
     * @throws ApiError
     */
    public deleteQuizItem(
        courseId: string,
        assignmentId: string,
        itemId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id}',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
                'item_id': itemId,
            },
        });
    }

    /**
     * Update a quiz item
     * Update a single quiz item in a new quiz.
     * @param courseId ID
     * @param assignmentId ID
     * @param itemId ID
     * @returns any success
     * @throws ApiError
     */
    public updateQuizItem(
        courseId: string,
        assignmentId: string,
        itemId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id}',
            path: {
                'course_id': courseId,
                'assignment_id': assignmentId,
                'item_id': itemId,
            },
        });
    }

}
