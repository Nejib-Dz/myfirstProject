import { AbstractControl, ValidationErrors } from "@angular/forms";


export class EmailValidator{
  static shoulBeUnique(control : AbstractControl ):  Promise<ValidationErrors | null>
  {
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        if((control.value as string) == "najib.dziri@gmail.com"){
          resolve({
            shoulBeUnique : true
          })
        }
           else{   resolve(null)}

        }, 3000);

      })
  }
}
