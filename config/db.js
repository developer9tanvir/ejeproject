
const mongoose = require('mongoose');




// create a mongobd connection
const mongoDBConnect = async () => {

    try {

       await mongoose.connect(process.env.MONGO_STRING)

       console.log(`MongoDB server is ready`.bgBlue);

    }catch(err) {
        console.log(`${err}`.bgRed.black);
    }

}


// export cannection
module.exports = mongoDBConnect;