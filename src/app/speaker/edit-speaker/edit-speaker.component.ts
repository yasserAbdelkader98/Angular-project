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
  selector: 'app-edit-speaker',
  templateUrl: './edit-speaker.component.html',
  styleUrls: ['./edit-speaker.component.css'],
})
export class EditSpeakerComponent implements OnInit, OnChanges {
  @Input() editId = 0;
  speaker: Speaker = new Speaker(0, '', '', '', '', '', '');
  constructor(public speakerServ: SpeakerService) {}

  saveEdit() {
    this.speakerServ
      .updateSpeaker(this.speaker)
      .subscribe((a) => console.log(a));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['editId'].isFirstChange()) {
      this.speakerServ.getSpeakerById(this.editId).subscribe({
        next: (data) => console.log((this.speaker = data)),
      });
    }
  }

  ngOnInit(): void {}
}
