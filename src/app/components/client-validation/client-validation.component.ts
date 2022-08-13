import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-client-validation',
  templateUrl: './client-validation.component.html',
  styleUrls: ['./client-validation.component.scss']
})
export class ClientValidationComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() fieldName: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  validateField(fieldName: string) {
    return this.form.get(fieldName)?.invalid && (this.form.get(fieldName)?.dirty || this.form.get(fieldName)?.touched);
  }

  showError(fieldName: string): string {
    return this.form.get(fieldName)?.errors?.[fieldName];
  }
}
