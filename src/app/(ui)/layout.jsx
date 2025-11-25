import Footer from "../../components/common/Footer";

const layout = ({ children }) => {
  return (
    <div className="max-w-[1920px] mx-auto">
      {children}
      <Footer />
    </div>
  );
};

export default layout;
