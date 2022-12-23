import React, { useEffect, useRef } from "react";
import MessagesHeader from "./messagesHeader";
import { connect } from "react-redux";
import DateSeparator from "./dateSeparator";
import MessageItem from "./messageItem";
import { decode as base64_decode } from "base-64";
import { convertDateToReadable } from "../../../Utilities/convertDateToReadable";

const Messages = ({ chosenChatDetails, messages }) => {
  return (
    <div
      className=" 
    h-[calc(100vh-18vh)] 
    md:h-[calc(100vh-12vh)]
    overflow-auto flex flex-col
    items-center
"
      id="style-4"
    >
      <MessagesHeader name={chosenChatDetails?.name} />
      {messages.map((message, index) => {
        const sameAuthor =
          index > 0 &&
          messages[index].author._id === messages[index - 1].author._id;

        const sameDay =
          index > 0 &&
          convertDateToReadable(new Date(message.date), "dd/mm/yy") ===
            convertDateToReadable(
              new Date(messages[index - 1].date),
              "dd/mm/yy"
            );

        return (
          <div key={message._id} className="w-11/12">
            {(!sameDay || index === 0) && (
              <DateSeparator
                date={convertDateToReadable(new Date(message.date), "dd/mm/yy")}
              />
            )}

            <MessageItem
              content={base64_decode(message.content)}
              firstName={message.author.firstName}
              lastName={message.author.lastName}
              sameAuthor={sameAuthor}
              date={convertDateToReadable(new Date(message.date), "dd/mm/yy")}
              sameDay={sameDay}
              authorId={message.author._id}
            />
          </div>
        );
      })}
    </div>
  );
};

const mapStoreStateToProps = ({ Chat }) => {
  return {
    ...Chat,
  };
};

export default connect(mapStoreStateToProps)(Messages);
