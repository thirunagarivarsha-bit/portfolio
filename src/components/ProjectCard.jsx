function ProjectCard(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <button>View</button>
    </div>
  );
}

export default ProjectCard;