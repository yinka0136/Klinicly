export interface PlanRequestDTO {
  id: string;
  name: string;
  amountPerMonth: number;
  discountPerYear: number;
  apiCallCount: number;
  isTrial?: boolean;
  features: Feature[];
}

export interface InitializePaymentDTO {
  planId: string;
  durationInMonths: number;
}

export interface Feature {
  name: string;
}
