import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    //<button class="increment" onClick={() => setCount(count() + 1)}>
      //Clicks: {count()}
    //</button>
    <a href="https://purevpndev.fusionauth.io/oauth2/authorize?redirect_uri=puredome%3A%2F%2Fhome%2Fa5bd247f-9f51-40c2-8e94-8d6535e4cbf9&scope=offline_access&client_id=a5bd247f-9f51-40c2-8e94-8d6535e4cbf9&response_type=code&code_challenge_method=S256&state=60CFB073&code_challenge=Jm7F1fqUf06IJ-5rSZu6qNa7ZvrHH-hy_c1Ny53vWyU" target="_self">
          login without idp
        </a>
  );
}
