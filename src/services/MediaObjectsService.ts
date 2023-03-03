/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaObject } from '../models/MediaObject';
import type { MediaTrack } from '../models/MediaTrack';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MediaObjectsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Media Objects
     * Returns media objects created by the user making the request. When
     * using the second version, returns media objects associated with
     * the given course.
     * @param courseId ID
     * @param sort Field to sort on. Default is "title"
     *
     * title:: sorts on user_entered_title if available, title if not.
     *
     * created_at:: sorts on the object's creation time.
     * @param order Sort direction. Default is "asc"
     * @param exclude Array of data to exclude. By excluding "sources" and "tracks",
     * the api will not need to query kaltura, which greatly
     * speeds up its response.
     *
     * sources:: Do not query kaltura for media_sources
     * tracks:: Do not query kaltura for media_tracks
     * @returns MediaObject success
     * @throws ApiError
     */
    public listMediaObjectsCourses(
        courseId: string,
        sort?: 'title' | 'created_at',
        order?: 'asc' | 'desc',
        exclude?: 'sources' | 'tracks',
    ): CancelablePromise<Array<MediaObject>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/courses/{course_id}/media_objects',
            path: {
                'course_id': courseId,
            },
            query: {
                'sort': sort,
                'order': order,
                'exclude': exclude,
            },
        });
    }

    /**
     * List Media Objects
     * Returns media objects created by the user making the request. When
     * using the second version, returns media objects associated with
     * the given course.
     * @param groupId ID
     * @param sort Field to sort on. Default is "title"
     *
     * title:: sorts on user_entered_title if available, title if not.
     *
     * created_at:: sorts on the object's creation time.
     * @param order Sort direction. Default is "asc"
     * @param exclude Array of data to exclude. By excluding "sources" and "tracks",
     * the api will not need to query kaltura, which greatly
     * speeds up its response.
     *
     * sources:: Do not query kaltura for media_sources
     * tracks:: Do not query kaltura for media_tracks
     * @returns MediaObject success
     * @throws ApiError
     */
    public listMediaObjectsGroups(
        groupId: string,
        sort?: 'title' | 'created_at',
        order?: 'asc' | 'desc',
        exclude?: 'sources' | 'tracks',
    ): CancelablePromise<Array<MediaObject>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/groups/{group_id}/media_objects',
            path: {
                'group_id': groupId,
            },
            query: {
                'sort': sort,
                'order': order,
                'exclude': exclude,
            },
        });
    }

    /**
     * Update Media Object
     * @param mediaObjectId ID
     * @param formData
     * @returns any success
     * @throws ApiError
     */
    public updateMediaObject(
        mediaObjectId: string,
        formData?: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/media_objects/{media_object_id}',
            path: {
                'media_object_id': mediaObjectId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * List Media Objects
     * Returns media objects created by the user making the request. When
     * using the second version, returns media objects associated with
     * the given course.
     * @param sort Field to sort on. Default is "title"
     *
     * title:: sorts on user_entered_title if available, title if not.
     *
     * created_at:: sorts on the object's creation time.
     * @param order Sort direction. Default is "asc"
     * @param exclude Array of data to exclude. By excluding "sources" and "tracks",
     * the api will not need to query kaltura, which greatly
     * speeds up its response.
     *
     * sources:: Do not query kaltura for media_sources
     * tracks:: Do not query kaltura for media_tracks
     * @returns MediaObject success
     * @throws ApiError
     */
    public listMediaObjectsMediaObjects(
        sort?: 'title' | 'created_at',
        order?: 'asc' | 'desc',
        exclude?: 'sources' | 'tracks',
    ): CancelablePromise<Array<MediaObject>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/media_objects',
            query: {
                'sort': sort,
                'order': order,
                'exclude': exclude,
            },
        });
    }

    /**
     * List media tracks for a Media Object
     * List the media tracks associated with a media object
     * @param mediaObjectId ID
     * @param include By default, index returns id, locale, kind, media_object_id, and user_id for each of the
     * result MediaTracks. Use include[] to
     * add additional fields. For example include[]=content
     * @returns MediaTrack success
     * @throws ApiError
     */
    public listMediaTracksForMediaObject(
        mediaObjectId: string,
        include?: 'content' | 'webvtt_content' | 'updated_at' | 'created_at',
    ): CancelablePromise<Array<MediaTrack>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/media_objects/{media_object_id}/media_tracks',
            path: {
                'media_object_id': mediaObjectId,
            },
            query: {
                'include': include,
            },
        });
    }

    /**
     * Update Media Tracks
     * Replace the media tracks associated with a media object with
     * the array of tracks provided in the body.
     * Update will
     * delete any existing tracks not listed,
     * leave untouched any tracks with no content field,
     * and update or create tracks with a content field.
     * @param mediaObjectId ID
     * @param formData
     * @returns MediaTrackk success
     * @throws ApiError
     */
    public updateMediaTracks(
        mediaObjectId: string,
        formData?: any,
    ): CancelablePromise<Array<MediaTrack>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/media_objects/{media_object_id}/media_tracks',
            path: {
                'media_object_id': mediaObjectId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
