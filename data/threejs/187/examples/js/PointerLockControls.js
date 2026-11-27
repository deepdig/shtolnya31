/**
 * three.js r187 PointerLockControls в виде обычного (не модульного) скрипта.
 * Оригинал: data/threejs/187/examples/jsm/controls/PointerLockControls.js
 * Отличие только в способе подключения: вместо import/export используется
 * глобальный THREE и THREE.PointerLockControls.
 */
( function () {

	const { Controls, Euler, Vector3 } = THREE;

	const _euler = new Euler( 0, 0, 0, 'YXZ' );
	const _vector = new Vector3();

	const _changeEvent = { type: 'change' };
	const _lockEvent = { type: 'lock' };
	const _unlockEvent = { type: 'unlock' };

	const _MOUSE_SENSITIVITY = 0.002;
	const _PI_2 = Math.PI / 2;

	class PointerLockControls extends Controls {

		constructor( camera, domElement = null ) {

			super( camera, domElement );

			this.isLocked = false;

			// Camera pitch, lower limit. Range is '[0, Math.PI]' in radians.
			this.minPolarAngle = 0;

			// Camera pitch, upper limit. Range is '[0, Math.PI]' in radians.
			this.maxPolarAngle = Math.PI;

			this.pointerSpeed = 1.0;

			// event listeners

			this._onMouseMove = onMouseMove.bind( this );
			this._onPointerlockChange = onPointerlockChange.bind( this );
			this._onPointerlockError = onPointerlockError.bind( this );

			if ( this.domElement !== null ) {

				this.connect( this.domElement );

			}

		}

		connect( element ) {

			super.connect( element );

			this.domElement.ownerDocument.addEventListener( 'mousemove', this._onMouseMove );
			this.domElement.ownerDocument.addEventListener( 'pointerlockchange', this._onPointerlockChange );
			this.domElement.ownerDocument.addEventListener( 'pointerlockerror', this._onPointerlockError );

		}

		disconnect() {

			this.domElement.ownerDocument.removeEventListener( 'mousemove', this._onMouseMove );
			this.domElement.ownerDocument.removeEventListener( 'pointerlockchange', this._onPointerlockChange );
			this.domElement.ownerDocument.removeEventListener( 'pointerlockerror', this._onPointerlockError );

		}

		dispose() {

			this.disconnect();

		}

		getDirection( v ) {

			return v.set( 0, 0, - 1 ).applyQuaternion( this.object.quaternion );

		}

		moveForward( distance ) {

			if ( this.enabled === false ) return;

			// move forward parallel to the xz-plane
			// assumes camera.up is y-up

			const camera = this.object;

			_vector.setFromMatrixColumn( camera.matrix, 0 );

			_vector.crossVectors( camera.up, _vector );

			camera.position.addScaledVector( _vector, distance );

		}

		moveRight( distance ) {

			if ( this.enabled === false ) return;

			const camera = this.object;

			_vector.setFromMatrixColumn( camera.matrix, 0 );

			camera.position.addScaledVector( _vector, distance );

		}

		lock( unadjustedMovement = false ) {

			this.domElement.requestPointerLock( {
				unadjustedMovement
			} );

		}

		unlock() {

			this.domElement.ownerDocument.exitPointerLock();

		}

	}

	// event listeners

	function onMouseMove( event ) {

		if ( this.enabled === false || this.isLocked === false ) return;

		const camera = this.object;
		_euler.setFromQuaternion( camera.quaternion );
		_euler.y -= event.movementX * _MOUSE_SENSITIVITY * this.pointerSpeed;
		_euler.x -= event.movementY * _MOUSE_SENSITIVITY * this.pointerSpeed;

		_euler.x = Math.max( _PI_2 - this.maxPolarAngle, Math.min( _PI_2 - this.minPolarAngle, _euler.x ) );

		camera.quaternion.setFromEuler( _euler );

		this.dispatchEvent( _changeEvent );

	}

	function onPointerlockChange() {

		if ( this.domElement.ownerDocument.pointerLockElement === this.domElement ) {

			this.dispatchEvent( _lockEvent );

			this.isLocked = true;

		} else {

			this.dispatchEvent( _unlockEvent );

			this.isLocked = false;

		}

	}

	function onPointerlockError() {

		console.error( 'THREE.PointerLockControls: Unable to use Pointer Lock API' );

	}

	THREE.PointerLockControls = PointerLockControls;

} )();
