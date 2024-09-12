import LinkButton, {LinkButtonProps} from "@/components/LinkButton";

const LinkButtonSecondary: React.FC<LinkButtonProps> = ({to, children}) => {
    return(
        <LinkButton
            className = "bg-primary-light text-secondary border-buttons-secondary border-secondary"
            to = {to}
            children = {children}
        />
    );
}

export default LinkButtonSecondary;