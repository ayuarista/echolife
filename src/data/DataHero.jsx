import { TbMichelinStarGreen } from "react-icons/tb";
import { GiGreenhouse } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa6";

const DataHero = [
    {
        title: "Reuse",
        image: "https://images.unsplash.com/photo-1583226780318-d55877df37ec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icons: <TbMichelinStarGreen />,
        desc: "Reuse: Repurpose functional items instead of discarding them, like using glass bottles for storage."
    },
    {
        title: "Reduce",
        image: "https://images.unsplash.com/photo-1525695230005-efd074980869?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icons: <GiGreenhouse />,
        desc : "Reduce: Minimize waste by choosing products with less packaging and avoiding single-use items."
       
    },
    {
        title: "Recycle",
        image: "https://images.unsplash.com/photo-1620509048004-415ebb9e2755?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icons: <FaRecycle />,
        desc: "Recycle: Convert waste into reusable materials to conserve resources and reduce energy use."
    },
]

export default DataHero