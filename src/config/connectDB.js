var mongoose = require("mongoose");
var bluebird = require("bluebird");

/**
 * connect Mongodb
 */

var connectDB = ()=>{
    mongoose.promise = bluebird;
    var URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    return mongoose.connect(URI, { useUnifiedTopology: true,useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true });
};
module.exports = connectDB;