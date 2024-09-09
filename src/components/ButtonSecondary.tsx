import Button, {ButtonProps} from "@/components/Button";

const ButtonSecondary: React.FC<ButtonProps> = ({children}) => {
    return(
        <Button
            className = "bg-primary-light text-secondary border-buttons-secondary border-secondary"
            children = {children}
        />
    );
}

export default ButtonSecondary;