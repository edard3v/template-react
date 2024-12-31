import Layout from "@layouts/Layout/Layout";
import { HOME } from "./config";

export default function Home() {
  return (
    <Layout title={HOME.display}>
      <main>
        <h1>¡Hola mundo!</h1>
      </main>
    </Layout>
  );
}
