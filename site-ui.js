document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('introPresentation');
  const open = document.getElementById('introOpen');
  if (intro && open) {
    const video = intro.querySelector('video');
    open.addEventListener('click', () => {
      intro.showModal();
      // Start playback within the visitor's click, including on mobile browsers.
      video.play().catch(() => {
        // Keep native controls available if the browser cannot start playback.
      });
    });
    document.getElementById('introClose').addEventListener('click', () => intro.close());
    intro.addEventListener('close', () => { video.pause(); open.focus(); });
  }
  document.querySelector('.nav-book')?.addEventListener('click', event => {
    const booking = document.getElementById('heroWhatsApp');
    if (booking && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey && event.button === 0) { event.preventDefault(); booking.click(); }
  });
  if (document.getElementById('heroWhatsApp') && location.hash === '#agendar') {
    document.getElementById('heroWhatsApp').click();
  }
});
