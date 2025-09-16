export function Data({ nom, tel, corr, dire, ciu }) {
  return (
    <section className="flex flex-col items-center gap-3 px-6">
      <h3 className="text-color-font">{nom}</h3>
      <ul>
        <li className="text-color-font">
          <strong>Telefono:</strong> {tel}
        </li>
        <li className="text-color-font">
          <strong>Correro:</strong> {corr}
        </li>
        <li className="text-color-font">
          <strong>Direccion:</strong> {dire}
        </li>
        <li className="text-color-font">
          <strong>Ciudad:</strong> {ciu}
        </li>
      </ul>
    </section>
  );
}
