const skills = [
  { name: "Programming Languages: Python", level: 92 },
  { name: "AI/ML Frameworks & Libraries: PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas, OpenCV", level: 80 },
  { name: "Domain: Computer Vision, NLP, LLM", level: 80 },
  { name: "Backend & Deployment: FastAPI, Docker, Docker Compose", level: 70 },
  { name: "Frontend: React, JavaScript, HTML/CSS", level: 60 },
  { name: "Tools: Git", level: 90 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Core Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 animate-fade-in animation-delay-100 text-secondary-foreground">
            Technical Skills
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A summary of tools and technologies I use daily, with practical experience and results.
          </p>
        </div>

        <div className="space-y-5">
          {skills.map((skill, idx) => (
            <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 80}ms` }}>
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 rounded-full bg-surface overflow-hidden border border-border">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
