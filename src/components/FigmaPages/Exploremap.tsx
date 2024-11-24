import location from '../../assets/images/location.png';

export default function Exploremap() {
  return (
    <>
      <div className="naxatw-mx-5 naxatw-mt-6 naxatw-flex naxatw-max-w-[1200px] naxatw-flex-col naxatw-items-center naxatw-justify-between naxatw-rounded-2xl naxatw-bg-blue-600 naxatw-p-6 naxatw-text-white sm:naxatw-mx-10 md:naxatw-mx-20 md:naxatw-flex-row md:naxatw-p-10 lg:naxatw-mx-32">
        <div className="naxatw-flex naxatw-flex-col naxatw-items-center naxatw-gap-6 naxatw-text-center sm:naxatw-flex-row sm:naxatw-text-left md:naxatw-gap-10">
          <div className="naxatw-flex-shrink-0">
            <img
              src={location}
              alt="Location"
              className="naxatw-h-auto naxatw-w-20 sm:naxatw-w-24 md:naxatw-w-12 lg:naxatw-w-20"
            />
          </div>
          <div className="naxatw-mt-4 naxatw-text-lg naxatw-font-normal naxatw-leading-8 sm:naxatw-mt-0 sm:naxatw-text-xl sm:naxatw-leading-10 md:naxatw-text-2xl">
            Interactive digital portal of projects in Karnali Province of Nepal
          </div>
        </div>
        <div className="naxatw-mt-4 md:naxatw-mt-0">
          <button
            type="button"
            className="naxatw-rounded-md naxatw-bg-white naxatw-font-normal naxatw-text-blue-600 naxatw-outline naxatw-outline-2 sm:naxatw-px-6 sm:naxatw-py-3 md:naxatw-px-7 md:naxatw-py-1"
          >
            Explore map
          </button>
        </div>
      </div>
    </>
  );
}
