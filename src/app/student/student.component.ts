import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students: any;

  constructor(private http: HttpClient) { }


  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getStudents();
  }

  // tslint:disable-next-line: typedef
  getStudents() {
    this.http.get('https://localhost:5001/api/Students').subscribe(response => {
      this.students = response;
    }, error => {
      console.log(error);
    });
  }

}
