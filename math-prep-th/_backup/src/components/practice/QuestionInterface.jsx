import React, { useState } from 'react';
import { Check, X, ArrowRight, Calculator } from 'lucide-react';

const QuestionInterface = ({ question, onNext, onFinish, isLast }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [numericalAnswer, setNumericalAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setIsSubmitted(false);
    setSelectedOption(null);
    setNumericalAnswer('');
    onNext();
  };

  return (
    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
        <span>Topic: <span style={{ color: 'var(--primary)' }}>{question.topic}</span></span>
        <span>Difficulty: <span style={{ color: 'var(--accent)' }}>{question.difficulty}</span></span>
      </div>

      <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: 1.6 }}>
        {question.text}
      </h3>

      {/* Options or Input */}
      <div style={{ marginBottom: '2rem' }}>
        {question.type === 'multiple-choice' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !isSubmitted && setSelectedOption(index)}
                style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  border: `1px solid ${
                    isSubmitted 
                      ? index === question.correctOption 
                        ? 'var(--success)' 
                        : selectedOption === index 
                          ? 'var(--error)' 
                          : 'rgba(255,255,255,0.1)'
                      : selectedOption === index 
                        ? 'var(--primary)' 
                        : 'rgba(255,255,255,0.1)'
                  }`,
                  background: isSubmitted
                    ? index === question.correctOption 
                      ? 'rgba(34, 197, 94, 0.1)' 
                      : selectedOption === index 
                        ? 'rgba(239, 68, 68, 0.1)' 
                        : 'transparent'
                    : selectedOption === index 
                      ? 'rgba(56, 189, 248, 0.1)' 
                      : 'transparent',
                  color: 'var(--text-primary)',
                  textAlign: 'left',
                  cursor: isSubmitted ? 'default' : 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{option}</span>
                {isSubmitted && index === question.correctOption && <Check size={20} color="var(--success)" />}
                {isSubmitted && selectedOption === index && index !== question.correctOption && <X size={20} color="var(--error)" />}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Calculator size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input
                  type="text"
                  value={numericalAnswer}
                  onChange={(e) => setNumericalAnswer(e.target.value)}
                  disabled={isSubmitted}
                  placeholder="Enter your answer..."
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 3rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>
            {isSubmitted && (
              <div style={{ marginTop: '1rem', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={20} /> Correct Answer: {question.correctAnswer}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {!isSubmitted ? (
          <button 
            className="btn btn-primary" 
            onClick={handleSubmit}
            disabled={question.type === 'multiple-choice' ? selectedOption === null : !numericalAnswer}
            style={{ opacity: (question.type === 'multiple-choice' ? selectedOption === null : !numericalAnswer) ? 0.5 : 1 }}
          >
            Submit Answer
          </button>
        ) : (
          <button 
            className="btn btn-primary" 
            onClick={isLast ? onFinish : handleNext}
          >
            {isLast ? 'Finish Exam' : 'Next Question'} <ArrowRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionInterface;
