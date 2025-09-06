import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs';
import { ToggleSidenavDirective } from '../../directives/toggle-sidenav.directive';
import { IFormResponse } from '../../model/i-form-response.interface';
import { IInformationDialogData } from '../../model/i-information-dialog-data';
import { AuthService } from '../../services/auth.service';
import { ChangeLangComponent } from '../change-lang/change-lang.component';
import { InformationDialogComponent } from '../information-dialog/information-dialog.component';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    TranslatePipe,
    MatTooltipModule,
    ThemeSwitchComponent,
    ToggleSidenavDirective,
    ChangeLangComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  readonly translateService = inject(TranslateService);
  readonly #authService = inject(AuthService);
  readonly #matDialog = inject(MatDialog);

  logout() {
    const dialogData: IInformationDialogData = {
      cardText: this.translateService.stream('AUTH.log_out_message'),
      cardTitle: this.translateService.stream('TOOLBAR.log_out'),
      cardTitleIcon: 'logout',
      cancelButtonText: this.translateService.stream('GENERAL.close'),
      saveButtonText: this.translateService.stream('TOOLBAR.log_out'),
      saveButtonIcon: 'logout',
    };

    this.#matDialog
      .open(InformationDialogComponent, {
        data: dialogData,
      })
      .afterClosed()
      .pipe(
        filter((res?: IFormResponse) => !!res?.submitted),
        tap(() => this.#authService.logout())
      )
      .subscribe();
  }
}
