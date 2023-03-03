/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SisImportStatistic } from './SisImportStatistic';

export type SisImportStatistics = {
    /**
     * This is the total number of items that were changed in the sis import. There are a few caveats that can cause this number to not add up to the individual counts. There are some state changes that happen that have no impact to the object. An example would be changing a course from 'created' to 'claimed'. Both of these would be considered an active course, but would increment this counter. In this example the course would not increment the created or restored counters for course statistic.
     */
    total_state_changes?: number;
    Account?: SisImportStatistic;
    EnrollmentTerm?: SisImportStatistic;
    CommunicationChannel?: SisImportStatistic;
    AbstractCourse?: SisImportStatistic;
    Course?: SisImportStatistic;
    CourseSection?: SisImportStatistic;
    Enrollment?: SisImportStatistic;
    GroupCategory?: SisImportStatistic;
    Group?: SisImportStatistic;
    GroupMembership?: SisImportStatistic;
    Pseudonym?: SisImportStatistic;
    UserObserver?: SisImportStatistic;
    AccountUser?: SisImportStatistic;
};

