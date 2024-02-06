import SearchLawyer from "@/ui/landing/searchLawyer";
import FeaturesComponent from "@/ui/landing/featureComponent";
import SearchLawyerComponent from "@/ui/landing/searchStateArea";
import DivAnimatedSteps from "@/ui/landing/steps";
import Ecosystem from "@/ui/landing/ecosystem";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex-auto mt-8">
        <SearchLawyer />
        <FeaturesComponent />
        <DivAnimatedSteps />
        <SearchLawyerComponent />
        <Ecosystem />
      </div>
    </main>
  );
}
