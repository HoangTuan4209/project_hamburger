import { Route, Routes } from "react-router-dom";
import { ROUTERS } from "./utils/router.js";
import Homepage from "./Pages/Homepages/Homepage.js";
import MasterLayout from "./Components/MasterLayout/MasterLayout.js";
import New from "./Pages/Menu/New/New.js";
import Burger from './Pages/Menu/Burger/Burger.js';
import Combo from './Pages/Menu/Combo/Combo.js';
import Garan from './Pages/Menu/Garan/Garan.js';
import Comvua from './Pages/Menu/Comvua/Comvua.js';
import Monankem from './Pages/Menu/Monankem/Monankem.js';
import Thucuong from './Pages/Menu/Thucuong/Thucuong.js';
import Cart from "./Pages/Cart/Cart.js";
import Sale from "./Pages/Sale/Sale.js";
import About from "./Pages/About-us/About.js";

const renderPage = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <Homepage />
        },
        {
            path: ROUTERS.USER.NEW,
            component: <New />
        }
        ,
        {
            path: ROUTERS.USER.BURGER,
            component: <Burger />
        }
        ,
        {
            path: ROUTERS.USER.COMBO,
            component: <Combo />
        }
        ,
        {
            path: ROUTERS.USER.GARAN,
            component: <Garan />
        }
        ,
        {
            path: ROUTERS.USER.COMVUA,
            component: <Comvua />
        }
        ,
        {
            path: ROUTERS.USER.MONANKEM,
            component: <Monankem />
        }
        ,
        {
            path: ROUTERS.USER.THUCUONG,
            component: <Thucuong />
        }
        ,
        {
            path: ROUTERS.USER.CART,
            component: <Cart />
        },
        {
            path: ROUTERS.USER.SALE,
            component: <Sale />
        }
        ,
        {
            path: ROUTERS.USER.ABOUT,
            component: <About />
        }
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))
                }
            </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return renderPage();
}

export default RouterCustom;