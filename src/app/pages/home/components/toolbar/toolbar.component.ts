import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { InformationDialogComponent } from '../../../../shared/components/information-dialog/information-dialog.component';
import { IFormResponse } from '../../../../shared/model/i-form-response.interface';
import { IInformationDialogData } from '../../../../shared/model/i-information-dialog-data';
import { ThemeSwitchComponent } from '../../../../shared/components/theme-switch/theme-switch.component';
import { ToggleSidenavDirective } from '../../../../shared/directives/toggle-sidenav.directive';
import { ChangeLangComponent } from '../../../../shared/components/change-lang/change-lang.component';

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
