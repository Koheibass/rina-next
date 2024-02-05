import Link from 'next/link'
import React from "react"
import { SectionHeader } from '../SectionHeader'

export const SectionBiographyEn = () => {

    const [mode, setMode] = React.useState('english') // or English
    const handleClickModeButton = (mode) => {
        if (mode === 'english') {
            setMode('english')
        } else if (mode === 'japanese') {
            setMode('japanese')
        }
    }

    return (
        <section className="section_biography">
            <SectionHeader id="biography" title="Biography" titleEn="Biography" />
            <div>
                <div>
                    <img src="/photo/biography.webp" className="biography__photo" width="100%" />
                </div>

                <div className="biography__name">
                    {
                        mode === 'english' &&
                        <div className="biography__name__japanese">
                            Rina Akaboshi
                        </div>
                    }
                    {
                        mode === 'japanese' &&
                        <div className="biography__name__japanese">
                            赤星 里奈
                            <span className="biography__name__alphabet">
                                Rina Akaboshi
                            </span>
                        </div>
                    }
                </div>

                <div className="biography__button">
                    <button
                        className={`movie-button ${mode === 'japanese' ? 'activate' : ''}`}
                        onClick={() => handleClickModeButton('japanese')}
                    >
                        Japanese
                    </button>
                    <button
                        className={`photo-button ${mode === 'english' ? 'activate' : ''}`}
                        onClick={() => handleClickModeButton('english')}
                    >
                        English
                    </button>
                </div>

                <div className="main__profile" id="profile">
                    {
                        mode === 'japanese' &&
                        <p>クラシック音楽を専門とするピアニスト。<br />特にドイツ音楽に造詣が深いが、近年ではフランス音楽やロシア音楽にも研究心を持ち、レパートリーと表現の幅を拡げている。
                            <br />
                            円熟した表現と音楽性を深く追求した演奏に定評があり、響きの新しい可能性を探求するために奏法を研究し続けている。
                            <br />
                            2018 年に初のソロアルバム < br />「Neue Welt ～新しい世界～」をリリース。
                            <br />
                            現在は自身の演奏に関する研究活動や後進の育成とともに、クラシック音楽界に貢献すべく活動の幅を広げている。
                        </p>
                    }

                    {
                        mode === 'english' &&
                        <p>
                            Rina Akaboshi is a classical concert pianist. Although her forte is German music, her recent focus has been on broadening her repertoire with French and Russian music.
                            <br /> She has a reputation for pursuing a mature expression and deep musicality, while exploring techniques in-depth to discover the ideal touch to bring out new possibilities in every tone.
                            <br />After receiving numerous awards in both national and international competitions, in 2018, her first solo album, “Neue Welt - New World” was released.
                            <br />Her concert activities continue while studying under Mr. Yuya Tsuda, one of the most appreciated pianists in Japan, at Tokyo Art University (Graduate-level special course).
                            <br /><br />
                        </p>

                    }
                    <button className="biography__button__content__japanese">
                        {
                            mode === 'japanese' &&
                            <Link href="/biography">詳細</Link>
                        }
                        {
                            mode === 'english' &&
                            <Link href="/biographyen">Details</Link>
                        }

                    </button>
                </div>
            </div>
        </section>

    )
}