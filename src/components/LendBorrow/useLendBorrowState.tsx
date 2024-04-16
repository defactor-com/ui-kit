import React, { useState } from "react";

interface LendBorrowData {
  currentTab: string;
  borrowingIcon: React.ReactElement;
  lendingIcon: React.ReactElement;
}

interface LendBorrowCallbacks {
  setCurrentTab: (newValue: string) => void;
  setLendLabel: (newValue: string) => void;
  setBorrowLabel: (newValue: string) => void;
  setActiveBorrowingSvg: (newIcon: string) => void;
  setActiveLendingSvg: (newIcon: string) => void;
  setBorrowingSvg: (newIcon: string) => void;
  setLendingSvg: (newIcon: string) => void;
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
}

export const useLendBorrowState = (): [LendBorrowData, LendBorrowCallbacks] => {
  const [currentTab, setCurrentTab] = useState("");
  const [lendLabel, setLendLabel] = useState("");
  const [borrowLabel, setBorrowLabel] = useState("");
  const [borrowingSvg, setBorrowingSvg] = useState("");
  const [activeBorrowingSvg, setActiveBorrowingSvg] = useState("");
  const [lendingSvg, setLendingSvg] = useState("");
  const [activeLendingSvg, setActiveLendingSvg] = useState("");

  const [borrowingIcon, setBorrowingIcon] = useState(
    <img src={borrowingSvg} width={24} height={24} />
  );

  const [lendingIcon, setLendingIcon] = useState(
    <img src={lendingSvg} width={24} height={24} />
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  return [
    { currentTab, borrowingIcon, lendingIcon },
    {
      setCurrentTab,
      setLendLabel,
      setBorrowLabel,
      setActiveBorrowingSvg,
      setActiveLendingSvg,
      setBorrowingSvg,
      setLendingSvg,
      handleChange,
    },
  ];
};
