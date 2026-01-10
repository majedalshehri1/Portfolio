import { memo } from "react";
import OptimizedImage from "@/components/shared/OptimizedImage";

interface MacBookMockupProps {
  image: string;
  title: string;
}

const MacBookMockup = memo(({ image, title }: MacBookMockupProps) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Screen Container */}
      <div className="relative">
        {/* Screen bezel */}
        <div className="bg-[#1a1a1a] rounded-t-2xl p-3 pb-0">
          {/* Screen */}
          <div className="relative overflow-hidden rounded-t-lg bg-black">
            <OptimizedImage
              src={image}
              alt={title}
              aspectRatio="aspect-[16/10]"
            />
          </div>
        </div>
        
        {/* Bottom bezel with notch */}
        <div className="bg-[#1a1a1a] h-5 rounded-b-lg relative flex items-center justify-center">
          {/* Camera notch */}
          <div className="w-16 h-1 bg-[#2a2a2a] rounded-full" />
        </div>
      </div>
      
      {/* Stand */}
      <div className="flex flex-col items-center">
        {/* Stand neck */}
        <div 
          className="w-24 h-16 bg-gradient-to-b from-[#d4d4d4] to-[#a8a8a8] dark:from-[#3a3a3a] dark:to-[#2a2a2a]"
          style={{
            clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)"
          }}
        />
        {/* Stand base */}
        <div className="w-40 h-4 bg-gradient-to-b from-[#c4c4c4] to-[#9a9a9a] dark:from-[#3a3a3a] dark:to-[#2a2a2a] rounded-b-lg" />
      </div>
    </div>
  );
});

MacBookMockup.displayName = "MacBookMockup";

export default MacBookMockup;
