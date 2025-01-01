import Layout from "@layouts/Layout/Layout";
import { HOME } from "./config";
import Btn from "@components/buttons/Btn/Btn";

export default function Home() {
  return (
    <Layout title={HOME.display}>
      <main>
        <h1>¡Hola mundo!</h1>
        <Btn>Enviar</Btn>
      </main>
    </Layout>
  );
}
