import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserNameValidators{

  static connotCantinSpace(control : AbstractControl):
   ValidationErrors | null {
      if((control.value as string).indexOf(' ')>-1){
         return{
          connotCantinSpace:true
         }
      }else{
          return null;
      }
  }

}
