import { Component, Injectable, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent implements AfterViewInit {

  private title = 'Yunes Endocrinologia';

  ngAfterViewInit(): void {
  }
}
