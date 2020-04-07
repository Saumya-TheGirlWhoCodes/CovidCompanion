import { IDynamicFormControls } from './idynamicformcontrols';

export class DoctorFormControls {
    // TODO: Bad approach, instead load through the generic resource.
    private static formControls: Array<IDynamicFormControls> = [
       {name: 'Doctor ID', control: 'text', selectData: null},
       {name: 'Name', control: 'text', selectData: null},
       {name: 'Hospital', control: 'textarea', selectData: null},
       {name: 'Mobile', control: 'tel', selectData: null},
       {name: 'E-mail', control: 'email', selectData: null},
       // TODO: Update Interface to add the image-upload option button

   ];
   private static columns: Array<string>;
   public static getFormControls(): Array<IDynamicFormControls> {
       return this.formControls;
   }
   public static getColumnData(): Array<string> {
       for (const control of this.formControls) {
           this.columns.push(control[name]);
       }
       return this.columns;
   }

}