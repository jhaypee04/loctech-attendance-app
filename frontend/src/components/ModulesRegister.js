import { useEffect,useState } from "react";

const ModulesRegister = ({classname}) => {
  const [showAccordion, setShowAccordion] = useState(false);
  const [modules, setModules] = useState([])

  useEffect(()=>{
    const getClassroom = async () => {
      const response = await fetch(`http://localhost:4000/loctech/user/profile/moduleregister:${classname}`)
      const json = await response.json()
      if(response.ok){
        const allModules = json.modules
        const moduleContainer = allModules.filter((requiredModules)=>{
          if( requiredModules.classname === classname){
            console.log(requiredModules)
            return requiredModules
          }
          return null
        })

        setModules(moduleContainer)
      }
    }
    
    getClassroom()
  },[classname])
  
  console.log(modules)
  return (
    <>
      <div className="container mx-auto my-4  w-3/4">
        <div className="bg-gray-200 text-center">Modules Register</div>

        <div>
          {/* Accordion */}
          <div className="bg-white mt-2 py-2">
            <div className="bg-gray-200 m-2 ">
              {modules && modules.map((singleModule)=>{
                return (
                  <h1
                    className="bg-gray-300 border-b-2 border-white text-center cursor-pointer"
                    onClick={() => {
                      setShowAccordion(!showAccordion);
                    }}
                  >
                    Week 1
                  </h1>

                )
              })}

              {showAccordion && (
                <div className="pb-1">
                  <h2 className="bg-gray-300 border-2 border-gray-400 my-1 mx-2 pl-2">
                    Monday
                  </h2>
                  <h3 className="bg-gray-50 my-1 mx-4 pl-2">
                    Fundamentals of HTML
                  </h3>

                  <h2 className="bg-gray-300 border-2 border-gray-400 my-1 mx-2 pl-2">
                    Wednesday
                  </h2>
                  <h3 className="bg-gray-50 my-1 mx-4 pl-2">
                    Fundamentals of CSS
                  </h3>

                  <h2 className="bg-gray-300 border-2 border-gray-400 my-1 mx-2 pl-2">
                    Friday
                  </h2>
                  <h3 className="bg-gray-50 my-1 mx-4 pl-2">
                    Fundamentals of JS
                  </h3>
                </div>
              )}
            </div>

            <div className="bg-gray-300 m-2 ">Week 2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModulesRegister;
