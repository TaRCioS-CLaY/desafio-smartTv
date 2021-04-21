import { HttpResponse } from "./httpResponse";

export type HttpGetParams = {
    apiKey: string;
    url: string;
};

export interface HttpGetClient {
    get(params: HttpGetParams): Promise<HttpResponse>;
}
