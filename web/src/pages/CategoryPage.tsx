import { useState } from 'react';
import '../styles/category_page.css';
import type { Category } from '../types/reminder';

type CategoryForm = Pick<Category, 'name' | 'icon' | 'color'>;

const CategoryPage: React.FC = () => {
    const [category, setCategory] = useState<CategoryForm>({
        name: '',
        icon: ''
    });

    const changeCategory = (field: string) => 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setCategory(prev => ({ ...prev, [field]: e.target.value }));
        };

    return (
        <div className="category-page">
            <header>
                <i className="hgi hgi-stroke hgi-rounded hgi-edit-02"></i>
                <div className="description">
                    <p>Create new category</p>
                    <span>Here you can create new category for your reminders</span>
                </div>
            </header>

            <main>
                <div className="input-wrapper">
                    <p>Category name</p>
                    <input type='text' placeholder='Category name' value={category.name} onChange={changeCategory('name')} />
                    <span>Name your category</span>
                </div>

                <div className="input-wrapper">
                    <p>Category icon</p>
                    <input type='text' placeholder='Category icon' value={category.icon} onChange={changeCategory('icon')} />
                    <span>Add icon to your category</span>
                </div>

                <div className="input-wrapper">
                    <p>Category color</p>
                    <input type='color' placeholder='Category color' value={category.color} onChange={changeCategory('color')} />
                    <span>Give your category a color</span>
                </div>
            </main>
        </div>
    )
};

export default CategoryPage;