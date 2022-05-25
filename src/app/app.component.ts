import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Button Event';

  count = 0;
  
  counter(val : string){
    if ( val == 'add' )
    {
    this.count++;

    }
    else{
      this.count--;
    }

  }
}
