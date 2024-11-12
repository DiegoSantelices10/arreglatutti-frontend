import { cn } from "@/utils";

const SectionTitle = ({
  title,
  width = "570px",
  center,
  textClassName,
  mb = "40px",
}: {
  title: string;
  paragraph?: string;
  textClassName?: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className={cn("text-3xl font-bold !leading-tight text-white sm:text-4xl md:text-[45px]", textClassName)}>
          {title}
        </h2>

      </div>
    </>
  );
};

export default SectionTitle;
