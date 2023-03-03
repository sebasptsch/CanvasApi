/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BankEntryItem = {
    /**
     * the type of the item. Either 'Item' or 'Stimulus'.
     */
    entry_type?: string;
    /**
     * whether the banked item is archived
     */
    archived?: boolean;
    entry?: any;
};

