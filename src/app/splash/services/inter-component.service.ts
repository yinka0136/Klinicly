import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterComponentService {
  private plansArray = Object.values(PlanTypes);

  constructor(private http: HttpClient) {}

  private generateInitialState() {
    let initialState: any = {};
    this.plansArray.forEach((planName) => {
      initialState[planName] = true;
    });
    return initialState;
  }
  private plans = new BehaviorSubject(this.generateInitialState());
  private selectedPlans = new BehaviorSubject(
    this.generateSelectedPlans(this.plans.value)
  );
  public noSelectedPlans = new BehaviorSubject(5);

  private generateSelectedPlans(plansObj: any) {
    let selected = Array(5).fill(null);
    let index = 0;
    for (let plan in plansObj) {
      if (plansObj[plan]) {
        selected[index] = plan;
        index++;
      }
    }
    return selected;
  }

  togglePlanSelection(plan: any) {
    let val = this.plans.value;
    let noSelectedPlans = this.noSelectedPlans.value;
    noSelectedPlans = val[plan] ? noSelectedPlans - 1 : noSelectedPlans + 1;
    val[plan] = !val[plan];
    this.plans.next(val);
    this.noSelectedPlans.next(noSelectedPlans);
    this.selectedPlans.next(this.generateSelectedPlans(val));
  }

  getPlans() {
    return this.plans.asObservable();
  }

  getSelectedPlans() {
    return this.selectedPlans.asObservable();
  }

  getNoSelectedPlans() {
    return this.noSelectedPlans.asObservable();
  }

  getNoSelectedPlansAsValue() {
    return this.noSelectedPlans.value;
  }

  sendMail(mailContent: Object): Observable<Object> {
    const url = `contact/send-email`;
    return this.http.post(url, mailContent);
  }
}

export const PlanTypes = {
  basic: 'basic',
  standard: 'standard',
  bronze: 'bronze',
  silver: 'silver',
  gold: 'gold',
};
