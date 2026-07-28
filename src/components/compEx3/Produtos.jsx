import { Titulo } from "./Titulo";



export const Produtos = () => {

    // Replique a interface como a apresentada na aula
    // Utilize a array abaixo para mostrar os produtos
    // Quebre em componentes o que precisar ser reutilizado
    // Dica: const { pathname } = window.location; (puxa o caminho do URL)
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    ];



    return (
        <div>
            <Titulo texto={'Produtos'} />

            {
                produtos.map((item, i) =>
                    <div key={i} style={{ border: '1px solid', margin: '10px', padding: '10px' }}>
                        <h6>{item.nome}</h6>
                        <ul>
                            {
                                item.propriedades.map((prop, i) =>
                                    <li key={i}>{prop}</li>
                                )
                            }
                        </ul>
                    </div>
                )
            }

        </div>
    )
}