import { HttpException, HttpStatus } from '@nestjs/common';

// Exceção para usuário não encontrado
export class UserNotFoundException extends HttpException {
    constructor(message: string = 'Usuário não encontrado') {
        super(message, HttpStatus.NOT_FOUND);
    }
}

// Exceção para autenticação e autorização via token
export class UnauthorizedException extends HttpException {
    constructor(message: string) {
        super(message, HttpStatus.UNAUTHORIZED);
    }
}

// Exceção para erro interno do servidor
export class InternalServerErrorException extends HttpException {
    constructor(message: string = 'Ocorreu um erro interno. Tente novamente mais tarde.') {
        super(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

// Exceção genérica para outros erros
export class GenericException extends HttpException {
    constructor(message: string, status: HttpStatus) {
        super(message, status);
    }
}
