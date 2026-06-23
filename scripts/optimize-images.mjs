import sharp from 'sharp';
import { stat } from 'fs/promises';
import path from 'path';

const assetsDir = path.resolve('src/assets');
const targets = ['rainy.png', 'yadea-g5.png', 'gumike-2019.png', 'me.jpg'];

for (const file of targets) {
	const input = path.join(assetsDir, file);
	const base = file.replace(/\.(png|jpe?g)$/i, '');
	const output = path.join(assetsDir, `${base}.webp`);

	await sharp(input)
		.resize({ width: 1200, withoutEnlargement: true })
		.webp({ quality: 82 })
		.toFile(output);

	const outStat = await stat(output);
	console.log(`${file} → ${base}.webp (${Math.round(outStat.size / 1024)} KB)`);
}
