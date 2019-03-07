import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // Passage du JSON d'app vers post-list
  @Input('posts') posts : any;

  constructor() { }

  ngOnInit() {
  }


}
