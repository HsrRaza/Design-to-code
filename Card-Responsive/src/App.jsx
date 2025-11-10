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


function App() {
// min-h-screen bg-gray-100 flex items-center justify-center p-6
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 gap-6">
        {/* <RotateScale /> */}
        {/* <TranslateBar/> */}
        {/* <GridRes/> */}
        {/* <HamburgerXAni/> */}
        {/* <ExpandingSearchBar/> */}
        {/* {<ImageGalleryOverlay/>} */}
       {/* <FloatingBtn/> */}
       {/* <Basic/> */}

       <MultipleGradient/>
       <GlowingGradient/>
      </div>


    </>
  )
}

export default App
