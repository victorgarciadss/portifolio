export function Project ({ children, image, altDescription }) {
    return (
        <>
            <img
                data-aos="zoom-in"
                className="variable-img"
                src={image}
                alt={altDescription}
            />

            <div className="container-info-project" data-aos="fade-down">
                {children}
            </div>
        </>
    )
    
}