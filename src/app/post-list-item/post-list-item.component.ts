import { Component, Input, OnInit } from '@angular/core';

// import { AppComponent } from './app'

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})

export class PostListItemComponent implements OnInit {

  @Input('masterName') masterName: string;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input('posts') posts: any;

  // Fonction de création de date (date non stockée en base)
  createdAt = new Date();
  
  // Fonctions love / hate
  onLoveIt() {
    this.postLoveIts++;
  }
  onHateIt() {
    this.postLoveIts--;
  }

  constructor() { }

  ngOnInit() {
  }



}
