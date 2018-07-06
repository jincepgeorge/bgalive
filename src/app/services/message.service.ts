
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Injectable()
export class MessageService {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

    private subject = new Subject<any>();
    constructor(private afStorage: AngularFireStorage) { }
    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next();
    }
    upload(event) {
      const id = Math.random().toString(36).substring(2);
      this.ref = this.afStorage.ref(id);
      this.task = this.ref.put(event.target.files[0]);
      this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
      this.uploadProgress = this.task.percentageChanges();
      this.downloadURL = this.task.downloadURL();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}