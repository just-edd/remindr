import type { Dispatch, SetStateAction } from "react";
import type { Category } from "../types/reminder";
import { formatDate } from "../utils/dates";

interface CategoryProps {
    data: Category; 
    activeCategory: boolean;
    setActiveCategory: Dispatch<SetStateAction<string | null>>;
    count: number | undefined;
};

const CategoryCard: React.FC<CategoryProps> = ({ data, activeCategory, setActiveCategory, count }) => {
    return (
        <div className={`category ${activeCategory && 'active'}`} style={{ '--card-color': data.color || "var(--color-category-default)" } as React.CSSProperties}
        onClick={() => setActiveCategory(data.name)}>
            <div className="left-side">
                {data.icon && 
                    <div className="icon-box">
                        <i className={data.icon} aria-hidden></i>
                    </div>
                }

                <div className="description" style={{ paddingLeft: !data.icon ? '0.5rem' : '0' }}>
                    <p>{data.name}</p>
                    <span>Created at {formatDate(data.createdAt)}</span>
                </div>
            </div>

            <p>{count}</p>
        </div>
    )
};

export default CategoryCard;