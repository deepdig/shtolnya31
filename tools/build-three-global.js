#!/usr/bin/env bun
/**
 * Пересборка глобальной (IIFE) сборки three.js: data/threejs/<версия>/build/three.global.js
 *
 * Зачем: r15x+ поставляется только ES-модулями (three.module.js + three.core.js).
 * Модули браузер не грузит по file:// (CORS, origin 'null'), поэтому для запуска
 * index.html двойным щелчком нужна обычная сборка, выставляющая window.THREE.
 *
 * Запуск:  bun tools/build-three-global.js [версия]
 *          (по умолчанию 187)
 *
 * Требуется рядом исходник data/threejs/<версия>/build/three.module.js.
 */

import { stat, unlink, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const version = process.argv[ 2 ] ?? '187';

const root = resolve( dirname( fileURLToPath( import.meta.url ) ), '..' );
const buildDir = join( root, 'data', 'threejs', version, 'build' );
const modulePath = join( buildDir, 'three.module.js' );
const outfile = join( buildDir, 'three.global.js' );

// Временная точка входа лежит рядом с three.module.js, чтобы относительный импорт
// не зависел от расположения скрипта. После сборки удаляется.
const tmpEntry = join( buildDir, 'three.global.entry.tmp.js' );

try {

	await stat( modulePath );

} catch {

	console.error( `Не найден исходник: ${ modulePath }` );
	process.exit( 1 );

}

const entrySource = [
	`import * as THREE_NS from './three.module.js';`,
	// Копируем namespace в обычный объект: namespace-объекты модулей заморожены,
	// а классическим аддонам нужно дописывать THREE.PointerLockControls.
	`globalThis.THREE = Object.assign( {}, THREE_NS );`,
	``
].join( '\n' );

await writeFile( tmpEntry, entrySource, 'utf8' );

let built = false;

try {

	const result = await Bun.build( {
		entrypoints: [ tmpEntry ],
		format: 'iife',
		minify: true,
		target: 'browser',
		outfile
	} );

	if ( result.success === false ) {

		for ( const log of result.logs ) console.error( log );
		process.exit( 1 );

	}

	built = true;

} finally {

	await unlink( tmpEntry ).catch( () => {} );

}

if ( built ) {

	const { size } = await stat( outfile );
	console.log( `three.js r${ version }: ${ outfile } (${ ( size / 1024 / 1024 ).toFixed( 2 ) } МБ)` );

}
