import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_1fr] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <section className="w-full h-screen flex jusctify-center-safe items-center bg-white">
        <div className="bg-[url(/kickboxing.png)]  bg-center bg-no-repeat bg-cover h-screen w-5/12"></div>
        <div className="text-black">
          <h1 className="text-6xl text-center">TITANIUM TEAM</h1>
          <h2 className="text-2xl text-center">ESCUELA DE KICKBOXING Y MUAY THAI</h2>
        </div>
        <div className="bg-[url(/muaythai.png)]  bg-center bg-no-repeat bg-cover h-screen w-5/12"></div>
      </section>
      <section className=" py-8 grid grid-rows-2 grid-cols-2">
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fxZzELofRNc?si=EodMil5hiAHfMUOo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
        <div>
          <h1 className="text-center text-4xl pb-8">Kickboxing</h1>
          <p>
            El kickboxing es un deporte de contacto que combina técnicas de puño y pierna, derivadas principalmente del boxeo occidental y de diversas artes marciales como el karate y el muay thai. Su origen moderno se sitúa en Japón en la década de 1960, aunque también se desarrolló de forma paralela en Estados Unidos. Hoy en día, existen varias modalidades de kickboxing con reglas distintas según la organización y el país.
          </p>
        </div>
      </section>
      <section className=" py-8 grid grid-rows-2 grid-cols-2">
        <div>
          <h1 className="text-center text-4xl pb-8">K1</h1>
          <p>
            El k1 Style es una modalidad del Kickboxing donde la intención del competidor es derrotar al rival utilizando técnicas legales con toda su fuerza y potencia. Los ataques deben ser ejecutados hacia áreas permitidas de contacto con gran enfoque, determinación y velocidad, logrando un contacto sólido sobre el oponente.
            Están permitidos los ataques en la parte frontal y lateral de la cabeza y torso. También se permiten los ataques de patadas y rodillas a la pierna del oponente (en todas las partes, incluyendo las articulaciones).
            En esta modalidad, se puede sujetar el cuello y hombros del rival con una o ambas manos para ejecutar técnicas de rodilla.
          </p>
        </div>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/9HbTDH2Fcys?si=m5ZtO3LnOSRB30MC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
      </section>
      <section className=" py-8 grid grid-rows-2 grid-cols-2">
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/RS673KRxJTw?si=q3N0hiNk7pDFoiAB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
        <div>
          <h1 className="text-center text-4xl pb-8">Muay Thai</h1>
          <p>
            El muay thai es un deporte de contacto, también conocido como Thai Boxing o Boxeo Tailandés. Es el deporte nacional y el arte marcial procedente de Tailandia. Se desarrolló hace varios cientos de años como una forma de combate cuerpo a cuerpo que se utiliza todo el cuerpo como arma. Previamente al combate se lleva a cabo un ritual de danza conocido como Wai Kru Ram Muay.
          </p>
        </div>
      </section>
    </div>
  );
}
