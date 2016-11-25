'use strict';

var RPG = RPG || {};

RPG.Dialog = function (state, dialogTree) {

	this.state = state;
	this.game = state.game;
    this.dialogid =  dialogTree;

}

RPG.Dialog.prototype = Object.create(Object.prototype);
RPG.Dialog.prototype.constructor = RPG.Dialog;

RPG.Dialog.prototype.popup = function() {

    var game = this.game;
    var dialog = this;
    
	this.state.uiBlocked = true;
	
	// calculate a reasonable margin, 10% of width or 10% of height, whichever is smaller.
    this.margin = Math.min (this.game.width / 10, this.game.height / 10);        
    this.lineHeight = 100;
    
	this.y = this.margin;
    this.x = this.margin;
    this.w = this.game.width - 2 * this.margin;
    this.h = this.game.height - 2 * this.margin;

    // running y counter
    var yy = this.y;

    this.objects = [];
    
    // semi-transparent black background
	var bg = game.add.graphics(game.width, game.height);    	
    bg.beginFill("#000000", 0.7);
    bg.x = this.x;
    bg.y = this.y;
    bg.drawRect(0, 0, this.w, this.h);
    bg.fixedToCamera = true;
    
    this.objects.push(bg);
    
    //TEMP: testing data, to be replaced
    var msg = "Is this game starting to look cool?"
    var options = [ "Yes", "Sure" ]
    //end testing data
    
    var msgWidget = this.game.add.text(this.x, yy, msg, {'fill': '#FFA500'});
    msgWidget.fixedToCamera = true;
    yy += this.lineHeight;
    this.objects.push(msgWidget);
           
    options.forEach (function(option) {
    	
    	var optionWidget = game.add.text(dialog.x, yy, option, {'fill': '#00FFA5'});
    	yy += dialog.lineHeight; 
    	optionWidget.fixedToCamera = true;        	
        optionWidget.inputEnabled = true;            
        optionWidget.events.onInputDown.add(function (){
            
        	console.log("Selected option " + option)
            dialog.close();
            
        }, this);
        
        dialog.objects.push(optionWidget);
    });

}

RPG.Dialog.prototype.close = function() {
	
	this.state.uiBlocked = false;
	
	// destroy all components of the dialog
	this.objects.forEach (function(element) { 
		element.destroy();
	});

}
