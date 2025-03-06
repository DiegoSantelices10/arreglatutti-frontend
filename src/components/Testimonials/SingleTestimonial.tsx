/* eslint-disable @typescript-eslint/no-explicit-any */
const starIcon = (
  <svg width="14" height="14" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: any }) => {
  const { star, name, content } = testimonial;

  const ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow-400">
        {starIcon}
      </span>
    );
  }

  return (
    <div>
      <div
        className="rounded-md shadow-md border border-gray-50 bg-white p-6 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div>
          <div className="w-full flex gap-2 items-center justify-between">
            <h5 className="text-lg font-semibold text-primary dark:text-white lg:text-base xl:text-lg">
              {name}
            </h5>
            <div className="flex items-center space-x-1">{ratingIcons}</div>
          </div>
        </div>
        <div className="w-full bg-gray-200 h-0.5 mt-2 mb-2" />
        <p className=" text-textSecondary mt-2 text-sm">{content}</p>
      </div>
    </div>
  );
};

export default SingleTestimonial;
