import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alertbutton',
  templateUrl: './alertbutton.component.html',
  styleUrls: ['./alertbutton.component.scss'],
})
export class AlertbuttonComponent  implements OnInit {

  @Input() buttonText!: string;

  constructor() { }

  ngOnInit() {}

}
