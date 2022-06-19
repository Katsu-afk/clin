import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";


const BrandBar = observer(() => {
    const {clothing} = useContext(Context)
    return (
        <Row className="d-flex">
            {clothing.brands.map(brand =>
                <Card
                    className="p-3"
                    style={{cursor: "pointer" , width:"auto"} }
                    border={brand.id === clothing.selectedBrand.id ? 'danger' : 'dark'}
                    onClick={() => clothing.setSelectedBrand(brand)}
                    key={brand.id}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;