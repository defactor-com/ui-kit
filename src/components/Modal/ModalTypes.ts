export interface IModal {
  close(): void;
  isOpen: boolean;
  showDrawer?: boolean;
  externalStyles: string;
  content: React.ReactNode;
}
