/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Module } from './Module';
import type { ModuleItemSequenceNode } from './ModuleItemSequenceNode';

export type ModuleItemSequence = {
    /**
     * an array containing one ModuleItemSequenceNode for each appearence of the asset in the module sequence (up to 10 total)
     */
    items?: Array<ModuleItemSequenceNode>;
    /**
     * an array containing each Module referenced above
     */
    modules?: Array<Module>;
};

