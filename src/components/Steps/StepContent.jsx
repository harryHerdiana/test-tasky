const StepContent = (props)=>
{
  const {form ,handleFormChange,selectedStep} = props
  
  return <div className="mt-8">
  {selectedStep === 1 &&
  <div >
    <form>
    <div><span className="text-2xl">Project Title</span></div>
    <div><span className="text-secondaryText text-sm">Enter your project title here</span></div>
    <input name="projectTitle" value={form.projectTitle} onChange={handleFormChange} className="w-full bg-[#FAFAFA] p-4 rounded-xl text-sm mt-4" type='text' placeholder="Example: I will make you great web design"/>
    <div className="mt-6"><span className="text-2xl">Description</span></div>
    <div><span className="text-secondaryText text-sm">Tell your client more about your project</span></div>
    <textarea rows={5} name="projectDescription" value={form.projectDescription} onChange={handleFormChange} className="w-full bg-[#FAFAFA] p-4 rounded-xl text-sm  mt-4" type='text' placeholder="Example: You will get a fantastic professional website design. With over 5 years experience, I care deeply about startups"/>
  
  </form>
    </div>}
  </div>
}

export default StepContent;
