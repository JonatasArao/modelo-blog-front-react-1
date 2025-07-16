import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Index from './pages/Index';
import Page from './pages/Page';
import Author from './pages/Author';
import Search from './pages/Search';
import PopularLatestPosts from './pages/PopularLatestPosts';
import Contact from './pages/Contact';

import Header from './components/Header';
import { FooterNav } from './components/Footer';

import logo from './assets/img/Logo.png';

export default function AppRoutes() {
    const [headerPages, setHeaderPages] = useState([]);

    useEffect(() => {
      let temp = [];
      for(let i = 1; i <= 4; i++){
        temp.push({
          id: i,
          name: `Página ${i}`,
          url: `${import.meta.env.BASE_URL}p/${i}`
        });
      }
      setHeaderPages(temp)
    },[]);
  
    const [footerPages, setFooterPages] = useState([]);
    useEffect(() => {
      let temp = [
        {
          id: 1,
          name: `Últimas novidades`,
          url: import.meta.env.BASE_URL + 'latestposts'
        },
        {
          id: 2,
          name: `Populares`,
          url: import.meta.env.BASE_URL + 'popularposts'
        },
        {
          id: 3,
          name: `Contato`,
          url: import.meta.env.BASE_URL + 'contact'
        }
      ];
      setFooterPages(temp);
    },[]);
    
    return(
        <BrowserRouter>
            <Header logo={logo} blogName="Design Teste" pages={headerPages} />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/p/:id/:page?" element={<Page />} />
                <Route path="/a/:id/:author?" element={<Author />} />
                <Route path="/s/:query" element={<Search />} />
                <Route path="/popularposts" element={<PopularLatestPosts />} />
                <Route path="/latestposts" element={<PopularLatestPosts />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <FooterNav logo={logo} blogName="Design Teste" blogDescription="Descrição do Blog" pages={footerPages}/>
        </BrowserRouter>
    );
}