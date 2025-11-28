import React, { useState } from 'react';
import ExamConfig from '../components/practice/ExamConfig';
import QuestionInterface from '../components/practice/QuestionInterface';

const MOCK_QUESTIONS = [
  {
    id: 1,
    type: 'multiple-choice',
    topic: 'Algebra',
    difficulty: 'Medium',
    text: 'If 2x + 5 = 15, what is the value of 3x - 2?',
    options: ['10', '13', '15', '18'],
    correctOption: 1
  },
  {
    id: 2,
    type: 'numerical',
    topic: 'Calculus',
    difficulty: 'Hard',
    text: 'What is the derivative of x^2 at x = 4?',
    correctAnswer: '8'
  },
  {
    id: 3,
    type: 'multiple-choice',
    topic: 'Geometry',
    difficulty: 'Medium',
    text: 'What is the area of a circle with radius 5?',
    options: ['10π', '20π', '25π', '50π'],
    correctOption: 2
  }
];

const Practice = () => {
  const [examState, setExamState] = useState('config'); // config, active, result
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [examConfig, setExamConfig] = useState(null);

  const startExam = (config) => {
    setExamConfig(config);
    setExamState('active');
    setCurrentQuestionIndex(0);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prev => prev + 1);
  };

  const handleFinishExam = () => {
    setExamState('result');
  };

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      {examState === 'config' && (
        <ExamConfig onStart={startExam} />
      )}

      {examState === 'active' && (
        <div>
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Question {currentQuestionIndex + 1} of {MOCK_QUESTIONS.length}</h2>
            <div style={{ color: 'var(--text-secondary)' }}>Time Remaining: 29:45</div>
          </div>
          <QuestionInterface 
            question={MOCK_QUESTIONS[currentQuestionIndex]}
            onNext={handleNextQuestion}
            onFinish={handleFinishExam}
            isLast={currentQuestionIndex === MOCK_QUESTIONS.length - 1}
          />
        </div>
      )}

      {examState === 'result' && (
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Exam Complete!</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Great job! Your results have been recorded and your ELO rating has been updated.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--success)' }}>+12</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Rating Change</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>2/3</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Score</div>
            </div>
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => setExamState('config')}
          >
            Start New Exam
          </button>
        </div>
      )}
    </div>
  );
};

export default Practice;
