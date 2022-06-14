import Fetch from "./httpService";
import { REQUESTGET, REQUESTREMOVE, REQUESTSET } from "../Context/MainContext";
export const REQUEST = async props => {
  var ResponseServersData = undefined;
  if (props.request) {
    ResponseServersData = await Fetch(props.request);
  }
  return ResponseServersData;
};

export const Get = async props => {
  return await REQUESTGET(props);
};

export const Set = async props => {
  return await REQUESTSET(props);
};

export const Remove = async props => {
  return await REQUESTREMOVE(props);
};
