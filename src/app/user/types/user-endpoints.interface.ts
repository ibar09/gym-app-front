import { constants } from "src/app/common/constants";

export const userEndpoints ={
    findAll:constants.url+'user/list/',
    findByEmail:constants.url+'user/email/',
    add:constants.url+'user/register',
    update:constants.url+'user/',
    delete:constants.url+'user/',
    findById:constants.url+'user/',
    upload:constants.url+'user/upload',
    getImage:constants.url+'user/profile-image/'
}
