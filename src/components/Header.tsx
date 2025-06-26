import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../store/navigationSlice';
import type { page } from '../store/navigationSlice';
import ModalMenu from './ModalMenu';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: page) => {
    dispatch(setPage(page));
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <h1>Мой сайт</h1>

        <nav className="nav">
          <button onClick={() => handleNavigation('home')}>Главная</button>
          <button onClick={() => handleNavigation('about')}>О нас</button>
          <button onClick={() => handleNavigation('contact')}>Контакты</button>
        </nav>

        <button
          className="menu-button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {isMenuOpen && (
        <ModalMenu onClose={() => setIsMenuOpen(false)}>
          <button onClick={() => handleNavigation('home')}>Главная</button>
          <button onClick={() => handleNavigation('about')}>О нас</button>
          <button onClick={() => handleNavigation('contact')}>Контакты</button>
        </ModalMenu>
      )}
    </>
  );
};

export default Header;