import React, { useEffect, useState } from "react";

const App = () => {
	const [ques, setQues] = useState([]);
	const [loading, setLoading] = useState(true);
	const [count, setCount] = useState(0);

	const [viewAnswer, setViewAnswer] = useState(false);
	const toggleAnswer = () => setViewAnswer(!viewAnswer);

	useEffect(() => {
		function getQuestions() {
			fetch("https://raw.githubusercontent.com/dha-stix/image/main/db.json")
				.then((res) => res.json())
				.then((data) => {
					setQues(data.data);
					setLoading(false);
				})
				.catch((err) => console.error(err));
		}
		getQuestions();
	}, []);

	const nextFunction = () => {
		if (count < ques.length - 1) {
			setCount(count + 1);
			setViewAnswer(false);
		}
	};
	const prevFunction = () => {
		if (count > 0) {
			setCount(count - 1);
			setViewAnswer(false);
		}
	};
	return (
		<div>
			<header>
				<p>
					Built by{" "}
					<a
						href='https://twitter.com/dayvid_JS'
						target='_blank'
						rel='noreferrer'
						style={{ color: "#f9f9f9" }}
					>
						David Asaolu
					</a>
				</p>
			</header>
			{loading ? (
				<h3>Loading...Please wait! 🙏🏽</h3>
			) : (
				<div style={{ padding: "20px" }}>
					<h3>Questions left: {ques.length - (count + 1)}</h3>
					<p className='question'>{ques[count].question}</p>
					<p>{viewAnswer && ques[count].answer}</p>
					<button className='answerBtn' onClick={toggleAnswer}>
						{viewAnswer ? "Hide" : "Show"} Answer
					</button>
					<div className='btn__group'>
						<button className='prevBtn' onClick={prevFunction}>
							PREV
						</button>
						<button className='nextBtn' onClick={nextFunction}>
							NEXT
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
