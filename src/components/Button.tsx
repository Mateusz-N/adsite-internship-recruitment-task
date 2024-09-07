export interface ButtonProps {
    className?: string,
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({className, children}) => {
    return(
        <button className = {
            `${className} py-buttons-padding-tb px-buttons-padding-lr rounded-buttons-radius`
        }>{children}</button>
    );
}

export default Button;