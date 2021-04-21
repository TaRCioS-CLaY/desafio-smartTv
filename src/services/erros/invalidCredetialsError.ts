export class InvalidCredetialsError extends Error {
    constructor() {
        super("Credenciais inválidas");
        this.name = "invalidCredetialsError";
    }
}
