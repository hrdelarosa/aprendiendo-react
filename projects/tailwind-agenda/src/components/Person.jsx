import { Data } from "./Data";

export function Personas({ nombre, telefono, correro, direccion, ciudad }) {
  return (
    <section className="flex gap-4 items-center justify-center w-auto p-4 rounded-2xl bg-slate-300 bg-color-card">
      <Data
        nom={nombre}
        tel={telefono}
        corr={correro}
        dire={direccion}
        ciu={ciudad}
      />
    </section>
  );
}
