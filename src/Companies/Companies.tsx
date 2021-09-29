import ikea from "./logos/ikea.jpg";
import samsung from "./logos/samsung.png";

const companyLogos = [ikea, samsung, ikea, samsung, ikea, samsung];

const Companies = () => {
  return (
    <div className="my-16 w-4/5 mx-auto space-y-16">
      <div className=" text-center text-custom-grey opacity-40 text-xs font-bold  ">
        TRUSTED BY COMPANIES WORLDWIDE:
      </div>
      <div className="flex justify-between my-6">
        {companyLogos.map((logoSrc, idx) => (
          <img
            className="max-h-6"
            key={idx}
            src={logoSrc}
            alt={`${Object.keys(logoSrc)[0]} logo greyscale`}
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
