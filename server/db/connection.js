const mongoose = require('mongoose');

const url = `mongodb+srv://manojshakya54:VV2F0ZbarJSRpstc@cluster0.htdtk.mongodb.net/chatapp`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))