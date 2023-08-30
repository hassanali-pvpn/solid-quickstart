import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    //<button class="increment" onClick={() => setCount(count() + 1)}>
      //Clicks: {count()}
    //</button>
    <a href="https://purevpndev.fusionauth.io/oauth2/authorize?redirect_uri=puredome%3A%2F%2Fhome%2Fa5bd247f-9f51-40c2-8e94-8d6535e4cbf9&response_type=code&state=228C7BCB&client_id=a5bd247f-9f51-40c2-8e94-8d6535e4cbf9&code_challenge=uwiWN4BVX5xVjbM4_OodTsm-R36k2kcGvyzAIhJoNRE&code_challenge_method=S256&scope=offline_access" target="_self">
          login without idp
        </a>
  );
}
