"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type ConditionTextContextProps = {
  isConditionOpen: boolean;
  toggleCondition: () => void;
  setConditionOpen: Dispatch<SetStateAction<boolean>>;
};

const ConditionTextContext = createContext<ConditionTextContextProps>({
  isConditionOpen: false,
  toggleCondition: () => {},
  setConditionOpen: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const ConditionTextProvider = ({ children }: Props) => {
  const [isConditionOpen, setConditionOpen] = useState(false);

  const toggleCondition = () => {
    setConditionOpen((prev) => !prev);
    window.scrollTo({
      top: 100,
    });
  };

  return (
    <ConditionTextContext.Provider
      value={{ isConditionOpen, toggleCondition, setConditionOpen }}
    >
      {children}
    </ConditionTextContext.Provider>
  );
};

export const useConditionText = () => {
  return useContext(ConditionTextContext);
};
