"use strict";


// const Models = require("../models");

// const getChampions = (res) => {
// Models.Champion.findAll({}).then(data => {
// res.send({result: 200 , data: data});
// }).catch(err => {
// console.log(err);
// res.send({ result: 500, error: err.message });
// })
// }

// const getChampionID = (req, res) => {
//     const ID = req.params.id

//     Models.Champion.findByPk(ID).then(data => {
//     res.send({result: 200 , data: data});
//     }).catch(err => {
//     console.log(err);
//     res.send({ result: 500, error: err.message });
//     })
// }

// module.exports = {
// getChampions, getChampionID
// }


const supabase = require("../dbConnect");

const getChampions = async (req, res) => {

const { data, error } = await supabase



.from("champions")
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

const getChampionID = async (req, res) => {

const { id } = req.params;

const { data, error } = await supabase



.from("champions")
.select("*")
.eq("id", id)
.single();
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

getChampions,

getChampionID,

};