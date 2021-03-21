import React, { Component } from 'react';
export const ContextData = React.createContext();

export class ProviderData extends Component{

    state = {
        products: [
            {
                "id": "1",
                "title": "Minions Kids",
                "src": "https://images-na.ssl-images-amazon.com/images/I/41BtWAoXhUL.jpg",
                "description": "O queridinho do momento, Minions Kids - Tamanho: 5cm",
                "price": 15,
                "count": 1
            },
            {
                "id": "2",
                "title": "Minions Banana",
                "src": "https://www.escalaminiaturas.com.br/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/g/m/gmf05_01.jpg",
                "description": "Minions Banana com acessório - Tamanho: 5cm",
                "price": 20,
                "count": 1
            },
            {
                "id": "3",
                "title": "Minions Vampire",
                "src": "https://www.nicepng.com/png/detail/324-3243671_villain-pixabay-mcdonalds-2015-minions-talking-minion-vampire.png",
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