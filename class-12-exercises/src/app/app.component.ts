import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //exercise 1
  width: number = 300;
  height: number = 300;
  //exercise 2
  logConsole() {
    console.log("whatever message")
  };
  //exercise 3
  isDisabled: boolean = true;
  toggleDisable() {
    this.isDisabled = !this.isDisabled
  };
  //exercise 4
  title: string = "header";

  // exercise 5
  title2: string = "hello"
  changeTitle2(e) {
    this.title2 = e.taget.value
  };

  //exercise 6
  isShow: boolean = true;

  //exercise 7
  isShowContent = true;

  //exercise 8
  myColor: string = "green";

  //exercise 9
  changeColor: string = "green";

  //exercise 10
  public foods: string[] = ['ham', 'cheese', 'tomato', 'lettuce'];

  //bonus to exercise 1
  constructor() {
    setTimeout(() => {
      this.width = 500
    }, 1000)
  }

}
