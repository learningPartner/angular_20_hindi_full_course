import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  //string , number, booelan, date 
  courseName: string = "Angular 20";

  isActive: boolean= false;
  currentDate: Date = new Date();

  rollNo: number =  222;

  minTestLength  = 12;
  spanClassName = 'secondary'


  constructor() {
    console.log(this.courseName);

    this.courseName = "Angular 20 Tutorial";
    console.log(this.courseName);

    setTimeout(() => {
      this.rollNo =  7777;
    }, 10000); 
  }

  showAlert(pama?:string) {
    alert("Welcome to Angular 20")
  }

  onCityChanged():void {
    alert('City Chnaged')
  }

  addTwoNum(num1: number,num2: number) : number{
    return num1+ num2;
  }

  onWindowSizeChange() {
    console.log("Window Size has chnaged")
  }

  onMoudeEnter() {
    console.log("Mouese in")
  }
}
