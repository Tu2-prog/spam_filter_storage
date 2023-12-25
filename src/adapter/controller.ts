import express from 'express';
import { createMailEntry, deleteMailByID, deleteMails, getMail } from '../database/mails';

export const create = async(req: express.Request, res: express.Response) => {
    try{
        const {content, classifier} = req.body;
        if(!content){
            return res.sendStatus(400);
        }
        const mail = createMailEntry({
            content,
            classifier
        });
        return res.status(200).json(mail).end();
    }
    catch(error){
        console.log(error)
        return res.sendStatus(400);
    }
}

export const deleteMail = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params;

        const deletedEntry = await deleteMailByID(id);
        return res.json(deletedEntry);
    }
    catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getMails =async (req: express.Request, res: express.Response) => {
    try{
        const mails = await getMail();
        return res.status(200).json(mails);
    }
    catch(error){
        console.log(error)
        return res.sendStatus(400);
    }
}

export const deleteAllMails = async (req: express.Request, res: express.Response) => {
    try{
        const deletedEntry = await deleteMails();
        return res.json(deletedEntry);
    }
    catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}
