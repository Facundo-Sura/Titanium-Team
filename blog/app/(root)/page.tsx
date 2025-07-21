import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-6xl">Titanium Team</h1>
      <section className=" py-8 grid grid-rows-2 grid-cols-2">
        <div>
          <h1 className="text-center text-4xl pb-8">Kickboxing</h1>
          <p>
            El kickboxing es un deporte de contacto que combina técnicas de puño y pierna, derivadas principalmente del boxeo occidental y de diversas artes marciales como el karate y el muay thai. Su origen moderno se sitúa en Japón en la década de 1960, aunque también se desarrolló de forma paralela en Estados Unidos. Hoy en día, existen varias modalidades de kickboxing con reglas distintas según la organización y el país.
          </p>
        </div>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fxZzELofRNc?si=EodMil5hiAHfMUOo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
      </section>
      <section>
        <h1 className="text-center text-4xl pb-8">K1</h1>
        <p>
          El k1 Style es una modalidad del Kickboxing donde la intención del competidor es derrotar al rival utilizando técnicas legales con toda su fuerza y potencia. Los ataques deben ser ejecutados hacia áreas permitidas de contacto con gran enfoque, determinación y velocidad, logrando un contacto sólido sobre el oponente.
          Están permitidos los ataques en la parte frontal y lateral de la cabeza y torso. También se permiten los ataques de patadas y rodillas a la pierna del oponente (en todas las partes, incluyendo las articulaciones).
          En esta modalidad, se puede sujetar el cuello y hombros del rival con una o ambas manos para ejecutar técnicas de rodilla.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9HbTDH2Fcys?si=m5ZtO3LnOSRB30MC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </section>
      <section>
        <h1 className="text-center text-4xl pb-8">Muay Thai</h1>
        <p>
          El muay thai es un deporte de contacto, también conocido como Thai Boxing o Boxeo Tailandés. Es el deporte nacional y el arte marcial procedente de Tailandia. Se desarrolló hace varios cientos de años como una forma de combate cuerpo a cuerpo que se utiliza todo el cuerpo como arma. Previamente al combate se lleva a cabo un ritual de danza conocido como Wai Kru Ram Muay.
        </p>
      </section>
    </div>
  );
}
