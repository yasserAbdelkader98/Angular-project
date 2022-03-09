import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SpeakerModule } from './speaker/speaker.module';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SpeakerModule, StudentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
