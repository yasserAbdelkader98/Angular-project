import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { AddspeakerComponent } from './addspeaker/addspeaker.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { EditSpeakerComponent } from './edit-speaker/edit-speaker.component';
import { DeleteSpeakerComponent } from './delete-speaker/delete-speaker.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SpeakerListComponent,
    AddspeakerComponent,
    SpeakerDetailsComponent,
    EditSpeakerComponent,
    DeleteSpeakerComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    SpeakerListComponent,
    AddspeakerComponent,
    SpeakerDetailsComponent,
    EditSpeakerComponent,
    DeleteSpeakerComponent,
  ],
})
export class SpeakerModule {}
