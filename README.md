> # ~~Please stared~~

# kakao-client
> kakaoTalk Bot with sh**ex
> 
> need Login Passcode & 
> Login in DebugChat

___Environment___
=
> application : com.xfl.msgbot
> 
> android : No Selected

___functions___
=
> get Talk : onNotificationPosted
>
> send Talk : shareex
>
> attachment upload : upload

___example.js___
=
```js
/**
 * code status : writing
 */

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
```
