import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css'],
})
export class SpeakerListComponent implements OnInit {
  allSpeakers: Speaker[] = [];
  speakerDetailsId = 0;
  speakerEditId = 0;
  speakerDeleteId = 0;

  showList() {
    this.speakerServ
      .getAllSpeakers()
      .subscribe((data) => (this.allSpeakers = data));
    console.log(this.allSpeakers);
  }

  constructor(public speakerServ: SpeakerService) {}

  ngOnInit(): void {}
}
