import Image from "next/image";

export default function Test() {
  return (
    <>
      <div style={{
        position: 'relative',
        width: '50%',
        height:'500px',
      }}>
        <Image
          fill
          src="/images/product.jpg"
          alt="상품 이미지"
          style={{
            objectFit:'cover',
          }}
        /> 
      </div>
    </>
  );
}
