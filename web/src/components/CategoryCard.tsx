import type { Dispatch, SetStateAction } from "react";
import type { Category  } from "../types/reminder";
import { useRemindersContext } from "../context/RemindersContext";

const formatDate = (date: Date) =>
    new Intl.DateTimeFormat('en-EN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(date);

interface CategoryProps {
    data: Category; 
    activeCategory?: string | null;
    setActiveCategory?: Dispatch<SetStateAction<string | null>>;
    count?: number;
    canRemove?: boolean;
};

const CategoryCard: React.FC<CategoryProps> = ({ data, activeCategory, setActiveCategory, count, canRemove }) => {
    const { removeCategory } = useRemindersContext();

    const deleteCategory = async (id: string) => {
        await removeCategory(id);
        if (activeCategory === id)
            setActiveCategory?.(null);
    };

    return (
        <div className={`category ${activeCategory === data.id || (!canRemove && data.name.trim()) ? 'active' : ''}`} style={{ '--card-color': data.color || "var(--color-category-default)" } as React.CSSProperties}
        onClick={() => setActiveCategory?.(activeCategory === data.id ? null : data.id)}>
            <div className="left-side">
                {data.icon && 
                    <div className="icon-box">
                        <i className={data.icon} aria-hidden></i>
                    </div>
                }

                <div className="description" style={{ paddingLeft: !data.icon ? '0.5rem' : '0' }}>
                    <p>{data.name}</p>
                    <span>Created on {formatDate(data.createdAt)}</span>
                </div>
            </div>

            <div className="right-side">
                {canRemove && (
                    <div className="icon-box" onClick={(e) => { e.stopPropagation(); deleteCategory(data.id); }}>
                        <i className="hgi hgi-stroke hgi-rounded hgi-delete-02"></i>
                    </div>
                )}
                
                {!!count && <p>{count}</p>}
            </div>
        </div>
    )
};

export default CategoryCard;