function actualizarReloj() {
  const ahora = new Date();
  const segundos = ahora.getSeconds();
  const minutos = ahora.getMinutes();
  const horas = ahora.getHours();

  const gradosSegundos = (segundos / 60) * 360;
  const gradosMinutos = ((minutos * 60 + segundos) / 3600) * 360;
  const gradosHoras =
    (((horas % 12) * 3600 + minutos * 60 + segundos) / 43200) * 360;

  document.querySelector(
    ".segundos"
  ).style.transform = `translate(-50%, -100%) rotate(${gradosSegundos}deg)`;
  document.querySelector(
    ".minutos"
  ).style.transform = `translate(-50%, -100%) rotate(${gradosMinutos}deg)`;
  document.querySelector(
    ".horas"
  ).style.transform = `translate(-50%, -100%) rotate(${gradosHoras}deg)`;
}

setInterval(actualizarReloj, 2000);
