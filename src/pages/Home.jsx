import Banner from "../components/Banner";
import RecentIssues from "../components/RecentIssues";
import CommunityStats from "../components/CommunityStats";
import VolunteerJoinSection from "../components/VolunteerJoinSection";
import CategorySection from "../components/CategorySection";



const Home = () => {
  return (
    <div className=" mx-auto ">
      {/* Banner Section */}
      <Banner />

      {/* Categories */}
      <div className="container mx-auto">
        <CategorySection /> 
      </div>

      {/* Welcome / CTA Section */}
      <div className="text-center py-12 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Welcome to Community Clean Portal!
        </h2>
        <p className="text-gray-700 mb-6">
          Report issues in your local area, contribute to cleanup drives, and help make the community cleaner!
        </p>
      </div>

      {/* Add Issue Form 🟩 */}
 

      {/* Recent Complaints (dummy) */}
      <RecentIssues />
      <CommunityStats />
      <VolunteerJoinSection />
    </div>
  );
};

export default Home;
