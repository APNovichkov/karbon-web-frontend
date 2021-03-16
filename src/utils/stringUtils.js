export const formatPrice = (price) => {
    if (price.includes("$")){
        return price;
    }else{
        return `$${price.split(".")[0]}.${price.split(".")[1].slice(0,2)}`;
    }
}