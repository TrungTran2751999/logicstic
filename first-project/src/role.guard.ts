import { CanActivate, ExecutionContext } from "@nestjs/common";

export class RoleGuard implements CanActivate{
    private rolePassed:string[];
    constructor(rolePassed:string[]){
        this.rolePassed = rolePassed;
    }
    canActivate(context: ExecutionContext): boolean{
        const ctx = context.switchToHttp();
        const request:any = ctx.getRequest<Request>();
        for(let i:number = 0; i<this.rolePassed.length; i++){
            if(this.rolePassed[i] === request.user.role){
                return true;
            }
        }
        return false;
    }
}