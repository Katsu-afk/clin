import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, FormControl, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {registration, login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router";



const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin =location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin){
                data = await login(email, password);
            }else {
                data = await registration(email, password);
            }
            user.setUser(data)
            user.setIsAuth(true)
            if (email === "user123@mail.ru"){
                user.setIsAdmin(true)
            }
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        }catch (e) {
        }

    }

    return (
      <Container
          className="d-flex justify-content-center align-items-center"
          style={{height: window.innerHeight - 54}}
      >
          <Card style={{width: 600}} className="p-5">
              <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
              <Form className="d-flex flex-column">
                    <FormControl
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                  <FormControl
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                  />
                  {/*{isLogin ? "" : <FormControl*/}
                  {/*    className="mt-3"*/}
                  {/*    placeholder="Повторите пароль"*/}
                  {/*    type="password"*/}
                  {/*/>*/}
                  <Row className="d-flex justify-content-between mt-3 pe-2 ps-1">
                      {isLogin ?
                          <div style={{width:"auto"}}>
                              Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                          </div >
                          :
                          <div style={{width:"auto"}}>
                              Eсть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                          </div >
                      }

                      <Button
                          variant={"outline-success"}
                          style={{width:"auto"}}
                          onClick={click}
                      >
                          {isLogin ? 'Войти' : "Регистрация"}
                      </Button>
                  </Row>
              </Form>
          </Card>
      </Container>
    );
});

export default Auth;
