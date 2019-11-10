import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  articleId: any;
  result: any;
  article: any;

  constructor(private route: ActivatedRoute, private service: ArticlesService) {
    this.articleId = this.route.snapshot.params.id;
  }

  ngOnInit() {
    if (this.articleId) {
      this.getArticleById(this.articleId);
    }
  }

  getArticleById(id: any) {
    this.service.getById(id).subscribe(
      res => {
        this.result = res;
        this.article = this.result.article;
       },
      err => { console.error(err); }
    );
  }

}
