export default function BoletoForm({register, errors, setErrors, fieldFormAttributes}) {
    return (
        <div className='form'>
            <div className="form__field col-12">
                <label htmlFor='fullName'>
                    Nome completo
                    <input {...fieldFormAttributes({name: 'fullName', rule: 'name', register, setErrors})} type="text"/>
                </label>
                {(errors?.fullName) ? <span className='form__error'>{errors.fullName}</span> : null}
            </div>
            <div className="form__field col-12">
                <label htmlFor='cpf'>
                    CPF
                    <input {...fieldFormAttributes({name: 'cpf', rule: 'cpf', register, setErrors})} type="text"/>
                </label>
                {(errors?.cpf) ? <span className='form__error'>{errors.cpf}</span> : null}
            </div>
            <div className="form__field col-12">
                <label htmlFor='birthdate'>
                    Data de Nascimento
                    <input {...fieldFormAttributes({name: 'birthdate', rule: 'date--age', register, setErrors})} type="date"/>
                </label>
                {(errors?.birthdate) ? <span className='form__error'>{errors.birthdate}</span> : null}
            </div>
        </div>
    );
}