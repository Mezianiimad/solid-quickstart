import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>EURL CODIMOS</h1>
      <h3>COMPTOIR DE DISTRIBUTION DU MATÉRIEL ET OUTILLAGE SONELGAZ</h3>
      <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">

      <p>
        Visit{" "}
        <a href="https://main--startling-daifuku-bb8624.netlify.app/CodimosApp.apk" target="_blank">
          Download codimos
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
