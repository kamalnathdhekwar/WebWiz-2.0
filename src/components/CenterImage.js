import Image from "next/image"
const CenterImage = ({imageToDisplay}) => {
  return (
    <div className="w-[400px] h-[550px]">
        <Image src={imageToDisplay}  alt=""></Image>
    </div>
  )
}

export default CenterImage