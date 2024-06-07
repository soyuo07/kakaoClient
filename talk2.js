const Talk = require("TalkManager");

const TalkListener = Talk.getInstance({
  "global": this,
  "session": false,
  "account": {
    "email": "YOUR_KAKAOTALK_EMAIL",
    "passsword": "YOUR_KAKAOTALK_PASSWORD"
  }
});

TalkListener.on("chat", (chat, channel) => {

  /**
   * chat Id
   */
  
  let chat_id = channel.id;
  
  if(chat.text === "/ping") {
    channel.shareText(chat_id, "pong!");
  }
});

TalkListener.start();
