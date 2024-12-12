import TimeAgo from "javascript-time-ago";
import es from 'javascript-time-ago/locale/es.json';

export const URL_BASE_BACKEND: string = 'http://lazo_backend:1337/api/v1';
export const URL_BASE_API_BACKEND: string = '/api/v1';

//data delivery
export const _timeAgo = TimeAgo.addDefaultLocale(es);
export const timeAgo = new TimeAgo('es-ES');


export const SEND_FREE = 200;
export const PRICE_DELIVERY = 18;
