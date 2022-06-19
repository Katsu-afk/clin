import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from "../assets/bigStar.png"
import {useParams} from "react-router-dom";
import {addToBasket ,fetchOneClothings} from "../http/clothingAPI";

const ClothingPage = () => {
    const [clothing, setClothing] = useState({info: []})
    const {id} = useParams()
    useEffect(() =>{
        fetchOneClothings(id).then(data => setClothing(data))
    }, [])

    const add = () => {
        const formData = new FormData()
        formData.append('clothingId', id)
        addToBasket(formData).then(response => alert(`Товар ` + clothing.name + ` был добавлен в вашу корзину!`))
    }


    return (
      <Container className={"mt-3"}>
          <Row>
              <Col md={4}>
                  <Card
                      className="d-flex flex-column align-items-center justify-content-around"
                      style={{width: 300, height: 300, fontSize: 32, border: 'white'}}
                  >
                      <h1>{clothing.name}</h1>

                  </Card>
              </Col>
              <Col md={4}>
                  <Image width={300} height={300} src={process.env.REACT_APP_API_URL + clothing.img}/>
              </Col>
              <Col md={4}>
                  <Card
                      className={"d-flex flex-column justify-content-around align-items-center"}
                      style={{width: 300, height: 300, fontSize:32, border: '5px solid lightgray' }}
                  >
                      <h3 style={{width:"auto"}}>{clothing.price}</h3>
                      <Button
                          variant={"outline-dark"}
                          onClick={add} style={{width:"auto"}}>
                          Приобрести
                      </Button>
                  </Card>
              </Col>
          </Row><br/>
          <Row className="d-flex flex-column m-3">
              <h1>Описание</h1>
              {clothing.info.map((info, index) =>
                  <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray': 'transparent' , padding: 10}}>
                      {info.title}: {info.description}
                  </Row>
              )}
          </Row>
      </Container>
    );
};

export default ClothingPage;
