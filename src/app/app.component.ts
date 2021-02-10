import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  @ViewChild(AComponent)
  a: AComponent;

  @ViewChild(BComponent)
  b: BComponent;
  
  constructor(private dataService: DataService){

  }

  increment(): void {
    this.dataService.setNewState();
  }

  ngAfterViewInit(): void {
    console.log(this.a);
    console.log(this.b);

  }
}
