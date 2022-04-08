import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css'],
})
export class SpeakerDetailsComponent implements OnInit, OnDestroy {
  // @Input() speakerId: number = 0;
  sub: Subscription | null = null;
  speakerDetails: Speaker | null = null;

  constructor(public speakerServ: SpeakerService, public AC: ActivatedRoute) {}

  ngOnInit(): void {
    this.AC.params.subscribe({
      next: (data) => {
        this.speakerServ.getSpeakerById(data['id']).subscribe({
          next: (data) => {
            this.speakerDetails = data;
          },
        });
      },
    });
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
