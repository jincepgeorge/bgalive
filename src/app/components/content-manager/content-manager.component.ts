import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { map } from 'rxjs/operators/map';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-content-manager',
  templateUrl: './content-manager.component.html',
  styleUrls: ['./content-manager.component.css']
})
export class ContentManagerComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  downloadSrc;
  uploadCntrl:any;
  imageUrl:any;
    boardMembers: AngularFirestoreCollection<any> = this.db.collection('boardmembers');
    sermonsCollection: AngularFirestoreCollection<any> = this.db.collection('sermons');
    upcomingEventsCollection: AngularFirestoreCollection<any> = this.db.collection('upcomingevents');
    newsCollection: AngularFirestoreCollection<any> = this.db.collection('events');

    public boardMembersList: Observable<any[]>;
    public newsList: Observable<any[]>;
    public sermonList: Observable<any[]>;
  selectedItem:any='Select';
  boardMemberInfo:any={};
  sermonInfo:any={};
  news:any={};
  upcomingEvents:any={};
  uploadProgressValue:number=0;
  constructor(private db: AngularFirestore,
    private afStorage: AngularFireStorage
    ) {

    this.boardMembersList = db.collection('/boardmembers',ref => ref.orderBy('priority')).valueChanges();
    this.newsList = db.collection('/events',ref => ref.orderBy('newsId')).valueChanges();
    this.sermonList = db.collection('/sermons',ref => ref.orderBy('sermonid')).valueChanges();
  
   }

  ngOnInit() {
  }
  selectType(selectedItem){
   
    this.selectedItem=selectedItem;
  }
  saveBoardMembers(){

    this.boardMembers.doc(this.boardMemberInfo.name).set( this.boardMemberInfo)
      .catch((err) => {
      console.log(err);
    })
    this.boardMemberInfo={};
   
  }
  uploadImageAndSaveData(){
    this.uploadImages();

    this.uploadProgress.subscribe(result => {
      this.uploadProgressValue=result;
    });
  
  }
  saveSermons(){
  
 
    
    this.sermonInfo.sermonid=  this.sermonInfo.sermonid? this.sermonInfo.sermonid: new Date().getTime().toString();
  
    console.log(this.sermonInfo);
    this.sermonsCollection.doc(this.sermonInfo.sermonid).set( this.sermonInfo)
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

editSermons(sermons){
  this.sermonInfo=sermons;
}
deleteSermon(sermon){
  var isDelete=confirm('Are you sure you want to dlete');
  if(isDelete){
  this.sermonsCollection.doc(sermon.sermonid).delete()
    .catch((err) => {
    console.log(err);
  })
}
}
uploadImage(event){
  this.uploadCntrl=event;
  this.readUrl(event);
//this.upSvc.upload(event);
//this.uploadImages(event);
}
uploadImages() {
  const id = Math.random().toString(36).substring(2);
  this.ref = this.afStorage.ref(id);
  this.task = this.ref.put(this.uploadCntrl.target.files[0]);
  this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
  this.uploadProgress = this.task.percentageChanges();
  //this.downloadURL = this.task.downloadURL();

  this.task.snapshotChanges().pipe(
    finalize(() => {
      this.downloadURL = this.ref.getDownloadURL()
      this.downloadURL.subscribe(result => {
      
        // this.messageService.sendMessage(result[0].clientname);
         console.log(result);
         switch(this.uploadCntrl.target.id){
          case 'boardImageInput':
          this.boardMemberInfo.photo=result;
          this.saveBoardMembers();
          break;
          case 'sermonImageInput':
          this.sermonInfo.photo=result;
          this.saveSermons();
          break;
      
        }
  
    
        
       });
    })
  ).subscribe()
  
}
readUrl(event:any) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
      this.setImageUrlObj(event,this.imageUrl);
      //this.boardMemberInfo.photo=this.imageUrl;
    }

    reader.readAsDataURL(event.target.files[0]);
  }
}
setImageUrlObj(cntrl,imageUrl){
  switch(cntrl.target.id){
    case 'boardImageInput':
    this.boardMemberInfo.photo=imageUrl;
    break;
    case 'sermonImageInput':
    this.sermonInfo.photo=imageUrl;
    break;

  }
}

}
