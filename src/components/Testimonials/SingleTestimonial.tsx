/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: any }) => {
  const { star, name, image, content, designation } = testimonial;

  const ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow-500">
        {starIcon}
      </span>
    );
  }

  return (
    <div>
      <div
        className="rounded shadow-lg border border-gray-50 bg-white p-6 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >

        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
          <div className="w-full">
            <h5 className="text-lg font-semibold text-primary dark:text-white lg:text-base xl:text-lg">
              {name}
            </h5>
            <p className="text-sm text-textSecondary">{designation}</p>
            <div className="mt-2 flex items-center space-x-1">{ratingIcons}</div>

          </div>
        </div>
        <div className="w-full bg-gray-200 h-0.5 mt-2 mb-2" />
        <p className=" text-[#8D94AE] mt-2 text-sm">
          “{content}
        </p>
      </div>
    </div>
  );
};

export default SingleTestimonial;
