import logoflag from '../../assets/images/flagicon.png';

export default function Datasource() {
  return (
    <>
      <div
        className="naxatw-container naxatw-mx-auto naxatw-mt-6 naxatw-max-w-5xl naxatw-rounded-2xl
          naxatw-bg-sky-100 naxatw-p-6 naxatw-text-xs sm:naxatw-p-10 lg:naxatw-p-16"
      >
        {/* Header */}
        <div className="naxatw-mb-8 naxatw-text-center">
          <div className="naxatw-text-3xl naxatw-font-bold naxatw-text-neutral-800 sm:naxatw-text-4xl lg:naxatw-text-5xl">
            Data Source
          </div>
          <div className="naxatw-mt-2 naxatw-text-base naxatw-text-neutral-700 sm:naxatw-text-base lg:naxatw-text-lg">
            A digital portal to identify the enabling factors of the development
            supported by development partners in Karnali Province of Nepal.
          </div>
        </div>

        {/* Federal Government Section */}
        <div className="">
          <div className="naxatw-pb-4 naxatw-pt-8 naxatw-text-center naxatw-text-sm naxatw-font-bold naxatw-text-red-500 sm:naxatw-text-base">
            FEDERAL GOVERNMENT
          </div>
          <div className="naxatw-flex naxatw-flex-wrap naxatw-justify-center naxatw-gap-4 sm:naxatw-gap-8">
            <div className="naxatw-flex naxatw-w-full naxatw-items-center naxatw-gap-2 naxatw-text-black sm:naxatw-w-auto">
              <img
                src={logoflag}
                alt=""
                className="naxatw-w-8 sm:naxatw-w-12"
              />
              <div>
                <div className="naxatw-font-semibold">नेपाल सरकार</div>
                <div className="naxatw-font-bold">अर्थ मन्त्रालय</div>
              </div>
            </div>

            <div className="naxatw-flex naxatw-w-full naxatw-items-center naxatw-gap-2 naxatw-text-black sm:naxatw-w-auto">
              <img
                src={logoflag}
                alt=""
                className="naxatw-w-8 sm:naxatw-w-12"
              />
              <div>
                <div className="naxatw-font-semibold">Nepal Government</div>
                <div className="naxatw-font-bold">
                  Line Ministry Budget Information System
                </div>
              </div>
            </div>

            <div className="naxatw-flex naxatw-w-full naxatw-items-center naxatw-gap-2 naxatw-text-black sm:naxatw-w-auto">
              <img
                src={logoflag}
                alt=""
                className="naxatw-w-8 sm:naxatw-w-12"
              />
              <div>
                <div className="naxatw-font-semibold">Government of Nepal</div>
                <div className="naxatw-font-bold">
                  Aid Management Information System of Nepal
                </div>
              </div>
            </div>

            <div className="naxatw-flex naxatw-w-full naxatw-items-center naxatw-gap-2 naxatw-text-black sm:naxatw-w-auto">
              <img
                src={logoflag}
                alt=""
                className="naxatw-w-8 sm:naxatw-w-12"
              />
              <div>
                <div className="naxatw-font-semibold">नेपाल सरकार</div>
                <div>अर्थ मन्त्रालय</div>
                <div className="naxatw-font-bold">
                  महालेखा नियन्त्रक कार्यालय
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Provincial Government Section */}
        <div>
          <div className="naxatw-pt-8 naxatw-text-center naxatw-text-sm naxatw-font-bold naxatw-text-red-500 sm:naxatw-text-base">
            PROVINCIAL GOVERNMENT
          </div>
          <div className="naxatw-flex naxatw-flex-wrap naxatw-justify-center naxatw-gap-4 naxatw-p-4 sm:naxatw-gap-8">
            <div className="naxatw-flex naxatw-w-full naxatw-items-center naxatw-gap-2 naxatw-text-black sm:naxatw-w-auto">
              <img
                src={logoflag}
                alt=""
                className="naxatw-w-8 sm:naxatw-w-12"
              />
              <div>
                <div className="naxatw-font-semibold">कर्णाली प्रदेश सरकार</div>
                <div className="naxatw-font-bold">
                  मुख्यमंत्री तथा मन्त्रिपरषद्को कार्यालय
                </div>
              </div>
            </div>

            <div className="naxatw-flex naxatw-w-full naxatw-items-center naxatw-gap-2 naxatw-text-black sm:naxatw-w-auto">
              <img
                src={logoflag}
                alt=""
                className="naxatw-w-8 sm:naxatw-w-12"
              />
              <div>
                <div className="naxatw-font-semibold">
                  Provincial Government
                </div>
                <div className="naxatw-font-bold">
                  Provincial Line Ministry Budget Information System
                </div>
              </div>
            </div>

            <div className="naxatw-flex naxatw-w-full naxatw-items-center naxatw-gap-2 naxatw-text-black sm:naxatw-w-auto">
              <img
                src={logoflag}
                alt=""
                className="naxatw-w-8 sm:naxatw-w-12"
              />
              <div>
                <div className="naxatw-font-semibold">नेपाल सरकार</div>
                <div>अर्थ मन्त्रालय</div>
                <div className="naxatw-font-bold">
                  महालेखा नियन्त्रक कार्यालय
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Municipal Government Section */}
        <div className="naxatw-px-4 sm:naxatw-px-8">
          <div className="naxatw-pt-8 naxatw-text-center naxatw-text-sm naxatw-font-bold naxatw-text-red-500 sm:naxatw-text-base">
            MUNICIPAL GOVERNMENT
          </div>
          <div className="naxatw-flex naxatw-flex-col naxatw-items-start naxatw-justify-start naxatw-gap-2 naxatw-p-4 naxatw-text-black sm:naxatw-flex-row sm:naxatw-items-center sm:naxatw-justify-center">
            <img src={logoflag} alt="" className="naxatw-w-8 sm:naxatw-w-12" />
            <div>
              <div className="naxatw-font-semibold">नेपाल सरकार</div>
              <div className="naxatw-font-bold">
                स्थानीय सञ्चित व्यवस्थापन प्रणाली
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
