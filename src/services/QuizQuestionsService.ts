/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuizQuestion } from '../models/QuizQuestion';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class QuizQuestionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List questions in a quiz or a submission
     * Returns the paginated list of QuizQuestions in this quiz.
     * @param courseId ID
     * @param quizId ID
     * @param quizSubmissionId If specified, the endpoint will return the questions that were presented
     * for that submission. This is useful if the quiz has been modified after
     * the submission was created and the latest quiz version's set of questions
     * does not match the submission's.
     * NOTE: you must specify quiz_submission_attempt as well if you specify this
     * parameter.
     * @param quizSubmissionAttempt The attempt of the submission you want the questions for.
     * @returns QuizQuestion success
     * @throws ApiError
     */
    public listQuestionsInQuizOrSubmission(
        courseId: string,
        quizId: string,
        quizSubmissionId?: number,
        quizSubmissionAttempt?: number,
    ): CancelablePromise<Array<QuizQuestion>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/questions',
            path: {
                'course_id': courseId,
                'quiz_id': quizId,
            },
            query: {
                'quiz_submission_id': quizSubmissionId,
                'quiz_submission_attempt': quizSubmissionAttempt,
            },
        });
    }

    /**
     * Create a single quiz question
     * Create a new quiz question for this quiz
     * @param courseId ID
     * @param quizId ID
     * @param formData
     * @returns QuizQuestion success
     * @throws ApiError
     */
    public createSingleQuizQuestion(
        courseId: string,
        quizId: string,
        formData?: any,
    ): CancelablePromise<QuizQuestion> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/questions',
            path: {
                'course_id': courseId,
                'quiz_id': quizId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get a single quiz question
     * Returns the quiz question with the given id
     * @param courseId ID
     * @param quizId ID
     * @param id The quiz question unique identifier.
     * @returns QuizQuestion success
     * @throws ApiError
     */
    public getSingleQuizQuestion(
        courseId: string,
        quizId: string,
        id: number,
    ): CancelablePromise<QuizQuestion> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id}',
            path: {
                'course_id': courseId,
                'quiz_id': quizId,
                'id': id,
            },
        });
    }

    /**
     * Update an existing quiz question
     * Updates an existing quiz question for this quiz
     * @param courseId ID
     * @param quizId The associated quiz's unique identifier.
     * @param id The quiz question's unique identifier.
     * @param formData
     * @returns QuizQuestion success
     * @throws ApiError
     */
    public updateExistingQuizQuestion(
        courseId: string,
        quizId: number,
        id: number,
        formData?: any,
    ): CancelablePromise<QuizQuestion> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id}',
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
     * Delete a quiz question
     * <b>204 No Content</b> response code is returned if the deletion was successful.
     * @param courseId ID
     * @param quizId The associated quiz's unique identifier
     * @param id The quiz question's unique identifier
     * @returns any success
     * @throws ApiError
     */
    public deleteQuizQuestion(
        courseId: string,
        quizId: number,
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id}',
            path: {
                'course_id': courseId,
                'quiz_id': quizId,
                'id': id,
            },
        });
    }

}
