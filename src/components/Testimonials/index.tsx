import SingleTestimonial from "./SingleTestimonial";
import SectionTitle from "../custom/SectionTitle";
import Solid from "../custom/BackgroundDesign/Solid";

const testimonialData = [
  {
    id: 1,
    name: "Francisco Ramos",
    designation: "Reparación del termotanque",
    content:
      "Excelente trabajo, super profesional y atento a los detalles.",
    image: "/images/auth-01.png",
    star: 4,
  },
  {
    id: 2,
    name: "Diego Figueroa",
    designation: "Instalación de aire acondicionado",
    content:
      "Trabajo excelente, super profesional y atento a los detalles.",
    image: "/images/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Juan Carlos",
    designation: "Arreglo perdida de gas",
    content:
      "Vino a horario y trabajo excelente, super profesional y atento a los detalles.",
    image: "/images/auth-03.png",
    star: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-white min-h-screen z-10 bg-primary/[.03] py-16 md:py-20 lg:py-28 md:px-10">
      <Solid />
      <div className="container">
        <SectionTitle
          title="Testimonios"
          textClassName="md:text-[36px] lg:text-[40px] text-primary"
          center
        />
        <div className="lg:flex lg:justify-between lg:items-center lg:gap-4">
          <div className="lg:w-1/2 px-4 hidden lg:block">
            <h2 className="text-primary font-bold text-3xl">Nuestros clientes</h2>
            <p className="text-textSecondary">
              Estos son algunos de los testimonios de nuestros clientes.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:w-1/2 gap-y-6">
            {testimonialData.map((testimonial) => (
              <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default Testimonials;
