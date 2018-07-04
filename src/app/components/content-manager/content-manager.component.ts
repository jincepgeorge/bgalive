import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-content-manager',
  templateUrl: './content-manager.component.html',
  styleUrls: ['./content-manager.component.css']
})
export class ContentManagerComponent implements OnInit {

    boardMembers: AngularFirestoreCollection<any> = this.db.collection('boardmembers');
    sermons: AngularFirestoreCollection<any> = this.db.collection('sermons');
    upcomingEventsCollection: AngularFirestoreCollection<any> = this.db.collection('upcomingevents');
    newsCollection: AngularFirestoreCollection<any> = this.db.collection('events');

    public boardMembersList: Observable<any[]>;
    public newsList: Observable<any[]>;
  selectedItem:any='Select';
  boardMemberInfo:any={};
  sermonInfo:any={};
  news:any={};
  upcomingEvents:any={};
  constructor(private db: AngularFirestore) {

    this.boardMembersList = db.collection('/boardmembers',ref => ref.orderBy('priority')).valueChanges();
    this.newsList = db.collection('/events',ref => ref.orderBy('newsId')).valueChanges();
  
   }

  ngOnInit() {
  }
  selectType(selectedItem){
   
    this.selectedItem=selectedItem;
  }
  saveBoardMembers(){
    console.log(this.boardMemberInfo);
    this.boardMembers.doc(this.boardMemberInfo.name).set( this.boardMemberInfo)
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
  saveNews(){
  
 
    this.news.newsId= this.news.newsId?this.news.newsId: new Date().getTime().toString();
    console.log(this.sermonInfo);
    this.newsCollection.doc(this.news.newsId).set( this.news)
      .catch((err) => {
      console.log(err);
    });
    this.news={};

  }
  editMember(member){
    this.boardMemberInfo=member;
  }
  deleteMember(member){
    var isDelete=confirm('Are you sure you want to dlete');
    if(isDelete){
    this.boardMembers.doc(member.name).delete()
      .catch((err) => {
      console.log(err);
    })
  }
}
editNews(news){
  this.news=news;
}
deleteNews(news){
  var isDelete=confirm('Are you sure you want to dlete');
  if(isDelete){
  this.newsCollection.doc(news.newsId).delete()
    .catch((err) => {
    console.log(err);
  })
}
}
}
