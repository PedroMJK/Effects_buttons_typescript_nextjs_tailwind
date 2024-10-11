import Button_01 from "./components/Buttons/Button_01";
import Button_02 from "./components/Buttons/Button_02";
import Button_03 from "./components/Buttons/Button_03";


export default function Home() {
  return (
    <>
    <div className="bg-white pb-20">
      <h1 className="flex justify-center text-black font-bold text-3xl pt-10 sm:pb-0 pb-10">Effects Buttons</h1>    
      <div className="flex flex-wrap justify-center rounded-lg bg-gray-200 py-10 pl-10 sm:m-10 mx-20 gap-28 shadow-2xl">
        <Button_01 />
        <Button_02 />      
        <Button_03 />        
      </div> 
    </div>
    </>
  );
}
