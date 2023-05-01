# Led Control Dashboard

<img width="329" alt="Screenshot 2023-05-01 at 6 53 05" src="https://user-images.githubusercontent.com/72258277/235405706-299051d5-8978-404f-80d9-f130af6279f7.png">

A Frontend example dahsboard for controlling LED from embedded MCU.

## Usage

> Install Nodejs before using this

1. Clone this repository
2. Install dependencies

```bash
npm install # or pnpm install or yarn install
```

3. Build the project

```bash
npm run build 
```

4. take `dist/` and run an http server on your MCU exposing dist

for server example run:

```bash
npm run demo-server
```

view its logs to see the changes made by the UI
