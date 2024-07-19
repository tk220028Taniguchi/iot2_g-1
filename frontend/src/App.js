// アプリケーションの主要なレイアウト構成

import React from 'react';
import ChartComponent from './components/ChartComponent';
import './styles.css';

const App = () => {
  return (
    <div>
      <h1>Data Visualization</h1>
      <ChartComponent />
    </div>
  );
};

export default App;