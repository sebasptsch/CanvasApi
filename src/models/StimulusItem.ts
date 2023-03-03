/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StimulusItem = {
    /**
     * stimulus title
     */
    title?: string;
    /**
     * stimulus content (rich content)
     */
    body?: string;
    /**
     * additional stimulus instructions
     */
    instructions?: string;
    /**
     * optional URL; not visible to students
     */
    source_url?: string;
    /**
     * where the stimulus appears relative to questions ('top' or 'left')
     */
    orientation?: string;
};

