/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class QuizSubmissionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all quiz submissions.
     * Get a list of all submissions for this quiz. Users who can view or manage
     * grades for a course will have submissions from multiple users returned. A
     * user who can only submit will have only their own submissions returned. When
     * a user has an in-progress submission, only that submission is returned. When
     * there isn't an in-progress quiz_submission, all completed submissions,
     * including previous attempts, are returned.
     *
     * <b>200 OK</b> response code is returned if the request was successful.
     * @param courseId ID
     * @param quizId ID
     * @param include Associations to include with the quiz submission.
     * @returns any success
     * @throws ApiError
     */
    public getAllQuizSubmissions(
        courseId: string,
        quizId: string,
        include?: 'submission' | 'quiz' | 'user',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/submissions',
            path: {
                'course_id': courseId,
                'quiz_id': quizId,
            },
            query: {
                'include': include,
            },
        });
    }

    /**
     * Create the quiz submission (start a quiz-taking session)
     * Start taking a Quiz by creating a QuizSubmission which you can use to answer
     * questions and submit your answers.
     *
     * <b>Responses</b>
     *
     * * <b>200 OK</b> if the request was successful
     * * <b>400 Bad Request</b> if the quiz is locked
     * * <b>403 Forbidden</b> if an invalid access code is specified
     * * <b>403 Forbidden</b> if the Quiz's IP filter restriction does not pass
     * * <b>409 Conflict</b> if a QuizSubmission already exists for this user and quiz
     * @param courseId ID
     * @param quizId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public createQuizSubmissionStartQuizTakingSession(
        courseId: string,
        quizId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/submissions',
            path: {
                'course_id': courseId,
                'quiz_id': quizId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get the quiz submission.
     * Get the submission for this quiz for the current user.
     *
     * <b>200 OK</b> response code is returned if the request was successful.
     * @param courseId ID
     * @param quizId ID
     * @param include Associations to include with the quiz submission.
     * @returns any success
     * @throws ApiError
     */
    public getQuizSubmission(
        courseId: string,
        quizId: string,
        include?: 'submission' | 'quiz' | 'user',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/submission',
            path: {
                'course_id': courseId,
                'quiz_id': quizId,
            },
            query: {
                'include': include,
            },
        });
    }

    /**
     * Get a single quiz submission.
     * Get a single quiz submission.
     *
     * <b>200 OK</b> response code is returned if the request was successful.
     * @param courseId ID
     * @param quizId ID
     * @param id ID
     * @param include Associations to include with the quiz submission.
     * @returns any success
     * @throws ApiError
     */
    public getSingleQuizSubmission(
        courseId: string,
        quizId: string,
        id: string,
        include?: 'submission' | 'quiz' | 'user',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}',
            path: {
                'course_id': courseId,
                'quiz_id': quizId,
                'id': id,
            },
            query: {
                'include': include,
            },
        });
    }

    /**
     * Update student question scores and comments.
     * Update the amount of points a student has scored for questions they've
     * answered, provide comments for the student about their answer(s), or simply
     * fudge the total score by a specific amount of points.
     *
     * <b>Responses</b>
     *
     * * <b>200 OK</b> if the request was successful
     * * <b>403 Forbidden</b> if you are not a teacher in this course
     * * <b>400 Bad Request</b> if the attempt parameter is missing or invalid
     * * <b>400 Bad Request</b> if the specified QS attempt is not yet complete
     * @param courseId ID
     * @param quizId ID
     * @param id ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateStudentQuestionScoresAndComments(
        courseId: string,
        quizId: string,
        id: string,
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}',
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
     * Complete the quiz submission (turn it in).
     * Complete the quiz submission by marking it as complete and grading it. When
     * the quiz submission has been marked as complete, no further modifications
     * will be allowed.
     *
     * <b>Responses</b>
     *
     * * <b>200 OK</b> if the request was successful
     * * <b>403 Forbidden</b> if an invalid access code is specified
     * * <b>403 Forbidden</b> if the Quiz's IP filter restriction does not pass
     * * <b>403 Forbidden</b> if an invalid token is specified
     * * <b>400 Bad Request</b> if the QS is already complete
     * * <b>400 Bad Request</b> if the attempt parameter is missing
     * * <b>400 Bad Request</b> if the attempt parameter is not the latest attempt
     * @param courseId ID
     * @param quizId ID
     * @param id ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public completeQuizSubmissionTurnItIn(
        courseId: string,
        quizId: string,
        id: string,
        formData: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/complete',
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
     * Get current quiz submission times.
     * Get the current timing data for the quiz attempt, both the end_at timestamp
     * and the time_left parameter.
     *
     * <b>Responses</b>
     *
     * * <b>200 OK</b> if the request was successful
     * @param courseId ID
     * @param quizId ID
     * @param id ID
     * @returns any success
     * @throws ApiError
     */
    public getCurrentQuizSubmissionTimes(
        courseId: string,
        quizId: string,
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/time',
            path: {
                'course_id': courseId,
                'quiz_id': quizId,
                'id': id,
            },
        });
    }

}
