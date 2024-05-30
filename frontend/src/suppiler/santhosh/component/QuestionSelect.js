import React, { useState } from 'react';
import '../title.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Questionnaire = ({ selectedCategory }) => {
  const [questions, setQuestions] = useState(getQuestionsForCategory(selectedCategory));
  const [selectAll, setSelectAll] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newQuestionOpen, setNewQuestionOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  function getQuestionsForCategory(category) {
    // Define questions for each category here
    const categoryQuestionsMap = {
      Clothing: [
        { id: 4, text: 'Is this sweater made of wool or cotton?', selected: false },
        { id: 5, text: 'What is the recommended washing method for this skirt?', selected: false },
        { id: 6, text: 'Does this pair of jeans have stretch?', selected: false },
        { id: 7, text: 'Are there any special care instructions for this jacket?', selected: false },
        { id: 8, text: 'Does this shirt come in different colors?', selected: false },
        { id: 9, text: 'What is the fabric blend of these trousers?', selected: false },
        { id: 10, text: 'Does this dress have pockets?', selected: false },
      ],
      Electronics: [
        // Questions data
      ],
      Toys: [
        // Questions data
      ],
    };

    return categoryQuestionsMap[category] || [];
  }

  const handleSelectAll = () => {
    const updatedQuestions = questions.map(question => ({
      ...question,
      selected: !selectAll,
    }));
    setQuestions(updatedQuestions);
    setSelectAll(!selectAll);
  };

  const handleQuestionSelect = (id) => {
    const updatedQuestions = questions.map(question =>
      question.id === id ? { ...question, selected: !question.selected } : question
    );
    setQuestions(updatedQuestions);
  };

  const handleAdd = () => {
    const selectedQuestions = questions.filter(question => question.selected);
    setSelectedQuestions(selectedQuestions);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddQuestion = () => {
    setNewQuestionOpen(true);
  };

  const handleCancelAddQuestion = () => {
    setNewQuestionOpen(false);
    setNewQuestion('');
    setNewAnswer('');
  };

  const handleSubmitQuestion = (event) => {
    event.preventDefault();
    if (newQuestion && newAnswer) {
      const newQuestionObj = {
        id: questions.length + 1,
        text: newQuestion,
        selected: true, // New question is selected by default
      };
      setQuestions([...questions, newQuestionObj]);
      setSelectedQuestions([...selectedQuestions, newQuestionObj]);
      setNewQuestionOpen(false);
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6" style={{ marginTop: '20px' }}>
          <div className="qa-card" style={{ maxHeight: '300px', overflowY: 'auto'}}>
            <div className="card-body-qa">
              <form className='qa-select'>
                <h3 id='san'>Select Questions</h3>
                {questions.map(question => (
                    <div key={question.id} className="qa-question-container">
                      <label id='qa-check'>
                      <input
                          type="checkbox"
                          checked={question.selected}
                          onChange={() => handleQuestionSelect(question.id)}
                          style={{ width: '0',padding:'10px' }}
                        />

                        <span className="qa-question-text">{question.text}</span>
                      </label>
                    </div>
                  ))}

                <div>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                    Select All
                  </label>
                </div>
                <button className="btn btn-primary" type="button" onClick={handleAdd}>Add</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6" id='saa' style={{ marginTop: '20px' }}>
          <div className="qa-card-selected" style={{ maxHeight: '250px', overflowY: 'auto' , overflowX: 'hidden' }}>
            <div className="card-body-qa">
              {!newQuestionOpen && (
                <button type="button" onClick={handleAddQuestion} className="btn btn-primary">Add Question</button>
              )}
              {selectedQuestions.length > 0 && (
                <div style={{marginTop:'10px'}}>
                  <h4>Selected Questions:</h4>
                  <ul>
                    {selectedQuestions.map(question => (
                      <li key={question.id}>{question.text}</li>
                    ))}
                  </ul>
                </div>
              )}
              {newQuestionOpen && (
                <div>
                  <h4 style={{marginBottom:'10px'}}>Add New Question:</h4>
                  <form onSubmit={handleSubmitQuestion}>
                  <label id='qa'>
                      Product Id:
                      <input
                        type="text"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                      />
                    </label>
                    <label id='qa'>
                      Question:
                      <input
                        type="text"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                      />
                    </label>
                    <label id='qa'>
                      Answer: 
                      <input style={{ marginRight: '55px' }}
                        type="text"
                        value={newAnswer}
                        onChange={(e) => setNewAnswer(e.target.value)}
                      />
                    </label>

                    <br></br>
                    <button className="btn btn-primary" type="submit" id="qa">Submit</button>
                    <button className="btn btn-secondary" type="button" onClick={handleCancelAddQuestion} style={{ marginLeft: '10px',  marginTop:'10px'}}>Cancel</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questionnaire;