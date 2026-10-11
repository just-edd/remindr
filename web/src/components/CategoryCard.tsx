import type { Dispatch, SetStateAction } from "react";
import type { Category  } from "../types/reminder";
import { formatDate } from "../utils/dates";

interface CategoryProps {
    data: Category; 
    activeCategory?: boolean;
    setActiveCategory?: Dispatch<SetStateAction<string | null>>;
    count?: number;
    onRemoveCategory?: (id: string) => void;
};

const CategoryCard: React.FC<CategoryProps> = ({ data, activeCategory, setActiveCategory, count, onRemoveCategory }) => {
    return (
        <div className={`category ${activeCategory && 'active'}`} style={{ '--card-color': data.color || "var(--color-category-default)" } as React.CSSProperties}
        onClick={() => setActiveCategory?.(activeCategory ? null : data.id)}>
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

            <div className="right-side">
                {onRemoveCategory && (
                    <div className="icon-box" onClick={(e) => { e.stopPropagation(); onRemoveCategory(data.id); }}>
                        <i className="hgi hgi-stroke hgi-rounded hgi-delete-02"></i>
                    </div>
                )}
                
                {!!count && <p>{count}</p>}
            </div>
        </div>
    )
};

export default CategoryCard;