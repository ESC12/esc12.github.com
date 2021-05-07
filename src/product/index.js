import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(
    function () {
      axios
        .get(
          `https://6f63232c-660d-45d2-a060-51dcd2cf0c10.mock.pstmn.io/products/${id}`
        )
        .then(function (result) {
          setProduct(result.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    [id]
  );

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} alt="이미지주소" />
      </div>
      <div id="profile-box">
        <img src="images\icons\avatar.png" alt="이미지" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2020년 12월 8일</div>
        <div id="description">{product.description} </div>
      </div>
    </div>
  );
}

export default ProductPage;
