import { Calendar, MapPin } from "lucide-react";

interface ExperienceItemProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
}

export function ExperienceItem({
  company,
  position,
  duration,
  location,
  description,
}: Readonly<ExperienceItemProps>) {
  return (
    <div className="bg-white/5 border border-gold/10 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-gold/30 transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{position}</h3>
          <h4 className="text-lg font-medium text-gold dark:text-gold-light mt-1">
            {company}
          </h4>
        </div>
        <div className="mt-2 md:mt-0 md:text-right">
          <div className="flex items-center text-slate-400 mb-1">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-slate-400">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/10 pt-4">
        <p className="text-slate-300 text-justify">{description}</p>
      </div>
    </div>
  );
}
