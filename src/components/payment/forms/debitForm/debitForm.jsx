export default function DebitForm() {
    return (
        <form className='form'>
            <div className="form__field col-12">
                <label>Nome completo</label>
                <input type="text"/>
            </div>
            <div className="form__field col-12">
                <label>CPF</label>
                <input type="text"/>
            </div>
            <div className="form__field col-12">
                <label>Data de nascimento</label>
                <input type="date"/>
            </div>
            <div className="form__field col-12">
                <label>Numero do cartão</label>
                <input type="text"/>
            </div>
            <div className="form__field col-6">
                <label>Data de validade</label>
                <input type="date"/>
            </div>
            <div className="form__field col-6">
                <label>CVV</label>
                <input type="text"/>
            </div>
        </form>
    );
}