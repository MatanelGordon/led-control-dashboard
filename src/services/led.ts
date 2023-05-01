import { request } from "./request";

export const turnOn = () => request({
    url: '/led/on',
    method: 'PUT',
    cache: 'no-cache',
    mode: 'cors',
    headers: {
        'content-type': 'application/json',
    }
})


export const turnOff = () => request({
    url: '/led/off',
    method: 'PUT',
    cache: 'no-cache',
    mode: 'cors',
    headers: {
        'content-type': 'application/json',
    }
})