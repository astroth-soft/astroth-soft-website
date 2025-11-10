"use client";

import React, { useState, useEffect, useRef } from 'react'

import mutsuri_1 from "../assets/ficus/mutsuri_1.wav";
import mutsuri_2 from "../assets/ficus/mutsuri_2.wav";
import jala_1 from "../assets/ficus/jala_1.wav";
import jala_2 from "../assets/ficus/jala_2.wav";
import nite_1 from "../assets/ficus/nite_1.wav";
import nite_2 from "../assets/ficus/nite_2.wav";
import deer_1 from "../assets/ficus/deer_1.wav";
import deer_2 from "../assets/ficus/deer_2.wav";
import dasi_1 from "../assets/ficus/dasi_1.wav";
import dasi_2 from "../assets/ficus/dasi_2.wav";
import fetz_1 from "../assets/ficus/fetz_1.wav";
import fetz_2 from "../assets/ficus/fetz_2.wav";

export interface Character {
    name: string
    sex: string
    voice: string
    va_link: string
    voice_sample_path: string[]
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

const audioPlay = (path: string) => {
    let play_content = () => {
        switch (path) {
        case "mutsuri_1":
            return mutsuri_1
        case "mutsuri_2":
            return mutsuri_2
        case "jala_1":
            return jala_1
        case "jala_2":
            return jala_2
        case "nite_1":
            return nite_1
        case "nite_2":
            return nite_2
        case "deer_1":
            return deer_1
        case "deer_2":
            return deer_2
        case "dasi_1":
            return dasi_1
        case "dasi_2":
            return dasi_2
        case "fetz_1":
            return fetz_1
        case "fetz_2":
            return fetz_2
        default:
            return mutsuri_1
        }
    }

    const audio = new Audio(play_content());
    audio.play().then(() => {
      console.log("Audio started!");
    })
      .catch(error => console.warn(error));
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
                                'p-1 mx-5 text-center opacity-70 hover:opacity-100 hover:font-bold transition-all bg-transparent border-b-2 cursor-pointer text-white border-transparent border-solid font-shippori',
                                active
                                    ? 'opacity-100'
                                    : 'opacity-70 hover:opacity-100',
                                c.sex !== 'male' ? 'border-b-pink' : 'border-b-blue'
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
                        <div className="flex gap-4 items-center">
                            <p className="text-lg text-gray-300">演 : <a href={selected.va_link} className="text-white">{selected.voice}</a></p>
                            { selected.voice_sample_path && (
                                <><button className="bg-black hover:bg-white border-1 border-white hover:border-black border-style-solid text-white hover:text-black rounded-full font-shippori font-bold w-8 h-8 cursor-pointer transition-all duration-300 ease-in-out hover:scale-120" onClick={() => {
                                    audioPlay(selected.voice_sample_path[0]);
                                } }>1</button><button className="bg-black hover:bg-white border-1 border-white hover:border-black border-style-solid text-white hover:text-black rounded-full font-shippori font-bold w-8 h-8 cursor-pointer transition-all duration-300 ease-in-out hover:scale-120" onClick={() => {
                                    audioPlay(selected.voice_sample_path[1]);
                                } }>2</button></>
                            )}
                        </div>
                        <p className="leading-relaxed whitespace-pre-line text-sm md:text-base">{selected.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FicusCharacterIntroduction;