import { useState, useEffect } from "react";

export const GetCamera= constraints => {
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (stream) return;
    let didCancel = false;

    const getUserMedia = async () => {
      if (!didCancel) {
        try {
          setStream(await navigator.mediaDevices.getUserMedia(constraints));
        } catch (e) {
          setError(e);
        }
      }
    };
    const cancel = () => {
      didCancel = true;
      if (!stream) return;
      if (stream?.getVideoTracks) {
        stream.getVideoTracks().map(track => track.stop());
      }
      if (stream?.getAudioTracks) {
        stream.getAudioTracks().map(track => track.stop());
      }
      if (stream?.stop) {
        stream.stop();
      }
    };
    getUserMedia();
    return cancel;
  }, [constraints, stream, error]);
  return { stream, error };
};
