import { Link } from "react-router-dom";
import "./AboutMe.css";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import studentPhoto from "../../../images/student_photo.jpg";

export default function AboutMe() {
  return (
    <section className="section student">
      <SectionTitle>Студент</SectionTitle>
      <div className="student__profile">
        <div className="student__profile-info">
          <h2 className="student__profile-name">Виталий</h2>
          <h3 className="student__profile-about">
            Фронтенд-разработчик, 30&nbsp;лет
          </h3>
          <p className="student__profile-text">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
            экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
            слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С
            2015 года работал в&nbsp;компании «СКБ Контур». После того, как
            прошёл курс по веб&#8209;разработке, начал заниматься
            фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <Link to="https://github.com/Tony-web-dev" target="_blank" className="student__profile-link link-hover">
            Github
          </Link>
        </div>
        <img
          src={studentPhoto}
          alt="Фото профиля"
          className="student__profile-img"
        />
      </div>
      </section>
  )
};