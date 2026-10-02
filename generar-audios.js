// generar-audios.js
import googleTTS from 'google-tts-api';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Definir __dirname en entorno de ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lista completa de letras y palabras que necesitamos
const itemsToGenerate = [
    'casa'
];
// Ruta donde se guardarán los audios (dentro de public para que Vite los empaquete)
const outputDir = path.join(__dirname, 'public', 'audio', 'letras');

// Asegurarnos de que la carpeta exista
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('📁 Carpeta creada: public/audio/letras');
}

async function descargarAudios() {
    console.log('🎙️ Iniciando la generación y descarga de audios...');

    for (const item of itemsToGenerate) {
        try {
            // Obtenemos la URL del audio de Google TTS (en español)
            const url = googleTTS.getAudioUrl(item, {
                lang: 'es',
                slow: false,
                host: 'https://translate.google.com',
            });

            // Descargamos el archivo binario usando fetch nativo de Node
            const response = await fetch(url);
            const buffer = await response.arrayBuffer();

            // Guardamos el archivo como .mp3
            const filePath = path.join(outputDir, `${item}.mp3`);
            fs.writeFileSync(filePath, Buffer.from(buffer));

            console.log(`✅ Generado y guardado: ${item}.mp3`);
        } catch (error) {
            console.error(`❌ Error al generar el audio para "${item}":`, error.message);
        }
    }

    console.log('\n🎉 ¡Proceso finalizado! Todos los audios están listos en public/audio/letras/');
}

descargarAudios();