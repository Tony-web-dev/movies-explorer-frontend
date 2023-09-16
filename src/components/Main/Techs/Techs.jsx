import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs">
      <SectionTitle variableTitleClass="section-title_type_low">Технологии</SectionTitle>
      <h3 className="techs__title">7&nbsp;технологий</h3>
      <h4 className="techs__subtitle">
        На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.
      </h4>
      <ul className="techs__list">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">mongoDB</li>
      </ul>
    </section>
  )
};