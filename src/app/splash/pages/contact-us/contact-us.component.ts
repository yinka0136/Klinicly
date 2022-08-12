import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterComponentService } from 'app/splash/services/inter-component.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  public mailForm!: FormGroup;
  successMessage: boolean = false;
  isLoading: boolean = false;
  public successMsg!: Object;

  constructor(
    private fb: FormBuilder,
    private service: InterComponentService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.mailForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      subject: ['', Validators.required],
      number: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      message: ['', Validators.required],
    });
  }

  get first_name() {
    return this.mailForm.controls.first_name;
  }

  get last_name() {
    return this.mailForm.controls.last_name;
  }

  get email() {
    return this.mailForm.controls.email;
  }

  get subject() {
    return this.mailForm.controls.subject;
  }

  get number() {
    return this.mailForm.controls.number;
  }

  get message() {
    return this.mailForm.controls.message;
  }

  submitForm(): void {
    this.isLoading = true;
    this.service.sendMail(this.mailForm.value).subscribe(
      (data: any) => this.successFunc(data['message']),
      (error: any) => this.errorFunc(error.error?.message)
    );
    this.mailForm.reset();
  }

  successFunc(message: string) {
    this.openSnackBar(true, message);
    this.isLoading = false;
  }

  errorFunc(message: string) {
    this.isLoading = false;
    this.openSnackBar(
      false,
      message || 'There was an error sending your message. Please try again.'
    );
  }

  openSnackBar(isSuccess: Boolean, message?: string) {
    // this.snackBar.open(message, 'close', {
    //   verticalPosition: 'top',
    //   horizontalPosition: 'center',
    //   panelClass: isSuccess ? ['snack-success'] : ['snack-error'],
    //   duration: 5000,
    // });
  }
}
