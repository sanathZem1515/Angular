import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  url: string =
    'https://np-complete-guide-38063-default-rtdb.firebaseio.com/posts.json';

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };

    this.http.post<{ name: string }>(this.url, postData).subscribe(
      (responseData) => {
        console.log(responseData);
      },
      (error) => {
        this.error.next(error.message);
      }
    );
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>(this.url).pipe(
      map((responseData) => {
        const postArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key });
          }
        }
        return postArray;
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );
  }

  deletePosts() {
    return this.http.delete(this.url);
  }
}
