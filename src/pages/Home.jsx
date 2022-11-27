const Home = () => {
    return (
        <div className="container element">

            <div className="element">
                <h6 className="navbarElement">API's utilizadas:</h6>
                <div className="textCard" style={{ width: '900px', textAlign: 'justify' }}>
                    <img style={{width:'110px'}} src="https://static.coingecko.com/s/coingecko-branding-guide-8447de673439420efa0ab1e0e03a1f8b0137270fbc9c0b7c086ee284bd417fa1.png"></img>
                    <img style={{width:'90px',marginLeft:'30px'}} src="https://www.mercadobitcoin.com.br/wp-content/uploads/2022/03/mercado-bitcoin-logo.png"></img>
                    <img style={{width:'35px',marginLeft:'30px'}} src="https://newsdata.io/images/global/newsdata-icon.png"></img>
                    <span style={{marginLeft:'10px'}}><b>NEWSDATA</b>.IO</span>
                </div>
            </div>

            <div className="element">
                <h4 className="titleGrant">O que é criptomoeda e como funciona?</h4>
                <br></br>
                <h6 className="navbarElement">Criptomoeda – significado e definição</h6>
                <div className="textCard" style={{ width: '900px', textAlign: 'justify' }}>
                    <span>A criptomoeda refere-se a qualquer forma de moeda que existe digital ou virtualmente e usa criptografia para garantir a realização de transações. As criptomoedas não têm uma autoridade central de emissão ou regulação. Em vez disso, usam um sistema descentralizado para registrar transações e emitir novas unidades.</span>
                </div>
            </div>

            <div className="element">
                <h6 className="navbarElement">O que é criptomoeda?</h6>
                <div className="textCard" style={{ width: '900px', textAlign: 'justify' }}>
                    <span>
                        Criptomoeda é um sistema de pagamento digital que não depende de bancos para verificar e confirmar transações. É um sistema ponto a ponto que permite a qualquer pessoa enviar e receber pagamentos de qualquer lugar. Em vez do dinheiro físico transportado e trocado no mundo real, os pagamentos em criptomoeda existem unicamente como valores digitais em um banco de dados online que documenta as transações específicas. Ao transferir fundos de criptomoeda, as transações são registradas em um livro contábil público. A criptomoeda é armazenada em carteiras digitais.
                    </span>
                </div>
            </div>

            <div className="element">
                <h6 className="navbarElement">Como a criptomoeda funciona?</h6>
                <div style={{ width: '900px', textAlign: 'justify' }}>
                    <p className="textCard">
                        As criptomoedas são executadas em um livro público distribuído chamado blockchain, um registro de todas as transações atualizadas e mantidas pelos detentores das moedas.
                    </p>
                    <p className="textCard">
                        Unidades de criptomoedas são criadas por meio de um processo chamado mineração, que envolve o uso de potência de computação para resolver problemas matemáticos complicados que geram moedas. Os usuários também podem comprar moedas com as corretoras, depois armazená-las e gastá-las usando carteiras criptográficas.
                    </p>
                    <p className="textCard">
                        Se você possui criptomoeda, não possui nada físico, mas uma chave que permite mover um registro ou uma unidade de medida de uma pessoa para outra, sem necessidade de uma terceiro confiável.
                    </p>
                    <p className="textCard">
                        Embora o Bitcoin exista desde 2009, criptomoedas e aplicativos de tecnologia blockchain ainda estão no começo em termos financeiros, mais usos são esperados no futuro. Transações incluindo títulos, ações e outros ativos financeiros poderiam eventualmente ser negociadas usando essa tecnologia.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Home