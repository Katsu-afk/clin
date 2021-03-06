import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {clothing} = useContext(Context)
    const pages = [1, 2, 3, 4, 5]
    return (
        <Pagination className={"mp-5"}>
            {pages.map(page =>
                <Pagination.Item>{page}</Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;