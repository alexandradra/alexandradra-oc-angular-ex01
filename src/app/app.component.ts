import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // JSON des articles (en attendant connexion base)
  posts = [
    {
      title: 'Article 1',
      content: 'Contenu article 1 lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      loveIts: 0,
      createdAt:'',
    },
    {
      title: 'Article 2',
      content: 'Contenu article 2 lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      loveIts: 0,
      createdAt:'',
    },
    {
      title: 'Article 3',
      content: 'Contenu article 3 lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      loveIts: 0,
      createdAt:'',
    },
  ];
}
