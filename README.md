# Vancouver Game Jam 2017
In January 2017, we -- Sam McConnell, Amy Yung, Patrick Lin and Caleigh Minshall -- met at the Global Game Jam to make our very first game together. Even though we mostly all met right before the Jam, we still managed to master JavaScript and the Phaser library in just 48 hours! ... Sort of.

What you see is the rough beginnings of Squirrelario -- or Squirrel Adventure -- or Squirrel Defender -- or -- well, we didn't settle on a final name.

You are a fearless and feisty squirrel navigating UBC's Main Mall at noon. Peak longboarder and cyclist time! What are you to do?! On the one hand, acorns are tasty. On the other hand, death by cyclist is no piece of cake either. 

Your mission, should you choose to accept it, is to collect enough acorns and kill enough cyclists (by shooting stars at them...don't ask) before cyclists make mincemeat of you.

Good luck!

# Usage

1. Download the project: https://github.com/wlk/phaser-typescript-boilerplate/archive/master.zip
2. Install dependencies (more information below)
3. Write your game, you can start with `src/app.ts`
4. Run in development mode (more information below)
5. Repeat 3-4 until your game is ready
6. Build in production mode (more information below)

# Getting Started

### Pre-requisites

You need to have `node` and `npm` installed

### Dependencies

You need to have typescript installed (globally):
```
sudo npm install -g typescript
sudo npm install -g tslint
```

Then inside the project directory run:
```
npm install
```

This will install all required local dependencies

### Building the project

To build project you can use:

```
npm build
```

Or just run:

```
tsc
```

the `tsconfig.json` has is configured for you

### Running in dev mode:

```
npm dev
```

### Known problems

* `tslint` doesn't support directory as parameter (you can use what's integrated in your IDE)

# IDE support

### Intellij IDEA

Intellij has pretty good support for Typescript and this project, you can either used bundled typescript compiler or use the one installed via npm (but make sure you are putting generated `*.js` files to the `build` directory)

# Contributing

Pull requests and issues with improvements/fixes/suggestions/etc are welcome.
