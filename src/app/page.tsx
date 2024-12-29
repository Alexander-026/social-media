import CenterSection from "@/components/CenterSection";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";

const Homepage = () => {
  return (
    <main className="flex gap-6 py-6">
      <LeftMenu type="home" />
      <CenterSection/>
      <RightMenu />
    </main>
  );
};

export default Homepage;
