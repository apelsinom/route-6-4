import React from 'react';
import styles from "./components/Site.module.css";
import {Outlet, useNavigate} from "react-router-dom";
import {ButtonLink} from "./components/pages/ButtonLink";
import {PATH} from "./DateCatalog/Catalog";

function App() {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate(-1);
    }
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <ButtonLink address={PATH.PAGE1} firm={PATH.PAGE1.toUpperCase()}/>
                    <ButtonLink address={PATH.PAGE2} firm={PATH.PAGE2.toUpperCase()}/>
                    <ButtonLink address={PATH.PAGE3} firm={PATH.PAGE3.toUpperCase()}/>
                    <ButtonLink address={PATH.PRICES} firm={PATH.PRICES.toUpperCase()}/>
                    <ButtonLink address={'protected'} firm={'protected'.toUpperCase()}/>
                </div>
                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}>
                        <button className={styles.ButtonLikeLink} onClick={navigateHandler}>НАЗАД</button>
                        <a className={styles.LinkLikeButton} href={PATH.PAGE1}>НА ГЛАВНУЮ</a>
                    </div>
                    <Outlet />

                    {/*Синтаксис, который был до router 6.4*/}

                    {/*<Routes>*/}
                    {/*    <Route path="" element={<Navigate to={PATH.PAGE1} />}/>*/}
                    {/*    <Route path={`${PATH.PAGE1}/:id`} element={<Model firm={PATH.PAGE1}/>}/>*/}
                    {/*    <Route path={`${PATH.PAGE2}/:id`} element={<Model firm={PATH.PAGE2}/>}/>*/}
                    {/*    <Route path={`${PATH.PAGE3}/:id`} element={<Model firm={PATH.PAGE3}/>}/>*/}
                    {/*    <Route path={PATH.PAGE1} element={<Sneakers catalog={sneakersArr[PATH.PAGE1]} item={PATH.PAGE1.toUpperCase()}/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<Sneakers catalog={sneakersArr[PATH.PAGE2]} item={PATH.PAGE2.toUpperCase()}/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<Sneakers catalog={sneakersArr[PATH.PAGE3]} item={PATH.PAGE3.toUpperCase()}/>}/>*/}
                    {/*    <Route path={PATH.PRICES} element={<Prices/>}/>*/}
                    {/*    /!*можно так, но остаётся виден неправильный адрес*!/*/}
                    {/*    <Route path="*" element={<Error404 />}/>*/}
                    {/*    /!*так неправильный адрес затирается на 'error404'*!/*/}
                    {/*    /!*<Route path={PATH.ERROR} element={<Error404 />}/> */}
                    {/*    <Route path="*" element={<Navigate to={PATH.ERROR} />}/>*!/*/}
                    {/*</Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
