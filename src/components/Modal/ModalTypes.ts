export interface IModal {
  close(): void;
  isOpen: boolean;
  externalStyles: string;
  content: React.ReactNode;
}
