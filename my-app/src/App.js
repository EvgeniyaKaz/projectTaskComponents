import styles from "./app.module.css";
import { useState } from "react";

function App() {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);
	const [error, setError] = useState("");

	const onInputButtonClick = () => {
		const promptValue = prompt("Введите значение");
		promptValue.length < 3
			? setError("Введенное значение должно содержать минимум 3 символа")
			: setError("")
			? setError("Введенное значение должно содержать минимум 3 символа")
			: setValue(promptValue);
	};

	let isValueVaild = true;
	value.length < 3 ? (isValueVaild = false) : (isValueVaild = true);

	const id = Date.now();
	const updatedList = [...list, { id, value }];
	console.log(updatedList);

	const onAddButtonClick = () => {
		if (isValueVaild) {
		}
		setList(updatedList);
		setValue("");
		setError("");
	};

	return (
		<div className={styles.app}>
			<h1 className={styles["page-heading"]}>Ввод значения</h1>
			<p className={styles["no-margin-text"]}>
				Текущее значение <code>value</code>: "
				<output className={styles["current-value"]}>{value}</output>"
			</p>
			{error !== "" && <div className={styles.error}>{error}</div>}

			<div className={styles["buttons-container"]}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>

			<div className={styles["list-container"]}>
				<h2 className={styles["list-heading"]}>Список:</h2>
				<p className={styles["no-margin-text"]}>
					{list.length <= 0 ? "Нет добавленных элементов" : null}
				</p>
				<ul className={styles.list}>
					{list.map(({ id, value }) =>
						list.length > 0 ? (
							<li className={styles["list-item"]} key={id}>
								{value}
							</li>
						) : null
					)}
				</ul>
			</div>
		</div>
	);
}

export default App;
