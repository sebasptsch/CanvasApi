/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ScoreService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a Score
     * Create a new Result from the score params. If this is for the first created line_item for a
     * resourceLinkId, or it is a line item that is not attached to a resourceLinkId, then a submission
     * record will be created for the associated assignment when gradingProgress is set to
     * FullyGraded or PendingManual.
     *
     * The submission score will also be updated when a score object is sent with either of those
     * two values for gradingProgress. If a score object is sent with either of FullyGraded or
     * PendingManual as the value for gradingProgress and scoreGiven is missing, the assignment
     * will not be graded. This also supposes the line_item meets the condition to create a submission.
     *
     * A submission comment with an unknown author will be created when the comment value is included.
     * This also supposes the line_item meets the condition to create a submission.
     *
     * It is also possible to submit a file along with this score, which will attach the file to the
     * submission that is created. Files should be formatted as Content Items, with the correct syntax
     * below.
     *
     * Returns a url pointing to the Result. If any files were submitted, also returns the Content Items
     * which were sent in the request, each with a url pointing to the Progress of the file upload.
     * @param courseId ID
     * @param lineItemId ID
     * @param formData
     * @returns resultUrl_String_The_url_to_the_result_that_was_created_ success
     * @throws ApiError
     */
    public createScore(
        courseId: string,
        lineItemId: string,
        formData: any,
    ): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/lti/courses/{course_id}/line_items/{line_item_id}/scores',
            path: {
                'course_id': courseId,
                'line_item_id': lineItemId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
