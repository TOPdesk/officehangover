// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

export default class extends Phaser.Sprite
{
	/** called whenever a player collides with a solid game object */
	handleCollision() {}

	/** 
	 * Called whenever a player is very near a solid object,
	 * or when the player is walking through a non-solid 'zone' object.
	 */
	handleOverlap() {}
}