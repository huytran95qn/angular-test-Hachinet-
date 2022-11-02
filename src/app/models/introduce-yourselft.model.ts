import { CheckBoxItem } from "../pages/form-builder/form-builder-checkbox/form-builder-checkbox.model";

export enum TypeFormBuilder {
  Checkbox,
  TextArea
}

export class RFormBuilder {
  type!: TypeFormBuilder;
  title!: string;
  value?: string | CheckBoxItem[];
  required?: boolean;
  allowUserToSpecifyTheirOwnAnswer?: boolean;

  constructor(
    type: TypeFormBuilder,
    title: string,
    value?: string | CheckBoxItem[],
    required?: boolean,
    allowUserToSpecifyTheirOwnAnswer?: boolean
  ) {
    this.type = type;
    this.title = title;
    this.value = value;
    this.required = required;
    this.allowUserToSpecifyTheirOwnAnswer = allowUserToSpecifyTheirOwnAnswer;
  }
}
