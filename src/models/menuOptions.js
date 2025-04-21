import { Roles } from "./roles";
import { PrivateRoutes } from "./routes";

/*
    * IMPORTANT *
    This is the model of the options available in the application's sidebar. 
    Is necessary to organize them here in the order that they should appear in the sidebar.
*/

export const userMenu = [
    {
        id: 'home',
        name: 'Inicio',
        path: PrivateRoutes.DASHBOARD,
        rolAccess: [Roles.USER, Roles.PARTNER, Roles.ADMIN],
    },
    {
        id: 'transfers',
        name: 'Transferencias',
        path: PrivateRoutes.TRANSFERS,
        rolAccess: [Roles.USER, Roles.PARTNER, Roles.ADMIN],
    },
    {
        id: 'transactions',
        name: 'Transacciones',
        path: PrivateRoutes.TRANSACTIONS,
        rolAccess: [Roles.USER, Roles.PARTNER, Roles.ADMIN],
    },
    {
        id: 'paymentLink',
        name: 'Link de pago',
        path: PrivateRoutes.PAYMENTLINK,
        rolAccess: [Roles.USER, Roles.PARTNER, Roles.ADMIN],
    },
    {
        id: 'services',
        name: 'Servicios',
        path: PrivateRoutes.SERVICES,
        rolAccess: [Roles.USER, Roles.PARTNER, Roles.ADMIN],
    },
    {
        id: 'credit',
        name: 'Crédito',
        path: PrivateRoutes.CREDIT,
        rolAccess: [Roles.USER, Roles.PARTNER, Roles.ADMIN],
    },
    {
        id: 'income',
        name: 'Ingresos',
        path: PrivateRoutes.INCOME,
        rolAccess: [Roles.PARTNER, Roles.ADMIN],
    }

]

export const userAccountMenu = {
    INBOX: {
        id: 'inbox',
        name: 'Notificaciones',
        path: PrivateRoutes.INBOX,
    },
    PROFILE: {
        id: 'profile',
        name: 'Perfil',
        path: PrivateRoutes.PROFILE,
    },
    SETTINGS: {
        id: 'settings',
        name: 'Configuración',
        path: PrivateRoutes.SETTINGS,
    },
}