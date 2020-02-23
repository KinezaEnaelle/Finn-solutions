import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = !this.isLoading;
    }, 4000);
  }
}
