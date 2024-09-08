import Button, {ButtonProps} from "@/components/Button";

const ButtonPrimary: React.FC<ButtonProps> = ({children}) => {
    return(
        <Button className = "bg-secondary text-primary-light" children = {children}/>
    );
}

export default ButtonPrimary;