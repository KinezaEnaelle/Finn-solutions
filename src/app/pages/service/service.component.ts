import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  isCyber = false;
  isSoftware = false;
  isTraining = false;
  isConsultant = false;

  constructor() { }

  ngOnInit() {
  }

  onCyber() {
    this.isCyber = !this.isCyber;
  }

  onSoftware() {
    this.isSoftware = !this.isSoftware;
  }

  onTraining() {
    this.isTraining = !this.isTraining;
  }

  onConsultant() {
    this.isConsultant = !this.isConsultant;
  }

}
