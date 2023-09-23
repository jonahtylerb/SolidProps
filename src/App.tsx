import solidLogo from "./assets/solid.svg";

import "./App.css";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <section>
      <div class="icons">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p class="desc">
          Edit <code>src/App.tsx</code> and save to test HMR <IconTablerCode />
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </section>
  );
}

export default App;
