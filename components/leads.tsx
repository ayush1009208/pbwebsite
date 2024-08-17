import "../app/css/additional-styles/landing.css";

const leads = [
  {
    id: 0,
    text: "Akash Singh",
    subtext: "CloudSek, Gsoc 24 ",
    url: "/images/lead1.jpg",
  },
  {
    id: 1,
    text: "Saalim Quadri",
    subtext: "Raptee, LFX 23",
    url: "/images/Lead2.jpg",
  },
  {
    id: 2,
    text: "Pratyush Singh",
    subtext: "Ultrahuman, Gsoc 23,24",
    url: "/images/lead3.jpg",
  },
];

const Leads = () => {
  return (
    <>
      <div className="container place-items-center font-bold pt-20 pb-10">
        <h2 className="text-5xl text-white-800 text-center">Leads</h2>
        <h5 className="text-2xl text-white-800 text-center">
          Our Leadership Position are held by the best minds in and across the
          campus
        </h5>
      </div>
      <div className="view">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="box card-wrapper transition-transform duration-1000 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            style={{ backgroundImage: `url(${lead.url})` }}
            title=""
          >
            <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-50 text-center text-white">
              <h1 className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-xl font-bold ">
                {lead.text}
              </h1>
              <h3 className="text-lg mt-2">{lead.subtext}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Leads;