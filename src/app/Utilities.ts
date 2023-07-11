import { FormGroup } from "@angular/forms";

export function getDirtyState(form: FormGroup): Object {
  return Object.keys(form.controls).reduce<Object>((dirtyState, controlKey) => {
    const control = form.controls[controlKey];

    if (!control.dirty) {
      return dirtyState;
    }

    if (control instanceof FormGroup) {
      return {
        ...dirtyState,
        [controlKey]: getDirtyState(control),
      };
    }

    return {
      ...dirtyState,
      [controlKey]: control.value,
    };
  }, {});
}
