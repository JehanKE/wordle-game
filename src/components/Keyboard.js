import React, { useEffect, useState } from 'react'

export default function Keyboard({ usedKeys, handleScreenKey }) {
    const [letters, setLetters] = useState(null)

    useEffect(() => {
        const keys = [
            { key: 'q' }, { key: 'w' }, { key: 'e' }, { key: 'r' }, { key: 't' }, { key: 'y' }, { key: 'u' }, { key: 'i' }, { key: 'o' }, { key: 'p' },
            { key: 'a' }, { key: 's' }, { key: 'd' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'j' }, { key: 'k' }, { key: 'l' },
            { key: 'Enter' }, { key: 'z' }, { key: 'x' }, { key: 'c' }, { key: 'v' }, { key: 'b' }, { key: 'n' }, { key: 'm' }, { key: 'Backspace' }
        ]
        setLetters(keys)
    }, [])

    return (
        <div className="keypad">
            {letters && letters.map((l) => {
                const color = usedKeys[l.key]
                const isWide = l.key === 'Enter' || l.key === 'Backspace'
                return (
                    <div key={l.key} className={`${color} ${isWide ? 'wide' : ''}`} onClick={() => handleScreenKey(l.key)}>
                        {l.key === 'Backspace' ? '⌫' : l.key}
                    </div>
                )
            })}
        </div>
    )
}
