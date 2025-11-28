'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Save, AlertCircle } from 'lucide-react';

const AdminQuestions = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  
  const [formData, setFormData] = useState({
    topic: 'Algebra',
    difficulty: 'Medium',
    content: '',
    type: 'multiple-choice', // 'multiple-choice' | 'numerical'
    options: ['', '', '', ''],
    correctAnswer: '',
    correctOptionIndex: 0
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // Prepare data for Supabase
      const questionData = {
        topic: formData.topic,
        difficulty: formData.difficulty,
        content: formData.content,
        correct_answer: formData.type === 'multiple-choice' 
          ? formData.options[formData.correctOptionIndex] 
          : formData.correctAnswer,
        options: formData.type === 'multiple-choice' ? formData.options : null
      };

      if (!supabase) {
        throw new Error('Supabase client is not initialized. Check your .env.local file.');
      }

      const { error } = await supabase
        .from('questions')
        .insert([questionData]);

      if (error) throw error;

      setMessage({ type: 'success', text: 'Question added successfully!' });
      // Reset form content but keep topic/difficulty for faster entry
      setFormData(prev => ({
        ...prev,
        content: '',
        options: ['', '', '', ''],
        correctAnswer: ''
      }));
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'Failed to add question' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 1rem', maxWidth: '800px' }}>
      <h1 style={{ marginBottom: '2rem' }}>Add New Question</h1>

      {message && (
        <div style={{
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          backgroundColor: message.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
          color: message.type === 'success' ? 'var(--success)' : 'var(--error)',
          border: `1px solid ${message.type === 'success' ? 'var(--success)' : 'var(--error)'}`,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          {message.type === 'error' && <AlertCircle size={20} />}
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Topic</label>
            <select 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid rgba(255,255,255,0.1)' }}
              value={formData.topic}
              onChange={e => setFormData({...formData, topic: e.target.value})}
            >
              <option value="Algebra">Algebra</option>
              <option value="Calculus">Calculus</option>
              <option value="Geometry">Geometry</option>
              <option value="Trigonometry">Trigonometry</option>
              <option value="Statistics">Statistics</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Difficulty</label>
            <select 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid rgba(255,255,255,0.1)' }}
              value={formData.difficulty}
              onChange={e => setFormData({...formData, difficulty: e.target.value})}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Question Content (LaTeX supported)</label>
          <textarea 
            style={{ width: '100%', minHeight: '150px', padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'monospace' }}
            placeholder="e.g. Solve for x: $2x + 5 = 15$"
            value={formData.content}
            onChange={e => setFormData({...formData, content: e.target.value})}
            required
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Question Type</label>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input 
                type="radio" 
                checked={formData.type === 'multiple-choice'}
                onChange={() => setFormData({...formData, type: 'multiple-choice'})}
              />
              Multiple Choice
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input 
                type="radio" 
                checked={formData.type === 'numerical'}
                onChange={() => setFormData({...formData, type: 'numerical'})}
              />
              Numerical Answer
            </label>
          </div>
        </div>

        {formData.type === 'multiple-choice' ? (
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Options</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {formData.options.map((option, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <input 
                    type="radio" 
                    name="correctOption"
                    checked={formData.correctOptionIndex === idx}
                    onChange={() => setFormData({...formData, correctOptionIndex: idx})}
                  />
                  <input 
                    type="text"
                    style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid rgba(255,255,255,0.1)' }}
                    placeholder={`Option ${idx + 1}`}
                    value={option}
                    onChange={e => {
                      const newOptions = [...formData.options];
                      newOptions[idx] = e.target.value;
                      setFormData({...formData, options: newOptions});
                    }}
                    required
                  />
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Select the radio button next to the correct answer.</p>
          </div>
        ) : (
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Correct Answer</label>
            <input 
              type="text"
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid rgba(255,255,255,0.1)' }}
              placeholder="e.g. 5, 3pi, etc."
              value={formData.correctAnswer}
              onChange={e => setFormData({...formData, correctAnswer: e.target.value})}
              required
            />
          </div>
        )}

        <button 
          type="submit" 
          className="btn btn-primary" 
          style={{ width: '100%' }}
          disabled={loading}
        >
          {loading ? 'Saving...' : (
            <>
              <Save size={20} /> Save Question
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default AdminQuestions;
