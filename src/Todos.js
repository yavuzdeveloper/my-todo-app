import React from 'react';

//burda liste tutacağımız için fonk oluşturuyoruz
//collection materalizcss özelliği
//App den props olarak gelen state i todos olarak alıyoruz. parantez içinde
//cons todoList in boş mu dolu mu geldiğini kontrol edip yapılacak işlemleri yazıyoruz
//App den gelen deleteTodo Propsunu yine Todos ta yakalıyoruz.parantez içinde yazarak
//deleteTodo yu ateşlemek için span içine bir onclik fonk koyuyoruz

const Todos = ({todos,deleteTodo}) => {//burda gelen todosu ve deletetodo yu aldık
    const todoList = todos.length ? (//içi boş mu dolumu kontrolü yoksa sıfır varsa sıfırdan faklı bir değer vercek
//false yani doluysa ilk parantez değilse ikinci parantez yapılacak        
        todos.map(todo => {
            return(
                <div className="collection-item row" key={todo.id}>
                    <span >{todo.icerik}</span>
                    <div className="col s12 m4 l2">
                    <button onClick={()=>{deleteTodo(todo.id)}}>
                    <i class="material-icons">check</i>
                    </button>
                    </div>
                </div>
            )
        })
    ):(
        <p className="center">Yapılacak Listesi Boş</p>
    )

    return(
        <div className="collection">
            { todoList }
        </div>
    )
}

export default Todos;