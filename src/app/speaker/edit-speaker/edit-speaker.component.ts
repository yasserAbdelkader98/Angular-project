import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-edit-speaker',
  templateUrl: './edit-speaker.component.html',
  styleUrls: ['./edit-speaker.component.css'],
})
export class EditSpeakerComponent implements OnInit, OnDestroy {
  // @Input() editId = 0;
  sub: Subscription | null = null;
  file: any;
  speaker: Speaker = new Speaker(0, '', '', '', '', '', '');
  constructor(
    public speakerServ: SpeakerService,
    public AC: ActivatedRoute,
    public router: Router
  ) {}

  saveEdit() {
    this.speakerServ.editSpeaker(this.speaker, this.file).subscribe((a) => {
      this.router.navigate(['/speakers']);
      console.log(a);
    });
  }

  onFileChange(s: any) {
    this.file = s.target.files[0];
  }

  ngOnInit(): void {
    this.AC.params.subscribe({
      next: (data) => {
        this.speakerServ.getSpeakerById(data['id']).subscribe({
          next: (data) => console.log((this.speaker = data)),
        });
      },
    });
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
