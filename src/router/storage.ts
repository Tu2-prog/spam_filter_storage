import express from 'express';

import { create, deleteMail, getMails } from '../adapter/controller';

export default (router: express.Router) => {
    router.post('/store/create', create);
    router.delete('/store/delete/:id', deleteMail);
    router.get('/store', getMails)
}
