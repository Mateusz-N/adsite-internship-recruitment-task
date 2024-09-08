import Button, {ButtonProps} from "@/components/Button";

const ButtonSecondary: React.FC<ButtonProps> = ({children}) => {
    return(
        <Button className = "bg-primary-light text-secondary" children = {children}/>
    );
}

export default ButtonSecondary;