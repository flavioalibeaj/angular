import { Component } from '@angular/core';

@Component({
  selector: 'app-camera',
  imports: [],
  styles: [
    `
      video {
        display: block;
        width: 100%;
        max-width: 640px;
        border: 1px solid #ccc;
        margin-bottom: 16px;
      }

      canvas {
        display: block;
        width: 100%;
        max-width: 640px;
        border: 1px solid #ccc;
        margin-bottom: 16px;
      }

      .controls {
        display: flex;
        gap: 8px;
      }

      button {
        padding: 8px 16px;
        border: none;
        background-color: #007bff;
        color: white;
        border-radius: 4px;
        cursor: pointer;
      }

      button:hover {
        background-color: #0056b3;
      }

      .main-div {
        // display: flex;
        // flex-direction: column;
        height: 100%;
        // height: 100vh;
        overflow: hidden;
      }

      /*
      app-toolbar {
        flex: 0 0 auto;
      }
      */

      // app-sidenav {
      //   /*
      //   flex: 1 1 auto;
      //   */
      //   flex: auto;
      //   overflow: auto;
      // }
    `,
  ],
  template: `
    <!-- TODO -->

    <!-- <div>
      <h1>Camera Control</h1>
      <video #videoElement autoplay muted></video>
      <canvas #canvasElement></canvas>
      <div class="controls">
        <button (click)="openCamera()">Open Camera</button>
        <button (click)="pauseCamera()">Pause Camera</button>
        <button (click)="takePhoto()">Take Photo</button>
        <button (click)="stopCamera()">Stop Camera</button>
      </div>
    </div> -->
    <!-- <div class="main-div">
      <app-toolbar />
      <div>
        <h1>Camera Access</h1>
        <video #videoElement autoplay muted></video>
      </div>
      <div>
        <video #video></video>
      </div>
      <br />

      <button autoplay (click)="startCamera()">Open WebCam</button>
    </div> -->
  `,
})
export class CameraComponent {
  // // // readonly video = viewChild.required('video', { read: ElementRef });
  // // // // @HostListener('document:visibilitychange')
  // // // // appVisibility = () => (this.video().nativeElement.muted = !!document.hidden);
  // // // openWebcam() {
  // // //   from(
  // // //     navigator.mediaDevices.getUserMedia({
  // // //       video: true,
  // // //       audio: true,
  // // //     })
  // // //   )
  // // //     .pipe(
  // // //       tap((stream) => {
  // // //         this.video().nativeElement.srcObject = stream;
  // // //         this.video().nativeElement.addEventListener('loadedmetadata', () => {
  // // //           this.video().nativeElement.play();
  // // //         });
  // // //       })
  // // //     )
  // // //     .subscribe();
  // // // }
  // // readonly #record = new BehaviorSubject<boolean>(false);
  // // private videoStream: MediaStream | null = null;
  // // constructor(private readonly renderer: Renderer2) {}
  // // ngOnInit(): void {
  // //   this.renderer.listen('document', 'visibilitychange', () => {
  // //     if (document.hidden) this.#record.next(false);
  // //   });
  // //   this.#record
  // //     .asObservable()
  // //     .pipe(
  // //       switchMap((isVisible) => {
  // //         if (!isVisible) {
  // //           if (this.videoStream) {
  // //             this.videoStream.getTracks().forEach((track) => track.stop());
  // //             this.videoStream = null;
  // //           }
  // //           return EMPTY;
  // //         }
  // //         return from(
  // //           navigator.mediaDevices.getUserMedia({
  // //             video: true,
  // //             audio: true,
  // //           })
  // //         ).pipe(
  // //           tap((stream) => {
  // //             this.videoStream = stream;
  // //             const videoElement = document.querySelector(
  // //               'video'
  // //             ) as HTMLVideoElement;
  // //             if (videoElement) {
  // //               videoElement.srcObject = stream;
  // //             }
  // //           })
  // //         );
  // //       })
  // //     )
  // //     .subscribe({
  // //       error: (err) => console.error('Error accessing camera:', err),
  // //     });
  // // }
  // // startCamera() {}
  // ngOnDestroy(): void {
  //   //   //   this.#stopCamera();
  // }
  // @ViewChild('videoElement', { static: true })
  // videoElement!: ElementRef<HTMLVideoElement>;
  // @ViewChild('canvasElement', { static: true })
  // canvasElement!: ElementRef<HTMLCanvasElement>;
  // private videoStream: MediaStream | null = null;
  // constructor() {}
  // ngOnInit(): void {}
  // async openCamera(): Promise<void> {
  //   try {
  //     this.videoStream = await navigator.mediaDevices.getUserMedia({
  //       video: true,
  //       audio: false,
  //     });
  //     this.videoElement.nativeElement.srcObject = this.videoStream;
  //     this.videoElement.nativeElement.play();
  //   } catch (error) {
  //     console.error('Error accessing camera:', error);
  //   }
  // }
  // pauseCamera(): void {
  //   this.videoElement.nativeElement.pause();
  // }
  // takePhoto(): void {
  //   const video = this.videoElement.nativeElement;
  //   const canvas = this.canvasElement.nativeElement;
  //   const context = canvas.getContext('2d');
  //   if (context) {
  //     canvas.width = video.videoWidth;
  //     canvas.height = video.videoHeight;
  //     context.drawImage(video, 0, 0, canvas.width, canvas.height);
  //   }
  // }
  // stopCamera(): void {
  //   if (this.videoStream) {
  //     this.videoStream.getTracks().forEach((track) => track.stop());
  //     this.videoStream = null;
  //   }
  //   this.videoElement.nativeElement.srcObject = null;
  // }
}
