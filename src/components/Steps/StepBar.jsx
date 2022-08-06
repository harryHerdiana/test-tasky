import classNames from "classnames";

const StepBar = (props)=>{
  const {selectedStep} = props
  
  return <div className="grid grid-cols-4 gap-3 text-sm text-disableText">
    <div className="text-center">
      <span className={classNames({'text-black':selectedStep===1})}>1. Project Overview</span>
      <div className={classNames({'border-primaryColor':selectedStep===1},"border border-4 rounded mt-2")}/>
    </div>
    <div className="text-center">
      <span className={classNames({'text-black':selectedStep===2})}>2. Project Budget</span>
      <div className={classNames({'border-primaryColor':selectedStep===2},"border border-4 rounded mt-2")}/>
    </div>    <div className="text-center">
      <span className={classNames({'text-black':selectedStep===3})}>3. Location</span>
      <div className={classNames({'border-primaryColor':selectedStep===3},"border border-4 rounded mt-2")}/>
    </div>    <div className="text-center">
      <span className={classNames({'text-black':selectedStep===4})}>4. Review</span>
      <div className={classNames({'border-primaryColor':selectedStep===4},"border border-4 rounded mt-2")}/>
    </div>
  </div>
}

export default StepBar;
