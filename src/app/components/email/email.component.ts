import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  private email: string = "ethanrcox@gmail.com";

  constructor() { }

  ngOnInit(): void {
  }

  submit(form: any) {
    console.log("Submitted!", form);
    window.open(`mailto:${this.email}`, '_blank');
  }
}
