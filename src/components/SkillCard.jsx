function SkillCard({ skill }) {
  return (

<div className="skill-card">

<h3>{skill.name}</h3>

<span>{skill.category}</span>

<div className="progress">

<div
className="progress-fill"
style={{
width:`${skill.level}%`
}}
></div>

</div>

<strong>{skill.level}%</strong>

</div>

  );
}

export default SkillCard;