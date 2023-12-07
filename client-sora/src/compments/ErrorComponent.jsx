import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorComponent() {
  const [errorDetails, setErrorDetails] = useState({
    errorCode: 'UNKNOWN_ERROR',
    errorMsg: 'An unexpected error occurred. Please try again.',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Simulate different error scenarios
    const simulateErrors = () => {
      const errorType = 'NOT_FOUND';
      
      switch (errorType) {
        case 'BAD_REQUEST':
          setErrorDetails({
            errorCode: '400',
            errorMsg: 'Bad Request: The server did not understand the request.',
          });
          break;
        case 'FORBIDDEN':
          setErrorDetails({
            errorCode: '403',
            errorMsg: 'Forbidden: You do not have permission to access this resource.',
          });
          break;
        case 'NOT_FOUND':
          setErrorDetails({
            errorCode: '404',
            errorMsg: 'Not Found: The requested resource could not be found.',
          });
          break;
        case 'INTERNAL_SERVER_ERROR':
          setErrorDetails({
            errorCode: '500',
            errorMsg: 'Internal Server Error: Something went wrong on the server.',
          });
          break;
        default:
          setErrorDetails({
            errorCode: 'UNKNOWN_ERROR',
            errorMsg: 'An unexpected error occurred. Please try again.',
          });
      }
    };

    simulateErrors();
  }, []); // useEffect will run only once when the component mounts

  const redirectToHomepage = () => {
    navigate('/');
  };

  function ErrorJumbo(props) {
    return (
      <>
        <main className="bg-[url('./src/assets/images/jujutsu.png')] bg-no-repeat bg-contain sm:bg-left">
          <section className='flex flex-col sm:flex-row backdrop-blur p-5 rounded-lg'>
            <figure className="sm:order-last">
              <img className="p-5 mx-auto max-w-screen" src="./src/assets/images/jujutsu.png" alt="image of Sukuna"/>
            </figure>        
                    
            <section className='mt-16 row-span-3 text-center align-center'>
              <h2 className="text-6xl pt-8 ">{props.errorCode}</h2>
              <p className="pb-12 pt-4">{props.errorMsg}</p>        
              <button className="bg-slate-200 text-slate-800 rounded-full px-4 py-2" onClick={redirectToHomepage}>Go to Home</button>
            </section>
          </section>
        </main>
      </>
    );
  }

  return (            
    <ErrorJumbo errorCode={errorDetails.errorCode} errorMsg={errorDetails.errorMsg} />
  );
}

export default ErrorComponent;