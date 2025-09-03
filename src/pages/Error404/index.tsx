import { useRouteError, isRouteErrorResponse } from 'react-router-dom';


const Error404 = () => {
    const error = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.data.message || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }
    
    return(
        <div className=' mx-auto page justify-center'>
            <div className='grid grid-cols-1 gap-3'>
                <h2 className='text-custom-yellow'>Oops! An unexpected error ocurred.</h2>
                <p className='text-white text-center'>{ errorMessage }</p>
            </div>
        </div>
    )
};

export default Error404;