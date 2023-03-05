import './error.scss';
import { RiErrorWarningLine } from 'react-icons/ri';

interface ErrorProps {
    message: string;
}

const ErrorMessage = ({message}: ErrorProps) => {
    return (
        <div className="title">
            <RiErrorWarningLine className="icon" />
            <h3>{message}</h3>
        </div>
    )
}

export default ErrorMessage