const About = () => {
  return (
    <section className="min-h-screen w-screen border bg-[#DFDFF2]">
      <div className="border border-red-500">
        <div className="flex flex-col justify-center items-center mt-8 mb-2">
          <h2 className="text-lg uppercase font-general border">
            welcome to prodigy
          </h2>
          <div className="uppercase mt-8 mb-20 font-general font-bold text-center text-7xl tracking-tight">
            Emabrk on the world's
            <br />
            greatest gaming adventure
          </div>

          <div className="border border-red-500 mt-8 mb-2 w-full flex">
            <div className="flex justify-center items-center h-1/2 overflow-hidden">
              <img
                src="/img/about.webp"
                alt="about-image"
                className="h-1/2 w-1/4 object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About