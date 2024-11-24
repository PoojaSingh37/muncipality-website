import Information from '@Components/FigmaPages/Information';
import Datasource from '@Components/FigmaPages/Datasource';
import Exploremap from '@Components/FigmaPages/Exploremap';
import Footer from '@Components/FigmaPages/Footer';
import HamburgerMenu from '@Components/FigmaPages/HamburgerMenu';
import figmaLogo from '../../assets/images/logo.png';
import maskgroup from '../../assets/images/mask-group.png';
import flagIcon from '../../assets/images/flag-icon.png';

export default function Landingpage() {
  return (
    <>
      <div className="naxatw-container naxatw-mx-auto naxatw-rounded-2xl naxatw-bg-[#1A83FB] naxatw-p-6 naxatw-text-white sm:naxatw-p-8 sm:naxatw-text-center md:naxatw-p-10">
        <div className=" naxatw-items-center naxatw-justify-between naxatw-gap-4 sm:naxatw-flex md:naxatw-flex ">
          <div className="naxatw-flex naxatw-items-center naxatw-gap-3">
            <img
              src={figmaLogo}
              alt="logo"
              className="lg:naxatw-w-400  sm:naxatw-w-30 "
            />
          </div>
          <div>
            <HamburgerMenu />
          </div>
          <div className="naxatw-flex  naxatw-hidden naxatw-items-center naxatw-gap-3 md:naxatw-flex ">
            <div className="naxatw-text-sm sm:naxatw-text-base md:naxatw-text-lg">
              Data
            </div>
            <div className="naxatw-text-sm sm:naxatw-text-base md:naxatw-text-lg">
              About
            </div>
            <img
              src={flagIcon}
              alt="flag rectangle"
              className="naxatw-w-2 sm:naxatw-w-8 md:naxatw-w-6"
            />
            <button
              type="button"
              className="naxatw-rounded-md naxatw-text-white naxatw-outline naxatw-outline-1 hover:naxatw-outline-2 sm:naxatw-px-8 sm:naxatw-py-4 md:naxatw-px-6 md:naxatw-py-2"
            >
              Log in
            </button>
          </div>
        </div>

        <div className="naxatw-mt-6 naxatw-flex naxatw-flex-col naxatw-items-center naxatw-gap-6 naxatw-px-2 sm:naxatw-px-4 md:naxatw-flex-row md:naxatw-px-8 lg:naxatw-gap-10">
          <div className="naxatw-px-4 naxatw-py-12 naxatw-text-left sm:naxatw-px-6 sm:naxatw-py-24 lg:naxatw-py-36">
            <div className="naxatw-font-bold  naxatw-leading-snug sm:naxatw-pb-2   sm:naxatw-text-2xl md:naxatw-pb-2 lg:naxatw-pb-7 lg:naxatw-text-5xl ">
              Interactive digital portal of projects in Karnali Province of
              Nepal
            </div>
            <div className="naxatw-text-sm naxatw-font-normal naxatw-leading-relaxed sm:naxatw-text-base">
              A digital portal to identify the enabling factors of the
              development supported by development partners in Karnali Province
              of Nepal.
            </div>
          </div>
          <img
            className="naxatw-w-full naxatw-max-w-md naxatw-rounded-2xl md:naxatw-w-1/2"
            src={maskgroup}
            alt="landing page"
          />
        </div>
      </div>

      <Information />

      <Datasource />

      <Exploremap />

      <Footer />

      {/* first component done */}

      {/* second component done but css raimaing */}
    </>
  );
}
