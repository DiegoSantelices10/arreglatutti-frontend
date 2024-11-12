/* eslint-disable @typescript-eslint/no-explicit-any */
import ProfessionButton from "../custom/ProfessionButton";
import Form from "../custom/Form";
import Link from "next/link";
import { obtenerProfesiones } from '../../services/profesion/index';
import ProfessionSkeleton from "./Skeleton";

const HomeUI = async () => {

  let professions = [];

  try {
    const { data } = await obtenerProfesiones();
    professions = data;
  } catch (error) {
    console.error('Error fetching professionals:', error);
    // Podrías agregar aquí alguna lógica para mostrar un mensaje de error al usuario
  }


  if (!professions) return <div> <h1 className="text-white">No hay profesiones</h1> </div>


  return (
    <>
      <section
        id="home"
        className="relative z-10 min-h-screen overflow-hidden pt-[120px] pb-10 px-4 md:px-10"
      >
        <div className="absolute left-0 z-[-1]">
          <svg
            width="279"
            height="106"
            viewBox="0 0 279 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
                stroke="url(#paint0_linear_72:302)"
              />
              <path
                d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
                stroke="url(#paint1_linear_72:302)"
              />
              <path
                d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
                stroke="url(#paint2_linear_72:302)"
              />
              <path
                d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
                stroke="url(#paint3_linear_72:302)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_72:302"
                x1="256.267"
                y1="53.6717"
                x2="-40.8688"
                y2="8.15715"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_72:302"
                x1="256.267"
                y1="42.6717"
                x2="-40.8688"
                y2="-2.84285"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_72:302"
                x1="256.267"
                y1="64.6717"
                x2="-40.8688"
                y2="19.1572"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_72:302"
                x1="256.267"
                y1="76.6717"
                x2="-40.8688"
                y2="31.1572"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 bottom-14 z-[-1]">
          <svg
            width="279"
            height="106"
            viewBox="0 0 279 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
                stroke="url(#paint0_linear_72:302)"
              />
              <path
                d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
                stroke="url(#paint1_linear_72:302)"
              />
              <path
                d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
                stroke="url(#paint2_linear_72:302)"
              />
              <path
                d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
                stroke="url(#paint3_linear_72:302)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_72:302"
                x1="256.267"
                y1="53.6717"
                x2="-40.8688"
                y2="8.15715"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_72:302"
                x1="256.267"
                y1="42.6717"
                x2="-40.8688"
                y2="-2.84285"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_72:302"
                x1="256.267"
                y1="64.6717"
                x2="-40.8688"
                y2="19.1572"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_72:302"
                x1="256.267"
                y1="76.6717"
                x2="-40.8688"
                y2="31.1572"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="lg:flex lg:gap-4 lg:justify-center lg:items-center">
          <div className="pb-6 md:px-2">
            {/* Title */}
            <div className="flex flex-col items-center fadeInUp mx-auto text-center"
              data-wow-delay=".2s"
            >
              <div className="w-full">
                <h1 className="text-2xl md:text-[44px] font-bold text-white">
                  Profesionales matriculados
                </h1>
                <p className="mb-12 mt-1 text-sm font-normal text-body-white text-gray-300">
                  Gasistas, plomeros, electricistas, Instaladores de aire acondicionado...
                </p>
              </div>
            </div>

            {/* Buttons group */}
            {professions.length === 0 ? <ProfessionSkeleton /> : (
              <div className="flex flex-wrap gap-6 justify-center items-start">
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
          <div className="w-full lg:w-1/2 mt-4 md:mt-0 md:pl-10">
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
