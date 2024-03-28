interface ErrorProps {
    message: string;
  }
  
  const ErrorComponent = ({ message }: ErrorProps) => {
    return <div>Error: {message}</div>;
  };
  
  export default ErrorComponent;
  