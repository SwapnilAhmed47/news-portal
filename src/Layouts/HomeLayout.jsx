import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header className=''>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 mt-10'>
                <aside className="col-span-3 h-fit sticky top-5">
                    <LeftAside></LeftAside>
                </aside>
                <section className="main_nav col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="right_nav col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;