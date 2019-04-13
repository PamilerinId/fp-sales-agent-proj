import { ResetPassword } from "~/app/password-reset/password-reset.component";
import { PropertyValidator } from "nativescript-ui-dataform";

export class PasswordValidator extends PropertyValidator {
    resetPassword: ResetPassword;
    constructor() {
        super();
        this.errorMessage = "Passwords are not the same";
    }
  
    checkPasswords(resetPassword: any): boolean {
        // here we have the "passwords" group
        const pass = this.resetPassword.new_password1;
        const confirmPass = this.resetPassword.new_password2;

        return pass === confirmPass;
      }
  }
