import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'
import { PhotoButton } from '@/components/PhotoButton'


export const VideoMedia = ({ video, videoId }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <ModalVideo channel="youtube" youtube={{ mute: 1, autoplay: 1, playsinline: 0, }} isOpen={isOpen} videoId={videoId} onClose={() => setIsOpen(false)} />
            <div>
                <button className="btn-primary" onClick={() => setIsOpen(true)}></button>
                <PhotoButton className="btn-primary" onClick={() => setIsOpen(true)} />
            </div >
            <div className="individual-videos">
                {video.title}
            </div>
        </div>
    )
}