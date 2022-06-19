import React from 'react';
import {Card, Col, Image, Button} from "react-bootstrap";
import star from "../assets/star.png"
import {useNavigate} from "react-router";
import {CLOTHING_ROUTE} from "../utils/consts";


const ClothingItem = ({clothing}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3"}>
            <div className={"d-flex flex-column"}
            >
                <div>
                    <Image width={250} height={150} src={process.env.REACT_APP_API_URL + clothing.img}/>
                </div>
                    <div className="">
                        <div className="d-flex align-items-center">
                            <div>{clothing.name}</div>
                            <div >{clothing.rating}</div>
                            <div >{clothing.description}</div>
                            <Image width={17} height={17} src={star}/>
                        </div>
                    </div>
                    
                    <Button
                        onClick={() => navigate(CLOTHING_ROUTE + '/' + clothing.id)}
                    >
                        Подробнее
                    </Button>
            </div>
        </Col>
    );
};

export default ClothingItem;