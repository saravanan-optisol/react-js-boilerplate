import { BaseModel } from "sjs-base-model";

export default class CommonModel extends BaseModel {
  constructor(data) {
    super();

    this.update(data);
  }
}
