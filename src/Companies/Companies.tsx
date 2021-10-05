import ikea from "./logos/ikea.jpg";
import samsung from "./logos/samsung.png";

const companyLogos = [ikea, samsung, ikea, samsung, ikea, samsung];

const Companies = () => {
  return (
    <div className="pt-1 mt-14 w-screen space-y-16">
      <div className=" text-center text-custom-grey opacity-40 text-xs font-bold tracking-companies-title  ">
        TRUSTED BY COMPANIES WORLDWIDE:
      </div>
      <div className="flex flex-shrink object-scale-down w-4/5  mx-auto justify-between mt-10 mb-16 ">
        {companyLogos.map((logoSrc, idx) => (
          <img
            className="max-h-6 lg:max-h-company-logo"
            key={idx}
            src={logoSrc}
            alt="sponsor logo greyscale"
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
