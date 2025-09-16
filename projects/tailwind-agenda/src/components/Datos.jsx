export function Datos({ nom, eda, tel, corr, dire, ciu }) {
  return (
    <section className="flex flex-col items-center gap-3 border-l-2 border-r-2 border-blue-300 px-6">
      <h3 className="text-color-font">{nom}</h3>
      <ul>
        <li className="text-color-font">
          <strong>Edad:</strong> {eda}
        </li>
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
