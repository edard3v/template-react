import css from "./Home.module.css";
import Layout from "@layouts/Layout/Layout";
import { HOME } from "./config";
import Email from "@components/inputs/Email/Email";
import Password from "@components/inputs/Password/Password";
import { z } from "zod";
import { useForm } from "@hooks/useForm/useForm";
import Btn from "@components/buttons/Btn/Btn";

export default function Home() {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  type Schema = z.infer<typeof schema>;

  const form = useForm<Schema>(schema, {
    success(inputs) {
      console.log(inputs);
    },
  });

  console.log("erros", form.errors);
  console.log("inputs", form.inputs);

  return (
    <Layout title={HOME.display}>
      <main className={css.home}>
        <form
          ref={form.ref}
          onChange={form.update}
          onSubmit={(e) => {
            e.preventDefault();
            form.success();
          }}
        >
          <Email name="email" err={form.errors?.email} />
          <Password name="password" err={form.errors?.password} />
          <Btn>Login</Btn>
        </form>
      </main>
    </Layout>
  );
}
