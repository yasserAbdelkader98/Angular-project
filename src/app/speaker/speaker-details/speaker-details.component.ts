import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css'],
})
export class SpeakerDetailsComponent implements OnInit, OnChanges {
  @Input() speakerId: number = 0;
  speakerDetails: Speaker | null = null;

  constructor(public speakerServ: SpeakerService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['speakerId'].isFirstChange())
      this.speakerServ.getSpeakerById(this.speakerId).subscribe({
        next: (data) => (this.speakerDetails = data),
      });
  }
  ngOnInit(): void {}
}
