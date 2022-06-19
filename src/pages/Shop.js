import React, {useContext, useEffect,useState} from 'react';
import {Container, Row, Col,Image ,Button} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ClothingList from "../components/ClothingList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchClothings, fetchTypes} from "../http/clothingAPI";
import Fav from "../assets/Fav.png"
import CreatBrand from "../components/modals/CreatBrand";
import man1 from "../assets/man1.jpg"
import man2 from "../assets/man2.jpg"
import man3 from "../assets/man3.jpg"
import man4 from "../assets/man4.jpg"
import man5 from "../assets/man5.jpg"
import man6 from "../assets/man6.jpg"
import man7 from "../assets/man7.jpg"
import man8 from "../assets/man8.jpg"


const Shop = observer(() => {
    const {clothing} = useContext(Context)
    const [brandVisible, setBrandVisible] = useState(false)


    useEffect(() => {
        fetchTypes().then(data => clothing.setTypes(data))
        fetchBrands().then(data => clothing.setBrands(data))
        fetchClothings().then(data => clothing.setClothings(data.rows))
    }, [])

    return (
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
                            <Image style={{borderRadius:60,marginRight: 20 ,}} height={100} width={150} src={man1} />
                            <div >
                                <div className={"d-flex align-items-center flex-row"}>
                                    <div style={{ color: 'orange', }}>МАНИКЮР</div>
                                    <div style={{ border: "1px solid #C6C3B5", height: 1, width: 250, marginRight: 10, marginLeft: 10 }}></div>
                                    <div className={"d-flex justify-content-center "} style={{ border: "7px solid orange", background: 'orange', marginLeft: 10 }}>500руб</div>
                                </div>
                                <div style={{ paddingRight: 20 }}>Есть маникюр классический, аппаратный и комбинированный. В услугу маникюра входит: придание формы,
                                    бережная обработка, питание кутикулы маслом и увлажнение кремом.
                                    <div>
                                        <Button
                                            variant={"outline-dark "}
                                            className="mt-3 p-3"
                                            onClick={() => setBrandVisible(true)}
                                        >
                                            Записаться
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"d-flex  flex-row"}
                            style={{ marginTop: 60 ,}}>
                            <Image style={{borderRadius:60,marginRight: 20 ,}} height={100} width={150} src={man3} />
                            <div >
                                <div className={"d-flex align-items-center flex-row"}>
                                    <div style={{ color: 'orange', width: 85 }} >МАНИКЮР+<br />ПОКРЫТИЕ ЛАКОМ</div>
                                    <div style={{ border: "1px solid #C6C3B5", height: 1, width: 250, marginRight: 10, marginLeft: 10 }}></div>
                                    <div className={"d-flex justify-content-center "} style={{ border: "7px solid orange", background: 'orange', marginLeft: 10 }}>1000руб</div>
                                </div>
                                <div style={{ paddingRight: 20 }}>Лак для ногтей подойдет тем, кто постоянно меняет цвет ногтей и любит поддерживать
                                    свежесть маникюра. Так как он без труда удаляется жидклстью для снятия лака.
                                </div>
                                <div>
                                        <Button
                                            variant={"outline-dark "}
                                            className="mt-3 p-3"
                                            onClick={() => setBrandVisible(true)}
                                        >
                                            Записаться
                                        </Button>
                                    </div>
                            </div>
                        </div>
                        <div className={"d-flex  flex-row"} style={{ marginTop: 60 }}>
                            <Image style={{borderRadius:60,marginRight: 20 ,}} height={100} width={150} src={man5} />
                            <div >
                                <div className={"d-flex align-items-center flex-row"}>
                                    <div style={{ color: 'orange', width: 85 }}>МАНИКЮР+<br />ПОКРЫТИЕ ГЕЛЬ ЛАКОМ</div>
                                    <div style={{ border: "1px solid #C6C3B5", height: 1, width: 250, marginRight: 10, marginLeft: 10 }}></div>
                                    <div className={"d-flex justify-content-center "} style={{ border: "7px solid orange", background: 'orange', marginLeft: 10 }}>1400руб</div>
                                </div>
                                <div style={{ paddingRight: 20 }}>Есть маникюр классический, аппаратный и комбинированный. В услугу маникюра входит: придание формы,
                                    бережная обработка, питание кутикулы маслом и увлажнение кремом.
                                </div>
                                <div>
                                        <Button
                                            variant={"outline-dark "}
                                            className="mt-3 p-3"
                                            onClick={() => setBrandVisible(true)}
                                        >
                                            Записаться
                                        </Button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className={"d-flex  flex-column"}
                        style={{ paddingRight: "15%" }}>
                        <div className={"d-flex  flex-row"}>
                            <Image style={{borderRadius:60,marginRight: 20 ,}} height={100} width={150} src={man6} />
                            <div >
                                <div className={"d-flex align-items-center flex-row"}>
                                    <div style={{ color: 'orange', }}>НАРАЩИВАНИЕ <br />РЕСНИЧЕК</div>
                                    <div style={{ border: "1px solid #C6C3B5", height: 1, width: 200, marginRight: 10, marginLeft: 10 }}></div>
                                    <div className={"d-flex justify-content-center "} style={{ border: "7px solid orange", width: 100, background: 'orange', marginLeft: 10 }}>от 1000руб</div>
                                </div>
                                <div style={{ paddingRight: 20 }}>Есть наращивания классические, а так же 2D и 3D.
                                </div>
                                 <div>
                                        <Button
                                            variant={"outline-dark "}
                                            className="mt-3 p-3"
                                            onClick={() => setBrandVisible(true)}
                                        >
                                            Записаться
                                        </Button>
                                    </div>
                            </div>
                        </div>
                        <div className={"d-flex  flex-row"} style={{ marginTop: 60 }}>
                            <Image style={{borderRadius:60,marginRight: 20 ,}} height={100} width={150} src={man8} />
                            <div >
                                <div className={"d-flex align-items-center flex-row"}>
                                    <div style={{ color: 'orange', }}>КОСМЕТИЧЕСКИЕ <br />ПРОЦЕДУРЫ</div>
                                    <div style={{ border: "1px solid #C6C3B5", height: 1, width: 200, marginRight: 10, marginLeft: 10 }}></div>
                                    <div className={"d-flex justify-content-center "} style={{ border: "8px solid orange", width: 100, background: 'orange', marginLeft: 10 }}>от 1300руб</div>
                                </div>
                                <div style={{ paddingRight: 20 }}>Есть маникюр классический, аппаратный и комбинированный. В услугу маникюра входит: придание формы,
                                    бережная обработка, питание кутикулы маслом и увлажнение кремом.
                                </div>
                                <div>
                                        <Button
                                            variant={"outline-dark "}
                                            className="mt-3 p-3"
                                            onClick={() => setBrandVisible(true)}
                                        >
                                            Записаться
                                        </Button>
                                    </div>
                            </div>
                        </div>
                        <div className={"d-flex  flex-row"} style={{ marginTop: 60 }}>
                            <Image style={{borderRadius:60,marginRight: 20 ,}} height={100} width={150} src={man7} />
                            <div >
                                <div className={"d-flex align-items-center flex-row"}>
                                    <div style={{ color: 'orange', }}>Стрижки</div>
                                    <div style={{ border: "1px solid #C6C3B5", height: 1, width: 250, marginRight: 10, marginLeft: 10 }}></div>
                                    <div className={"d-flex justify-content-center "} style={{ border: "7px solid orange", background: 'orange', marginLeft: 10 }}>1800руб</div>
                                </div>
                                <div>
                                        <Button
                                            variant={"outline-dark "}
                                            className="mt-3 p-3"
                                            onClick={() => setBrandVisible(true)}
                                        >
                                            Записаться
                                        </Button>
                                    </div>
                                <div style={{ paddingRight: 20 }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          <CreatBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>

            </div>

    );
});

export default Shop;
