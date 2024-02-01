import { constants } from "src/app/common/constants";

export const coachEndpoints ={
    findAll:constants.url+'coach/list',
    add:constants.url+'coach/',
    update:constants.url+'coach/',
    delete:constants.url+'coach/',
    findById:constants.url+'coach/',
    findByEmail:constants.url+'coach/email/',
    upload:constants.url+'coach/upload',
    getImage:constants.url+'coach/profile-image/'
}