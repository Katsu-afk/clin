import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import ClothingItem from "./ClothingItem";

const ClothingList = observer(() => {
    const {clothing} = useContext(Context)
    return (
        <Row className="d-flex">
            {clothing.clothings.map(clothing =>
                <ClothingItem
                    key={clothing.id}
                    clothing={clothing}
                />
            )}
        </Row>
    );
});

export default ClothingList;