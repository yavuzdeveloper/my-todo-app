import React, { Component } from 'react';

//comp. yardımıyla ekleme yapacağız
//başlangıçta değeri olmayan bir state oluşturduk ve onchange de tetiklenecek handlechange fonk oluşturduk
//handlec. fonk e içine alarak bu içeriği target value su olarak ayarlıyo

class AddTodo extends Component{

    state = {
        icerik:''
    } 

    handleChange = (e) => {
        this.setState({
            icerik:e.target.value
        })
    }

handleSubmit = (e) => {
        e.preventDefault();//öncelikle varsayılan sabmit özelliği sfırlanır
            this.props.addTodo(this.state); //input girilen bigliyle state güncelleniyo.enter e basıncada addtodo ya aktarılıyo
//app ten gelen addtodo propsunu daburada yalalayıp kullanıyoruz    
            //addtodo içinde artık input a yazılan sondeğer bulunuyo
            this.setState({
                icerik:''  //yazdıktan sonra input içini boşaltıyoruz
//içeriği boşalttıktan sonra value değerini aşağıda input a yazmalıyız
            })
        }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Yapılacak iş</label>
                    <input type="text" onChange={this.handleChange} value={this.state.icerik}/>
                    <button class="btn-floating waves-light blue">Ekle</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;
