export default function CreditForm({register, errors, setErrors, fieldFormAttributes}) {
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
            <div className="form__field col-12">
                <label htmlFor='cardNumber'>
                    Numero do cartão
                    <input {...fieldFormAttributes({name: 'cardNumber', rule: 'creditCardNumber', register, setErrors})}  className='form__input' type="text"/>
                </label>
                {(errors?.cardNumber) ? <span className='form__error'>{errors.cardNumber}</span> : null}
            </div>
            <div className="form__field col-6">
                <label htmlFor='cardExpireDate'>
                    Data de Validade
                    <input {...fieldFormAttributes({name: 'cardExpireDate', rule: 'creditCardExpiratedDate', register, setErrors})} className='form__input' type="text"/>
                </label>
                {(errors?.cardExpireDate) ? <span className='form__error'>{errors.cardExpireDate}</span> : null}
            </div>
            <div className="form__field col-6">
                <label htmlFor='cardCVV'>
                    CVV
                    <input {...fieldFormAttributes({name: 'cardCVV', rule: 'cvv', register, setErrors})} className='form__input' type="text"/>
                </label>
                {(errors?.cardCVV) ? <span className='form__error'>{errors.cardCVV}</span> : null}
            </div>
            <div className="form__field col-12">
                <label>Parcelas</label>
                <select>
                    <option value="">À vista</option>
                    <option value="">x2 de R$ 350,00</option>
                    <option value="">x3 de R$ 233,33</option>
                    <option value="">x4 de R$ 175,00</option>
                    <option value="">x5 de R$ 140,00</option>
                </select>
            </div>
        </div>
    );
}