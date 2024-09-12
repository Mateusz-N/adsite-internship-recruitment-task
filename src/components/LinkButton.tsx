import {HashLink} from "react-router-hash-link";

import {ButtonProps} from "@/components/Button";

export interface LinkButtonProps extends ButtonProps {
    to: string
}

const LinkButton: React.FC<LinkButtonProps> = ({className, to, children}) => {
    return(
        <HashLink smooth to = {to} role = "button" className = {`
            ${className}
            py-buttons-padding-tb
            px-buttons-padding-lr
            rounded-buttons-radius
            font-buttons
            font-semibold
            tracking-buttons
            leading-normal
        `}>{children}</HashLink>
    );
}

export default LinkButton;