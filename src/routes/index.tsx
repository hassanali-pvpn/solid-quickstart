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
        <a href="https://purevpndev.fusionauth.io/oauth2/authorize?response_type=code&state=1C6C0712&redirect_uri=puredome%3A%2F%2Fhome%2Fa5bd247f-9f51-40c2-8e94-8d6535e4cbf9&code_challenge_method=S256&code_challenge=uOCT5KghVGMmpLH670RA5oIoCs_1jORPfAlRnlwnNrU&client_id=a5bd247f-9f51-40c2-8e94-8d6535e4cbf9&scope=offline_access" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
