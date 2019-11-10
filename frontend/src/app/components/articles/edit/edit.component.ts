import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  article: any = {};
  result: any;

  constructor(private service: ArticlesService, private router: Router) { }

  ngOnInit() {
  }

  sendArticle() {
    this.service.create(this.article).subscribe(
      res => {
        console.log(res);
        this.result = res;
        if (this.result.entity) {
          this.router.navigate(['/article']);
        }
      },
      err => { console.log(err); }
    );
    console.log(this.article);
  }

}
