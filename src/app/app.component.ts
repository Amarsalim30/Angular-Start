import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello1Component } from "./hello1/hello1.component";
import { UserListComponent } from './user-list/user-list.component';
@Component({
  selector: 'app-root',
  imports: [Hello1Component,UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-Start';
}
