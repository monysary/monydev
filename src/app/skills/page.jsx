import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Skills',
  description: 'Bring Ideas to Life with the Right Skills & Technologies.',
}

export default function Skills() {
  return (
    <SimpleLayout
      title="Bring Ideas to Life with the Right Skills & Technologies."
      intro="I combine a solid foundation in both Front End and Back End technologies with a strong set of tools, methodologies, and soft skills.
      Below are just a few of the key skills and technologies I work with on a day to day basis.
      My goal is to create high quality digital solutions that meet client needs and exceed expectations."
    >
      <div className="space-y-20">
        <ToolsSection title="Front End">
          <Tool title="HTML, CSS, JavaScript, React, NextJS, Tailwind">
            I specialize in building responsive, visually appealing interfaces using HTML, CSS, and JavaScript, with a focus on frameworks like React.
            My work ensures a seamless user experience across all devices.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Back End">
          <Tool title="Node, Express, MySQL, MongoDB">
            I develop robust, scalable server-side applications using technologies like Node and Express.
            My experience includes setting up APIs and managing databases to ensure secure and efficient data handling.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Tools">
          <Tool title="Git, Figma, Jira">
            I use Git for version control and collaboration, ensuring projects are managed efficiently and changes are tracked reliably.
            Figma helps me create clear, visually appealing designs, while Jira supports project management and task organization.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Methodologies">
          <Tool title="Agile/Scrum, CI/CD">
            I utilize Agile and Scrum methodologies to promote flexibility and continuous feedback throughout the development process.
            I also implement CI/CD practices to ensure effective testing and deployment of new features and builds.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Soft SKills">
          <Tool title="Problem Solving, Communication, Dependable, High work ethic">
            My background in research has honed my analytical thinking and problem solving abilities.
            I value clear communication and collaboration, ensuring projects run smoothly and meet client goals.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
