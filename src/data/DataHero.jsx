import { TbMichelinStarGreen } from "react-icons/tb";
import { GiGreenhouse } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa6";

const DataHero = [
    {
        title: "Reuse",
        image: "https://images.unsplash.com/photo-1628268909272-0f9b82d89ebb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        icons: <TbMichelinStarGreen />,
        desc: "Reuse: Repurpose functional items instead of discarding them, like using glass bottles for storage."
    },
    {
        title: "Reduce",
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170 ",
        icons: <GiGreenhouse />,
        desc : "Reduce: Minimize waste by choosing products with less packaging and avoiding single-use items."
       
    },
    {
        title: "Recycle",
        image: "https://anythingenvironmental.com.au/wp-content/uploads/2023/02/Young-woman-placing-plastic-bottles-into-box.jpg",
        icons: <FaRecycle />,
        desc: "Recycle: Convert waste into reusable materials to conserve resources and reduce energy use."
    },
]

export default DataHero