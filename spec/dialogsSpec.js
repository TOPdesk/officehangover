import DIALOGS from "../src/dialogs.js";

describe("Dialogs", function() {

	for (let dialogKey in DIALOGS) {
		it(dialogKey + " should define start options", function() {		
			expect(DIALOGS[dialogKey].start_options).toBeDefined();
		});
	}


});
