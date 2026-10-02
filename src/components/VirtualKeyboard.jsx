// src/components/VirtualKeyboard.jsx
import React from 'react';
import { Delete } from 'lucide-react';

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export const VirtualKeyboard = ({ onKeyPress, onDelete }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', maxWidth: '600px', margin: '0 auto' }}>
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => onKeyPress(letter)}
          style={{
            width: '45px',
            height: '50px',
            fontSize: '20px',
            fontWeight: 'bold',
            backgroundColor: '#ffffff',
            color: '#000000', // 🔹 Agregamos color negro explícito para que se vea la letra
            border: '2px solid #cbd5e1',
            borderRadius: '6px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            transition: 'all 0.1s ease'
          }}
        >
          {letter}
        </button>
      ))}
      <button
        onClick={onDelete}
        style={{
          padding: '0 15px',
          height: '50px',
          backgroundColor: '#ef4444',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}
      >
        <Delete size={24} />
      </button>
    </div>
  );
};