import {IItem} from "../../store/ItemsStore";
import {Card, Carousel} from "react-bootstrap";
import styles from "./ProductCard.module.sass"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";

const ProductCard = ({ product }: { product: IItem }) => {

    const navigate = useNavigate()

    return (
        <Card className={styles.productCard} >
            <div className={styles.carouselContainer}>
                {product.imageLinks.length !== 0 ? (
                    <div className={styles.carousel}>
                        <Carousel>
                            {product.imageLinks.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={image}
                                        alt={`Slide ${index}`}
                                        onClick={() => navigate(`/item/${product.id}`)}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                ) : <h1>No photo</h1>}
            </div>

            <div className={styles.cardInfo}>
                <Card.Body>
                    <Card.Title className={styles.cardTitle} onClick={() => navigate(`/item/${product.id}`)}>{product.name}</Card.Title>
                    <Card.Text>{"Brand: " + product.brand}</Card.Text>
                    <a href={product.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>Link<FontAwesomeIcon icon={faArrowRight} style={{marginLeft: "0.7em"}}/></a>
                </Card.Body>
            </div>
        </Card>
    );
};




export default ProductCard;