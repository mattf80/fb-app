export interface IVersion {
  title: string;
}

export class Version implements IVersion {
  constructor(public title:string){}
}