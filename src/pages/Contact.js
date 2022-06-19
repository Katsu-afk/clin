import React from 'react';
import { Button, Image , FormControl, Form} from "react-bootstrap";
import { ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, BASKET_ROUTE, CONTACT_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router";
import check_circle from "../assets/check_circle.png"
import favorite from "../assets/favorite.png"
import Fav from "../assets/Fav.png"
import home from "../assets/home.png"
import man1 from "../assets/man1.jpg"
import man2 from "../assets/man2.jpg"
import man3 from "../assets/man3.jpg"
import man4 from "../assets/man4.jpg"
import background from '../assets/background.webp'
import stl1 from "../assets/stl1.jpg"
import stl2 from "../assets/stl2.jpg"
import stl3 from '../assets/stl3.jpg'





const Contact = () => {

    const navigate = useNavigate()
    return (
        <div>
            <div className={"d-flex justify-content-center"} style={{ background: `url(${background}) no-repeat center`, width: "100%", height: 650, }}>
                <div className={"d-flex justify-content-center align-items-center flex-column "}>
                    <div className={"d-flex justify-content-center ms-2"} ><p style={{ padding: 5, border: '5px solid orange radius 10px', background: 'orange', borderRadius: 25 }}>Мы раскроем вашу красоту</p></div>
                    <h1 className={"d-flex justify-content-center ms-2"}>САЛОН КРАСОТЫ</h1>
                    <h1 className={"d-flex justify-content-center ms-2"}>САША&МАША</h1>
                    <div className={"d-flex justify-content-center ms-2"}>Выдающийся маникюр</div>
                    <Button
                        style={{ borderRadius: 30 }}
                        variant={"outline-warning"}
                        className="ms-2 mt-2"
                        onClick={() => navigate(SHOP_ROUTE)}
                    >
                        Записаться
                    </Button>
                </div>
            </div>
            <div className={"d-flex justify-content-center flex-column"} >
                <h4 style={{ color: "orange", textAlign: "center", marginTop: 50, }}>О нас</h4>
                <h1 style={{ textAlign: "center" }}>УХОД ЗА ВАШЕЙ КРАСОТОЙ</h1>
                <div className={"d-flex justify-content-center "}
                    style={{ border: "10px solid orange", marginTop: 20, marginRight: "45%", marginLeft: "45%", }}></div>
                <div className={"d-flex justify-content-center "}
                    style={{ border: "1px solid orange", marginTop: 30, marginRight: "30%", marginLeft: "30%", }}></div>
                <div className={"d-flex justify-content-center "}
                    style={{ border: "1px solid orange", marginTop: 30, marginRight: "30%", marginLeft: "30%", }}></div>
                <div style={{ marginRight: 30, marginLeft: 30, marginTop: 30, }}>Мы считаем что - красота залог счастья. Салон красоты САША&МАША - это место, где вы сможете побаловать себя
                    ,а так же отдохнуть в приятной расслабляющей обстановке. Пока вы будете отдыхать, наши мастера будут работать над вашим индивидуальныйм образом
                </div>
                <div className={"d-flex justify-content-center "}
                    style={{ border: "1px solid orange", marginBottom: 60, marginTop: 60, marginRight: "25%", marginLeft: "25%", }}>
                </div>
            </div>
            <div>
                <div className={"d-flex align-items-end  justify-content-center ms-2"}
                    style={{ background: "#36013f", height: 100 }}>
                    <h1 style={{ textAlign: 'center', color: "#fff", }}>НАШИ ПРЕИМУЩЕСТВА</h1>
                </div>
            </div>
            <div className={"d-flex   justify-content-evenly ms-2 flex-row"}
                style={{ color: "#fff", background: "orange", paddingTop: 50, paddingBottom: 50, paddingLeft: "10%", paddingRight: "10%" }}>
                <div className={"d-flex  justify-content-center ms-2 flex-column"}>
                    <div style={{ width: "100%", }} className={"d-flex  justify-content-center align-items-center"}>
                        <Image width={40} height={40} src={check_circle} />
                    </div>
                    <h2 style={{ textAlign: "center" }}>Безопасность</h2>
                    <div style={{ textAlign: "center", fontSize: 20 }}>Стерилизация инструментов и рабочей поверхности перед каждым клиентом, одноразовые материалы</div>
                </div>
                <div style={{ marginLeft: 20 }} className={"d-flex  justify-content-center ms-2 flex-column"}>
                    <div style={{ width: "100%", marginLeft: "10" }} className={"d-flex  justify-content-center align-items-center"}>
                        <Image width={40} height={40} src={home} />
                    </div>
                    <h2 style={{ textAlign: "center" }}>Доступность</h2>
                    <div style={{ textAlign: "center", fontSize: 20 }}>Накопительная скидка - с каждым последующем посещением она растет. Огромная палитра покрытий по разным ценам</div>
                </div>
                <div style={{ marginLeft: 20 }} className={"d-flex  justify-content-center ms-2 flex-column"}>
                    <div style={{ width: "100%", marginLeft: "10" }} className={"d-flex  justify-content-center align-items-center"}>
                        <Image width={40} height={40} src={Fav} />
                    </div>
                    <h2 style={{ textAlign: "center" }}>Гарантия</h2>
                    <div style={{ textAlign: "center", fontSize: 20 }}>Нашли недочет в работе наших мастеров? Мы обязательно выслушаем и устраним их бесплатно в течении 5 дней</div>
                </div>
                <div style={{ marginLeft: 20 }} className={"d-flex  justify-content-center ms-2 flex-column"}>
                    <div style={{ width: "100%" }} className={"d-flex  justify-content-center align-items-center"}>
                        <Image width={40} height={40} src={favorite} />
                    </div>
                    <h2 style={{ textAlign: "center" }}>Комфорт</h2>
                    <div style={{ textAlign: "center", fontSize: 20 }}>Просторная зона педикюра и маникюра с удобными креслами и возможностью заказать чай или кофе</div>
                </div>
            </div>
            <div className={"d-flex   justify-content-evenly ms-2 flex-row"}
                style={{ paddingTop: 50, paddingBottom: 50, paddingLeft: "10%", paddingRight: "10%" }}>
                <div style={{ width: "35%" }}>
                    <div style={{ color: "orange", paddingBottom: 10, fontSize: 20 }}>Галерея</div>
                    <h1>НАШИ РАБОТЫ ГОВОРЯТ ЛУЧШЕ СЛОВ!</h1>
                    <div className={"d-flex justify-content-center "}
                        style={{ border: "10px solid orange", marginTop: 20, width: 100 }}></div>
                    <div style={{ paddingTop: 30, fontSize: 18 }}>Здесь представлены наши лучшие работы, которые позволят вам оценить качество нашей работы и увидеть ту красоту, которую мы создаем на ваших ручках и ножках </div>
                </div >
                <div className={"d-flex ms-2 flex-column "}
                    style={{ justifyContent: 'center', width: "65%", marginLeft: 35 }}>
                    <div className={"d-flex ms-2 flex-row"}>
                        <div style={{ marginBottom: 10, marginRight: 10 }}>
                            <Image height={250} width={350} src={man3} />
                        </div>
                        <div>
                            <Image height={250} width={350} src={man1} />
                        </div>
                    </div>
                    <div className={"d-flex ms-2 flex-row"}>
                        <div style={{ marginBottom: 10, marginRight: 10 }}>
                            <Image height={250} width={350} src={man4} />
                        </div>
                        <div>
                            <Image height={250} width={350} src={man2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={"d-flex   justify-content-evenly ms-2 flex-row"}
                style={{ color: "#fff", background: "orange", paddingTop: 75, paddingBottom: 150, paddingLeft: "10%", paddingRight: "10%" }}>
            </div>
            <div style={{ marginTop: 60 }} >
                <div className={"d-flex justify-content-center flex-column"}>
                    <h4 style={{ color: 'orange', marginBottom: 10, textAlign: "center" }}>Наши цены</h4>
                    <h1 style={{ textAlign: "center" }}>ПРАЙС-ЛИСТ</h1>
                    <div className={"d-flex justify-content-center "}
                        style={{ border: "10px solid orange", marginTop: 20, marginLeft: "45%", marginRight: "45%" }}>
                    </div>
                </div>
                <div className={"d-flex  flex-row"}
                    style={{ marginTop: 60, marginBottom: 60  }}>
                    <div className={"d-flex  flex-column"}
                        style={{ paddingLeft: "15%", paddingRight: "2%", }}>
                        <div className={"d-flex  flex-row"}>
                            <Image height={100} width={100} src={Fav} />
                            <div >
                                <div className={"d-flex align-items-center flex-row"}>
                                    <div style={{ color: 'orange', }}>МАНИКЮР</div>
                                    <div style={{ border: "1px solid #C6C3B5", height: 1, width: 250, marginRight: 10, marginLeft: 10 }}></div>
                                    <div className={"d-flex justify-content-center "} style={{ border: "7px solid orange", background: 'orange', marginLeft: 10 }}>500руб</div>
                                </div>
                                <div style={{ paddingRight: 20 }}>Есть маникюр классический, аппаратный и комбинированный. В услугу маникюра входит: придание формы,
                                    бережная обработка, питание кутикулы маслом и увлажнение кремом.
                                </div>
                            </div>
                        </div>
                        <div className={"d-flex  flex-row"}
                            style={{ marginTop: 60 ,}}>
                            <Image height={100} width={100} src={Fav} />
                            <div >
                                <div className={"d-flex align-items-center flex-row"}>
                                    <div style={{ color: 'orange', width: 85 }} >МАНИКЮР+<br />ПОКРЫТИЕ ЛАКОМ</div>
                                    <div style={{ border: "1px solid #C6C3B5", height: 1, width: 250, marginRight: 10, marginLeft: 10 }}></div>
                                    <div className={"d-flex justify-content-center "} style={{ border: "7px solid orange", background: 'orange', marginLeft: 10 }}>1000руб</div>
                                </div>
                                <div style={{ paddingRight: 20 }}>Лак для ногтей подойдет тем, кто постоянно меняет цвет ногтей и любит поддерживать
                                    свежесть маникюра. Так как он без труда удаляется жидклстью для снятия лака.
                                </div>
                            </div>
                        </div>
                        <div className={"d-flex  flex-row"} style={{ marginTop: 60 }}>
                            <Image height={100} width={100} src={Fav} />
                            <div >
                                <div className={"d-flex align-items-center flex-row"}>
                                    <div style={{ color: 'orange', width: 85 }}>МАНИКЮР+<br />ПОКРЫТИЕ ГЕЛЬ ЛАКОМ</div>
                                    <div style={{ border: "1px solid #C6C3B5", height: 1, width: 250, marginRight: 10, marginLeft: 10 }}></div>
                                    <div className={"d-flex justify-content-center "} style={{ border: "7px solid orange", background: 'orange', marginLeft: 10 }}>1400руб</div>
                                </div>
                                <div style={{ paddingRight: 20 }}>Есть маникюр классический, аппаратный и комбинированный. В услугу маникюра входит: придание формы,
                                    бережная обработка, питание кутикулы маслом и увлажнение кремом.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"d-flex  flex-column"}
                        style={{ paddingRight: "15%" }}>
                        <div className={"d-flex  flex-row"}>
                            <Image height={100} width={100} src={Fav} />
                            <div >
                                <div className={"d-flex align-items-center flex-row"}>
                                    <div style={{ color: 'orange', }}>НАРАЩИВАНИЕ <br />РЕСНИЧЕК</div>
                                    <div style={{ border: "1px solid #C6C3B5", height: 1, width: 200, marginRight: 10, marginLeft: 10 }}></div>
                                    <div className={"d-flex justify-content-center "} style={{ border: "7px solid orange", width: 100, background: 'orange', marginLeft: 10 }}>от 1000руб</div>
                                </div>
                                <div style={{ paddingRight: 20 }}>Есть наращивания классические, а так же 2D и 3D.
                                </div>
                            </div>
                        </div>
                        <div className={"d-flex  flex-row"} style={{ marginTop: 60 }}>
                            <Image height={100} width={100} src={Fav} />
                            <div >
                                <div className={"d-flex align-items-center flex-row"}>
                                    <div style={{ color: 'orange', }}>КОСМЕТИЧЕСКИЕ <br />ПРОЦЕДУРЫ</div>
                                    <div style={{ border: "1px solid #C6C3B5", height: 1, width: 200, marginRight: 10, marginLeft: 10 }}></div>
                                    <div className={"d-flex justify-content-center "} style={{ border: "8px solid orange", width: 100, background: 'orange', marginLeft: 10 }}>от 1300руб</div>
                                </div>
                                <div style={{ paddingRight: 20 }}>Есть маникюр классический, аппаратный и комбинированный. В услугу маникюра входит: придание формы,
                                    бережная обработка, питание кутикулы маслом и увлажнение кремом.
                                </div>
                            </div>
                        </div>
                        <div className={"d-flex  flex-row"} style={{ marginTop: 60 }}>
                            <Image height={100} width={100} src={Fav} />
                            <div >
                                <div className={"d-flex align-items-center flex-row"}>
                                    <div style={{ color: 'orange', }}>Стрижки</div>
                                    <div style={{ border: "1px solid #C6C3B5", height: 1, width: 250, marginRight: 10, marginLeft: 10 }}></div>
                                    <div className={"d-flex justify-content-center "} style={{ border: "7px solid orange", background: 'orange', marginLeft: 10 }}>1800руб</div>
                                </div>
                                <div style={{ paddingRight: 20 }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: 60,paddingBottom: 60, background: "orange" }} >
                <div className={"d-flex justify-content-center flex-column"}>
                    <h4 style={{ color: 'white', marginBottom: 10, textAlign: "center" }}>Наша команда</h4>
                    <h1 style={{ color: 'white', textAlign: "center" }}>БЛИСТАТЕЛЬНЫЕ СПЕЦИАЛИСТЫ</h1>
                    <div className={"d-flex justify-content-center "}
                        style={{ border: "7px solid white", marginTop: 20, marginLeft: "47%", marginRight: "47%" }}>
                    </div>
                </div>
                <div className={"d-flex justify-content-center "} style={{ paddingTop: 60, paddingLeft: "20%", paddingRight: "20%", }}>
                    <div style={{ marginRight: "50",  }}>
                        <Image height={400} width={250} src={stl1} />
                        <div  height={100} width={250} style={{ background: "white", fontSize:27, color:'orange'}}>
                            Юлия Петрова
                        </div>
                    </div>
                    <div  >
                        <Image height={400} width={250} src={stl2} />
                        <div  height={100} width={250} style={{ background: "white", fontSize:27, color:'orange'}}>
                        Мария Громова
                        </div>
                    </div>
                    <div style={{ marginLeft: "50", }}>
                        <Image height={400} width={250} src={stl3} />
                        <div  height={100} width={250} style={{ background: "white", fontSize:27, color:'orange'}}>
                            Полина Менчина
                        </div>
                    </div>
                </div>
            </div>
            <div className={"d-flex justify-content-center flex-column "} style={{background:"#c0c0c0", paddingLeft:"25%", paddingRight:"25%"}}>
                
                    <h1>Обратная связь</h1>
                    <div>Поделись мнением о нашей работе или задайте нам любой интересующий вас вопрос в поле комментарий</div>
                
                <Form className="d-flex flex-column">
                <FormControl
                        className="mt-3"
                        placeholder="Имя"
                    />
                  <FormControl
                        className="mt-3"
                        placeholder="Фамилия"
                        
                  />
                  <FormControl
                  className="mt-3"
                  placeholder="Телефон"
                 />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                     <FormControl
                        className="mt-3"
                        placeholder="Комментарий"
                    />
                    <Button
                          variant={"outline-success"}
                          style={{width:"auto"}}
                      >
                      </Button>
                </Form>
            </div>
            </div>
    );
};

export default Contact;