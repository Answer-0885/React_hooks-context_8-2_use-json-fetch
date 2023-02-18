import './App.css';
import Component from './components/Component';

const PORT = 7070;
const theGoodURL = `http://localhost:${PORT}/data`;
const theBadURL = `http://localhost:${PORT}/error`;
const theUglyURL = `http://localhost:${PORT}/loading`;

export default function App() {
  return (
    <div className="App">
      <Component url={theGoodURL} title="Успешное получение данных;" />
      <Component url={theBadURL} title="Получение 500 ошибки" />
      <Component url={theUglyURL} title="Индикатор загрузки" />
    </div>
  );
}