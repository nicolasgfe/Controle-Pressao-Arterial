import React from 'react'

class App extends React.Component{ 

    constructor() { 
        super() 
            console.log('App Constructor')
        
        this.state = {
            pressaoS: 0,
            pressaoD: 0,
            message: " "
        }
    }

 

    onChangepressaoSistolica(event){
        console.log("pressaos")
        const newPressao =  event.target.pressaoS
        console.log(newPressao)
        this.setState({
            pressaoS: newPressao
        })
    }

    


    onChangepressaoDiastolica(event) {
        console.log("pressaoD")
        
    }


    estadoPressaoArterial(){
        console.log("estadoPressaoArterial")
    }
    

    render() { 
        
        return (
            <div>
                Pressão Sistólica: <br />
                <input type="text" onChange={(event) => this.onChangepressaoSistolica(event)} />
                <br />

                Pressão Diastólica: <br />
                <input type="txt" 
                    onChange={(event) => this.onChangepressaoDiastolica(event)} />                
                <br /><br />
                
                <input type="button" value="Verificar"
                onClick={() => this.estadoPressaoArterial(this.state.pressaoD,this.state.pressaoS)}/>
                

                {/* <label>
                    <input type="radio" value="opcao1" 
                        checked={this.state.userOption === 'opcao1'}
                        onChange={(event) => this.onChangeOption(event)}/> Opção 1 
                </label> 
                <br />
                
                <label>
                    <input type="radio" value="opcao2" 
                        checked={this.state.userOption === 'opcao2'}
                        onChange={(event) => this.onChangeOption(event)}/> Opção 2
                </label>
                <br />
                
                <label>
                    <input type="radio" value="opcao3" 
                        checked={this.state.userOption === 'opcao3'}
                        onChange={(event) => this.onChangeOption(event)}/> Opção 3
                </label>

                <br />
                Opção Selecionada: {this.state.userOption}

                <br /><br />
                <input type="button" value="Enviar Informações"
                    onClick={() => this.sendInfo() } /> */}
            </div>
        )
    }
    
}

export default App