
//All tree from any types rutes public
export const PublicRoutes = {
    PUBLIC: 'Auth',

    LOGIN: 'Login',
    REGISTER: 'Register',
    
}

//All tree from any types rutes public
// When you add a new route, you need to add 
//    -> Pages/Private/Routes   || controllerPrivateRoutes
//    -> Pages/Private/Views    || newViewToRender 

export const PrivateRoutes = {
    PRIVATE: 'private',
    
    DASHBOARD: 'Dashboard',         //Main balance
    TRANSFERS: 'Transfers',         //History operations 
    TRANSACTIONS: 'Transactions',   //Add new Transactions
    PAYMENTLINK: 'PaymentLink',     //Payment Link
    SERVICES: 'Services',           //Services (Pins and recharges && Service payment)
    CREDIT: 'Credit',               //Credit (Users / Partners)
    INCOME: 'Income',               //Partner Option 

    INBOX: 'Inbox',
    PROFILE: 'Profile',
    SETTINGS: 'Settings',
}