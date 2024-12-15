const getImagePath =(imagePath :string , fullsize? : boolean)=>{
    return imagePath
    ?`https://image.tmdb.org/t/p/${fullsize ? "original" : "w500"}${imagePath}`
    : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
}


export default getImagePath