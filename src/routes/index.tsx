import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://purevpndev.fusionauth.io/oauth2/authorize?code_challenge=XvYCUq3Hg6-yhbnDvFFegmGxE-G7IL7lXgdIRFQJISE&code_challenge_method=S256&redirect_uri=puredome%3A%2F%2Fhome%2Fa5bd247f-9f51-40c2-8e94-8d6535e4cbf9&scope=offline_access&response_type=code&client_id=a5bd247f-9f51-40c2-8e94-8d6535e4cbf9&state=E20D4AD7&idp_hint=8c7ccf11-8f16-4ac5-b4e1-9d26d12217ef" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
