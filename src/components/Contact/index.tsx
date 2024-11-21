'use client'
import { FieldValues, useForm } from "react-hook-form";
import Form from "../custom/Form";
import SectionTitle from "../custom/SectionTitle";
import CheckIcon from "@/images/icons/check-icon";
import Solid from "../custom/BackgroundDesign/Solid";

const Contact = () => {

  const {
    control,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      telephone: "",
      message: "",
      profesional: "",
    },
  })
  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-20 lg:py-28 md:px-10 w-full ">
      <Solid />
      <div className="container">
        <SectionTitle
          title="Contactanos"
          textClassName="md:text-[36px] lg:text-[40px]"
          center
        />
        <div className="lg:flex lg:justify-between lg:items-start lg:gap-4">

          <div
            className="mb-12 rounded-xl p-8 bg-white lg:w-1/2"
            data-wow-delay=".15s"
          >
            <h2 className="mb-3 text-2xl font-bold text-primary text-center">
              Solicita tu cotización
            </h2>

            <Form control={control} />
          </div>
          <div className="hidden lg:block lg:w-1/2  text-white space-y-4 pt-24 text-center ">
            <h2 className="text-white font-bold text-3xl">Proceso de consulta</h2>
            <div className="flex justify-center items-center gap-4 px-6">
              <CheckIcon className="text-white size-6" />
              <h2>Envianos tu consulta sobre el problema que tengas.</h2>
            </div>
            <div className="flex justify-center items-center gap-4 px-6">
              <CheckIcon className="text-white size-6" />
              <h2>Sera respondida en el menor tiempo posible.</h2>
            </div>
            <div className="flex justify-center items-center gap-4 px-6">
              <CheckIcon className="text-white size-6" />
              <h2>Con los mejores profesionales.</h2>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Contact;
