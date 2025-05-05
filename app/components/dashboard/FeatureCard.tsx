import { ReactNode } from "react";


interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bg: string;
}

export const FeatureCard = function FeatureCard({
  icon,
  title,
  description,
  bg,
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col items-start p-6 rounded-xl shadow-sm border ${bg} transform transition duration-300 hover:scale-105 hover:shadow-lg`}
    >
      <div className="flex flex-row items-center gap-4 pb-5">
        <div className="p-2 rounded-lg bg-purple-100 text-purple-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-background">{title}</h3>
      </div>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};
