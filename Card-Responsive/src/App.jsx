import ExpandingSearchBar from "./Components/exercise/ExpandingSearchBar"
import GridRes from "./Components/exercise/GridRes"
import HamburgerXAni from "./Components/exercise/HamburgerXAni"
import  { FloatingBtn } from "./Components/exercise/FloatingBtn"
import ImageGalleryOverlay from "./Components/exercise/ImageGalleryOverlay"
import RotateScale from "./Components/exercise/RotateScale"
import TranslateBar from "./Components/exercise/TranslateBar"
import Basic from "./Components/Gradients/Basic"
import MultipleGradient from "./Components/Gradients/MultipleGradient"
import GlowingGradient from "./Components/Gradients/GlowingGradient"
import AiCard from "./Components/Practise/AiCard"
import Diagonal from "./Components/Gradients/Diagonal"


function App() {
// min-h-screen bg-gray-100 flex items-center justify-center p-6
  return (
    <>
      <div className="min-h-screen bg-black bg-linear-to-b from-[#0a0f1f] via-black to-[#0d0b2a]  flex items-center justify-center p-6 gap-6">
        {/* <RotateScale /> */}
        {/* <TranslateBar/> */}
        {/* <GridRes/> */}
        {/* <HamburgerXAni/> */}
        {/* <ExpandingSearchBar/> */}
        {/* {<ImageGalleryOverlay/>} */}
       {/* <FloatingBtn/> */}
       {/* <Basic/> */}

       {/* <MultipleGradient/> */}
       {/* <GlowingGradient/> */}

{/* <Diagonal/> */}

       {/* Practise */}

        {/* Background Glow Patch */}
  {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]
      bg-blue-700/20 rounded-full blur-3xl opacity-40"></div> */}

       <AiCard/>
      </div>


    </>
  )
}

export default App
