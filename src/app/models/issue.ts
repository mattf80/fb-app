import { IIssue } from './issue';

export interface IIssue {
    $key?:string;
    exam: string;
    version?: string;
    issued?: boolean;
}

export class Issue implements IIssue {
    constructor(
        public exam:string,
        public version:string,
        public issued: boolean = false,
        public centre: string,
        public dateIssued: string
        ){}
}