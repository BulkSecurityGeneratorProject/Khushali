import { BaseEntity } from './../../shared';

export class CountryMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public code?: string,
    ) {
    }
}
