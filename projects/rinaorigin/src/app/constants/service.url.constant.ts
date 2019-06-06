/**
 * Created by dattaram on 20/3/19.
 */
const BASE_URL = 'https://restapi.amexio.org:9890/rina2/api/origin/';
export const SERVICE_URL = {
  CUSTOMER_SEARCH: BASE_URL + 'profile/',
  CHANGE_ENERGY_PLAN: BASE_URL + 'energyPlan/',
  CUSTOMER_DETAILS: BASE_URL + 'profile/updateInfo/',
  RIGHT_SELL: BASE_URL + 'rightSell/'
}
