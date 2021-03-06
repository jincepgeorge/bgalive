import { Component, OnInit,Input } from '@angular/core';

import {ActivatedRoute,Router,NavigationEnd} from "@angular/router";
import { AngularFirestore,AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  contentId;
  pageName: string;
  public sermon: Observable<any[]>;
  public newsDetail: Observable<any[]>;
  constructor(private db: AngularFirestore,
    private spinnerService: Ng4LoadingSpinnerService,
    private route: ActivatedRoute,
    private router: Router) {
      this.spinnerService.show();
      this.route.params.subscribe( params => {
        console.log(params);
        this.contentId=params['id'];
        this.pageName=params['pagename'];
       
      });
      //this.sermons = db.collection('/sermons').valueChanges();

      switch(this.pageName){
        case 'sermon':
        this.getSermon();
        case 'news':
        this.getNews();
      }
     
     }
     getSermon(){
      this.sermon = this.db.collection('/sermons',ref => ref.where('sermonid', '==',  this.contentId)).valueChanges();
      this.sermon.subscribe(result => {
        this.spinnerService.hide();
        // this.messageService.sendMessage(result[0].clientname);
         console.log(result);
        
       });
     }
     getNews(){
      this.newsDetail = this.db.collection('/events',ref => ref.where('newsId', '==',  this.contentId)).valueChanges();
      this.newsDetail.subscribe(result => {
        this.spinnerService.hide();
        // this.messageService.sendMessage(result[0].clientname);
         console.log(result);
        
       });
     }

  ngOnInit() {
  }

}
