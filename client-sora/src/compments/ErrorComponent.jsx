import React from 'react';
import { useNavigate } from "react-router-dom";


function ErrorComponent() {  

  //error handling function
  function handleErrors() {
    let errorCode = "UNKNOWN_ERROR";
    let errorMsg = "An unexpected error occurred. Please try again.";
  
    try {
      
      throw new Error("This is a simulated error");
    } catch (error) {
      console.error("Error:", error);
  
      if (error instanceof Error) {
        errorCode = "SIMULATED_ERROR";
        errorMsg = error.message || "Simulated error occurred.";
      }
    }
    return { errorCode, errorMsg };
      
  }  
    
  const navigate = useNavigate();

  // Redirect to the homepage
  const redirectToHomepage = () => {
    navigate("/");
  };    

  const errorDetails = handleErrors();
    
   function ErrorJumbo(props) {
    // props 1: errorCode
    // props 2: errorMsg    
    return (
      <>
        <section className='grid-cols-1'>
          <figure>
            <img className="p-5 mx-auto backdrop-blur max-h-72" src="./src/assets/images/jujutsu.png" alt="image of Sukuna"/>
          </figure>        
                   
          <section className='mt-50 row-span-3 text-center align-center'>
              <h2 className="text-6xl pt-8 ">{props.errorCode}</h2>
              <p className="pb-12 pt-4">{props.errorMsg}</p>        
              <button className="bg-slate-200 text-slate-800 rounded-full px-4 py-2" onClick={redirectToHomepage}>Go to Home</button>
            </section>
        </section>
      </>
    );
  }

  return (            
    <ErrorJumbo errorCode={errorDetails.errorCode} errorMsg={errorDetails.errorMsg} />
  );
}

export default ErrorComponent;