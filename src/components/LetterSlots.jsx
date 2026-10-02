// src/components/LetterSlots.jsx
import React from 'react';

export const LetterSlots = ({ target, currentInput }) => {
    const characters = target.split('');

    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '20px 0', flexWrap: 'wrap' }}>
            {characters.map((char, index) => {
                if (char === ' ') {
                    return <div key={index} style={{ width: '30px' }} />;
                }

                const letterToShow = currentInput[index] || '';

                return (
                    <div
                        key={index}
                        style={{
                            width: '50px',
                            height: '60px',
                            border: '3px solid #3b82f6',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '28px',
                            fontWeight: 'bold',
                            backgroundColor: '#ffffff',
                            color: '#000000' // 🔹 Color negro forzado para que se vea claramente
                        }}
                    >
                        {letterToShow}
                    </div>
                );
            })}
        </div>
    );
};