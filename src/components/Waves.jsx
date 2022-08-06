import { ReactComponent as Curve1 } from '../assets/curve1.svg'
import { ReactComponent as Curve2 } from '../assets/curve2.svg'

function Waves() {
  return (
    <div className="curve-component absolute w-full overflow-hidden top-0 h-[40vh] sm:h-[55vh] shadow-md z-[-1] bg-primaryColor">
      <div className="curve1 absolute top-0 left-0 flex w-[200%] animate-curveMove1">
        <Curve1 className="w-full h-full" />
        <Curve1 className="w-full h-full" />
      </div>
      <div className="curve2 absolute top-0 left-0 flex w-[200%] animate-curveMove2 left-[-100%]">
        <Curve2 className="w-full h-full" />
        <Curve2 className="w-full h-full " />
      </div>
    </div>
  )
}

export default Waves
