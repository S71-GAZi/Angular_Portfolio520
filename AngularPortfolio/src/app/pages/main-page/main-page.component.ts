import { Component } from '@angular/core';
import {PersonalInformation} from '../../models/personal-information';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent {
 person:PersonalInformation =new PersonalInformation;
name:string='SORIFULLAH PAVEL';
shortDesctiption:string = 'Full Stack Software Engineer working for PerkyRabbit Corporation Ltd. Dhaka, Bangladesh.';
designation :string ="Software Engineer";
email : string ='sorifullahpavelgazi@gmail.com';
}
