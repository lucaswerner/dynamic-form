import { AbstractControl } from "@angular/forms";

export function termsMustBeAccepted(
  control: AbstractControl
): { [key: string]: any } | null {
  return !control.value
    ? { termsMustBeAccepted: { value: control.value } }
    : null;
}
