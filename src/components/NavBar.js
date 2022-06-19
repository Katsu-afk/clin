import React, { useContext } from 'react';
import { Context } from '../index';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router";
import {ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, BASKET_ROUTE, CONTACT_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink style={{color: 'white' , textDecoration:'none'} } to={CONTACT_ROUTE}>Саша&Маша</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-primary"}
                            className="ms-2"
                            onClick={() => navigate(CONTACT_ROUTE)}
                        >
                            Главная
                        </Button>
                        <Button
                            variant={"outline-primary"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-primary"}
                            onClick={() => navigate(BASKET_ROUTE)}
                        >
                            Корзина
                        </Button>
                        <Button
                            variant={"outline-primary"}
                            className="ms-2"
                        >
                            О нас
                        </Button>
                        <Button
                            variant={"outline-primary"}
                            className="ms-2"
                            onClick={() => navigate(SHOP_ROUTE)}
                        >
                            Товары и услуги
                        </Button>
                        <Button
                            variant={"outline-primary"}
                            className="ms-2"
                            onClick={() => logOut()}
                            to={SHOP_ROUTE}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-primary"}
                            className="ms-2"
                            onClick={() => navigate(CONTACT_ROUTE)}
                        >
                            Главная
                        </Button>
                        
                        <Button
                            variant={"outline-primary"}
                            className="ms-2"
                        >
                            
                            О нас
                        </Button>
                        <Button
                            variant={"outline-primary"}
                            className="ms-2"
                            onClick={() => navigate(SHOP_ROUTE)}
                        >
                            Товары и услуги
                        </Button>
                        <Button
                            variant={"outline-primary"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                       
                        <Button variant={"outline-primary"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }

        </Container>
        </Navbar>
    );
})

export default NavBar;
