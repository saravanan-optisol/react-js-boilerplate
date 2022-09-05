import environment from "environment";
import EffectUtility from "../../utilities/EffectUtility";
import CommonModel from "./models/CommonModel";

export default class CommonEffect {
  static async getAllData(payload) {
    const endpoint = environment.api.registration + "/sample";
    return EffectUtility.getToModel(CommonModel, endpoint, payload);
  }
}
