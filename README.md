# 🚀 Proyecto personal - LayoutMaterialUI

Este proyecto es una interfaz construida con Material UI pensada para simplificar la generación de temas personalizados. Incluye un template completo con todas las configuraciones necesarias y explicaciones claras, lo que permite comenzar rápidamente sin necesidad de consultar la documentación oficial. Además, se incorporaron características adicionales que pueden ser útiles en proyectos reales, como:

- `Guards de rutas`
- `Store centralizada`
- `Sistema de layout`
- `Validaciones integradas`
- `Menu y Roles faciles de modificar`
- `Comentarios descriptivos en los archivos`

Aunque el proyecto está desarrollado en JavaScript, su estructura es sólida. Y Está diseñado para ser fácilmente adaptable y reutilizable, por lo que es completamente libre de usar y modificar según tus necesidades.

#### Tecnologías utilizadas:
- `Vite`
- `React`
- `JavaScript`
- `MaterialUI`
- `Redux Toolkit`
- `React Hook Form`
- `Zod`

## 🔧 Instalación

```
    npm install
```

## 📁 Estructura de archivos

```
- Tree files

    ├───public
    │       layoutMain.ico
    │       vite.svg
    │
    └───src
        │   App.jsx
        │   main.jsx
        │
        ├───assets
        │   │   styles.css
        │   │
        │   └───images
        │           layout.png
        │           layoutMain.png
        │
        ├───components
        │       Logotipo.jsx
        │
        ├───guards
        │       AuthGuard.jsx
        │       PartnerGuard.jsx
        │
        ├───hooks
        │       useAuthStore.js
        │       useScreenUser.js
        │       useUiStore.js
        │       useUserStore.js
        │
        ├───models
        │       menuOptions.js
        │       roles.js
        │       routes.js
        │
        ├───pages
        │   ├───Auth
        │   │   ├───Components
        │   │   │   │   TitleView.jsx
        │   │   │   │
        │   │   │   └───MainCard
        │   │   │           ButtonToggleCard.jsx
        │   │   │           InputCustom.jsx
        │   │   │           Logo.jsx
        │   │   │           MainCard.jsx
        │   │   │
        │   │   ├───Layout
        │   │   │       AuthPage.jsx
        │   │   │
        │   │   ├───models
        │   │   │       loginSchema.js
        │   │   │       registerSchema.js
        │   │   │
        │   │   ├───routes
        │   │   │       AuthRoutes.jsx
        │   │   │
        │   │   └───Views
        │   │           Login.jsx
        │   │           Register.jsx
        │   │
        │   └───Private
        │       ├───Components
        │       │   ├───DataTable
        │       │   │
        │       │   ├───Navbar
        │       │   │       DesktopAccountButton.jsx
        │       │   │       DesktopAccountMenu.jsx
        │       │   │       DesktopAccountMenuItem.jsx
        │       │   │       DesktopEmailBadgeButton.jsx
        │       │   │       DesktopSwitchSidebar.jsx
        │       │   │       MobileGroupButton.jsx
        │       │   │       MobileMenuContainer.jsx
        │       │   │       MobileMenuItem.jsx
        │       │   │       MobileSwipeableEdgeButton.jsx
        │       │   │       MobileSwipeableEdgeDrawer.jsx
        │       │   │       MobileSwitchToggleMenu.jsx
        │       │   │       Navbar.jsx
        │       │   │
        │       │   ├───Sidebar
        │       │   │       Sidebar.jsx
        │       │   │       SidebarIcon.jsx
        │       │   │       SidebarItem.jsx
        │       │   │
        │       │   └───View-Dashboard
        │       │           CardAccountBalance.jsx
        │       │           CardAccountType.jsx
        │       │           CardToolbarAction.jsx
        │       │           CardToolbarActionButton.jsx
        │       │           WelcomeCaption.jsx
        │       │
        │       ├───Layout
        │       │       LayoutDashboard.jsx
        │       │       Wrapper.jsx
        │       │
        │       ├───routes
        │       │       PrimaryRoutes.jsx
        │       │
        │       └───Views
        │               Credit.jsx
        │               Dashboard.jsx
        │               Inbox.jsx
        │               Income.jsx
        │               PaymentLink.jsx
        │               Profile.jsx
        │               Services.jsx
        │               Settings.jsx
        │               Transactions.jsx
        │               Transfers.jsx
        │
        ├───router
        │   │   AppRouter.jsx
        │   │   RoutesWithNotFound.jsx
        │   │
        │   └───Components
        │           LoadingSpin.jsx
        │
        ├───store
        │   │   store.js
        │   │
        │   ├───Auth
        │   │       authSlice.js
        │   │
        │   ├───Ui
        │   │       uiSlice.js
        │   │
        │   └───User
        │           userSlice.js
        │
        └───theme
                AppTheme.jsx
                templateTheme.js
                themeConfig.js


```


