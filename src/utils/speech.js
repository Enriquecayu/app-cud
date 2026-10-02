// src/utils/speech.js

// Para letras individuales y feedback ('correcto.mp3', 'incorrecto.mp3')
export const playAudio = (fileName) => {
  try {
    const audio = new Audio(`/audio/letras/${fileName.toLowerCase()}.mp3`);
    audio.currentTime = 0;
    audio.play().catch((error) => {
      console.warn(`No se pudo reproducir el audio de letra: ${fileName}`, error);
    });
  } catch (error) {
    console.error("Error al reproducir audio de letra", error);
  }
};

// Para la palabra completa del nivel (ej: 'pato.mp3' desde public/audio/palabras/)
export const playWordAudio = (wordName) => {
  try {
    // Normalizamos el texto (quitamos espacios, acentos si los hubiera, etc.)
    const formattedWord = wordName
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // quita tildes para que coincida con el nombre del archivo si lo guardaste sin tilde (ej: 'avion.mp3')
      .replace(/\s+/g, '_');

    const audio = new Audio(`/audio/palabras/${formattedWord}.mp3`);
    audio.currentTime = 0;
    audio.play().catch((error) => {
      console.warn(`No se pudo reproducir el audio de la palabra: ${wordName}`, error);
    });
  } catch (error) {
    console.error("Error al reproducir audio de palabra", error);
  }
};