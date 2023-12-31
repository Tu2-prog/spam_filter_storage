import mongoose from "mongoose";

const MailSchema = new mongoose.Schema({
    content: {type: String, required: true},
    classifier: {type: Number, required: true}
})

export const MailModel = mongoose.model('Mail', MailSchema);

export const getMail =  () => MailModel.find();
export const createMailEntry = (values: Record<string, number>) => new MailModel(values).save().then((mail) => mail.toObject());
export const deleteMailByID = (id: string) => MailModel.findOneAndDelete({_id: id});
export const deleteMails = () => MailModel.deleteMany({});
export const updateMailByID = (id: string, values: Record<string, number>) => MailModel.findByIdAndUpdate(id, values);
