import {Subject} from 'rxjs';

type Req = { url: string };

export interface RequestEventPayload{
  url: string;
  ok: boolean;
  params: Record<string, string | number | boolean | object> | null;
};

const requestSubject = new Subject<RequestEventPayload>();

export const request = async ({
  url,
  ...options
}: RequestInit & Req) => {
  let isOk:boolean;

  try{
    const fetched = await fetch(url, options);

    if(!fetched.ok) throw fetched;
    isOk = true;

    return fetched.json();
  }
  catch(e){
    isOk = false;
    console.error(e);
    throw e;
  }
  finally{
    requestSubject.next({
      url,
      ok: isOk,
      params: typeof options.body === 'string' ? JSON.parse(options.body) : null
    })
  }
}

export const onRequest = (cb: (payload: RequestEventPayload) => unknown) => {
  requestSubject.subscribe(cb);
}