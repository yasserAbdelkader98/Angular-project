import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-addspeaker',
  templateUrl: './addspeaker.component.html',
  styleUrls: ['./addspeaker.component.css'],
})
export class AddspeakerComponent implements OnInit, OnDestroy {
  speaker: Speaker = new Speaker(0, '', '', '', '', '', '');
  file: any;
  sub: Subscription | null = null;

  onFileChange(s: any) {
    this.file = s.target.files[0];
  }

  save() {
    this.speakerServ.addSpeaker(this.speaker, this.file).subscribe({
      next: (data) => {
        this.router.navigate(['/speakers']);
        console.log(data);
      },
      error: (err) => console.log(err.error),
    });
  }
  show(o: any) {
    console.log(o);
  }

  constructor(public speakerServ: SpeakerService, public router: Router) {}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {}
}
