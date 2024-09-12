import LinkButton, {LinkButtonProps} from "@/components/LinkButton";

const LinkButtonPrimary: React.FC<LinkButtonProps> = ({to, children}) => {
    return(
        <LinkButton className = "bg-secondary text-primary-light" to = {to} children = {children}/>
    );
}

export default LinkButtonPrimary;