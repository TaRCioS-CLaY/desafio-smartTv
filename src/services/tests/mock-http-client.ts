import { HttpGetClient, HttpGetParams } from "../httpClient";
import { HttpResponse, HttpStatusCode } from "../httpResponse";

export class HttpGetClientSpy implements HttpGetClient {
    apiKey?: string;

    url?: string;

    response: HttpResponse = {
        statusCode: HttpStatusCode.noContent,
    };

    async get(params: HttpGetParams): Promise<HttpResponse> {
        this.apiKey = params.apiKey;
        this.url = params.url;

        return Promise.resolve(this.response);
    }
}
