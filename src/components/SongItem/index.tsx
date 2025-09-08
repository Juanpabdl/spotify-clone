type SongProps = {
    name: string,
    image: string,
    desc: string,
    id: number
}

const SongItem = (props: SongProps) => {
    return (
        <div className="min-w-[180px] max-w-[250px] p-2 px-3 rounded cursor-pointer card-hover">
            <div className="max-w-[200px]">
                <img className='rounded w-full' src={props.image} alt={props.name}/>
            </div>
            <p className="font-bold mt-2 mb-1">{props.name}</p>
            <p className="text-foreground/80 text-sm">{props.desc}</p>
        </div>
    )
}

export default SongItem;