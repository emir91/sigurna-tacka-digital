const VIDEO_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

export const parseYouTubeVideoId = (videoUrl: string): string | null => {
  let url: URL;

  try {
    url = new URL(videoUrl);
  } catch (error) {
    if (error instanceof TypeError) {
      return null;
    }

    throw error;
  }

  if (
    url.protocol !== 'https:' ||
    url.username !== '' ||
    url.password !== '' ||
    url.port !== ''
  ) {
    return null;
  }

  let videoId: string | null = null;
  const hostname = url.hostname.toLowerCase();

  if (hostname === 'youtu.be') {
    videoId = url.pathname.match(/^\/([A-Za-z0-9_-]{11})\/?$/)?.[1] ?? null;
  } else if (hostname === 'youtube.com' || hostname === 'www.youtube.com') {
    if (url.pathname === '/watch') {
      videoId = url.searchParams.get('v');
    } else {
      videoId =
        url.pathname.match(/^\/embed\/([A-Za-z0-9_-]{11})\/?$/)?.[1] ?? null;
    }
  }

  return videoId && VIDEO_ID_PATTERN.test(videoId) ? videoId : null;
};
