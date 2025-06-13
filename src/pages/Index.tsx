import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkoutCategories from "@/components/WorkoutCategories";
import PopularWorkouts from "@/components/PopularWorkouts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WorkoutCategories />
      <PopularWorkouts />
      <Footer />
    </div>
  );
};

export default Index;
