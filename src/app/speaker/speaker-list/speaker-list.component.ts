import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css'],
})
export class SpeakerListComponent implements OnInit, OnDestroy {
  allSpeakers: Speaker[] = [];
  speakerDetailsId = 0;
  speakerEditId = 0;
  speakerDeleteId = 0;
  sub: Subscription | null = null;

  constructor(public speakerServ: SpeakerService) {}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    console.log('speaker destroyed');
  }

  ngOnInit(): void {
    this.sub = this.speakerServ.getAllSpeakers().subscribe((data) => {
      this.allSpeakers = data;
    });
    console.log(this.allSpeakers);
  }
}
