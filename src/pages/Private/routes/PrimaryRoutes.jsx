import { lazy } from "react";
import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../../models/routes"
import { RoutesWithNotFound } from "../../../router"
import { LayoutDashboard } from "../Layout";
import { Credit, Dashboard, Inbox, PaymentLink, Profile, Services, Settings, Transactions, Transfers } from "../Views";
import { PartnerGuard } from "../../../guards";

const Income = lazy( () => import('../Views/Income'));

export const PrimaryRoutes = () => {

  return (
    <RoutesWithNotFound>
      <Route path='/' element={ <LayoutDashboard /> }>
        <Route path="/" element={ <Navigate to={ PrivateRoutes.DASHBOARD } /> }/>
       
        <Route path={ PrivateRoutes.DASHBOARD } element={ <Dashboard /> } />
        <Route path={ PrivateRoutes.TRANSFERS } element={ <Transfers /> } />
        <Route path={ PrivateRoutes.TRANSACTIONS } element={ <Transactions /> } />
        <Route path={ PrivateRoutes.PAYMENTLINK } element={ <PaymentLink /> } />
        <Route path={ PrivateRoutes.CREDIT } element={ <Credit /> } />
        <Route path={ PrivateRoutes.SERVICES } element={ <Services /> } />

        <Route element={ <PartnerGuard /> }>
          <Route path={ PrivateRoutes.INCOME } element={ <Income /> } />
        </Route>

        <Route path={ PrivateRoutes.INBOX } element={ <Inbox /> } />
        <Route path={ PrivateRoutes.PROFILE } element={ <Profile /> } />
        <Route path={ PrivateRoutes.SETTINGS } element={ <Settings /> } />

      </Route>
    </RoutesWithNotFound>
  )
}

export default PrimaryRoutes;