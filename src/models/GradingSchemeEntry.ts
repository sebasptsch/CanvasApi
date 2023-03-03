/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GradingSchemeEntry = {
    /**
     * The name for an entry value within a GradingStandard that describes the range of the value
     */
    name?: string;
    /**
     * The value for the name of the entry within a GradingStandard.  The entry represents the lower bound of the range for the entry. This range includes the value up to the next entry in the GradingStandard, or 100 if there is no upper bound. The lowest value will have a lower bound range of 0.
     */
    value?: number;
};

