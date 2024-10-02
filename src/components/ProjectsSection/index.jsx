import github from '../../assets/github.png';
import share from '../../assets/share.png';
import { projects } from '../../data/projects';

export const ProjectsSection = () => {
  return (
    <>
      <section id="projects">
        <div className="projects">
          <h2 className="projects_title">My projects</h2>
          <p className="projects_text">
            Projects created at <span className="span_name">Kenzie Academy</span>
          </p>
        </div>
        <div>
          <section className="project_list">
            {projects.map((project) => (
              <div className="project_item" key={project.name}>
                <div className="project_item-info">
                  <h2 className="project_item-title">{project.name}</h2>
                  {project.info == "New" && (
                    <p className="newPost">{project.info}</p>
                  )}
                </div>
                <div className="project_language">
                  <h3 className="project_language-title">Linguagens:</h3>
                  <p className="project_language-type">Javascript</p>
                </div>

                <p className="project_info">{project.description}</p>

                <div className="project_link">
                  <div className="container centered">
                    <img src={github} alt="icone do github" className="img_icons" />
                    <p className="project_language-icon">Github Code</p>
                  </div>
                  <div className="container centered">
                    <img src={share} alt="seta" className="img_icons" />
                    <p className="project_language-icon">Aplicação</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </>
  )
}

