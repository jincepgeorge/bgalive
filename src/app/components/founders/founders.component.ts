import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-founders',
  templateUrl: './founders.component.html',
  styleUrls: ['./founders.component.css']
})
export class FoundersComponent implements OnInit {
  public founders: Observable<any[]>;
  constructor(db: AngularFirestore,
    private spinnerService: Ng4LoadingSpinnerService) {
      this.spinnerService.show();
      this.founders = db.collection('/founders').valueChanges();

      this.founders.subscribe(result => {
      
        // this.messageService.sendMessage(result[0].clientname);
         console.log(result);
         this.spinnerService.hide();
       });
     }

  ngOnInit() {
  }

}
