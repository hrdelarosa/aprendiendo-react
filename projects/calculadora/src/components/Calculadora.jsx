import Button from "./Button";
import Key from "./Key";
import { KEYPADNUM } from "../const/numPad";
import { $ } from "../utils/selector";

export default function Calculadora() {
  function padClick(value) {
    const operation = $(".operation");
    const result = $(".result");
    // console.log(value, operation.innerHTML);
    // console.log(result.innerHTML);
    let operacion;
    // let resultado;

    if (value === "=") {
      operacion = operation.innerHTML;
      console.log(operacion.includes("⨉").replace("⨉", "*"));
      // resultado = eval(operacion.includes("⨉"));
      // console.log(resultado);
      operation.innerHTML += value;
      result.innerHTML = operacion;
    } else if (operation.innerHTML === "&nbsp;") operation.innerHTML = value;
    else operation.innerHTML += value;

    console.log(operacion);
  }

  return (
    <main>
      <div className="display">
        <p className="operation">&nbsp;</p>
        <p className="result">&nbsp;</p>
      </div>
      <section>
        <div className="keyboard">
          <Button>CLEAR</Button>
          <Button>DELETE</Button>
        </div>
        <div className="keypad">
          {KEYPADNUM.map((key, i) => (
            <Key key={i} padClick={() => padClick(key)}>
              {key}
            </Key>
          ))}
        </div>
      </section>
    </main>
  );
}
