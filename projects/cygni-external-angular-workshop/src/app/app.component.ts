import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cygni-external-angular-workshop';

  constructor(
    private readonly dataService: DataService
  ) {
    this.dataService.getAnimals().subscribe((glassar) => {
      
    });
  }


  
}
