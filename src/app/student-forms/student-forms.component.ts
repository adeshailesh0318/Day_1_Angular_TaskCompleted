import { Component } from '@angular/core';
import { StudentModel } from '../student-model';

@Component({
  selector: 'app-student-forms',
  templateUrl: './student-forms.component.html',
  styleUrls: ['./student-forms.component.css']
})
export class StudentFormsComponent {

  student: StudentModel = new StudentModel();

  saveStudent(form: any) {

    if (form.valid) {
      console.log(this.student);

      alert('Student saved successfully!');
    }
    else {
       alert('Please fill all required fields');
    }

    
  }

 
}

