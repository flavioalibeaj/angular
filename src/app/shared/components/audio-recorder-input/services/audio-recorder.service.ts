import { Injectable } from '@angular/core';

@Injectable()
export class AudioRecorderService {
  private mediaRecorder!: MediaRecorder;
  private audioChunks: Blob[] = [];
  private stream!: MediaStream;

  async startRecording(): Promise<void> {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(this.stream);
      this.audioChunks = [];

      this.mediaRecorder.ondataavailable = (event) => {
        this.audioChunks.push(event.data);
      };

      this.mediaRecorder.start();
    } catch (error) {
      throw new Error('Microphone access denied');
    }
  }

  stopRecording() {
    return new Promise<Blob | null>((resolve) => {
      if (!this.mediaRecorder) {
        resolve(null);
        return;
      }

      this.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
        this.#cleanup();
        resolve(audioBlob);
      };

      this.mediaRecorder.stop();
    });
  }

  #cleanup(): void {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
    }
  }
}
