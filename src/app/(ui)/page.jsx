import Hero from "../../components/Hero";
import BestSeller from "../../components/BestSeller";
import Testimonials from "../../components/Testimonials";
import TeamMember from "../../components/TeamMember";
import ClientLogo from "../../components/ClientLogo";

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <Testimonials />
      <TeamMember />
      <ClientLogo />
    </div>
  );
};

export default Home;
