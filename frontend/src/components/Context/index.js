import React, { Component } from 'react';
export const ContextData = React.createContext();

export class ProviderData extends Component{

    state = {
        products: [
            {
                "id": "1",
                "title": "Minions Kids",
                "src": "https://ciadobrinquedo.com/wp-content/uploads/2019/10/minion.png",
                "description": "O queridinho do momento, garanta já o seu Minions Kids com o seu Ursinho - Tamanho: 5cm ",
                "price": 15,
                "count": 1
            },
            {
                "id": "2",
                "title": "Minions remoto 2",
                "src": "https://i.pinimg.com/originals/51/f4/f8/51f4f8d201e1e59997fe465ff585d1cc.png",
                "description": "Minions remoto 2 - Leve já o seu minions remoto!",
                "price": 30,
                "count": 1
            },
            {
                "id": "3",
                "title": "Minions Músico",
                "src": "https://i.pinimg.com/originals/b7/f3/97/b7f397fef0ce46db17a3e728549d41e6.png",
                "description": "Miniatura do Minions músico, com violão - Tamanho: ",
                "price": 40,
                "count": 1
            }
        ],
        shoppingCart: []
    };

    addShoppingCart = (id) => {
        const {products, shoppingCart} = this.state;
        const data = products.filter(product => {
            return product.id === id;
        })

        this.setState({
            shoppingCart: [...shoppingCart, ...data]
        });
    }

    add = id =>{
        const { shoppingCart } = this.state;
        shoppingCart.forEach(item =>{
            if(item.id === id){
                item.count += 1;
            }
        })
        this.setState({shoppingCart: shoppingCart});
    };

    remove = id =>{
        const { shoppingCart } = this.state;
        shoppingCart.forEach(item =>{
            if(item.id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({shoppingCart: shoppingCart});
    };

    removeShoppingCart = id =>{
        const {shoppingCart} = this.state;
        shoppingCart.forEach((item, index) =>{
            if(item.id === id){
                shoppingCart.splice(index, 1)
            }
        })
        this.setState({shoppingCart: shoppingCart});
    }

    render(){
        const {products, shoppingCart} = this.state;
        const {addShoppingCart, removeShoppingCart, add, remove} = this;
        return(
            <ContextData.Provider value={{products, addShoppingCart, shoppingCart, add, remove, removeShoppingCart}}>
                {this.props.children}
            </ContextData.Provider>
        )
    }
}