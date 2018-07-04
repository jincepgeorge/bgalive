import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public upcomingevents: Observable<any[]>;
  public news: Observable<any[]>;
  public sermons: Observable<any[]>;
  constructor(db: AngularFirestore,
    private spinnerService: Ng4LoadingSpinnerService) { 
      this.spinnerService.show();
    this.upcomingevents = db.collection('/upcomingevents').valueChanges();
    this.news = db.collection('/events').valueChanges();
    this.sermons = db.collection('/sermons').valueChanges();
    this.upcomingevents.subscribe(result => {
      
     // this.messageService.sendMessage(result[0].clientname);
      console.log(result)
    });
    this.news.subscribe(result => {
      
      // this.messageService.sendMessage(result[0].clientname);
       console.log(result);
       this.spinnerService.hide();
     });
  }

  ngOnInit() {
  }

}
