import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MessageService } from "../../services/message.service";
import {
  RxwebValidators,
  ReactiveFormConfig,
  NumericValueType,
} from "@rxweb/reactive-form-validators";
import { config } from "process";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  public coutrysArray: Array<any> = [];
  public formulario: FormGroup;
  constructor(private MessageService: MessageService) {}

  ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    this.formulario = new FormGroup({
      user_name: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^[a-zA-Z ]+$/ },
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 5 }),
      ]),
      name_lastname: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^[a-zA-Z ]+$/ },
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 3 }),
      ]),
      direction: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^[a-zA-Z ]+$/ },
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 3 }),
      ]),
      estado: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^[a-zA-Z ]+$/ },
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 3 }),
      ]),

      email: new FormControl(null, [RxwebValidators.required()]),

      password2: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 4 }),
      ]),

      password: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 4 }),
      ]),

      tel: new FormControl(null, [
        RxwebValidators.numeric({
          acceptValue: NumericValueType.PositiveNumber,
          allowDecimal: false,
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 4 }),
      ]),
      N: new FormControl(null, [
        RxwebValidators.numeric({
          acceptValue: NumericValueType.PositiveNumber,
          allowDecimal: false,
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 3 }),
      ]),
    });
  }

  public MostrarFormulario() {
    console.clear();
    console.log(this.formulario);
  }

  public ValidarTexto(control: string) {
    if (!this.formulario.controls[control].touched) return { error: undefined };
    return this.MessageService.MessageErrorTxt(
      this.formulario.controls[control].errors
    );
  }

  public ValidarRFC() {}

  public ValidarNumericos(control: string) {
    console.log(this.formulario.controls[control]);
    if (!this.formulario.controls[control].touched) return { error: undefined };
    return this.MessageService.MessageError(
      this.formulario.controls[control].errors
    );
  }
}
