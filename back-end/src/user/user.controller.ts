import { Controller, Get } from "@nestjs/common";

@Controller('/api')
export class UserController{
    @Get()
    getAll():string{
        return "okok";
    }
}