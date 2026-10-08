interface FilterCardProps {
    icon: string;
    label: string;
    number: number;
    color: string;
};

const SidebarFilterCard: React.FC<FilterCardProps> = ({ icon, label, number, color }) => {
    return (
        <div className="filter-card" style={{ '--card-color': color } as React.CSSProperties}>
            <header>
                <div className="icon-box">
                    <i className={`<i class="hgi hgi-stroke hgi-rounded hgi-${icon}`} aria-hidden></i>
                </div>
                <p>{number}</p>
            </header>
            <p>{label}</p>
        </div>
    )
};

export default SidebarFilterCard;