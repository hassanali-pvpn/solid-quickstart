import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    //<button class="increment" onClick={() => setCount(count() + 1)}>
      //Clicks: {count()}
    //</button>
    <a href="https://purevpndev.fusionauth.io/oauth2/authorize?code_challenge=0ruJrsmgUnofNuYRmrWxirR9mbi333mHmI7H80Tyr1M&response_type=code&client_id=4c339c2d-05e6-47e8-a195-4d4b7ced8cf1&state=BBDA04DB&code_challenge_method=S256&scope=offline_access&redirect_uri=puredome%3A%2F%2Fhome" target="_self">
          login without idp
        </a>
  );
}
