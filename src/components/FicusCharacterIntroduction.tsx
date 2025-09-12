"use client";

import React, { useState, useEffect } from 'react'

export interface Character {
    name: string
    voice: string
    description: string
    image: string
}

export interface FicusCharacterIntroductionProps {
    characters: Character[]
    /** 初期表示したいキャラクター（index） */
    initialIndex?: number
    /** 選択変更時に通知 */
    onSelect?(character: Character, index: number): void
}

// 小さなユーティリティ（Tailwind 条件結合）
function cx(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(' ')
}

const FicusCharacterIntroduction: React.FC<FicusCharacterIntroductionProps> = ({ characters, initialIndex = 0, onSelect }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        if (initialIndex < characters.length) {
            setCurrentIndex(initialIndex);
        } else if (characters.length > 0) {
            setCurrentIndex(0);
        }
    }, [initialIndex, characters]);

    if (!characters || characters.length === 0) {
        return <p>キャラクター情報がありません。</p>;
    }

    const selected = characters[currentIndex];

    const handleSelect = (index: number) => {
        console.log('Selected character index:', index);
        setCurrentIndex(index);
        onSelect?.(characters[index], index);
    }

    return (
        <div className="p-4 space-y-6" role="group" aria-label="Ficus Characters" tabIndex={0}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {characters.map((c, idx) => {
                    const active = idx === currentIndex
                    return (
                        <button
                            key={c.name + idx}
                            type="button"
                            onClick={() => handleSelect(idx)}
                            className={cx(
                                'p-1 mx-5 text-center opacity-70 hover:opacity-100 hover:font-bold transition-all bg-transparent border-b-2 border-b-white cursor-pointer text-white border-transparent border-solid font-shippori',
                                active
                                    ? 'opacity-100'
                                    : 'opacity-70 hover:opacity-100'
                            )}
                            aria-pressed={active}
                        >
                            {c.name}
                        </button>
                    )
                })}
            </div>

            <div className="border-t border-gray-600 pt-6">
                <div className="grid md:grid-cols-3 gap-6 items-start">
                    <div className="flex justify-center">
                        <img
                            key={selected.image + currentIndex}
                            src={selected.image}
                            alt={selected.name}
                            className="w-full max-w-xs rounded-md shadow-lg object-contain"
                            loading="lazy"
                        />
                    </div>
                    <div className="md:col-span-2 space-y-3">
                        <h3 className="text-2xl font-bold tracking-wide" aria-live="polite">{selected.name}</h3>
                        <p className="text-lg text-gray-300">演: {selected.voice}</p>
                        <p className="leading-relaxed whitespace-pre-line text-sm md:text-base">{selected.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FicusCharacterIntroduction;