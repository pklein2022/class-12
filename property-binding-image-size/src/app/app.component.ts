import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  width: number = 300;
  height: number = 300;
  logConsole(){
    console.log("whatever message")
  };
  isDisabled:boolean = true;
  toggleDisable(){
      this.isDisabled = !this.isDisabled
  };
  title: string = "header";
  isShow:boolean = true;
  
  changeTitle(e){
    this.title = e.taget.value
  };

  constructor(){
    setTimeout(()=> {
      this.width = 500
    },1000)
  }
}

