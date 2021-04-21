import faker from "faker";
import { InvalidCredetialsError } from "../erros/invalidCredetialsError";
import { HttpStatusCode } from "../httpResponse";
import { HttpGetClientSpy } from "../tests/mock-http-client";
import { YoutubeAPI } from "./youtubeApi";

type SutTypes = {
    sut: YoutubeAPI;
    httpGetClientSpy: HttpGetClientSpy;
};

const makeSut = (
    url: string = faker.internet.url(),
    apiKey: string = "be161e4a-849a-4073-954d-978ee68d2be5"
): SutTypes => {
    const httpGetClientSpy = new HttpGetClientSpy();
    const sut = new YoutubeAPI(apiKey, url, httpGetClientSpy);

    return { sut, httpGetClientSpy };
};

describe("YoutubeApi", () => {
    it("Should call httpGetClient with correct URL", async (): Promise<void> => {
        const url = faker.internet.url();
        const apiKey = "7288c53f-f290-43e6-814c-c2259d2368bb";
        const { sut, httpGetClientSpy } = makeSut(url, apiKey);
        await sut.emAlta();
        expect(httpGetClientSpy.url).toBe(url);
    });

    it("Should call httpGetClient with correct Api Key", async (): Promise<void> => {
        const url = faker.internet.url();
        const apiKey = "7288c53f-f290-43e6-814c-c2259d2368bb";
        const { sut, httpGetClientSpy } = makeSut(url, apiKey);
        await sut.emAlta();
        expect(httpGetClientSpy.apiKey).toBe(apiKey);
    });

    it("Should throw a InvalidCredentialsError if HttpGetClient returns 401", async (): Promise<void> => {
        const { sut, httpGetClientSpy } = makeSut();
        httpGetClientSpy.response = {
            statusCode: HttpStatusCode.unauthorized,
        };
        const promise = sut.emAlta();
        await expect(promise).rejects.toThrow(new InvalidCredetialsError());
    });
});
