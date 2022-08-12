import { Subscription, TeardownLogic, BehaviorSubject } from 'rxjs';

export class BaseComponent {
  public subscription = new Subscription();
  public loading: Boolean = true;
  public loading$: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    true
  );
  public isEmptyData = false;

  addSubscription(logic: TeardownLogic): void {
    this.subscription.add(logic);
  }

  clearSubscription(): void {
    this.subscription.unsubscribe();
  }
}
