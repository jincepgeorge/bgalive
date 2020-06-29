import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';

import { AngularFirestore } from 'angularfire2/firestore';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public videoList: Observable<any[]>;
  constructor(db: AngularFirestore,
    private spinnerService: Ng4LoadingSpinnerService,
    private _sanitizer: DomSanitizer) {
      this.spinnerService.show();
      this.videoList = db.collection('/videolist').valueChanges();

      this.videoList.subscribe(result => {
      
        // this.messageService.sendMessage(result[0].clientname);
         console.log(result);
         this.spinnerService.hide();
       });
     }
     getSafeUrl(videoUrl){
      return this._sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
     }

  ngOnInit() {
  }

}
