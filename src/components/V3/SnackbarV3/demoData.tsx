import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

export interface IMessage {
  severity: "success" | "info" | "warning" | "error";
  message: string;
}

interface MessageContextProps {
  messageData: IMessage | null;
  setMessageData: (msgDt: IMessage | null) => void;
}

const MessageContext = createContext<MessageContextProps | null>(null);

interface MessageContextProviderProps {
  children: ReactNode;
}

export const MessageProvider: FC<MessageContextProviderProps> = ({
  children,
}) => {
  const [messageData, setMessageData] = useState<IMessage | null>(null);

  return (
    <MessageContext.Provider
      value={{
        messageData,
        setMessageData,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = (): MessageContextProps => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessageError");
  }
  return context;
};
