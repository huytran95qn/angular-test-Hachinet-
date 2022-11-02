export class CheckBoxItem {
  id?: number;
  label?: string;
  checked?: boolean;
  other?: string;

  constructor(
    id?: number,
    label?: string,
    checked?: boolean,
    other?: string
  ) {
    this.id = id;
    this.label = label;
    this.checked = checked || false;
    this.other = other;
  }
}
