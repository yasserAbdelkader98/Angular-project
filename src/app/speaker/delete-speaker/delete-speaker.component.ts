import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';

@Component({
  selector: 'app-delete-speaker',
  templateUrl: './delete-speaker.component.html',
  styleUrls: ['./delete-speaker.component.css'],
})
export class DeleteSpeakerComponent implements OnInit {
  @Input() deleteId = 0;
  constructor(
    public speakerServ: SpeakerService,
    public router: Router,
    public AC: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.AC.params.subscribe({
      next: (data) => {
        this.speakerServ.deleteSpeaker(data['id']).subscribe({
          next: (data) => {
            this.router.navigate(['/speakers']);
            console.log(data);
          },
        });
      },
    });
  }
}
