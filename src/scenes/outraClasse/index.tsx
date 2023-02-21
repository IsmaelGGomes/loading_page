import { ClassType, SelectPage } from '@/shared/types'
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from '@/shared/Htext';
import Class from './Class';

type props = {
    setSelectPage: (value: SelectPage) => void;
}

const OurClass: Array<ClassType> = [
    {
        name: "Weig Trainning Classes",
        description: "lorem orem loamrasd asdm asdmas dasd",
        image: image1,
    },
    {
        name: "Weig  Classes",
        description: "lorem orem loamrasd asdm asdmas dasd",
        image: image2,
    },
    {
        name: "Weig Trainning Classes",
        image: image3,
    },
    {
        name: "Weig Trainning Classes",
        image: image4,
    },
    {
        name: "Weig Trainning Classes",
        description: "lorem orem loamrasd asdm asdmas dasd",
        image: image5,
    },
    {
        name: "Weig Trainning Classes",
        description: "lorem orem loamrasd asdm asdmas dasd",
        image: image6,
    },
]

const OutraClasse = ({ setSelectPage, }: props) => {
    return (
        <section id="OutraClasse" className='w-full bg-primary-100 py-40'>
            <motion.div
                className=''
                onViewportEnter={() => setSelectPage(SelectPage.OutraClasse)}
            >
                <motion.div
                    className='mx-auto w-5/6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <Htext>
                            OUTRAS CLASSES
                        </Htext>
                        <p className='py-5'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                            , rem iste tempora dolorem, culpa quo perspiciatis quae, impedit .
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {OurClass.map((item: ClassType, index)=> (
                            <Class 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OutraClasse