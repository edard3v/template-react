# `useForm`

Un hook diseñado para gestionar formularios utilizando un esquema de validación con **Zod** y un manejador de éxito personalizado.

### Características

- Recibe un esquema de Zod y un objeto de configuración que incluye una función `success`.
- La función `success` se ejecuta únicamente si el formulario es válido. Recibe un objeto que contiene los valores de los inputs.
- Para obtener un tipado estricto de los valores del formulario, puedes proporcionar un genérico al hook:

```ts
useForm<T>();
```

- Debes vincular la referencia `ref` retornada por `useForm` al elemento `<form>`.
- Cada input debe tener un atributo `name` único. **No se admite el uso de inputs con nombres duplicados**.
- Puedes actualizar el estado interno del formulario utilizando la función `update`.

### Ejemplo

```ts
export default function Component() {
  const form = useForm<Schema>(schema, {
    success({ inputs }) {
      console.log(inputs);
    },
  });

  return (
    <div className={css.search}>
      <form
        ref={form.ref}
        onChange={form.update}
        onSubmit={(e) => {
          e.preventDefault();
          form.success();
        }}
      >
        <Email name="email" />
        <Password name="password" />
        <Btn>Login</Btn>
      </form>
    </div>
  );
}
```
