'use client'

import { AudioPlayer } from 'react-audio-player-component'

export default function BlogAudioPlayer({ audioUrl }) {
  if (!audioUrl) return null

  return (
    <div className="mt-6 grid grid-cols-2 items-center justify-evenly">
      <h3 className="text-lg font-semibold">Listen to this article</h3>
      <AudioPlayer
        src={audioUrl}
        minimal={true}
        width={300}
        trackHeight={40}
        barWidth={3}
        gap={1}
        visualise={true}
        backgroundColor="#FFF8DE"
        barColor="#C1D0B5"
        barPlayedColor="#99A98F"
        skipDuration={2}
        showLoopOption={true}
        showVolumeControl={true}
        hideSeekBar={true}
        hideSeekKnobWhenPlaying={true}
        playbackRate={1.2}
      />
    </div>
  )
}
