import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";

function Skills(){

return(

<section
id="skills"
className="skills">

<div className="container">

<h2 className="section-title">

Core Expertise

</h2>

<div className="skills-grid">

{

skills.map(skill=>(

<SkillCard
key={skill.name}
skill={skill}
/>

))

}

</div>

</div>

</section>

);

}

export default Skills;