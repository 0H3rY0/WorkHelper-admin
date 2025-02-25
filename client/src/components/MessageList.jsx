import axios from "axios";
import { useEffect, useState } from "react";
import Message from "./ui/Message";

const MessageList = ({ ticketId, isMessageSend }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getAllMessagesByTicketId = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/raport/all-message/ticket/${ticketId}`
        );
        console.log(response);
        const reverseMessages = response.data.messages.slice().reverse();

        setMessages(reverseMessages);
      } catch (error) {
        console.log(error);
      }
    };

    const getUserByTickedId = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/raport/user/${ticketId}`
        );
        console.log(response);

        setUser(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    getAllMessagesByTicketId();
    getUserByTickedId();
  }, [isMessageSend]);

  return (
    <ul className="w-full flex flex-col gap-3 items-start">
      {messages.map((item) => (
        <Message key={item.id} item={item} user={user} />
      ))}
    </ul>
  );
};

export default MessageList;
