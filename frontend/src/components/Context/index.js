import React, { Component } from 'react';
export const ContextData = React.createContext();

export class ProviderData extends Component{

    state = {
        products: [
            {
                "id": "1",
                "title": "Minions Músico",
                "src": "https://www.imagenspng.com.br/wp-content/uploads/2015/07/minions-05-violao.png",
                "description": "O queridinho do momento, Minions Músico - Tamanho: 5cm",
                "price": 15,
                "count": 1
            },
            {
                "id": "2",
                "title": "Minions da Felicidade",
                "src": "https://www.imagenspng.com.br/wp-content/uploads/2015/07/minions-31.png",
                "description": "Minions da Felicidade - Tamanho: 5cm",
                "price": 20,
                "count": 1
            },
            {
                "id": "3",
                "title": "Minions Vampire",
                "src": "https://archive.org/download/minions_193/minions-21-vampiro.png",
                "description": "Miniatura do Minions Vampire - Tamanho: 4cm",
                "price": 10,
                "count": 1
            }
        ],
        shoppingCart: []
    };

    addShoppingCart = (id) => {
        const {products, shoppingCart} = this.state;
        const view = shoppingCart.every(item =>{
            return item.id !== id
        })
        if(view){
            const data = products.filter(product =>{
                return product.id === id
            })
            this.setState({shoppingCart: [...shoppingCart,...data]})
        }else{
            alert("Esse produto já foi adicionado ao carrinho!");
        }
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