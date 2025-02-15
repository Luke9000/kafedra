import "./Table.css";

const baseElements = [
  "AR/VR",
  "Геймдев",
  "Фото и видео",
  "UX/UI дизайн",
  "Анимация",
  "Брендинг",
  "Цифровая мода",
  "Бизнес процессы",
  "Нейросети",
  "Backend",
  "3D",
  "Frontend",
  "Контент",
  "Верстка книги",
  "Анализ данных",
];

const newElements = [
  "Трехмерное моделирование",
  "Мультимедиа",
  "Геймдев",
  "Контент цифровых ресурсов",
  "ИИ",
  "Цифровизация бизнес процессов",
  "Цифровая мода",
  "Выставочные пространства",
  "Фирменный стиль",
];

const SwitchableTable: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="grid">
        {baseElements.map((item, index) => (
          <b key={`base-${index}`} className="grid-item base">
            {item}
          </b>
        ))}
        {newElements.map((item, index) => (
          <b key={`new-${index}`} className="grid-item new">
            {item}
          </b>
        ))}
      </div>
    </div>
  );
};

export default SwitchableTable;
