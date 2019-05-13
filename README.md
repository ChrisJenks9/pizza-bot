# Pizzabot #

### What is this repository for? ###

This is an app to instruct Pizzabot on how to deliver pizzas to all the houses in a neighborhood.

### Prerequisites ###

In order to develop or build the library you must have node and npm installed

### Installing ###

1. Create the Directory for the files

```
mkdir pizza-bot
```

2. Navigate into the created directory

```
cd pizza-bot
```

3. Unpack the files from the tarball located here: https://github.com/ChrisJenks9/pizza-bot/blob/master/pizza-bot.tar
4. Navigate into the `pizza-bot` folder
5. Install NPM packages

```
npm install
```

### Running the Tests ###

The library has tests. If any changes are done to the library please run the tests before committing:

```
npm test
```

### Running the App ###

To run the app in terminal do the following:

1. run start command

```
npm start
```

2. Require the module

```
const pizzaBot = require('./lib/index.js');
```

3. Run the command to direct the delivery. `5x5` in the command represents the size of the grid. It can be `6x6` or whatever you wish. `(1, 3) (4, 4)` represents the deliverys. If it doesnt follow the below format or exceeds the grid limit, an error will be returned to terminal.

```
pizzaBot('5x5 (1, 3) (4, 4)')
pizzaBot('5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (5, 5)')
```


### Authors

* **Christopher Jenks**
