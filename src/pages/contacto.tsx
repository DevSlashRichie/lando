import { HTMLInputTypeAttribute, useState } from "react";
import { faFeather, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MultiplePicker({
  display,
  values
}: {
    display: string,
    values: string[],
}) {

  const [ picked, setPicked, ] = useState<Array<number>>([]);

  return (
    <div className="flex items-center gap-5">
      <span className="font-bold basis-40">{display}</span>
      <div className="flex flex-col justify-center">
        {
          values.map((it, key) => {
            return <div key={`${it}-${key}`}>
              <input type="checkbox" />{" "}
              <span>{it}</span>
            </div>
          })
        }
      </div>
    </div>
  );
}

function SinglePick({
  display,
  options
} : {
    display: string,
    options: Array<string>
}) {
  return (
    <div className="flex items-center gap-5">
      <span className="font-bold basis-40">{display}</span>
      <select className="bg-timberwolf rounded-lg p-2 outline-transparent focus:outline-none flex-1">
        {
          options.map((it, key) => {
            return <option key={`${it}-${key}`}>
              {it}
            </option>
          })
        }
      </select>
    </div>
  );
}

function Field({
  display,
  type,
  placeholder,
}
  : {
    display: string,
    type: HTMLInputTypeAttribute | "textfield",
    placeholder: string,
  }) {
  return (
    <div className="flex items-center gap-5">
      <span className="font-bold basis-40">{display}</span>
      {
        type === "textfield"
          ? <textarea
            className="bg-timberwolf rounded-lg p-2 outline-transparent focus:outline-none flex-1"
            placeholder={placeholder}
          >

          </textarea>
          : <input 
            className="bg-timberwolf rounded-lg p-2 outline-transparent focus:outline-none flex-1"
            type={type}
            placeholder={placeholder} 
          />
      }
    </div>
  );
}

function LiWithIcon({
  icon,
  children,
}: {
    icon: IconDefinition,
    children: React.ReactNode,
  }) {
  return (
    <li><FontAwesomeIcon icon={icon} className="text-wenge" /> {children}</li>
  );
}

export default function  Contacto() {
  return (
    <section className="py-10 lg:py-20 w-full flex justify-center">
      <div className="flex lg:flex-row flex-col w-[1080px]">
        <div className="w-full lg:w-1/2 flex flex-col gap-5 p-5">
          <h1 className="text-6xl font-bold">Habla con un <b className="text-bittersweet">experto</b></h1>
          <b>Nuestro equipo puede ayudarte:</b>
          <ul className="list-none ml-6 list-inside">
            <LiWithIcon icon={faFeather}>Maximizamos tus beneficios.</LiWithIcon>
            <LiWithIcon icon={faFeather}>Asesoramiento experto siempre.</LiWithIcon>
            <LiWithIcon icon={faFeather}>Transparencia y honestidad en cada transacción.</LiWithIcon>
            <LiWithIcon icon={faFeather}>Simplificamos la gestión de tu propiedad.</LiWithIcon>
            <LiWithIcon icon={faFeather}>Servicio excepcional garantizado.</LiWithIcon>
          </ul>
        </div>
        <div className="flex justify-between bg-white shadow-xl p-8 w-full lg:w-1/2 rounded-lg">
          <div className="flex flex-col w-full gap-2">
            <Field display="Nombre" type="text" placeholder="Daniel" />
            <Field display="Apellido" type="text" placeholder="Mendez" />
            <Field display="Correo" type="email" placeholder="ejemplo@ejemplo.com" />
            <Field display="Telefono" type="tel" placeholder="(462) 123 4567" />
            <Field display="Necesitas algo mas?" type="textfield" placeholder="Hola, me gustaria..." />
            <SinglePick display="Tipo de operacion" options={["Venta", "Renta", "Compra"]} />
            <MultiplePicker display="Tipo de propiedad" values={["Casa", "Departamento", "Terreno"]} />
            <button className="bg-skobeloff text-white rounded-lg p-2 w-32 self-end hover:bg-bittersweet transition">Enviar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
