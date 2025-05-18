import { Calendar, MapPin } from "lucide-react";

interface EducationItemProps {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description: string;
}

export function EducationItem({
  institution,
  degree,
  duration,
  location,
  description,
}: EducationItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {degree}
          </h3>
          <h4 className="text-lg font-medium text-cornflower-600 dark:text-cornflower-400 mt-1">
            {institution}
          </h4>
        </div>
        <div className="mt-2 md:mt-0 md:text-right">
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
