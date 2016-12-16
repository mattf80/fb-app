export interface IVersion {
  $key?: string;
  title: string;
}

export class Version implements IVersion {
  constructor(public title:string){}
}