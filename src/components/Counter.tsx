import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    //<button class="increment" onClick={() => setCount(count() + 1)}>
      //Clicks: {count()}
    //</button>
    <a href="https://purevpndev.fusionauth.io/oauth2/authorize?redirect_uri=puredome%3A%2F%2Fhome%3Fapp_id%3Da5bd247f-9f51-40c2-8e94-8d6535e4cbf9&client_id=a5bd247f-9f51-40c2-8e94-8d6535e4cbf9&scope=offline_access&response_type=code&code_challenge=v88td1nJ8IPLfC4oLCKA0K_vVF90oQO2U-JWP5F9jhI&state=802C43B7&code_challenge_method=S256" target="_self">
          login without idp
        </a>
  );
}
