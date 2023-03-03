/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CourseEventLink } from './CourseEventLink';
import type { datetime } from './datetime';

export type CourseEvent = {
    /**
     * ID of the event.
     */
    id?: string;
    created_at?: datetime;
    /**
     * Course event type The event type defines the type and schema of the event_data object.
     */
    event_type?: string;
    /**
     * Course event data depending on the event type.  This will return an object containing the relevant event data.  An updated event type will return an UpdatedEventData object.
     */
    event_data?: string;
    /**
     * Course event source depending on the event type.  This will return a string containing the source of the event.
     */
    event_source?: string;
    links?: CourseEventLink;
};

