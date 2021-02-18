import './navbar.css';

function navbar() {
    return(
        <>
            <div className="app-nav">
                <nav className="app-nav-invisible">
                    <button className="nav-button first"><i className="icon"/>Seja um franqueado</button>
                    <button className="nav-button seccond"><i className="icon"/>Seja um consultor(a)</button>
                    <button className="nav-button third">Quero comprar</button>
                </nav>
            </div>
            <button className="nav-button fourth"><i className="icon"/>Área restrita</button>
        </>
    )
}

export default navbar;