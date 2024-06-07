const Talk = require("TalkManager");

const TalkListener = Talk.getInstance({
  "global": this
});

TalkListener.on("chat", (chat, channel) => {
  if(chat.text === "/ping") {
    channel.replyText("pong!");
  }
});

TalkListener.start();
