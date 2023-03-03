/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GradeChangeEvent } from '../models/GradeChangeEvent';
import type { ref } from '../models/ref';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GradeChangeLogService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Query by assignment
     * List grade change events for a given assignment.
     * @param assignmentId ID
     * @param startTime The beginning of the time range from which you want events.
     * @param endTime The end of the time range from which you want events.
     * @returns GradeChangeEvent success
     * @throws ApiError
     */
    public queryByAssignment(
        assignmentId: string,
        startTime?: ref,
        endTime?: ref,
    ): CancelablePromise<Array<GradeChangeEvent>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/audit/grade_change/assignments/{assignment_id}',
            path: {
                'assignment_id': assignmentId,
            },
            query: {
                'start_time': startTime,
                'end_time': endTime,
            },
        });
    }

    /**
     * Query by course
     * List grade change events for a given course.
     * @param courseId ID
     * @param startTime The beginning of the time range from which you want events.
     * @param endTime The end of the time range from which you want events.
     * @returns GradeChangeEvent success
     * @throws ApiError
     */
    public queryByCourse(
        courseId: string,
        startTime?: ref,
        endTime?: ref,
    ): CancelablePromise<Array<GradeChangeEvent>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/audit/grade_change/courses/{course_id}',
            path: {
                'course_id': courseId,
            },
            query: {
                'start_time': startTime,
                'end_time': endTime,
            },
        });
    }

    /**
     * Query by student
     * List grade change events for a given student.
     * @param studentId ID
     * @param startTime The beginning of the time range from which you want events.
     * @param endTime The end of the time range from which you want events.
     * @returns GradeChangeEvent success
     * @throws ApiError
     */
    public queryByStudent(
        studentId: string,
        startTime?: ref,
        endTime?: ref,
    ): CancelablePromise<Array<GradeChangeEvent>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/audit/grade_change/students/{student_id}',
            path: {
                'student_id': studentId,
            },
            query: {
                'start_time': startTime,
                'end_time': endTime,
            },
        });
    }

    /**
     * Query by grader
     * List grade change events for a given grader.
     * @param graderId ID
     * @param startTime The beginning of the time range from which you want events.
     * @param endTime The end of the time range from which you want events.
     * @returns GradeChangeEvent success
     * @throws ApiError
     */
    public queryByGrader(
        graderId: string,
        startTime?: ref,
        endTime?: ref,
    ): CancelablePromise<Array<GradeChangeEvent>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/audit/grade_change/graders/{grader_id}',
            path: {
                'grader_id': graderId,
            },
            query: {
                'start_time': startTime,
                'end_time': endTime,
            },
        });
    }

    /**
     * Advanced query
     * List grade change events satisfying all given parameters. Teachers may query for events in courses they teach.
     * Queries without +course_id+ require account administrator rights.
     *
     * At least one of +course_id+, +assignment_id+, +student_id+, or +grader_id+ must be specified.
     * @param courseId Restrict query to events in the specified course.
     * @param assignmentId Restrict query to the given assignment. If "override" is given, query the course final grade override instead.
     * @param studentId User id of a student to search grading events for.
     * @param graderId User id of a grader to search grading events for.
     * @param startTime The beginning of the time range from which you want events.
     * @param endTime The end of the time range from which you want events.
     * @returns GradeChangeEvent success
     * @throws ApiError
     */
    public advancedQuery(
        courseId?: number,
        assignmentId?: number,
        studentId?: number,
        graderId?: number,
        startTime?: ref,
        endTime?: ref,
    ): CancelablePromise<Array<GradeChangeEvent>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/audit/grade_change',
            query: {
                'course_id': courseId,
                'assignment_id': assignmentId,
                'student_id': studentId,
                'grader_id': graderId,
                'start_time': startTime,
                'end_time': endTime,
            },
        });
    }

}
