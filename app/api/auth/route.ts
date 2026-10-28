import { ApiRepone } from "@/app/types/type";
import { error } from "console";
import { NextResponse } from "next/server"


type Auth = {
    id: string,
    name:string,
    user_type: "user" | "admin",
    phone: string,
}


const user: Auth[] = [
    {
        id:"1",
        name:"roetth",
        user_type: "admin",
        phone:"95471411"
    }
];

export async function GET() {

    try{
        const response : ApiRepone<Auth[]> = {
            success :true,
            message:"user fetched successfully",
            data : user
        };
        return NextResponse.json(
            response,{status : 200}
        );

    }catch(e){
        
        const error : ApiRepone<null> = {
            success: false,
            message: "SomeThing went wrong!",
            data : null
        };

        return NextResponse.json(
            error,
            {
                status: 500
            }
        )

    }
    
}