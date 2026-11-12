import React, { useState } from 'react'
import { Play } from 'lucide-react'

const getYouTubeId = (url) => {
  const match = url.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/)
  return match ? match[1] : url
}

const VideoPreview = ({ url, title = 'Video preview' }) => {
  const [playing, setPlaying] = useState(false)
  const id = getYouTubeId(url)

  return (
    <div className='relative aspect-video w-full overflow-hidden rounded-2xl bg-[#E4DDC0]'>
      {playing ? (
        <iframe
          className='absolute inset-0 h-full w-full'
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow='autoplay; encrypted-media; picture-in-picture; fullscreen'
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={`Play: ${title}`}
          className='group absolute inset-0 flex items-center justify-center cursor-pointer'
        >
          <img
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            alt=''
            className='absolute inset-0 h-full w-full object-cover'
          />
          <span className='relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110'>
            <Play size={28} fill='currentColor' className='ml-1 text-[#41445D]' />
          </span>
        </button>
      )}
    </div>
  )
}

export default VideoPreview