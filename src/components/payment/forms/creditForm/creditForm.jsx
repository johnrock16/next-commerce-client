export default function CreditForm() {
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
        </form>
    );
}