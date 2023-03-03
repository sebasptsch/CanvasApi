/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FeatureFlag } from './FeatureFlag';

export type Feature = {
    /**
     * The symbolic name of the feature, used in FeatureFlags
     */
    feature?: string;
    /**
     * The user-visible name of the feature
     */
    display_name?: string;
    /**
     * The type of object the feature applies to (RootAccount, Account, Course, or User):
     * * RootAccount features may only be controlled by flags on root accounts.
     * * Account features may be controlled by flags on accounts and their parent accounts.
     * * Course features may be controlled by flags on courses and their parent accounts.
     * * User features may be controlled by flags on users and site admin only.
     */
    applies_to?: string;
    feature_flag?: FeatureFlag;
    /**
     * If true, a feature that is 'allowed' globally will be 'off' by default in root accounts. Otherwise, root accounts inherit the global 'allowed' setting, which allows sub-accounts and courses to turn features on with no root account action.
     */
    root_opt_in?: boolean;
    /**
     * Whether the feature is a feature preview. If true, opting in includes ongoing updates outside the regular release schedule.
     */
    beta?: boolean;
    /**
     * Whether the details of the feature are autoexpanded on page load vs. the user clicking to expand.
     */
    autoexpand?: boolean;
    /**
     * A URL to the release notes describing the feature
     */
    release_notes_url?: string;
};

