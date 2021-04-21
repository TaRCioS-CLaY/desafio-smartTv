export enum HttpStatusCode {
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    internalError = 500,
}

export type HttpResponse = {
    statusCode: HttpStatusCode;
    body?: any;
};
