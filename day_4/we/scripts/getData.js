async function getdata(url) {
    let res = await fetch(url);
    let data = await res.json();
    return data;
}

function append(data, place) {
    data.meals.forEach(({strMeal,strMealThumb }) => {
        let div = document.createElement('div');
        let p = document.createElement('p')
        p.innerText = strMeal;
        let img = document.createElement('img');
        img.src = strMealThumb;
        div.append(img, p);
        place.append(div);
    })

}
export { append,getdata};