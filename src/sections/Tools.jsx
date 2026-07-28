import { tools } from "../data/tools";
import ToolCard from "../components/ToolCard";

function Tools() {
  return (
    <section id="tools" className="tools">
      <div className="container">

        <h2 className="section-title">
          Tool Arsenal
        </h2>

        <div className="tools-grid">
          {tools.map((tool) => (
            <ToolCard
              key={tool.name}
              tool={tool}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Tools;