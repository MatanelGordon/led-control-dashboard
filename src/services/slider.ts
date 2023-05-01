import { request } from "./request";

export const setValue = (
  min: number,
  max: number,
  value: number,
) =>
  request({
    url: '/slider',
    method: "PUT",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      min,
      max,
      value,
    }),
  });
