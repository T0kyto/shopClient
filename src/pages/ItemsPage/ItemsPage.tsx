import React, {useContext, useEffect, useState} from 'react';
import {IItem} from "../../store/ItemsStore";
import ProductCard from "../../compenents/ProductCard/ProductCard";
import styles from "./ItemsPage.module.sass"
import {getItems} from "../../api/ItemsApi";
import {AppContext} from "../../index";
import {Pagination} from "react-bootstrap";

const ItemsPage = () => {
    const { user, items } = useContext(AppContext);
    const [itemsState, setItems] = useState<IItem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; // Можно изменить в соответствии с желаемым размером страницы

    const fetchItems = async () => {
        try {
            const fetchedItems = await getItems(user.user.token, currentPage, pageSize);
            setItems(fetchedItems); // Предполагается, что ответ содержит поле data
            console.log(fetchedItems)
            items.setItems(fetchedItems)
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchItems();
    }, [currentPage]); // Вызываем fetchItems при изменении currentPage

    // Функция для изменения страницы
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={styles.ItemsPage}>
            <div className={styles.itemsContainer}>
                {itemsState.map(item => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>


            <Pagination className={styles.paginationContainer}>
                {Array.from({ length: 5 }, (_, i) => i + 1).map(number => (
                    <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
                        {number}
                    </Pagination.Item>
                ))}
            </Pagination>


        </div>
    );
};

export default ItemsPage;