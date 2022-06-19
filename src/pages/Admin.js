import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreatType from "../components/modals/CreatType";
import CreatClothing from "../components/modals/CreatClothing";

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [clothingVisible, setClothingVisible] = useState(false)

    return (
      <Container className="d-flex flex-column">
          <Button
              variant={"outline-dark "}
              className="mt-3 p-3"
              onClick={() => setTypeVisible(true)}
          >
              Добавить тип
          </Button>
          
          <Button
              variant={"outline-dark "}
              className="mt-3 p-3"
              onClick={() => setClothingVisible(true)}
          >
              Добавить услугу или товар
          </Button>
          <CreatType show={typeVisible} onHide={() => setTypeVisible(false)}/>
          <CreatClothing show={clothingVisible} onHide={() => setClothingVisible(false)}/>

      </Container>
    );
};

export default Admin;
