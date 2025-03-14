import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import{UserItemComponent} from '../user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  imports: [NgFor,UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  names: string[];

  constructor(){
    this.names=['Felipe','Juan','Pedro','Maria','Jose'];
  }

}
