import imageAluraTube from '../../images/imagem-aluratube.png';

const AluraTube = () => {
    return(
        <>
            <img
                data-aos="zoom-in"
                className="variable-img"
                src={imageAluraTube}
                alt="aluratube"
            />

            <div className='container-info-project' data-aos="fade-down">
                <a
                    href="https://alura-tube-vg.vercel.app/"
                    target={"_blank"}
                    rel="noreferrer"
                    className="link-projects"
                >
                    AluraTube
                </a>

                <p className='info'>
                    Desenvolvi esse projeto com foco em ReactJs e NextJs, nele o usuário pode cadastrar vídeos e
                    alterar o tema de fundo da aplicação que tem um layout bem semelhante ao do Youtube
                </p>

                <h3 className="technologies">Tecnologias Utilizadas</h3>
                <ul className='list-items'>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>NextJs</li>
                    <li>Styled-Components</li>
                    <li>Supabase</li>
                </ul>
            </div>

        </>
    )
}

export default AluraTube;