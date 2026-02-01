const mongoose = require('mongoose');
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/todo');
}
main()
const schema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
});

module.exports= schema;