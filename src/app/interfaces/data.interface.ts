export interface MenuList {
    title: string,
    imgSrc: string,
    url: string,
    category: ProductsList[];
}

export interface ProductsList {
    product_img?: string,
    product_title?: string,
    product_price?: number,
    product_discription?: string,
    product_id?: number
    product_category?: string

}