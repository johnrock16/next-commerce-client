export default function BoletoForm() {
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
        </form>
    );
}