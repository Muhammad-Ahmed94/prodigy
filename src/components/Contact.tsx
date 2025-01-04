const Contact = () => {
  return (
    <section className="w-full min-h-[85vh] my-20 px-10 flex justify-center items-center">
      {/* contact-1 image */}
      <div className="relative bg-black h-[75vh] w-full py-24 rounded-lg">
        <div className="absolute left-4 top-4 p-4">
          <img
            src="/img/contact-1.webp"
            alt="contact-1_pic"
            className="rounded-lg h-52 w-52 clip-contact-1"
          />
        </div>
        {/* conact-swordman image */}
        <div className="absolute left-1/2 -top-24 transform -translate-x-1/2">
          <img
            src="/img/swordman.webp"
            alt="swordman image"
            className="h-80 w-60 rounded-lg"
          />
          <div className="text-white font-circular_web text-lg mt-6 text-center uppercase">
            <p>Become one of us</p>
          </div>
          <div className="w-full text-center">
            <h1 className="uppercase font-bold font-circular_web text-4xl max-w-64 text-white mt-4">
              let's build the new era of gaming together
            </h1>
          </div>
        </div>

        {/* conact-2 image */}
        <div className="absolute left-3/4 top-1/3 p-4">
          <img
            src="/img/contact-2.webp"
            alt="contact-1_pic"
            className="rounded-lg h-52 w-52 clip-contact-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
