import React from 'react';

interface FacebookEmbedProps {
  url: string;
}

export function FacebookEmbed({ url }: FacebookEmbedProps) {
  const isVideo = url.includes('/v/') || url.includes('/videos/') || url.includes('video.php');
  const encodedUrl = encodeURIComponent(url);
  
  // Use video plugin for videos and post plugin for everything else
  const plugin = isVideo ? 'video.php' : 'post.php';
  const embedUrl = `https://www.facebook.com/plugins/${plugin}?href=${encodedUrl}&show_text=false&width=auto&t=0`;

  return (
    <div className="w-full bg-black/40 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl aspect-video relative">
      <iframe
        src={embedUrl}
        className="absolute inset-0 w-full h-full"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
