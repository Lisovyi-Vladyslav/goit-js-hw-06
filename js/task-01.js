const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(nameCategories => {
    console.log('');
    console.log(`Category: ${nameCategories.firstElementChild.textContent}`)
    
    const elements = nameCategories.lastElementChild;
        console.log(`Elements: ${elements.children.length}`);
});

