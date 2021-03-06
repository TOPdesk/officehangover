# Office Hangover

## License and contributors

* The MIT License, see [LICENSE](https://github.com/TOPdesk/officehangover/raw/master/LICENSE).
* For contributors, see [AUTHORS](https://github.com/TOPdesk/officehangover/raw/master/AUTHORS).

# Instructions for developers

## Prepare the project
1. Install the latest Node.js (v8 and up) from https://nodejs.org/en/.
2. Run `npm install` from a terminal window, with the working directory set to the project's folder.

## Build the project
The project needs to be preprocessed. To do this, run `npm run build` from a terminal window. After doing this, you can open index.html.
Alternatively, use `npm run watch` to continually monitor the source for changes and build automatically.

## Linting the project
ESLint has been set up to check the code for errors. To run it, execute `npm run lint` from a terminal window.

## Running the development server
Run `npm run start` to run the development server on port 8000. Point your browser to http://localhost:8000/ to run the game. 
The code will be watched for changes and rebuilt automatically.
You can override the port number using the PORT env variable, e.g. `PORT=9001 npm run start`. 