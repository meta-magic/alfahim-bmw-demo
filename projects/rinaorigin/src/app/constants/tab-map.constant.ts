import {CurrentPlanComponent} from '../feature-component/tab-component/current-plan/current-plan.component';
import {ElectricityBillComponent} from '../feature-component/tab-component/electricity-bill/electricity-bill.component';
import {NaturalGasBillComponent} from '../feature-component/tab-component/natural-gas-bill/natural-gas-bill.component';
import {InteractionHistoryComponent} from '../feature-component/tab-component/interaction-history/interaction-history.component';
import {UsageReportComponent} from '../feature-component/tab-component/usage-report/usage-report.component';
import { RightSellComponent } from '../feature-component/tab-component/right-sell/right-sell.component';
/**
 * Created by dattaram on 19/2/19.
 */

export namespace tab_map {
  export const TAB_KEY_VALUE_PAIR: any = {
    CP: CurrentPlanComponent ,
    EB: ElectricityBillComponent,
    NGB: NaturalGasBillComponent,
    IH: InteractionHistoryComponent,
    UR: UsageReportComponent,
    RS:RightSellComponent
  };
}
