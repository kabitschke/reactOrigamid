// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

const Field = [
    {
        id: 'nome',
        type: 'text',
        label: 'Nome'
    },
    {
        id: 'email',
        type: 'text',
        label: 'Email'
    },
    {
        id: 'senha',
        type: 'password',
        label: 'Senha'
    },
    {
        id: 'cep',
        type: 'text',
        label: 'Cep'
    },
    {
        id: 'rua',
        type: 'text',
        label: 'Rua'
    },
    {
        id: 'numero',
        type: 'text',
        label: 'Numero'
    },
    {
        id: 'bairro',
        type: 'text',
        label: 'Bairro'
    },

    {
        id: 'cidade',
        type: 'text',
        label: 'Cidade'
    },
    {
        id: 'estado',
        type: 'text',
        label: 'Estado'
    },

]



import React from "react"

export const FormularioInput = () => {

    const [result, setResult] = React.useState(null);
    const [form, setForm] = React.useState(
        Field.reduce((acc, item) => {
            return {
                ...acc, [item.id]: ''
                //montamos um objeto usando reduce utilizando dados do array Field
                //pega o id e transforma em chave dinâmica ex nome: '' email: ''
            };

        }, {}),
    );


    const handleChange = ({ target }) => {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
        //clona ...form e substitui o valor pelo valor digitado 
        // Pega o id e transforma em chave dinâmica ex nome: '' email: ''
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
            // form é o objeto com os dados do formulário

        });
        setResult(res);
    }



    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
            {
                Field.map(({ id, type, label }) => (
                    <div key={id}>
                        <label htmlFor={id} >{label}</label>
                        <input style={{ margin: '10px 0' }}
                            type={type}
                            id={id}
                            onChange={handleChange}
                            value={form[id]}
                        />
                    </div>
                ))
            }

            {result && result.ok && <p>Dados enviados...</p>}
            <button>Enviar</button>
        </form>
    )
}