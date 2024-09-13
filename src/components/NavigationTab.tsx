export interface NavigationTabProps {
    active: boolean,
    children: React.ReactNode,
    onTabChange: () => void
}

const NavigationTab: React.FC<NavigationTabProps> = ({active, children, onTabChange}) => {
    return(
        <li>
            <button
                className = {`
                    text-gallery-buttons
                    tracking-buttons
                    cursor-pointer
                    ${active ? "font-semibold text-secondary border-b-buttons-secondary border-secondary" : "text-black"}
                `}
                onClick = {onTabChange}
            >
                {children}
            </button>
        </li>
    );
}

export default NavigationTab;