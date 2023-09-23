import React, { useState } from 'react';

function Questionnaire() {
  const [symptoms, setSymptoms] = useState({
    // Define symptoms questions and initialize answers
    'Fever or chills': '',
    'Cough (dry or productive)': '',
    'Shortness of breath or difficulty breathing': '',
    // Fatigue: '',
    // 'Muscle or body aches': '',
    // Headache: '',
    // 'New loss of taste or smell': '',
    // 'Sore throat': '',
    // 'Congestion or runny nose': '',
    // 'Nausea or vomiting': '',
    // Diarrhea: '',
  });

  const handleOptionChange = (question, answer) => {
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      [question]: answer,
    }));
  };

  return (
    <div>
      <h1>COVID-19 Questionnaire</h1>

      {/* Section 1: Symptoms */}
      <div>
        <h2>Symptoms</h2>
        <div className="symptoms-container">
          {Object.entries(symptoms).map(([question, answer]) => (
            <div className="question-card" key={question}>
              <p>{question}</p>
              <label>
                <input
                  type="radio"
                  name={`symptoms-${question}`}
                  value="Yes"
                  checked={answer === 'Yes'}
                  onChange={() => handleOptionChange(question, 'Yes')}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name={`symptoms-${question}`}
                  value="No"
                  checked={answer === 'No'}
                  onChange={() => handleOptionChange(question, 'No')}
                />
                No
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Repeat similar sections for other parts of the questionnaire */}
    </div>
  );
}

export default Questionnaire;
