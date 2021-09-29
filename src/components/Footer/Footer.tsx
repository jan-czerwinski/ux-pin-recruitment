const Footer = () => {
  const content = [
    { name: "Terms", link: "" },
    { name: "Privacy policy", link: "" },
    { name: "Contact", link: "" },
    { name: "hello@xplenty.com", link: "" },
  ];
  return (
    <footer className="py-8 mt-8  bg-custom-blue ">
      <div className="w-4/5 mx-auto flex space-x-20 text-white text-md">
        {content.map(({ name, link }, idx) => (
          <button className="hover:underline" key={idx}>
            {name}
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
