import Button, {ButtonProps} from "@/components/Button";

const ButtonSecondary: React.FC<ButtonProps> = ({children}) => {
    return(
        <Button className = "bg-primary text-secondary" children = {children}/>
    );
}

export default ButtonSecondary;