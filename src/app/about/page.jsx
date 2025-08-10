import {ButtonSection} from  "../component/me.jsx"



const Aboutme = () => {
    return (
      <section className="mt-16 px-4 md:px-8 lg:px-16">
        <h1 className="text-xl font-bold text-center mb-6">About Me</h1>
        <div className="text-lg text-gray-400 font-light space-y-6">
          <p>
            Hello! I’m Timothy, a passionate software developer dedicated to creating innovative solutions and impactful digital experiences. With expertise in JavaScript, Zig, and a strong foundation in modern web technologies like React, Next.js, and Node.js, I specialize in crafting scalable applications that are not just functional but also intuitive and user-friendly. I'm currently expanding my expertise in systems programming.
          </p>
  
          <p>
            My love for coding began during my early years when I was captivated by the potential of technology to transform ideas into reality. Over the years, this curiosity evolved into a professional career. From building small personal projects to tackling complex systems, I’ve embraced every challenge as an opportunity to grow and innovate.
          </p>
  
          <p>
            Currently, I focus on developing dynamic web applications, CLI tools, and open-source projects. My work spans multiple domains, including:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>CLI-Based Tools:</strong> Building efficient tools like project idea generators and API key managers to streamline workflows.
            </li>
            <li>
              <strong>Web Applications:</strong> Designing responsive and accessible websites using frameworks like Next.js and Tailwind CSS.
            </li>
            <li>
              <strong>Custom Libraries:</strong> Exploring deeper realms of development with projects like mathematical computation libraries written in C.
            </li>
            <li>
              <strong>Systems Programming:</strong> Delving into low-level programming to optimize performance and create robust applications, including projects like video compressors and parsers using Zig.
            </li>
          </ul>
  
          <p>
            When I’m not coding, I enjoy exploring books on philosophy, logic, and science, or diving into AI/ML papers to stay updated on emerging technologies. I’m deeply committed to continuous improvement, striving to become a 10x developer who delivers impactful solutions with precision and efficiency.
          </p> 
          <p>
  Feel free to reach out to me at <a className="text-blue-700" href="mailto:timothyisah4@gmail.com">timothyisah4@gmail.com</a> or via the link below.
</p>
<ButtonSection />

        </div>
      </section>
    );
  };
  
  export default Aboutme;
  
