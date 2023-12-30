import React, {useContext} from 'react';
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../../index";
import {observer} from "mobx-react-lite";
import {Card, Carousel, ListGroup} from "react-bootstrap";
import styles from "./ItemInfoPage.module.sass"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CustomButton from "../../compenents/UI Elements/CustomButton/CustomButton";

interface Size {
    name: string;
    price: number | null;
}

interface Sizes {
    [key: string]: Size;
}

const ItemInfoPage = () => {

    const { id } = useParams()
    const { items } = useContext(AppContext)
    const product = items.getItemById(id ? id : '')
    const navigate = useNavigate()

    const renderSizes = (sizes: Sizes) => {
        return Object.entries(sizes).map(([key, value]) => (
            <ListGroup.Item key={key}>
                {value.name}{value.price ? ` - $${value.price}` : ''}
            </ListGroup.Item>
        ));
    };

    return (
        product ?
            <div className={styles.itemsPage}>
                <div style={{marginBottom: "1em"}}>
                    <CustomButton label="Back" onClick={() => navigate(-1)}/>
                </div>
                <Card className={styles.itemCard}>
                    <Carousel className={styles.carousel}>
                        {product.imageLinks.map((imageLink, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={imageLink}
                                    alt={`Slide ${index}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <div className={styles.cardInfo}>
                        <Card.Header className={styles.cardTitle}>{product.name}</Card.Header>
                        <Card.Body>
                            <Card.Title>{product.brand}</Card.Title>
                            <Card.Text as="div">
                                <strong>Properties:</strong>
                                <ul>
                                    {Array.isArray(product.properties) ? product.properties.map((prop, index) => (
                                        <li key={index}>{`${prop.key}: ${prop.value}`}</li>
                                    )) : null}
                                </ul>
                            </Card.Text>

                            <a href={product.link} target="_blank" rel="noopener noreferrer">View Product <FontAwesomeIcon icon={faArrowRight}/></a>
                            <div className={styles.sizeList}>
                                <h5>US Men's Sizes</h5>
                                <ListGroup style={{marginTop: "1em"}}>
                                    {"US Men" in product.sizes ? renderSizes(product.sizes['US Men']) : "Out of stock"}
                                </ListGroup>
                            </div>

                            <div className={styles.sizeList}>
                                <h5>US Women's Sizes</h5>
                                <ListGroup style={{marginTop: "1em"}}>
                                    {"US Women" in product.sizes ? renderSizes(product.sizes['US Women']) : "Out of stock"}
                                </ListGroup>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
            </div>
            : <Navigate to="/items"/>
    );
};

export default ItemInfoPage;