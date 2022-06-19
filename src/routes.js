import Admin from "./pages/Admin"
import Basket from "./pages/Basket"
import Shop from "./pages/Shop"
import Auth from "./pages/Auth"
import Contact from "./pages/Contact";
import ClothingPage from "./pages/ClothingPage"
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    CLOTHING_ROUTE,
    CONTACT_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts"

export const authRouter = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]
 
export const publicRouter = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CLOTHING_ROUTE + '/:id',
        Component: ClothingPage 
    },
]
