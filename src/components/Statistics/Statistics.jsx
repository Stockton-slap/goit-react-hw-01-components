import css from './Statistics.module.css'
console.log(css);

const Statistics = ({ title, stats }) => {
       return <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
    <ul className={css.statList}>
               
     {stats.map(({label, percentage})=> {
      return <li className={css.item}>
      <span className={css.label}>.{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
    })}
    </ul>
    </section>
}

export default Statistics;