import { useState } from 'react';
import '../styles/modal.css';
import CategoryCard from './CategoryCard';
import type { Category, NewCategory } from '../types/reminder';
import { useRemindersContext } from '../context/RemindersContext';

type CategoryForm = NewCategory & {
    color1: string;
    color2: string;
};

interface Props {
    onClose?: () => void;
};

const CategoryModal: React.FC<Props> = ({ onClose }) => {
    const { categories, addCategory } = useRemindersContext();
    const [data, setData] = useState<CategoryForm>({
        name: '',
        icon: '',
        color1: '#8e9eab',
        color2: '#5f6c7b'
    });

    const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const { color1, color2, ...rest } = data;
    const category: NewCategory = {
        ...rest,
        color: `linear-gradient(135deg, ${color1}, ${color2})`
    };
    const preview: Category = {
        ...category,
        id: 'preview',
        createdAt: new Date(),
    };

    const createCategory = async (category: NewCategory) => {
        const name = category.name.trim();
        if (!name) return;

        // Check if category already exists
        if (categories.some((c) => c.name.toLowerCase() === name.toLowerCase())) return;

        await addCategory({ ...category, name });
        onClose?.();
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <header>
                    <i className="hgi hgi-stroke hgi-rounded hgi-book-edit"></i>
                    <div className="description">
                        <p>Create category</p>
                        <span>Here you can create your custom category</span>
                    </div>
                </header>

                <div className="input-wrapper">
                    <div className="input-box">
                        <p>Category name</p>
                        <input type='text' placeholder='Category name' required value={data.name} name='name' onChange={changeData} />
                        <p className='description'>Name your category (required)</p>
                    </div>

                    <div className="input-box">
                        <p>Category icon</p>
                        <input type='text' placeholder='Category icon' value={data.icon} name='icon' onChange={changeData} />
                        <p className='description'>Give your category an icon</p>
                    </div>

                    <div className="input-box">
                        <p>Category color (1)</p>
                        <input type='color' value={data.color1} name='color1' onChange={changeData} />
                        <p className='description'>Color your category</p>
                    </div>

                    <div className="input-box">
                        <p>Category color (2)</p>
                        <input type='color' value={data.color2} name='color2' onChange={changeData} />
                        <p className='description'>Color your category</p>
                    </div>
                </div>

                <p>Preview</p>
                <CategoryCard data={preview} activeCategory={data.name} />

                <footer>
                    <button onClick={onClose} className='cancel'>Cancel</button>
                    <button onClick={() => createCategory(category)} className='create' disabled={!data.name.trim()}>Create</button>
                </footer>
            </div>
        </div>
    )
};

export default CategoryModal;