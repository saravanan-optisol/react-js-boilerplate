import ActionUtility from "../../utilities/ActionUtility";
import CommonEffect from "./CommonEffect";
import { logout } from "../../utilities/HttpUtility";
import HttpErrorResponseModel from "../../models/HttpErrorResponseModel";

export default class CommonAction {
  static GET_ALL_DATA = "CommonAction.GET_ALL_DATA";
  static GET_ALL_DATA_FINISHED = "CommonAction.GET_ALL_DATA_FINISHED";
  static GET_SPECIFIC_DATA = "CommonAction.GET_SPECIFIC_DATA_DATA";
  static GET_SPECIFIC_DATA_FINISHED = "CommonAction.GET_SPECIFIC_DATA_FINISHED";

  static getAllData() {
    return async dispatch => {
      const isSuccess = await ActionUtility.createThunkEffect(
        dispatch,
        CommonAction.GET_ALL_DATA,
        CommonEffect.getAllData
      );
      if (isSuccess instanceof HttpErrorResponseModel) return;
      logout();
    };
  }
}
