import dialogs from "../assets/data/dialogs.json";

import floor1 from "../assets/data/floor1-tilemap.json";
import floor2 from "../assets/data/floor2-tilemap2.json";

describe("Example", function() {

	for (let dialogKey in dialogs) {
		it(dialogKey + " should define start options", function() {		
			expect(dialogs[dialogKey].start_options).toBeDefined();
		});
	}

	for (let floor of [floor1, floor2]) {
		it("level should be valid json", function() {
			expect(floor.layers).toBeDefined();
			expect(floor.layers.length).toEqual(5);
		});
	}

});
