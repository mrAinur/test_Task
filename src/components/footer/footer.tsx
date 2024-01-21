import style from "./footer.module.css";

export default function footer() {
  return (
    <footer className={style.mainBox}>
      <div className={style.border}></div>
      <p className={style.paragraph}>&copy; Айнур Зарипов, 2024</p>
    </footer>
  );
}
