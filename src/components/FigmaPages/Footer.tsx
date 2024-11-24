import Icon from '@Components/common/Icon';
import logoflag from '../../assets/images/flagicon.png';
import uk from '../../assets/images/United-kingdom.png';
import project from '../../assets/images/Group 42.png';

function Footer() {
  return (
    <>
      <div className="naxatw-container naxatw-mx-auto naxatw-max-w-screen-lg naxatw-border-0 naxatw-px-4">
        <div className="naxatw-flex naxatw-flex-col naxatw-justify-between naxatw-pt-8 sm:naxatw-flex-row sm:naxatw-pt-10 ">
          <div className="naxatw-flex naxatw-flex-col naxatw-items-start naxatw-gap-4 sm:naxatw-flex-row sm:naxatw-items-center sm:naxatw-gap-8">
            <div className="naxatw-flex naxatw-items-center naxatw-gap-2">
              <img
                src={logoflag}
                alt=""
                className="naxatw-w-8 sm:naxatw-w-12"
              />
              <div className="naxatw-text-xs naxatw-font-bold naxatw-text-pink-700 sm:naxatw-text-sm">
                <div className="naxatw-font-medium">कर्णाली प्रदेश सरकार</div>
                <div className="naxatw-font-bold">
                  मुख्यमंत्री तथा मन्त्रिपरषद्को कार्यालय
                </div>
              </div>
            </div>

            <div className="naxatw-text-xs sm:naxatw-text-sm">
              <img src={project} alt="" />
            </div>
          </div>
          <div className=" naxatw-mb-4 naxatw-flex naxatw-flex-col naxatw-gap-4 naxatw-text-xs naxatw-font-bold naxatw-text-neutral-800 sm:naxatw-mb-0 sm:naxatw-text-sm ">
            <div className="">Map</div>
            <div>Data</div>
            <div>About</div>
          </div>
          <div className=" naxatw-flex naxatw-flex-col  naxatw-text-xs max-sm:naxatw-flex-col  max-sm:naxatw-items-center sm:naxatw-gap-4 sm:naxatw-text-sm">
            <div className="naxatw-flex ">
              <Icon name="location_on" />
              <span>Search Projects</span>
            </div>
            <div className="naxatw-flex    ">
              <Icon name="phone" />
              <span>+977-01 4563 235, 01 4575 246</span>
            </div>
            <div className="naxatw-flex  ">
              <Icon name="mail" />
              <span>mail@mail.com</span>
            </div>
          </div>
        </div>

        <div>
          <hr className="naxatw-dark:bg-gray-700 naxatw-my-8 naxatw-h-px naxatw-border naxatw-bg-gray-200" />
        </div>

        <div className="naxatw-flex naxatw-flex-col naxatw-justify-between naxatw-gap-4 naxatw-text-xs sm:naxatw-flex-row sm:naxatw-gap-0 sm:naxatw-text-sm">
          <div className="naxatw-flex naxatw-items-center naxatw-gap-2">
            <img src={uk} alt="" className="naxatw-w-6 sm:naxatw-w-8" />

            <div>
              <select>
                <option>English</option>
                <option>Nepali</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>
          <div className="naxatw-flex naxatw-items-center naxatw-gap-4">
            <div>Privacy policy</div>
            <div>Terms</div>
            <div>Copyright © 2022 Project Database Portal</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
