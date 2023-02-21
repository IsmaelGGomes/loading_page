import { BenefitType, SelectPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Benefit from "./Benefit";

type Props = {
  setSelectPage: (value: SelectPage) => void;
}

const beneficios:Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Estenda suas facilidades",
    description: "voluptates iure animi hic possimus voluptatum reprehenderit, iste ipsa at saepe necessitatibus officiis quis. Quia velit quam blanditiis distinctio!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Diversas classes de grupos",
    description: "voluptates iure animi hic possimus voluptatum reprehenderit, iste ipsa at saepe necessitatibus officiis quis. Quia velit quam blanditiis distinctio!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Exercite sua mente e seu corpo",
    description: "voluptates iure animi hic possimus voluptatum reprehenderit, iste ipsa at saepe necessitatibus officiis quis. Quia velit quam blanditiis distinctio!",
  },
]

const Beneficios = ({ setSelectPage }: Props) => {
  return (
    <section id="beneficios" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectPage(SelectPage.Beneficios)}
      >
        {/* CABEÇA */}
        <div className="md:my-5 md:w-3/5">
          <Htext>MAIS DO QUE UMA ACADEMIA.</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Magnam natus ab mollitia velit ipsa, in
            nam earum dolor, illum, odio incidunt ipsum
            inventore quis laudantium ullam eius minima sunt sapiente!
          </p>
        </div>
        {/* BENEFICIOS */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {beneficios.map((benefit: BenefitType) => (
            <Benefit 
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectPage={setSelectPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Beneficios