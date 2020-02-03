/** File Name : route.js
 * Description : route information
 * Created By : Abhay
 * Modified By : Abhay
 * Last modified : 1st Feb 2020
 */

import {
    customerRealTimeCommissions,
    historicalCommissionPeriod,
    currentPeriod,
    summaryCommissions,
    currentCommission,
    periods,
    historicalCommissions,
    realTimeBonusDetails,
    historicalBonusDetails
} from './index';

export const routes = [
    { method: 'POST', path: '/customerrealtimecommissions', handler: customerRealTimeCommissions },
    { method: 'GET', path: '/historicalcommissionperiod', handler: historicalCommissionPeriod },
    { method: 'GET', path: '/currentperiod/{periodtypeid}', handler: currentPeriod },
    { method: 'GET', path: '/summarycommissions/{customerid}', handler: summaryCommissions },
    { method: 'GET', path: '/currentcommission/{customerid}/{periodtypeid}', handler: currentCommission },
    { method: 'POST', path: '/periods', handler: periods },
    { method: 'GET', path: '/historicalcommissions/{customerid}/{runid}', handler: historicalCommissions },
    { method: 'POST', path: '/realtimebonusdetails', handler: realTimeBonusDetails },
    { method: 'POST', path: '/historicalbonusdetails', handler: historicalBonusDetails }
]

export default routes;

