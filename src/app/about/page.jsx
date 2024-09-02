import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-cyan-500 dark:text-zinc-200 dark:hover:text-cyan-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-cyan-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I'm Mony, and I'm a Full Stack Web Developer. 
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My professional background begins in the world of laboratory science, where I worked as a Senior Researcher and Lab Manager in a clinical lab.
              During my time in this space, I honed my skills in problem solving, cross team collaboration, and managing numerous complex projects.
              After roughly six years in laboratory science, I've decided to take my passion for technology and transitioned into the field of software development.
            </p>
            <p>
              Outside of my passion for coding, web, and software development, I dive into my various other hobbies.
              During my free time, I enjoy outdoors activities and sports such as tennis, golf, hiking, and bouldering, just to name a few.
              I also love playing video games, which was where a lot of my passion for science and technology stemmed from.
              My hobbies, on top of my very supportive family, are what keeps me grounded and sane as I traverse through the ups and downs of life.
            </p>
            <p>
              As a Web Developer, I bring a unique blend of analytical thinking from my science background and creative problem solving from my experience in web development.
              I'm excited to help businesses and individuals create an online presence by building effective and visually appealing websites and web applications.
              Whether it's building brand new websites or optimizing existing ones, I'm here with help share your passion with the rest of world.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.instagram.com/monysary" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/monysary" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/mony-sary-08980b1aa/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:sary.mony@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t-2 border-zinc-200/20 pt-8"
            >
              sary.mony@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
