import { API_URI, Errors } from "./Values";
export default async function Fetch(request) {
  try {
    let obj = {
      method: request.method,
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "max-age=31536000",
      },
    };
    if (request.method == "POST") {
      console.log(request.multipart);
      obj.body = request.multipart
        ? request.data
        : JSON.stringify(request.data);
    }

    if (!request.multipart) {
      obj.headers["Content-Type"] = "application/json";
    }
    console.log("ovh", obj);
    let res = await fetch(API_URI + request.url, obj)
      .then(response => response.json())
      .then(responseData => {
        return responseData;
      });

    return res;
  } catch (error) {
    return { status: "error", message: Errors.errorServer };
  }
}
