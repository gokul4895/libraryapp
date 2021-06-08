const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://admin1:admin1@librarycluster.t7gao.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema=mongoose.Schema;


const AuthorSchema = new Schema({
    name:String,
    country:String,
    image:
    {
        data : Buffer,
        contentType: String
    }
});
//Model creation
var Authordata=mongoose.model('authordata',AuthorSchema);

module.exports=Authordata;