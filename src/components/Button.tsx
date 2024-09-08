export interface ButtonProps {
    className?: string,
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({className, children}) => {
    return(
        <button className = {
            `${className} py-buttons-padding-tb px-buttons-padding-lr rounded-buttons-radius font-buttons font-semibold tracking-buttons leading-normal`
        }>{children}</button>
    );
}

export default Button;