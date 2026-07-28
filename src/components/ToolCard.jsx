function ToolCard({ tool }) {
  return (
    <div className="tool-card">

      <div className="tool-header">
        <h3>{tool.name}</h3>
        <span>{tool.level}%</span>
      </div>

      <p>{tool.category}</p>

      <div className="tool-progress">

        <div
          className="tool-progress-fill"
          style={{
            width: `${tool.level}%`,
            background: tool.color,
          }}
        />

      </div>

    </div>
  );
}

export default ToolCard;