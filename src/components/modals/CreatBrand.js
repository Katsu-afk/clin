import React, {useState} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import {createBrand} from "../../http/clothingAPI";

const CreatBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name: value, }).then(data =>
            setValue(''))
            onHide()
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Записаться
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <from>
                        <p>Укажите дату записи</p>
                        <input style={{width:300, height:50, marginBottom:10}} type={'date'}></input>
                    </from>
                    <Form>
                        <FormControl
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите номер телефона"}
                />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={onHide}>Записаться </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatBrand;