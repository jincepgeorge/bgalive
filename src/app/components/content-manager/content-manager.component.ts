import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection  } from 'angularfire2/firestore';


@Component({
  selector: 'app-content-manager',
  templateUrl: './content-manager.component.html',
  styleUrls: ['./content-manager.component.css']
})
export class ContentManagerComponent implements OnInit {

    boardMembers: AngularFirestoreCollection<any> = this.db.collection('boardmembers');
    sermons: AngularFirestoreCollection<any> = this.db.collection('sermons');
    upcomingEventsCollection: AngularFirestoreCollection<any> = this.db.collection('upcomingevents');

  selectedItem:any='Select';
  boardMemberInfo:any={};
  sermonInfo:any={};
  upcomingEvents:any={};
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }
  selectType(e){
    console.log(e.target.innerText);
    this.selectedItem=e.target.innerText;
  }
  saveBoardMembers(){
    console.log(this.boardMemberInfo);
    this.boardMembers.doc(this.boardMemberInfo.b_name).set( this.boardMemberInfo)
      .catch((err) => {
      console.log(err);
    })

  }
  saveSermons(){
  
 
    this.sermonInfo.sermonid=new Date().getTime().toString();
    console.log(this.sermonInfo);
    this.sermons.doc(new Date().getTime().toString()).set( this.sermonInfo)
      .catch((err) => {
      console.log(err);
    });
   

  }
  saveUpcomingEvents(){
  
 
    this.upcomingEvents.eventId=new Date().getTime().toString();
    console.log(this.sermonInfo);
    this.upcomingEventsCollection.doc(new Date().getTime().toString()).set( this.upcomingEvents)
      .catch((err) => {
      console.log(err);
    });
   

  }
}
