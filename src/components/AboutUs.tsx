"use client";

import Image from "next/image";

import { Container } from "~/components/Container";

import MohannadAlhanahnah from "public/MohannadAlhanahnah.jpeg";
import MaribethCogan from "public/MaribethCogan.jpg";
import ChrisHarrison from "public/ChrisHarrison.webp";
import JustinHenry from "public/JustinHenry.webp";
//import MattNash from "public/JustinHenry.webp";
import SpencerSmith from "public/SpencerSmith.jpg";
import JustinTaylor from "public/JustinTaylor.webp";
import TJWilder from "public/TJWilder.webp";

const people = [
  {
    name: "Mohannad Alhanahnah",
    image: MohannadAlhanahnah,
    bio: "Mohannad brings a unique blend of academic prowess and entrepreneurial vigor. His research interests primarily revolve around the confluence of program analysis and cybersecurity. Mohannad's passion is for transforming academic insights into tangible products. This commitment has led to patents, tech transfer tools, and the foundation of startup companies.",
  },
  {
    name: "Maribeth Cogan",
    image: MaribethCogan,
    bio: "Maribeth is a full-stack data scientist with 10 years of experience in fields ranging from wearable tech to healthcare claims big data. She has expertise in predictive and prescriptive analytics, generative AI, statistics and signal processing, and supervised and unsupervised machine learning. Maribeth has a passion for undertaking the latest challenges in AI and uncovering truth through cutting edge data science.",
  },
  {
    name: "Chris Harrison",
    image: ChrisHarrison,
    bio: "Chris is a serial entrepreneur and computer geek who enjoys resource optimization opportunities and leading teams. He has a passion for computing at scale and parallelization specifically in High Performance Computing. He has a proven twenty years experience in large scale compute environments across F100, startups, and academia.",
  },
  {
    name: "Justin Henry",
    image: JustinHenry,
    bio: "Justin is a curious and enthusiastic software developer with over a decade of experience developing innovative solutions to the nastiest problems in the healthcare industry. He has a strong focus on security, scalability, and human-computer interaction, and consistently delivers impactful user experiences.",
  },
  // {
  //   name: "Matt Nash",
  //   image: MattNash,
  //   bio: "",
  // },
  {
    name: "Spencer X Smith",
    image: SpencerSmith,
    bio: "Spencer X Smith consults for and invests in dozens of high-tech projects and teaches using simple language. After starting his career at IBM during the Y2K days, he's always been an early adopter of new technology so he can better teach others what he's learned. Spencer founded AmpliPhi in 2015 and has served on the Wisconsin Technology Council Board of Directors since 2017. He's a graduate of the Economics of Digital Assets program at the University of Pennsylvania.",
  },
  {
    name: "Justin Taylor",
    image: JustinTaylor,
    bio: "Justin is a highly accomplished web-based software developer and esteemed data science professional, possessing a decade-long track record of delivering revolutionary concepts to market.",
  },
  {
    name: "T.J. Wilder",
    image: TJWilder,
    bio: "T.J. Wilder is a machine learning expert specializing in generative AI, with a deep understanding of advanced concepts like LLMs and GANs. His technical expertise extends to developing custom neural networks, crafting high-performance ETL pipelines, and integrating models into applications with efficiency and precision.",
  },
];

export function AboutUs() {
  return (
    <section id="about" className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32">
      <Container>
        <div className="mx-auto max-w-4xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Say hello to the team
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our development team comprises individuals boasting extensive
            experience in generative AI. Each member has previously worked on at
            least one LLM project. Leveraging our expertise, we swiftly,
            cost-effectively, and accurately deliver custom models to our
            partners. We embrace the motto that AI may be intricate for us, but
            it should remain accessible and straightforward for our partners.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <Image
                className="h-64 w-64 flex-none rounded-2xl object-cover"
                src={person.image}
                alt={person.name}
              />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className=" text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
