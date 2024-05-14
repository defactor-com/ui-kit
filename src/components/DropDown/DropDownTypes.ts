export interface IDropDownObject {
  placeholder: string;
  options: Array<string>;
  onChange?(): void;
}
