import GoodsItem from "./GoodsItem";
import Preloader from "./Preloader"

const GoodsList = (props) => {
  return (
    <>
      {
        props.goods.length
          ? <div className="goods">
            {
              props.goods.map((item) => {
                return (
                  <GoodsItem
                    key={item.mainId}
                    id={item.mainId}
                    displayName={item.displayName}
                    full_background={item.displayAssets[0].full_background}
                    displayDescription={item.displayDescription}
                    price={item.price.finalPrice}
                    addToCart={props.addToCart}
                  />
                )
              })
            }
          </div>
          : <h4>Nothing here</h4>
      }
    </>
  )
}

export default GoodsList;