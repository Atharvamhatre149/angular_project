import { Component } from '@angular/core';
import json from "../../../assets/constant.json"
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
    jsondata=json;
}
