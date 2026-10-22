'use strict';

function bookingMessage({ service, mode, day, period }) {
  return `Olá, Pai Paulinho! Vim pelo site e gostaria de combinar um atendimento.\n\nAtendimento: ${service}\nModalidade de preferência: ${mode}\nMelhor dia: ${day}\nMelhor período: ${period}\n\nPodemos confirmar a modalidade e um horário disponível?`;
}

document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('bookingDialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const form = document.getElementById('bookingForm');
  const steps = [...dialog.querySelectorAll('.booking-step')];
  const progress = [...dialog.querySelectorAll('.booking-progress li')];
  const service = document.getElementById('bookingService');
  const back = document.getElementById('bookingBack');
  const next = document.getElementById('bookingNext');
  const send = document.getElementById('bookingSend');
  let step = 0;
  let phone = '';
  let opener;
  let previousOverflow = '';

  function showStep(value) {
    step = value;
    steps.forEach((section, index) => {
      section.hidden = index !== step;
      // Hidden required fields must not block the current step.
      section.querySelectorAll('select').forEach(field => { field.disabled = index !== step; });
      if (index === step) progress[index].setAttribute('aria-current', 'step');
      else progress[index].removeAttribute('aria-current');
    });
    back.hidden = step === 0;
    next.hidden = step === 2;
    send.hidden = step !== 2;
    next.textContent = step === 1 ? 'Revisar preferências' : 'Continuar';
    if (step === 2) {
      const message = bookingMessage({
        service: service.value,
        mode: document.getElementById('bookingMode').value,
        day: document.getElementById('bookingDay').value,
        period: document.getElementById('bookingPeriod').value,
      });
      document.getElementById('bookingPreview').textContent = message;
      send.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    } else {
      send.removeAttribute('href');
    }
    dialog.scrollTop = 0;
    steps[step].querySelector('h3').focus({ preventScroll: true });
  }

  document.addEventListener('click', event => {
    const trigger = event.target.closest('a.whatsapp-trigger');
    // Keep the footer contact link and modified clicks as direct WhatsApp links.
    if (!trigger || trigger.id === 'footerWhatsApp' || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    let url;
    try { url = new URL(trigger.href); } catch { return; }
    if (url.hostname !== 'wa.me' || !/^\/\d+$/.test(url.pathname)) return;
    event.preventDefault();
    opener = trigger;
    phone = url.pathname.slice(1);
    form.reset();
    const names = [...new Set([...document.querySelectorAll('.servico-card .sc-title')].map(title => title.textContent.trim()).filter(Boolean))];
    service.replaceChildren(new Option('Selecione um atendimento', ''));
    names.forEach(name => service.add(new Option(name, name)));
    service.add(new Option('Quero orientação para escolher', 'Quero orientação para escolher'));
    service.value = trigger.closest('.servico-card')?.querySelector('.sc-title')?.textContent.trim() || '';
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    showStep(0);
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (step < 2 && form.reportValidity()) showStep(step + 1);
  });
  back.addEventListener('click', () => { if (step > 0) showStep(step - 1); });
  document.getElementById('bookingClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    form.reset();
    send.removeAttribute('href');
    document.getElementById('bookingPreview').textContent = '';
    opener?.focus({ preventScroll: true });
  });
});
