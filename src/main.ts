import './app.css'
import 'normalize.css';
import 'open-props/open-props.min.css';
import "fluent-svelte/theme.css";

import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app
