import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  constructor(private http:HttpClient) {  }

  path:string="https://jsonplaceholder.typicode.com/posts"
  posts:Post[];

  ngOnInit() {
    this.http.get<Post[]>(this.path).subscribe(response=>{
      this.posts=response;
    });
    
  }

}
