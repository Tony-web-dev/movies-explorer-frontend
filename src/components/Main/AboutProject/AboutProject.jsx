import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="section project" id={"project"}>
      <SectionTitle>О проекте</SectionTitle>
      <div className="project__articles">
        <div className="project__article">
          <h3 className="project__article-subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project__article-text">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
          </p>
        </div>
        <div className="project__article">
          <h3 className="project__article-subtitle">
            На&nbsp;выполнение диплома ушло 5 недель
          </h3>
          <p className="project__article-text">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project__table">
        <div className="project__table-cell">
          <h3 className="project__table-cell-title project__table-cell-title_green">
            1&nbsp;неделя
          </h3>
          <p className="project__table-cell-text">Back-end</p>
        </div>
        <div className="project__table-cell">
          <h3 className="project__table-cell-title">4&nbsp;недели</h3>
          <p className="project__table-cell-text">Front-end</p>
        </div>
      </div>
    </section>
  )
};