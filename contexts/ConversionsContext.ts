import React from "react";
import { IConversion } from "../types";

interface IConversionsContext {
  conversions: IConversion[]
  setConversions: React.Dispatch<React.SetStateAction<IConversion[]>>
}

const ConversionsContext = React.createContext({} as IConversionsContext);

export default ConversionsContext;