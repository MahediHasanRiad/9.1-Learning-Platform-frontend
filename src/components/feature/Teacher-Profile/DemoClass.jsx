import Player from '@/utils/video-player'
import React from 'react'

function DemoClass({video, title}) {
  return (
    <section>
      <Player video={video} />
      <h4>{title}</h4>
    </section>
  )
}

export default DemoClass
