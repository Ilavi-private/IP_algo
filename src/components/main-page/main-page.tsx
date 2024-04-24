import React from "react";
import {Link} from "react-router-dom";
import { Outlet } from 'react-router-dom';
import styles from "./main-page.module.css";

interface MainPageProps {
    extraClass?: string;
}

export const MainPage: React.FC<MainPageProps> = ({extraClass = ""}) => {
    return (
        <>
            <Outlet></Outlet>
            <main className={`${styles.content} ${extraClass}`}>
                <div className={styles.title_box}>
                    <h1 className={`text text_type_h1 text_color_h1 ${styles.title}`}>
                        Алгоритмы
                    </h1>
                    <p
                        className={`text text_type_h2 text_color_secondary ${styles.title}`}
                    >
                        и структуры данных
                    </p>
                </div>
                <div className={styles.cards_box}>
                    <Link className={styles.link} to="queue">
                        <div className={`${styles.card} ${styles.queue}`}/>
                    </Link>
                    <Link className={styles.link} to="list">
                        <div className={`${styles.card} ${styles.list}`}/>
                    </Link>
                    <Link className={styles.link} to="sorting">
                        <div className={`${styles.card} ${styles.arr}`}/>
                    </Link>
                    <Link className={styles.link} to="stack">
                        <div className={`${styles.card} ${styles.stack}`}/>
                    </Link>
                </div>
                <p
                    className={`text text_type_column text_color_input mt-14 ${styles.copyright}`}
                >
                    © Сделано Юровских Илави и Хрипуновым Даниилом.
                </p>
            </main>
        </>
    );
};
