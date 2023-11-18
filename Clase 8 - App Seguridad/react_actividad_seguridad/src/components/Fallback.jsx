

const Fallback = ({error, resetErrorBoundary}) => {
    return (
        <div rolle="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

export default Fallback;