import CenterContent from './CenterContent';
import CenterImage from './CenterImage';

import imageAddress1 from "../../public/Group1.svg";
import imageAddress2 from "../../public/Group2.svg";
import imageAddress3 from "../../public/Group3.svg";
import backImage from '../../public/contentBack.svg';

const CenterComponent = () => {
  return (
    <div className='text-white items-center flex flex-col lg:gap-[12rem] gap-[8rem] w-full '>
      <div className='lg:flex-row flex flex-col  items-center justify-around mb-12 w-full lg:gap-0 gap-32'>
        <CenterImage imageToDisplay={imageAddress1}/>
        <CenterContent  heading="Blue Crystal Ice" content="Lörem ipsum mer ultrask hyposk, miska än tranerade. Diling monohönera pora bebinera, pack. Dinat teling. Berån pott. Benade pres yn. Sor kvasikilig i trav. Lan kvasilögisk. Pomyligen bissa sede yrar gigasm. Ysade fenade kawaii. Prelig ode, monogt serar. Hoholedes hypomöment medan kartad polågen mikrotiktigt. Dende veganisera är vinas bästsäljerism. Skynka igisk mar om bemeliga lande. Misa trende plalelingar merade dekas. Regt tylåligen eftersom bede."/>
      </div>

      <div className='flex lg:flex-row  flex-col-reverse items-center justify-around w-full'>
        <CenterContent  heading="MAGICAL TONIC" content="Lörem ipsum mer ultrask hyposk, miska än tranerade. Diling monohönera pora bebinera, pack. Dinat teling. Berån pott. Benade pres yn. Sor kvasikilig i trav. Lan kvasilögisk. Pomyligen bissa sede yrar gigasm. Ysade fenade kawaii. Prelig ode, monogt serar. Hoholedes hypomöment medan kartad polågen mikrotiktigt. Dende veganisera är vinas bästsäljerism. Skynka igisk mar om bemeliga lande. Misa trende plalelingar merade dekas. Regt tylåligen eftersom bede."/>
        <CenterImage imageToDisplay={imageAddress2}/>
      </div>

      <div className='flex lg:flex-row  flex-col  items-center mb-12 justify-around w-full'>
        <CenterImage imageToDisplay={imageAddress3}/>
        <CenterContent  heading="IPSUM ISLAND" content="Lörem ipsum mer ultrask hyposk, miska än tranerade. Diling monohönera pora bebinera, pack. Dinat teling. Berån pott. Benade pres yn. Sor kvasikilig i trav. Lan kvasilögisk. Pomyligen bissa sede yrar gigasm. Ysade fenade kawaii. Prelig ode, monogt serar. Hoholedes hypomöment medan kartad polågen mikrotiktigt. Dende veganisera är vinas bästsäljerism. Skynka igisk mar om bemeliga lande. Misa trende plalelingar merade dekas. Regt tylåligen eftersom bede."/>
      </div>
    </div>
  );
};

export default CenterComponent;
