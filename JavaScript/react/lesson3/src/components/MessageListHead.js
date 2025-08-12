import { message } from "./data";
import Message from "./MessageList";

function MessageKist() {
  return (
    <>
      {message.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </>
  );
}

export default MessageKist;
