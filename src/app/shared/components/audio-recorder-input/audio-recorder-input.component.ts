import { Component, inject } from '@angular/core';
import { AudioRecorderService } from './services/audio-recorder.service';

@Component({
  selector: 'app-audio-recorder-input',
  imports: [],
  templateUrl: './audio-recorder-input.component.html',
})
export class AudioRecorderInputComponent {
  isRecording = false;
  audioUrl: string | undefined;

  readonly #audioService = inject(AudioRecorderService);

  async startRecording() {
    try {
      await this.#audioService.startRecording();
      this.isRecording = true;
    } catch (error) {
      console.error(error);
    }
  }

  async stopRecording() {
    this.isRecording = false;
    const audioBlob = await this.#audioService.stopRecording();
    if (audioBlob) {
      this.audioUrl = URL.createObjectURL(audioBlob);
    }
  }
}
