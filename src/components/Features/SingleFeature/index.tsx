
interface Feature {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
};

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div>
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded bg-[#4a6cf7] bg-opacity-10 text-[#4a6cf7]">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-primary sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-textSecondary">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
