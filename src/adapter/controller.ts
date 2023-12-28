import express from 'express';
import { createMailEntry, deleteMailByID, deleteMails, getMail } from '../database/mails';

/**
 * Function to create an entry into the MongoDB.
 * @param req - The request containing the JSON object that is used to create the document in the MongoDB.
 * @param res - The response of the operations stating if the operation was successfull or not.
 * @returns status code 200 if the storing was successfull and if not then it is code 400.
 */
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

/**
 * Function to delete an entry in the MongoDB.
 * @param req - The request containing the id that is used to identify the document in the MongoDB that is supposed to be deleted.
 * @param res - The response of the operations stating if the operation was successfull or not.
 * @returns status code 200 if the storing was successfull and if not then it is code 400.
 */
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

/**
 * Function to get all entries from the MongoDB.
 * @param req - The request used for retrieving all entries.
 * @param res - The response of the operations stating if the operation was successfull or not.
 * @returns status code 200 if the storing was successfull and if not then it is code 400.
 */
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

/**
 * Function to delete all entries from the MongoDB.
 * @param req - The request used for deleting all entries.
 * @param res - The response of the operations stating if the operation was successfull or not.
 * @returns status code 200 if the storing was successfull and if not then it is code 400.
 */
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
