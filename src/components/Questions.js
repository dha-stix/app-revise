import React, {useState, useEffect} from 'react'
import "../styles/AboutPage.css"
import {useHistory} from "react-router-dom"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Questions = ({course}) => {
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [ans, showAns] = useState(false)
    const toggleAnswer = () => showAns(!ans)
    const [questions, setQuestions] = useState([])
    const history = useHistory()
    const goHomeFunction = () => history.push("/")


    let code
    course === "ECN214" ? code = 214 : code = 206
    
    useEffect(()=> {
        fetch(`https://csc-ques.herokuapp.com/questions/${code}`)
            .then(data => data.json()).then(res => {
            setQuestions(res.doc)
            setLoading(false)
        })
    }, [])

    const nextFunction = () => {
        if (count < questions.length - 1) {
          setCount(count + 1);
          showAns(false)
        }
      };
      const prevFunction = () => {
        if (count > 0) {
          setCount(count - 1);
          showAns(false)
        }
      }
    return (
    
            <div className="questions">
              {
                loading ? (
                  <div className="loading--section">
                  <Loader type="Bars" color="#00BFFF" height={80} width={80} />
                  </div>
                  
                ) :
                (
                <>
                  <h2>{course}</h2>

                <div className="quiz" key={questions[count].id}>
                    <h3>{questions[count].question}</h3>
                   {
                     ans && (<p>{questions[count].answer}</p>)
                   } 
                  <button onClick={toggleAnswer}>{ ans ? "Hide" : "Show"} Answer</button>
                </div>

                <div className="quizBtn">
                    <button className="prevBtn" onClick={prevFunction}>Previous</button>
                    {(count === questions.length - 1) ? (
                      <button onClick={ goHomeFunction} className="nextBtn">Finish</button> 
                    ) :
                    (
                      <button onClick={ nextFunction} className="nextBtn">Next</button>
                    )}
                </div>
                </>
                )
            
              }
                
            </div>       
    )
}

export default Questions
