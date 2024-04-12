import { useState } from "react";

interface LendBorrowData {
  currentTab: string;
}

interface LendBorrowCallbacks {
  setCurrentTab: (newValue: string) => void;
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
}

export const useLendBorrowState = (): [LendBorrowData, LendBorrowCallbacks] => {
  const [currentTab, setCurrentTab] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  return [{ currentTab }, { setCurrentTab, handleChange }];
};
