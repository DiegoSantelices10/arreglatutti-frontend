'use client'
import { FieldValues, useForm } from "react-hook-form";
import Form from "../custom/Form";
import SectionTitle from "../custom/SectionTitle";

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
    <section id="contact" className="overflow-hidden pt-16 md:pt-20 lg:pt-28 px-4 md:px-20 w-full">
      <SectionTitle
        title="Contactanos"
        center
      />
      <div
        className="md:w-1/2 md:mx-auto mb-12 p-8 rounded-xl bg-white sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
        data-wow-delay=".15s"
      >
        <h2 className="mb-3 text-2xl font-bold text-primary text-center">
          Solicita tu cotización
        </h2>

        <Form control={control} />
      </div>
    </section>
  );
};

export default Contact;
