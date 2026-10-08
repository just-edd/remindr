interface CategoryProps {
    color: string;
    number: number;
    label: string;
    icon: string;
};

const Category: React.FC<CategoryProps> = (props) => {
    return (
        <button className={`w-full bg-white/15 p-2 rounded-lg flex flex-col gap-1 transition-all group hover:bg-(${props.color})`}>
            <div className='flex items-center justify-between'>
                <div className={`bg-(${props.color}) group-hover:bg-white rounded-full w-7 h-7 text-white group-hover:text-(${props.color}) flex items-center justify-center`}>
                    <i className={props.icon} />
                </div>
                <h1 className='font-bold'>{props.number}</h1>
            </div>
            <p className='text-start font-semibold'>{props.label}</p>
        </button>
    )
};

export default Category;