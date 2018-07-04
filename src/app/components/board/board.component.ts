import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public boardMembers: Observable<any[]>;
  constructor(db: AngularFirestore,
    private spinnerService: Ng4LoadingSpinnerService) { 
      this.spinnerService.show();
     // this.boardMembers = db.collection('/boardmembers').orderBy("priority", "asc").valueChanges();
      this.boardMembers = db.collection('/boardmembers',ref => ref.orderBy('priority')).valueChanges();
      this.boardMembers.subscribe(result => {
      
        // this.messageService.sendMessage(result[0].clientname);
         console.log(result);
         this.spinnerService.hide();
       });
      
    }

  ngOnInit() {
  }

}
