import { BenefitType, SelectPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
  setSelectPage: (value: SelectPage) => void;
}

const beneficios: Array<BenefitType> = [
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

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

const Beneficios = ({ setSelectPage }: Props) => {
  return (
    <section id="beneficios" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectPage(SelectPage.Beneficios)}
      >
        {/* CABEÇA */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>MAIS DO QUE UMA ACADEMIA.</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Magnam natus ab mollitia velit ipsa, in
            nam earum dolor, illum, odio incidunt ipsum
            inventore quis laudantium ullam eius minima sunt sapiente!
          </p>
        </motion.div>
        {/* BENEFICIOS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {beneficios.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectPage={setSelectPage}
            />
          ))}
        </motion.div>
        {/* GRAFICO E DESCRIÇÃO */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img src={BenefitsPageGraphic} alt="beneficios-grafico" className="mx-auto" />
          {/* DESCRIÇÃO */}
          <div className="">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <div className="">
                  <Htext>
                    MILHÕES DE FELICIDAES ESPERANDO PRO VOCÊ FIT
                  </Htext>
                </div>
              </div>
            </div>

            <p className="my-5" >
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in
              nulla nec. Consequat sed facilisis dui sit egestas ultrices
              tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
              Felis orci diam odio.
            </p>
            <p className="mb-5">
              Lorem it amet consectetur adipisicing elit. Impedit assumenda odio distinctio ut esse sequi voluptate quaerat doloremque maxime non aliquam
              ab dignissimos, eveniet sint ipsum fuga obcaecati!
              Deleniti, excepturi?
            </p>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectPage={setSelectPage} >
                  Entrar
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Beneficios