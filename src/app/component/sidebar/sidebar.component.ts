import { Component,OnInit,ViewChild,ElementRef  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  @ViewChild('name') nameKey!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }
  Welc(){
    if(this.nameKey.nativeElement.value.length ===0){
      alert("Please fill your name first") 
    }else{
      alert("Welcome! All the best for the quiz :) " + this.nameKey.nativeElement.value)

    }
    
  }


}
