import {useState, useEffect} from 'react';

export default function GetQuestion(props) {
    // set the api to a variable
    const url = `http://jservice.io/api/random`

    // set state to hold data from fetched API
    const [question, setQuestion] = useState(null);
    const [reveal, setReveal] = useState(false);

    // function to fetch the data from API
    const getQ = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setQuestion(data[0]);
        } catch (err) {
            console.error(err);
        }
    }

    // onclick function to initiate data getter
    const handleClick = (evt) => {
        getQ();
    }

    const handleReveal = (evt) => {
        setReveal(!reveal);
    }

    const revealQuestion = (evt) => {
        evt.preventDefault();

        const fetchQuestionFromData = () => {
            return (
                <h3>
                    Question: {question.answer}
                </h3>
            )
        }
        return fetchQuestionFromData();
    }

    // dont really know but I know it makes things work
    useEffect(() => {
        if(!question) {
            getQ()
        }
    }, [])

    // function for what the promise does if the fetch is fruitful
    const loaded = () => {
        return (
            <div>
                <button className="getQuestionButton" onClick={handleClick}>Get Question</button>
                <h3>
                    Category: {question.category_id}
                    {console.log(question.category_id)}
                </h3>
                <h3>
                    Points: {question.value}
                </h3>
                <h3>
                    Answer: {question.question}
                </h3>
                <br />
                <button className="revealQuestionButton" onClick={handleReveal}>Click to Reveal Answer</button>
                {
                    reveal ? <h3>Answer: {question.answer}</h3> : ' '
                }
            </div>
        )
    }

    // function for what to do if the fetch fails
    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }
    
    return (
        question ? loaded() : loading()
    )
}