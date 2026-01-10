import { useRef, useState } from "react";
import bgMusic from "../../../public/music/Bg-2.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={bgMusic} type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        {playing ? "🔊 Music OFF" : "🎵 Music ON"}
      </button>
    </>
  );
}
