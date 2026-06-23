import sharp from 'sharp';
import { stat } from 'fs/promises';
import path from 'path';

const assetsDir = path.resolve('src/assets');
const targets = ['ngp-email-builder.svg', 'ngp-smart-planner.svg', 'ngp-smart-calendar.svg'];

for (const file of targets) {
	const input = path.join(assetsDir, file);
	const base = file.replace(/\.svg$/i, '');
	const output = path.join(assetsDir, `${base}.webp`);

	await sharp(input)
		.resize({ width: 1200, withoutEnlargement: true })
		.webp({ quality: 85 })
		.toFile(output);

	const outStat = await stat(output);
	console.log(`${file} → ${base}.webp (${Math.round(outStat.size / 1024)} KB)`);
}
