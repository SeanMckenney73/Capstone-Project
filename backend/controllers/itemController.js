"use strict";


// const Models = require("../models");

// const getItems = (res) => {
// Models.Item.findAll({}).then(data => {
// res.send({result: 200 , data: data});
// }).catch(err => {
// console.log(err);
// res.send({ result: 500, error: err.message });
// })
// }

// module.exports = {
//     getItems
// }


const supabase = require("../dbConnect");

const getItems = async (req, res) => {

const { data, error } = await supabase



.from("items")
.select("*");
if (error) {



console.log("Supabase error:", error);
return res.status(500).json({
  result: 500,
  message: error.message,
});
}

res.status(200).json({



result: 200,
data,
});

};

module.exports = {

getItems,

};