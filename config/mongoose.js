const mongoose=require('mongoose')
//mongoose.connect('mongodb://localhost/astro');
mongoose.connect(process.env.DB_URI);
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));
db.once('open',function(){
    console.log('Connected to Database:: MongoDB');
});
module.exports=db;
