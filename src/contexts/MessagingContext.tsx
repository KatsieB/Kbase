import { createContext } from "react";

type SeverityTypes = "info" | "error" | "warning" | "success";

type MessagingContextType = {
  content: JSX.Element | null;
  severity: SeverityTypes;
  setMessage: (
    content: JSX.Element | null,
    severity: SeverityTypes,
    timeout?: number
  ) => Promise<void>;
};

export const MessagingContext = createContext({} as MessagingContextType);
