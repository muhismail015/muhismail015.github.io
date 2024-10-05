import NavTitle from "../Navigation/NavTitle";
import skillIcons from "../../utils/constant/skillIcons";
import { Tooltip } from "flowbite-react";

const Skills = () => {
  return (
    <section id="skills" className="mt-16">
      <NavTitle title={"Skills"} />
      {skillIcons.map((skill, index) => (
        <div key={index} className="mb-5">
          <h3 className="z-10 text-lg font-semibold text-slate-200">
            {skill.category} :
          </h3>
          <div className="flex flex-wrap gap-4 mt-2">
            {skill.icons.map((icon, index) => (
              <div
                key={index}
                className="z-10 flex items-center gap-2 bg-slate-200 rounded-lg p-2"
              >
                <Tooltip content={icon.name} position="top">
                  <img src={icon.icon} alt={icon.name} className="w-8 h-8" />
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
