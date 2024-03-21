import Heading from "@/components/Heading";
import RecommendOrPraise from "@/components/RecommendOrPraise";
import StarRating from "@/components/StarRating";
import { X } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      
      <main className="flex flex-col gap-4 px-6 py-2 ">
        <Heading title="Leave a review" />
        <StarRating title="Safety" desc="How safe did you feel with Trausti" />
        <StarRating
          title="Communication"
          desc="How did you feel communicating with Trausti"
        />
        <RecommendOrPraise
          title="Would you recommend Trausti?"
          desc="Your opinion about recommending Trausti"
          recommend={true}
        />
        <RecommendOrPraise
          title="Praise"
          desc="Your Experience with us."
          recommend={false}
        />
      </main>
    </div>
  );
}
