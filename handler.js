"use strict";
const TELEGRAM_HELLO_WORLD_KEY = process.env.TELEGRAM_HELLO_WORLD_KEY;

const sendMessage = async (chatID, msg) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_HELLO_WORLD_KEY}/sendMessage?chat_id=${chatID}&text=${msg}`;
  fetch(url);
};

module.exports.helloWorld = async (event) => {
  const body = event.body;
  const bodyData = JSON.parse(body);

  console.log("this is the body data");
  console.log(bodyData);

  const chatID = bodyData.message.chat.id;

  await sendMessage(chatID, "Hello World!");

  return {
    statusCode: 200,
  };
};
