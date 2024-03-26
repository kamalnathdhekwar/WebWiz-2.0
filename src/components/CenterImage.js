import Image from "next/image"
const CenterImage = ({imageToDisplay}) => {
  return (
    <div className="lg:w-[400px] lg:h-[550px] md:w-[300px] md:h-[350px] w-[200px] h-[250px]  justify-center items-center ">
        <Image src={imageToDisplay}  alt=""></Image>
    </div>
  )
}

export default CenterImage