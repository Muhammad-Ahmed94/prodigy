import { useState } from "react";

const Contact = () => {
  const [imagesLoaded, setImagesLoaded] = useState({
    contact1: false,
    contact2: false,
    swordman: false,
  });

  const handleImageLoad = (imageName: keyof typeof imagesLoaded) => {
    setImagesLoaded(prev => ({
      ...prev,
      [imageName]: true
    }));
  };

  return (
    <section className="w-full min-h-[85vh] my-10 sm:my-20 px-4 sm:px-6 lg:px-10 flex justify-center items-center">
      {/* Main container */}
      <div className="relative bg-black w-full max-w-6xl rounded-lg overflow-hidden">
        
        <div className="block sm:hidden">
          <div className="p-6 text-center">
            {/* Swordman image for mobile */}
            <div className="mb-6">
              {!imagesLoaded.swordman && (
                <div className="h-60 w-40 mx-auto bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src="/img/swordman.webp"
                alt="swordman image"
                className={`h-60 w-40 mx-auto rounded-lg transition-opacity duration-300 ${
                  imagesLoaded.swordman ? 'opacity-100' : 'opacity-0 absolute'
                }`}
                onLoad={() => handleImageLoad('swordman')}
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className="text-white font-circular_web">
              <p className="text-sm uppercase mb-4">Become one of us</p>
              <h1 className="uppercase font-bold text-xl mb-6 leading-tight">
                let's build the new era of gaming together
              </h1>
            </div>

            {/* Side images */}
            <div className="space-y-4">
              <div className="flex justify-center">
                {!imagesLoaded.contact1 && (
                  <div className="h-32 w-32 bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src="/img/contact-1.webp"
                  alt="contact-1_pic"
                  className={`h-32 w-32 rounded-lg transition-opacity duration-300 ${
                    imagesLoaded.contact1 ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                  onLoad={() => handleImageLoad('contact1')}
                  loading="lazy"
                />
              </div>
              
              <div className="flex justify-center">
                {!imagesLoaded.contact2 && (
                  <div className="h-32 w-32 bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src="/img/contact-2.webp"
                  alt="contact-2_pic"
                  className={`h-32 w-32 rounded-lg transition-opacity duration-300 ${
                    imagesLoaded.contact2 ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                  onLoad={() => handleImageLoad('contact2')}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block h-[75vh] relative py-12 lg:py-24">
          {/* Contact-1 */}
          <div className="absolute left-2 sm:left-4 top-2 sm:top-4 p-2 sm:p-4">
            {!imagesLoaded.contact1 && (
              <div className="h-32 w-32 sm:h-40 sm:w-40 lg:h-52 lg:w-52 bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src="/img/contact-1.webp"
              alt="contact-1_pic"
              className={`rounded-lg h-32 w-32 sm:h-40 sm:w-40 lg:h-52 lg:w-52 clip-contact-1 transition-opacity duration-300 ${
                imagesLoaded.contact1 ? 'opacity-100' : 'opacity-0 absolute'
              }`}
              onLoad={() => handleImageLoad('contact1')}
              loading="lazy"
            />
          </div>

          {/* swordman image */}
          <div className="absolute left-1/2 -top-12 sm:-top-16 lg:-top-24 transform -translate-x-1/2">
            {!imagesLoaded.swordman && (
              <div className="h-60 w-40 sm:h-72 sm:w-48 lg:h-80 lg:w-60 bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src="/img/swordman.webp"
              alt="swordman image"
              className={`h-60 w-40 sm:h-72 sm:w-48 lg:h-80 lg:w-60 rounded-lg transition-opacity duration-300 ${
                imagesLoaded.swordman ? 'opacity-100' : 'opacity-0 absolute'
              }`}
              onLoad={() => handleImageLoad('swordman')}
              loading="lazy"
            />
            
            <div className="text-white font-circular_web text-sm sm:text-base lg:text-lg mt-4 lg:mt-6 text-center uppercase">
              <p>Become one of us</p>
            </div>
            
            <div className="w-full text-center">
              <h1 className="uppercase font-bold font-circular_web text-lg sm:text-2xl lg:text-3xl xl:text-4xl max-w-48 sm:max-w-56 lg:max-w-64 text-white mt-2 lg:mt-4 leading-tight">
                let's build the new era of gaming together
              </h1>
            </div>
          </div>

          {/* Contact-2 */}
          <div className="absolute right-4 sm:right-8 lg:left-3/4 top-1/4 sm:top-1/3 p-2 sm:p-4">
            {!imagesLoaded.contact2 && (
              <div className="h-32 w-32 sm:h-40 sm:w-40 lg:h-52 lg:w-52 bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src="/img/contact-2.webp"
              alt="contact-2_pic"
              className={`rounded-lg h-32 w-32 sm:h-40 sm:w-40 lg:h-52 lg:w-52 clip-contact-2 transition-opacity duration-300 ${
                imagesLoaded.contact2 ? 'opacity-100' : 'opacity-0 absolute'
              }`}
              onLoad={() => handleImageLoad('contact2')}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;