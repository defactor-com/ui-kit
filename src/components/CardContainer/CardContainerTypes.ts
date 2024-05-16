export interface ICardContainer {
  content: React.ReactNode;
  externalStyles?: string;
  handleMouseEnter?: (newValue: boolean) => void;
  handleMouseLeave?: (newValue: boolean) => void;
  isPointer?: boolean;
  hoverBehavior?: boolean;
}
