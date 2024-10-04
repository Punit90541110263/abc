import React from 'react';
import Navbar from './Navbar';
import TaskList from './TaskList';
import Footer from './Footer';

const Main = () => {
  return (
    <div>
      <Navbar />
      <TaskList />
      <Footer />
    </div>
  );
};

export default Main;
