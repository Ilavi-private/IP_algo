import React from "react";
import {ReturnButton} from "../return-button/return-button";
import {Link} from "react-router-dom";
import styles from "./solution-layout.module.css";

interface SolutionLayoutProps {
    title: string;
    extraClass?: string;
    children?: any;
}

export const SolutionLayout: React.FC<SolutionLayoutProps> = ({
                                                                  extraClass = "",
                                                                  title,
                                                                  children,
                                                              }) => {
    return (
        <main className={`${styles.content} ${extraClass}`}>
            <div className={styles.titleBox}>
                <h1 className={`text text_type_h1 text_color_h1 ${styles.title}`}>
                    VisuAlGo
                </h1>
                <span
                    className={`text text_color_secondary ${styles.subtitle}`}
                >
        </span>
            </div >
            <div className={styles.contentCard}>
                <Link className={styles.link} to="/VisuAlGo/">
                    <ReturnButton extraClass={styles.returnButton}/>
                </Link>
                    <h3 className={`text text_type_h2 text_color_h2 ${styles.cardTitle}`}>
                        {title}
                    </h3>

                    {children}
            </div>
            <p
                className={`text text_type_column text_color_input mt-14 ${styles.copyright}`}
            >
                ©Сделано Юровских Илави и Хрипуновым Даниилом.
            </p>
        </main>
    );
};
