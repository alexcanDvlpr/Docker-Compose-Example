import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: any;

  constructor(private service: ArticlesService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(
      res => {
        this.articles = res;
        this.articles = this.articles.articles;
        console.log(this.articles);
      },
      err => { console.log(err); }
    );
  }


}
