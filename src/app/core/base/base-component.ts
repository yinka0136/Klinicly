import { Injectable, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription, TeardownLogic, BehaviorSubject } from 'rxjs';
import { SnackbarComponent } from './snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class Base {
  public subscription = new Subscription();
  public loading: Boolean = true;
  public loading$: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    true
  );
  public isEmptyData = false;
  private snackBar: MatSnackBar;
  private location: Location;
  constructor(private injector: Injector) {
    this.snackBar = this.injector.get<MatSnackBar>(MatSnackBar);
    this.location = this.injector.get<Location>(Location);
    // this.connectionState$.subscribe((state: StatusViewModel) => {
    //   this.connectionState = state;
    // });
  }

  addSubscription(logic: TeardownLogic): void {
    this.subscription.add(logic);
  }

  clearSubscription(): void {
    this.subscription.unsubscribe();
  }
  public goBack(): void {
    this.location.back();
  }
  public openSnackBar(message: string, type?: string, timeDuration = 3000) {
    const _type: string = type !== undefined ? type : 'success';
    if (message) {
      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: timeDuration,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['snackbar_success'],
        data: { message: message, type: _type },
      });
    }
  }
}
