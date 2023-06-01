type VideoProps = {
    id: string
}

export const YoutubeVideo : React.FC<VideoProps> =({ id }) => {
    return (
        <div className="text-center">
            <iframe  
                width="400" 
                height="300" 
                src={"https://www.youtube.com/embed/" + id} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>   
            </iframe>
        </div>
    )
} 