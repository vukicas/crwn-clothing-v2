import CategoryItem from '../category-item/category-item.component';
import './category-container.styles.scss'

const CategoryContainer = ({categories})=> {
    return (
        <div className='category-container1'>
            { categories.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))}
            
        </div>
    );
};

export default CategoryContainer
