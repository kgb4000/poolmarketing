"use client"

import { useEffect, useMemo, useRef, useState } from "react";

function formatTime(totalSec) {
  if (!totalSec || !isFinite(totalSec)) return "00:00";
  const s = Math.max(0, Math.round(totalSec));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m)}:${String(sec).padStart(2, "0")}`;
}

export default function AudioPill({
  title,
  sources,              // string URL or [{ src, type }]
  initialDuration,       // number (seconds), optional
  className = "",
}) {
  const srcs = useMemo(
    () => (typeof sources === "string" ? [{ src: sources }] : sources || []),
    [sources]
  );

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(
    typeof initialDuration === "number" ? initialDuration : null
  );

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    const onLoaded = () => {
      if (!duration || duration <= 0) setDuration(a.duration);
    };
    const onEnded = () => setIsPlaying(false);

    a.addEventListener("loadedmetadata", onLoaded);
    a.addEventListener("ended", onEnded);
    return () => {
      a.removeEventListener("loadedmetadata", onLoaded);
      a.removeEventListener("ended", onEnded);
    };
  }, [duration]);

  // pause this pill if another one starts playing
  useEffect(() => {
    const a = audioRef.current;
    const onGlobalPlay = (e) => {
      const target = e.detail;
      if (a && target !== a) {
        a.pause();
        setIsPlaying(false);
      }
    };
    window.addEventListener("audiopill:play", onGlobalPlay);
    return () => window.removeEventListener("audiopill:play", onGlobalPlay);
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (!isPlaying) {
      window.dispatchEvent(new CustomEvent("audiopill:play", { detail: a }));
      try {
        await a.play();
        setIsPlaying(true);
      } catch {
        // autoplay blocked or other issue
      }
    } else {
      a.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <button
        onClick={toggle}
        className="group bg-black text-white w-full rounded-full px-4 py-3 transition flex items-center gap-4 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-white/40"
        aria-pressed={isPlaying}
        aria-label={(isPlaying ? "Pause " : "Play ") + (title || "Audio")}
      >
        {/* Left circular play/pause button */}
        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white shrink-0">
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="5" y="4" width="5" height="16" fill="#000000" />
              <rect x="14" y="4" width="5" height="16" fill="#000000" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" fill="#000000" />
            </svg>
          )}
        </span>

        {/* Title */}
        <span className="text-sm sm:text-base font-medium truncate grow text-left">
          {title || "Audio"}
        </span>

        {/* Duration */}
        <span className="text-sm tabular-nums opacity-90 shrink-0">
          {formatTime(duration)}
        </span>
      </button>

      {/* Hidden native audio element */}
      <audio ref={audioRef} preload="metadata" className="hidden">
        {srcs.map(({ src, type }, i) => (
          <source key={i} src={src} type={type} />
        ))}
      </audio>
    </div>
  );
}
