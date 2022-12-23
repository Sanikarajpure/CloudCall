import React from "react";
import Member from "../../../Utilities/member";
import { useSelector } from "react-redux";
const MessageItem = ({
  content,
  firstName,
  lastName,
  sameAuthor,
  date,
  sameDay,
  authorId,
}) => {
  const user = useSelector((state) =>
    state.User.user_verification.user.firstName
      ? state.User.user_verification.user
      : ""
  );

  return (
    <>
      {user._id === authorId ? (
        sameAuthor && sameDay ? (
          <div
            className="
              SameAuthorMessageContent
              text-dark-call-sec
              flex justify-end
              
              "
          >
            <span
              className="
              SameAuthorMessageText
              my-1
              w-fit
              px-6
              py-1
              bg-green-bg
              rounded-md
              flex flex-col text-right "
            >
              {content}
            </span>
          </div>
        ) : (
          <div
            className="
            
                          mt-1  "
          >
            <div className="AvatarContainer w-full flex justify-between items-center">
              <span className="text-xs dark:text-dark-bg text-light-grey-end ">
                {date}
              </span>
              <Member
                firstName={firstName}
                lastName={lastName}
                size={30}
                flexprop={"flex-row-reverse"}
                textprop={"text-xs"}
              />
            </div>

            <div
              className="MessageContainer flex 
              text-dark-call-sec 
              
            justify-end
              "
            >
              <div
                className="MessageContent 
                 w-fit
                 my-1
              px-6
              py-1
              rounded-md
              bg-green-bg"
              >
                {content}
              </div>
            </div>
          </div>
        )
      ) : sameAuthor && sameDay ? (
        <div
          className="
            SameAuthorMessageContent
           
            text-dark-call-sec
            "
        >
          <span
            className="
            SameAuthorMessageText
            my-1
            w-fit
            px-6
            py-1
            dark:bg-grey-end 
            bg-light-grey-end
            rounded-md
            flex flex-col
            
            
            "
          >
            {content}
          </span>
        </div>
      ) : (
        <div
          className="
                  
                        mt-1"
        >
          <div className="AvatarContainer w-full flex justify-between items-center">
            <Member
              firstName={firstName}
              lastName={lastName}
              size={30}
              flexprop={"flex-row"}
              textprop={"text-xs"}
            />
            <span className="text-xs dark:text-dark-bg text-light-grey-end">
              {date}
            </span>
          </div>

          <div
            className="MessageContainer flex flex-col 
            text-dark-call-sec"
          >
            <div
              className="MessageContent     w-fit
              my-1
              px-6
              py-1
              rounded-md
              dark:bg-grey-end 
              bg-light-grey-end"
            >
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageItem;
