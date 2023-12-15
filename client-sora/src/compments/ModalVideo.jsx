import React from "react";
function ModalVideo({ onClose, youtube }) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 z-20">
      <button onClick={onClose}>Close</button>
      <iframe
        className="w-96 h-60 sm:w-screen sm:h-96 md:max-w-md lg:max-w-md xl:max-w-md 2xl:max-w-lg"
        src={youtube}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="modal-video"
      ></iframe>
    </div>
  );
}

export default ModalVideo;
