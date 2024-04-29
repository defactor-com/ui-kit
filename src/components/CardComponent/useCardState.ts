import { useState } from "react";

type cardDataState = {
  isHovered: boolean;
};

type cardCallbackState = {
  setIsHovered: (current: boolean) => void;
};

const useCardState = (): [
  data: cardDataState,
  callbacks: cardCallbackState
] => {
  const [isHovered, setIsHovered] = useState(false);
  return [{ isHovered }, { setIsHovered }];
};

export default useCardState;
