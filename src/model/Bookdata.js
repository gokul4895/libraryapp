const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://admin1:admin1@librarycluster.t7gao.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema=mongoose.Schema;


const BookSchema = new Schema({
    title:String,
    author:String,
    genre:String,
    image:String

});
//Model creation
var Bookdata=mongoose.model('bookdata',BookSchema);

module.exports=Bookdata;