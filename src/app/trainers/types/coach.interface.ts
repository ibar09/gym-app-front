import { User } from "src/app/user/types/user.interface";

export interface Coach extends User {
    description:string;
    programPrice:number;
}
