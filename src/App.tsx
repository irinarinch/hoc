import Aggregation from "./components/aggregation/Aggregation";
import Highlight from "./components/highlight/Highlight";
import Time from "./components/time/Time";

export default function App() {
  return (
    <>
      <h1>HOC — Higher Order Components</h1>
      <div className="task">
        <h4>Задача 1. Форматирование даты публикации</h4>
        <Time />
      </div>
      <div className="task">
        <h4>Задача 2.Подсвечивание блоков</h4>
        <Highlight />
      </div>
      <div className="task">
        <h4>Задача 3.Агрегация данных для таблиц — необязательная задача.</h4>
        <Aggregation />
      </div>
    </>
  );
}
