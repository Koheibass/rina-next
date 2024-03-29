/**
 * トップNEWS 随時入れ替えあり
 */

import { useLanguage } from '@/utils/language';
import Link from 'next/link'


export const TopNews = () => {
    const { lang } = useLanguage();

    return (
        <div className="ml-auto mr-auto mt-4 lg:mt-6 flex items-center justify-center gap-2 w-[350px] lg:w-full">
            <div className=" bg-pink-500 px-2.5 py-2 text-lg rounded text-white tracking-wide lg:py-2">NEWS</div>
            {
                lang === 'ja' &&

                <Link href="https://oto-inochi.com/" className="no-underline text-[#937a43] text-[93%] ml-2" target="_blank" rel="noopener noreferrer">
                    <span className="lg:text-[18px]">クラシック愛好家のためのオンラインコミュニティ“おといのちオンライン”開設のお知らせ</span>
                </Link>
            }
            {
                lang === 'en' &&
                <Link href="https://oto-inochi.com/" className="no-underline text-[#937a43] text-[93%] ml-2" target="_blank" rel="noopener noreferrer">
                    <span className="lg:text-[18px]">The number of people in the online community I manage has reached 100 people.</span>
                </Link>
            }
        </div>
    )
}