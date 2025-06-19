
export const SeriesCard = () => {
    return (
        <li key= {items.id}>
            <div>
                <img src={items.img_url} alt={items.name}
                width="40%"
                height="40%" />
            </div>
                            <h2>Name: {items.name}</h2>
                            <h3>Rating: {items.rating}</h3>
                            <p>Summary:{items.description}</p>
                            <p>Genre: {items.genre}</p>
                            <a href={items.watch_url}>
                                <button>Watch Now</button>
                            </a>
                            </li>
                )
}