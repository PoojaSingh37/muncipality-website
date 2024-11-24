import karnaliBridge from '../../assets/images/karnali-bridge.png';
import icon1 from '../../assets/images/freelancer.png';
import icon2 from '../../assets/images/data-collection-2 1.png';
import icon3 from '../../assets/images/workshop.png';

function Information() {
  return (
    <>
      <div className="naxatw-container naxatw-start-11 naxatw-mt-7 naxatw-rounded-2xl naxatw-bg-red-50 naxatw-p-5 naxatw-leading-8 md:naxatw-p-20">
        <div className="naxatw-flex naxatw-flex-col naxatw-justify-between naxatw-gap-10 md:naxatw-flex-row">
          <div className="naxatw-flex naxatw-flex-col naxatw-justify-center naxatw-align-middle">
            <div className="naxatw-mb-4 naxatw-text-xl naxatw-font-normal naxatw-leading-8 md:naxatw-text-2xl md:naxatw-leading-10">
              This portal is developed to identify the enabling factors of the
              development supported by development partners in Karnali Province
              of Nepal.
            </div>
            <div className="naxatw-text-base naxatw-font-normal naxatw-leading-6 md:naxatw-text-lg">
              In the last few years, there has been a huge concern among the
              civil societies, government and international development partners
              about improving the quality of life of people in Karnali. Nepal
              government along with the support of donor countries and
              multilateral funding agencies has invested huge resources in
              implementing development projects through NGO/INGO and others.
              Many organizations including NGO/INGOs have spent a significant
              amount of resources towards assessing development initiatives
              through project intervention at the provincial and municipal
              levels. The focus of all these investments and efforts is to
              create an equitable and prosperous society, but such investment is
              not always based on the proper assessment of the local needs and
              expectations.
            </div>
          </div>
          <img
            src={karnaliBridge}
            alt="Karnali Bridge"
            className="naxatw-mt-5 naxatw-w-full md:naxatw-mt-0 md:naxatw-w-auto"
          />
        </div>
        <div className="naxatw-mt-10">
          <div className="naxatw-pb-5 naxatw-text-xl naxatw-font-bold naxatw-leading-8 naxatw-text-neutral-800 md:naxatw-pb-10 md:naxatw-text-2xl">
            Objectives
          </div>
          <div className="naxatw-flex naxatw-flex-col naxatw-gap-10 md:naxatw-flex-row">
            <div className="naxatw-mb-5 naxatw-flex naxatw-min-w-full naxatw-items-center md:naxatw-mb-0 md:naxatw-min-w-[350px]">
              <div className="naxatw-mr-4">
                <img src={icon1} alt="Freelancer" />
              </div>
              <div className="naxatw-text-base naxatw-font-normal naxatw-leading-6 md:naxatw-text-lg">
                Identifying the key actors to operate Project Database Portal
              </div>
            </div>
            <div className="naxatw-mb-5 naxatw-flex naxatw-min-w-full naxatw-items-center md:naxatw-mb-0 md:naxatw-min-w-[350px]">
              <div className="naxatw-mr-4">
                <img src={icon2} alt="Data Collection" />
              </div>
              <div className="naxatw-text-base naxatw-font-normal naxatw-leading-6 md:naxatw-text-lg">
                Collection of project-related data from federal, provincial, &
                municipal levels & validate into Project Database Portal
              </div>
            </div>
            <div className="naxatw-flex naxatw-min-w-full naxatw-items-center md:naxatw-min-w-[350px]">
              <div className="naxatw-mr-4">
                <img src={icon3} alt="Workshop" />
              </div>
              <div className="naxatw-text-base naxatw-font-normal naxatw-leading-6 md:naxatw-text-lg">
                Capacitate provincial & municipal officials to handle Project
                Database Portal
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
