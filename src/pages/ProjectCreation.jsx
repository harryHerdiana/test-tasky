import { useState } from 'react'
import Waves from '../components/Waves'
import StepBar from '../components/Steps/StepBar'
import StepContent from '../components/Steps/StepContent'

function ProjectCreation() {
  
  const initialProjectForm = {
      projectTitle: '',
      projectDescription: ''
    }
  const [selectedStep,setSelectedStep] = useState(1)

  const [createProjectForm, setCreateProjectForm] = useState(initialProjectForm)

  const handleFormChange = (event) => {
    setCreateProjectForm(current => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }
  const handleClick = ()=>{
    if (selectedStep === 1){
      //validate form1
      setSelectedStep(2)
    }
  }
  
  return (
    <>
      <Waves />
      <div className="pageContainer max-w-[880px] mx-auto">
        <header>
          <p className="text-3xl text-white font-medium pt-5">
            Create your free project in just 4 very simple steps
          </p>
          <p className="text-lg text-white py-3">
            Your journey to finding a highly skilled freelancer is underway!
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-12 w-full min-h-[20vh] flex flex-col">
         <div className='mb-10'>
          <StepBar selectedStep={selectedStep}/>
          <StepContent form={createProjectForm} selectedStep={selectedStep} handleFormChange={handleFormChange}/>
         </div>
         <button onClick={handleClick} className='self-end h-[48px] w-[120px] bg-primaryColor text-white rounded-full'>Next</button>
        </div>
      </div>
    </>
  )
}

export default ProjectCreation
