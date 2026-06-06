"use strict";

const Models = require("../models");
const supabase = require("../dbConnect");


const getUsers = async (req, res) => {
const { data, error } = await supabase

.from("users")
.select("*");
if (error) {

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

const createUser = async (req, res) => {
const { data, error } = await supabase

.from("users")
.insert([req.body])
.select();
if (error) {

return res.status(500).json({
  result: 500,
  message: error.message,
});
}
res.status(201).json({
result: 201,
data,
});
};

const loginUser = async (req, res) => {
const { email, userPassword } = req.body;
const { data: user, error } = await supabase

.from("users")
.select("*")
.eq("email", email)
.single();
if (error || !user) {

return res.status(401).json({
  result: 401,
  message: "Invalid email or password",
});
}
if (user.userPassword !== userPassword) {
return res.status(401).json({
  result: 401,
  message: "Invalid email or password",
});
}

res.status(200).json({
result: 200,
data: user,
});
};

const updateUser = async (req, res) => {
const { id } = req.params;
const { data, error } = await supabase

.from("users")
.update({
  ...req.body,
  updatedAt: new Date().toISOString(),
})
.eq("id", id)
.select();
if (error) {

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

const deleteUser = async (req, res) => {
const { id } = req.params;
const { data, error } = await supabase

.from("users")
.delete()
.eq("id", id)
.select();

if (error) {
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

getUsers,

createUser,

loginUser,

updateUser,

deleteUser,

};



// const getUsers = (res) => {
// Models.User.findAll({}).then(data => {
// res.send({result: 200 , data: data});
// }).catch(err => {
// console.log(err);
// res.send({ result: 500, error: err.message });
// })
// }




// const createUser = (data, res) => {
// Models.User.create(data).then(data => {
// res.send({ result: 200 , data: data});
// }).catch(err => {
// console.log(err);
// res.send({ result: 500, error: err.message });
// })
// }

// const loginUser = (data, res) => {

//   Models.User.findOne({ where: { email: data.email } }).then(user => {
//     if (user && user.userPassword === data.userPassword) {
//       res.send({ result: 200, data: user });
//     } else {
//       res.send({ result: 401, message: "Invalid email or password" });
//     }
//   }).catch(err => {
//     res.send({ result: 500, error: err.message });
//   });
// };


// const updateUser = (req, res) => {
// Models.User.update(req.body, { where: { id: req.params.id },
// returning: true })
// .then(data => {
// res.send({ result: 200, data: data });
// }).catch((err) => {
// console.log(err);
// res.send({ result: 500, error: err.message });
// });
// };




// const deleteUser = (req, res) => {
// Models.User.destroy({ where: { id: req.params.id } })
// .then(data => {
// res.send({ result: 200, data: data });
// }).catch((err) => {
// console.log(err);
// res.send({ result: 500, error: err.message });
// });
// };



// module.exports = {
// getUsers, createUser, updateUser, deleteUser, loginUser
// };