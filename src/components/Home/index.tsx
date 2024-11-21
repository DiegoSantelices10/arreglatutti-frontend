/* eslint-disable @typescript-eslint/no-explicit-any */
import ProfessionButton from "../custom/ProfessionButton";
import Form from "../custom/Form";
import Link from "next/link";
import ProfessionSkeleton from "./Skeleton";
import Solid from "../custom/BackgroundDesign/Solid";
import { profesionesData } from "@/mocks/profession";

const HomeUI = async () => {

  const professions = profesionesData;

  // try {
  //   const { data } = await obtenerProfesiones();
  //   console.log('profesiones', data);

  //   professions = data;
  // } catch (error) {
  //   console.error('Error fetching professionals:', error);
  //   // Podrías agregar aquí alguna lógica para mostrar un mensaje de error al usuario
  // }


  // if (!professions) return <div> <h1 className="text-white">No hay profesiones</h1> </div>


  return (
    <>
      <section
        id="home"
        className="relative z-10 min-h-screen overflow-hidden pt-[120px] md:px-10 "
      >
        <Solid />

        <div className="lg:flex lg:gap-4 lg:justify-between lg:items-center ">
          <div className="pb-6 lg:w-1/2">
            {/* Title */}
            <div className="flex flex-col items-center fadeInUp mx-auto text-center"
              data-wow-delay=".2s"
            >
              <div className="w-full">
                <h1 className="text-2xl lg:text-[36px] font-bold text-white">
                  Profesionales matriculados
                </h1>
                <p className="mb-12 mt-1 text-sm font-normal text-body-white text-[#C0C0CF]">
                  Gasistas, plomeros, electricistas, Instaladores de aire acondicionado y mucho mas
                </p>
              </div>
            </div>
            <h1 className="text-white text-center font-semibold pb-4">Selecciona el profesional que buscas</h1>

            {/* Buttons group */}
            {professions.length === 0 ? <ProfessionSkeleton /> : (
              <div className="flex flex-wrap px-4 md:px-0 gap-6 justify-center items-start">
                {professions.map((item: any) => (
                  <Link
                    key={item.id}
                    className="cursor-pointer"
                    href={{
                      pathname: `/detail/${item.name}`,
                    }}
                  >
                    <ProfessionButton
                      title={item.name}
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Form */}
          <div className="container w-full lg:w-1/2 mt-4 md:mt-0 md:pl-10">
            <div
              className="mb-12 rounded-xl p-8 bg-white"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-primary text-center">
                Solicita tu cotización
              </h2>
              <Form data={professions} />
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default HomeUI;
