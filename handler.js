"use strict";

const sendMessage = async (msg) => {};

module.exports.helloWorld = async (event) => {
  
  const body = event.body;
  const bodyData = JSON.parse(body);
  
  console.log("this is the body data");
  console.log(bodyData);

  const chatID = bodyData.message.chat.id;
  return {
    statusCode: 200,
  };
};
