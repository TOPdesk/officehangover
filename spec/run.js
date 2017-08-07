import Jasmine from 'jasmine';

let jasmine = new Jasmine();

jasmine.loadConfigFile('./build/jasmine.json');
jasmine.execute();