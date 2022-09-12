import { currentPlan, ICurrentUser } from '@core/models/user.model';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { PaymentService } from '@core/services/payment.service';
import { Base } from '@core/base/base-component';
import { Component, Input, OnInit } from '@angular/core';
import { ResponseModel } from '@core/models/response.model';
import { PlanRequestDTO } from '@shared/models/shared.model';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDurationComponent } from '@shared/dialogs/payment-duration/payment-duration.component';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  public isLoading: boolean = false;
  public isIntializingPayment: boolean = false;
  @Input() selected: string = PlanType.MONTHLY;
  public planType = PlanType;
  public plans: any[] = [];
  public currentPlan!: currentPlan | undefined;
  constructor(
    private _base: Base,
    private _payment: PaymentService,
    private _localStorageAs: LocalStorageService,
    public dialog: MatDialog
  ) {
    _localStorageAs.watch('klinicly_user').subscribe((res: ICurrentUser) => {
      if (res) {
        this.currentPlan = res.currentSubscription;
      }
    });
    this.getPlans();
  }

  ngOnInit(): void {}

  public selectPlanType(plantype: string): void {
    this.selected = plantype;
  }

  public getPlans(): void {
    this.isLoading = true;
    this._base.addSubscription(
      this._payment.getPlans().subscribe(
        (res: ResponseModel<PlanRequestDTO[]>) => {
          this.isLoading = false;
          this.plans = res.data;
        },
        (error) => {
          this.isLoading = false;
        }
      )
    );
  }
  public initializePayment(duration: number): void {
    this.isIntializingPayment = true;
    this._base.addSubscription(
      this._payment
        .Initialize({
          planId: this.currentPlan!.planId,
          durationInMonths: duration,
        })
        .subscribe(
          (res: ResponseModel<string>) => {
            console.log(res);
            this.isIntializingPayment = false;
            if (res.data.includes('http')) {
              window.open(res.data, '_self');
              return;
            }
            // this._current.updateToken(res?.data);
            // this.router.navigate(['dashboard']);
          },
          (error) => {
            this.isIntializingPayment = false;
          }
        )
    );
  }

  public openMonthsModal(planId: string): void {
    this.currentPlan!.planId = planId;
    if (
      this.currentPlan?.planId === null ||
      this.currentPlan?.planId === undefined ||
      this.currentPlan?.planId === ''
    ) {
      this._base.openSnackBar('Select a plan', 'error');
      return;
    }
    const dialogRef = this.dialog.open(PaymentDurationComponent, {
      panelClass: 'modal-width',
    });
    dialogRef.componentInstance.duration.subscribe((duration: number) => {
      dialogRef.close();
      this.initializePayment(duration);
    });
  }
}

export enum PlanType {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}
