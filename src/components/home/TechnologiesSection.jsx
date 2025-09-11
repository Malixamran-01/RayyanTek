import React, { useState } from "react";

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState("Web Development");

  const technologies = {
    "Web Development": {
      "Frontend": [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Vue.js", icon: "💚" },
        { name: "Angular", icon: "🅰️" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Sass", icon: "💎" },
        { name: "GSAP", icon: "🎬" }
      ],
      "Backend": [
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚀" },
        { name: "Python", icon: "🐍" },
        { name: "Django", icon: "🎯" },
        { name: "FastAPI", icon: "⚡" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" }
      ]
    },
    "Mobile Apps": {
      "iOS": [
        { name: "Swift", icon: "🦉" },
        { name: "UIKit", icon: "📱" },
        { name: "RxSwift", icon: "🔄" },
        { name: "Combine", icon: "🔗" },
        { name: "MVVM", icon: "🏗️" },
        { name: "Alamofire", icon: "🌐" },
        { name: "Core Data", icon: "💾" }
      ],
      "Android": [
        { name: "Kotlin", icon: "🟣" },
        { name: "MVVM", icon: "🏗️" },
        { name: "RxJava", icon: "🔄" },
        { name: "Java", icon: "☕" },
        { name: "Retrofit", icon: "🔌" },
        { name: "Jetpack", icon: "🚀" }
      ]
    },
    "Cross Platform": {
      "React Native": [
        { name: "React Native", icon: "📱" },
        { name: "Expo", icon: "🎪" },
        { name: "Redux", icon: "🔄" },
        { name: "Navigation", icon: "🧭" },
        { name: "AsyncStorage", icon: "💾" }
      ],
      "Flutter": [
        { name: "Flutter", icon: "🦋" },
        { name: "Dart", icon: "🎯" },
        { name: "Bloc", icon: "🧱" },
        { name: "Provider", icon: "📦" },
        { name: "Firebase", icon: "🔥" }
      ]
    },
    "Cloud & DevOps": {
      "Cloud Platforms": [
        { name: "AWS", icon: "☁️" },
        { name: "Google Cloud", icon: "🌩️" },
        { name: "Azure", icon: "🔵" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚓" },
        { name: "Terraform", icon: "🏗️" }
      ],
      "CI/CD": [
        { name: "GitHub Actions", icon: "⚡" },
        { name: "Jenkins", icon: "🤖" },
        { name: "GitLab CI", icon: "🦊" },
        { name: "CircleCI", icon: "⭕" }
      ]
    },
    "AI & Machine Learning": {
      "Frameworks": [
        { name: "TensorFlow", icon: "🧠" },
        { name: "PyTorch", icon: "🔥" },
        { name: "Scikit-learn", icon: "📊" },
        { name: "OpenAI", icon: "🤖" },
        { name: "Hugging Face", icon: "🤗" }
      ],
      "Tools": [
        { name: "Jupyter", icon: "📓" },
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" },
        { name: "Matplotlib", icon: "📈" }
      ]
    },
    "Blockchain": {
      "Platforms": [
        { name: "Ethereum", icon: "⟠" },
        { name: "Solidity", icon: "💎" },
        { name: "Web3.js", icon: "🌐" },
        { name: "MetaMask", icon: "🦊" },
        { name: "IPFS", icon: "📁" }
      ],
      "Tools": [
        { name: "Truffle", icon: "🍰" },
        { name: "Hardhat", icon: "⛑️" },
        { name: "Remix", icon: "🎵" },
        { name: "Ganache", icon: "🍮" }
      ]
    }
  };

  const categories = Object.keys(technologies);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technologies We Use
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Hire from our pool of 350+ specialized experts in web, mobile, and software engineering, 
            specializing in the latest technologies and frameworks, ready to scale your development teams effortlessly.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#bfa45a] text-black font-semibold"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Technologies Display */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {Object.entries(technologies[activeCategory]).map(([platform, techs]) => (
                <div key={platform}>
                  <h3 className="text-2xl font-bold text-white mb-6">{platform}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {techs.map((tech, index) => (
                      <div
                        key={index}
                        className="tech-card group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[#bfa45a]/30 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex flex-col items-center text-center space-y-2">
                          <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                            {tech.icon}
                          </div>
                          <span className="text-white text-sm font-medium group-hover:text-[#bfa45a] transition-colors duration-300">
                            {tech.name}
                          </span>
                        </div>
                        
                        {/* Glassmorphism overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
