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
<div className="text-center py-12 bg-gray-100 rounded-lg px-4 sm:px-6 lg:px-20">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 mb-4">
Welcome to Community Clean Portal!
</h2>
<p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
Report issues in your local area, contribute to cleanup drives, and help make the community cleaner! Taking initiative in maintaining cleanliness not only improves the environment but also promotes health and well-being among residents. By reporting overflowing bins, broken streetlights, potholes, and illegal constructions, you can help local authorities respond faster and more effectively. Participating in community cleanup drives fosters a sense of responsibility, teamwork, and civic pride. Encouraging neighbors, schools, and local organizations to join these efforts can create a lasting impact. Together, small actions can lead to a safer, cleaner, and more vibrant neighborhood for everyone.
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
