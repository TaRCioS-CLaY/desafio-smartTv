import { HttpGetClient } from "../httpClient";

import { InvalidCredetialsError } from "../erros/invalidCredetialsError";
import { HttpStatusCode } from "../httpResponse";

export class YoutubeAPI {
    constructor(
        private readonly apiKey: string,
        private readonly url: string,
        private readonly httpGetClient: HttpGetClient
    ) {}

    async emAlta(): Promise<void> {
        const httpResponse = await this.httpGetClient.get({
            apiKey: this.apiKey,
            url: this.url,
        });

        switch (httpResponse.statusCode) {
            case HttpStatusCode.unauthorized:
                throw new InvalidCredetialsError();
            default:
                Promise.resolve();
        }
    }
}
