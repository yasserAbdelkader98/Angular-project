import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-addspeaker',
  templateUrl: './addspeaker.component.html',
  styleUrls: ['./addspeaker.component.css'],
})
export class AddspeakerComponent implements OnInit {
  speaker: Speaker = new Speaker(0, '', '', '', '', '', '');

  save() {
    this.speakerServ.addNewSpeaker(this.speaker).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err.error),
    });
  }

  constructor(public speakerServ: SpeakerService) {}

  ngOnInit(): void {}
}
