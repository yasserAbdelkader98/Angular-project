import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';

@Component({
  selector: 'app-delete-speaker',
  templateUrl: './delete-speaker.component.html',
  styleUrls: ['./delete-speaker.component.css'],
})
export class DeleteSpeakerComponent implements OnInit, OnChanges {
  @Input() deleteId = 0;
  constructor(public speakerServ: SpeakerService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['deleteId'].isFirstChange()) {
      this.speakerServ.deleteSpeaker(this.deleteId).subscribe({
        next: (data) => console.log(data),
      });
    }
  }

  ngOnInit(): void {}
}
