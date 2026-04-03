

export class ApplicationExptions extends Error{
    constructor(message:string , public statusCode:number , cause:unknown){
        super(message ,{cause})
        this.name = this.constructor.name
        Error.captureStackTrace(this , this.constructor)
    }
}
export class notFoundException extends ApplicationExptions{
    constructor(message:string  , cause?:unknown){
        super(message , 404,{cause})
    }
}
export class badRequestException extends ApplicationExptions{
    constructor(message:string  , cause?:unknown){
        super(message , 400,{cause})
    }
}
export class conflictException extends ApplicationExptions{
    constructor(message:string  , cause?:unknown){
        super(message , 409,{cause})
    }
}