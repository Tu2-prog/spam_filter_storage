import express from 'express';

import { create, deleteAllMails, getMails } from '../adapter/controller';

export default (router: express.Router) => {
    router.post('/store/create', create);
    router.delete('/store/deleteall', deleteAllMails);
    router.get('/store', getMails)
}
