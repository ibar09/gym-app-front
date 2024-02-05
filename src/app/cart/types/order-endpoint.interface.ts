import { constants } from "src/app/common/constants";

export const orderEndpoints ={
    findAll:constants.url+'order/',
    add:constants.url+'order/',
    update:constants.url+'order/',
    delete:constants.url+'order/',
    findById:constants.url+'order/',
    findByEmail:constants.url+'order/user/'
}
