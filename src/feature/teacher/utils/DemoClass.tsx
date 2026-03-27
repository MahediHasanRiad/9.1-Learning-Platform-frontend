import Player from '@/feature/teacher/utils/video-player'

interface DemoClassType {
  video: string;
  title: string
}

function DemoClass({video, title}: DemoClassType) {
  return (
    <section>
      <Player video={video} />
      <h4>{title}</h4>
    </section>
  )
}

export default DemoClass
